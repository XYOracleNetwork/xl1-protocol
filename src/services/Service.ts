export type ServiceName = Exclude<string, 'reserved-service-name-value'>

export type ServiceStatus = 'starting' | 'started' | 'stopping' | 'stopped'

export interface ServiceStatusReporter {
  reportStatus: (name: ServiceName, status: ServiceStatus, progress?: number) => void
}

export interface Service {
  name: ServiceName
  statusReporter?: ServiceStatusReporter
}
