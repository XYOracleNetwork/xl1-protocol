import { setupServer } from 'msw/node'
import { afterAll, beforeAll } from 'vitest'

export const server = setupServer() // no handlers = all requests fall through

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
