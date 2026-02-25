export type HasSessionId = { sessionId?: string }
export const hasSessionId = (message: unknown): message is HasSessionId => {
  return (
    typeof message === 'object'
    && message !== null
    && 'sessionId' in message
    && typeof message.sessionId === 'string'
  )
}
