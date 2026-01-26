import type {
  Address, JsonObject, Promisable,
} from '@xylabs/sdk-js'

import type { Provider } from '../Provider.ts'

export const StakeEventNames = ['StakeAdded', 'StakeRemoved', 'StakeWithdrawn'] as const
export type StakeEventName = typeof StakeEventNames[number]

export interface ExternalEvent<TName extends string = string, TArgs extends JsonObject = {}> {
  args: TArgs
  name: TName
  time: number // usually block number
}

export interface EventFilter<TName extends string = string> {
  name?: TName
  time?: [number, number]
}

export interface StakeEventArgs {
  amount: bigint
  id: number
  staked: Address
  staker: Address
}

export type StakeEventFilterArgs = Partial<Pick<StakeEventArgs, 'staker' | 'staked' | 'id'>>

export interface StakeEventFilter<TName extends StakeEventName = StakeEventName> extends EventFilter<TName> {
  args?: StakeEventFilterArgs
}

export interface StakeEvent<TName extends StakeEventName = StakeEventName> extends ExternalEvent<TName> {
  args: StakeEventArgs
}

export const StakeEventsViewerMoniker = 'StakeEventsViewer' as const
export type StakeEventsViewerMoniker = typeof StakeEventsViewerMoniker

export interface StakeEventsViewer extends Provider<StakeEventsViewerMoniker> {
  positionCount(range: [number, number | 'latest']): Promisable<number>
  stakeEvents<TName extends StakeEventName>(range: [number, number | 'latest'], filter?: StakeEventFilter<TName>): Promisable<StakeEvent<TName>[]>
}
