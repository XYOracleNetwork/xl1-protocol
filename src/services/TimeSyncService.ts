import type { TimeSyncViewInterface } from '../interfaces/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface TimeSyncService extends ServiceInterface, TimeSyncViewInterface {}
