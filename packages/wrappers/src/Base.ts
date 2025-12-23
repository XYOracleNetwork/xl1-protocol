import type { PromisableArray } from '@xylabs/sdk-js'
import type { XyoConnection } from '@xyo-network/xl1-protocol-sdk'

export interface BaseWrapperConfig<T> {
  provider: XyoConnection
  value: T
}

export class BaseWrapper<T, C extends BaseWrapperConfig<T> = BaseWrapperConfig<T>> {
  protected readonly config: Partial<C>
  protected readonly value: T
  protected constructor(value: T, config: Partial<C> = {}) {
    this.config = config
    this.value = value
  }

  get provider(): XyoConnection | undefined {
    return this.config.provider
  }

  static async create<T, C extends BaseWrapperConfig<T> = BaseWrapperConfig<T>>(value: T, config: Partial<C> = {}) {
    if ((await this.validateValue(value)).length > 0) {
      throw new Error(`Invalid value for ${this.constructor.name}: ${value}`)
    }
    if ((await this.validateConfig(config)).length > 0) {
      throw new Error(`Invalid config for ${this.constructor.name}: ${config}`)
    }
    return new this<T>(value, config)
  }

  static validateConfig(_config: unknown): PromisableArray<Error> {
    return []
  }

  static validateValue(_value: unknown): PromisableArray<Error> {
    return []
  }

  validate(): PromisableArray<Error> {
    return []
  }
}
