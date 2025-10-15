import type { ChainId } from '../../model/index.ts'
import type { ServiceInterface } from '../Service.ts'

export interface BaseChainService extends ServiceInterface {
  chainId: ChainId
}
