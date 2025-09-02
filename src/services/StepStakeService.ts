import type { StepStakeViewInterface } from '../interfaces/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface StepStakeService extends ServiceInterface, StepStakeViewInterface {}
