export type EventWithId = { data: { data: { id: string } } }
export const isEventWithId = (event: unknown): event is EventWithId => {
  return (
    typeof event === 'object'
    && event !== null
    && 'data' in event
    && typeof event.data === 'object'
    && event.data !== null
    && 'data' in event.data
    && typeof event.data.data === 'object'
    && event.data.data !== null
    && 'id' in event.data.data
    && typeof event.data.data.id === 'string'
  )
}
