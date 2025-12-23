import type { CreatableName, CreatableStatus } from '@xylabs/sdk-js'

import { LoggerStatusReporter } from './ServiceStatus.ts'

/**
 * Enum-like record for statuses with priority allowing
 * for determination of the aggregated status.
 */
const statusPriority: Record<CreatableStatus, number> = {
  error: 0,
  stopped: 1,
  stopping: 2,
  creating: 3,
  created: 4,
  starting: 5,
  started: 6,
}

/**
 * A sentinel status that represents the initial state
 * before any statuses are reported.
 * It is used to ensure that the monitor has a valid status
 * even when no statuses have been reported yet and to
 * prevent the system from showing an "error" state
 * when no statuses are available.
 */
const SENTINEL_STATUS: CreatableStatus = 'starting'

/**
 * Given an array of statuses, this function reduces them
 * to the minimum status based on the defined priority.
 * @param statuses An array of statuses to reduce.
 * @returns The minimum status based on priority.
 */
const reduceToMinimumStatus = (statuses: CreatableStatus[]): CreatableStatus => {
  let minStatus: CreatableStatus = SENTINEL_STATUS
  let minPriority = Infinity

  for (const status of statuses) {
    const priority = statusPriority[status]
    if (priority < minPriority) {
      minPriority = priority
      minStatus = status
    }
  }
  return minStatus
}

export type GlobalTransitionHandler = {
  from?: CreatableStatus
  handler: (from: CreatableStatus, to: CreatableStatus) => void
  to?: CreatableStatus
}
export type TransitionHandler = GlobalTransitionHandler & {
  name?: string
}

export class RuntimeStatusMonitor extends LoggerStatusReporter {
  private globalTransitions: GlobalTransitionHandler[] = []
  private transitions: TransitionHandler[] = []

  getGlobalStatus(): CreatableStatus {
    // If no statuses have been reported, return the sentinel status
    if (Object.keys(this.statusMap).length === 0) return SENTINEL_STATUS
    return reduceToMinimumStatus(Object.values(this.statusMap))
  }

  getStatus(name: CreatableName): CreatableStatus | undefined {
    return this.statusMap[name]
  }

  onGlobalTransition(match: { from?: CreatableStatus; to?: CreatableStatus }, handler: (from: CreatableStatus, to: CreatableStatus) => void) {
    this.globalTransitions.push({ ...match, handler })
  }

  /**
   * Register a callback to be called on a specific transition.
   */
  onTransition(match: { from?: CreatableStatus; name: string; to?: CreatableStatus }, handler: (from: CreatableStatus, to: CreatableStatus) => void) {
    this.transitions.push({ ...match, handler })
  }

  override report(name: CreatableName, status: CreatableStatus, progress?: number | Error): void {
    // Capture the current status before updating
    const previous = this.statusMap[name]
    const previousGlobal = this.getGlobalStatus()

    // Update the status map with the new status
    super.report(name, status, progress)

    // If the status hasn't changed, do not run handlers
    if (previous === status) return
    this.runTransitions(this.transitions, previous, status, name)

    // If the global status hasn't changed, do not run handlers
    const globalStatus = this.getGlobalStatus()
    if (previousGlobal === globalStatus) return
    this.runTransitions(this.globalTransitions, previousGlobal, globalStatus)
  }

  private runTransitions(
    transitions: (TransitionHandler | GlobalTransitionHandler)[],
    prev: CreatableStatus,
    next: CreatableStatus,
    name?: string,
  ) {
    for (const {
      from, to, name: matchName, handler,
    } of transitions as TransitionHandler[]) {
      if ((matchName === undefined || matchName === name)
        && (from === undefined || from === prev)
        && (to === undefined || to === next)) {
        handler(prev, next)
      }
    }
  }
}
