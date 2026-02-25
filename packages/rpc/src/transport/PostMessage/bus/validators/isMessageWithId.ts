export type MessageWithId = { data: { id: string } }
export const isMessageWithId = (message: unknown): message is MessageWithId => {
  return (
    typeof message === 'object'
    && message !== null
    && 'data' in message
    && typeof message.data === 'object'
    && message.data !== null
    && 'id' in message.data
    && typeof message.data.id === 'string'
  )
}
