import type { Promisable } from '@xylabs/sdk-js'

export interface NetworkStakeStepRewardsViewerMethodsTemplate<TOptions, TResult> {
  bonus(options?: TOptions): Promisable<TResult>
  claimed(options?: TOptions): Promisable<TResult>
  earned(options?: TOptions): Promisable<TResult>
  total(options?: TOptions): Promisable<TResult>
  unclaimed(options?: TOptions): Promisable<TResult>
}
