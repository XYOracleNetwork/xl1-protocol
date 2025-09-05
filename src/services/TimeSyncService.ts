import type { TimeSyncViewInterface, TimeSyncViewInterfaceV2 } from '../interfaces/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface TimeSyncService extends ServiceInterface, TimeSyncViewInterface {}

export interface TimeSyncServiceV2 extends ServiceInterface, TimeSyncViewInterfaceV2 {}
