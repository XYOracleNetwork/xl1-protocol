export type ServiceName = Exclude<string, 'reserved-service-name-value'>

export interface Service {
  name: ServiceName
}
