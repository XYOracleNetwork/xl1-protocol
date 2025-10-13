import type { ChainId } from '../../model.ts'
import type { ServiceInterface } from '../Service.ts'

export interface BaseChainService extends ServiceInterface {
  chainId: ChainId
}
