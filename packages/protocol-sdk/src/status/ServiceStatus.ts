import type {
  CreatableName, CreatableStatus, CreatableStatusReporter, Logger,
} from '@xylabs/sdk-js'

export class LoggerStatusReporter implements CreatableStatusReporter {
  protected logger: Logger

  protected statusMap: Record<CreatableName, CreatableStatus> = {}

  constructor(logger: Logger) {
    this.logger = logger
  }

  report(name: CreatableName, status: CreatableStatus, progress?: number | Error): void {
    this.statusMap[name] = status
    const starting = (Object.entries(this.statusMap).map(([, value]): number => value === 'starting' ? 1 : 0)).reduce((a, b) => a + b, 0)
    const started = (Object.entries(this.statusMap).map(([, value]): number => value === 'started' ? 1 : 0)).reduce((a, b) => a + b, 0)
    this.logger.info(`${started}/${starting + started} ${name} status: ${status}`, { progress })
  }
}
