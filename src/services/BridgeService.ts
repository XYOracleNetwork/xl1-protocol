import type { BridgeViewInterface } from '../interfaces/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface BridgeService extends ServiceInterface, BridgeViewInterface {}
