import type { Chain } from '../../model.ts'
import type { Service } from '../Service.ts'

export interface BaseChainService extends Service {
  chainId: Chain
}
