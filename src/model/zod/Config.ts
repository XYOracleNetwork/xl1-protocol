import type { AssertConfig } from '@xylabs/hex'

export interface ZodFactoryConfigObject {
  name: string
}

export type ZodFactoryConfig = AssertConfig | ZodFactoryConfigObject
