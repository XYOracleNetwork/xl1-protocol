import type { SignedHydratedBlock } from '../../protocol/index.ts'
import type { SignedInstance } from '../modifiers/Signed.ts'
import type { HydratedBlockInstance } from './HydratedBlock.ts'

export interface SignedHydratedBlockInstance<T extends SignedHydratedBlock = SignedHydratedBlock> extends HydratedBlockInstance<T>, SignedInstance {}
