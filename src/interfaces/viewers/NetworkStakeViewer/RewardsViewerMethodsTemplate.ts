import type { Promisable } from '@xylabs/promise'

export interface RewardsViewerMethodsTemplate<TOptions, TResult> {
  bonus(options?: TOptions): Promisable<TResult>
  claimed(options?: TOptions): Promisable<TResult>
  earned(options?: TOptions): Promisable<TResult>
  total(options?: TOptions): Promisable<TResult>
  unclaimed(options?: TOptions): Promisable<TResult>
}
