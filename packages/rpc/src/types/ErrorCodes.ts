// See https://www.npmjs.com/package/@metamask/rpc-errors for
// better error codes & protocol specific error codes. Migrate to that
// if fuller support is needed.
export const JsonRpcErrorCodes: Record<string, { code: number; message: string }> = {
  InternalError: { code: -32_603, message: 'Internal JSON-RPC error (unexpected exception).' },
  InvalidParams: { code: -32_602, message: 'Invalid method parameter(s).' },
  InvalidRequest: { code: -32_600, message: 'The JSON sent is not a valid Request object.' },
  MethodNotFound: { code: -32_601, message: 'The method does not exist or is not available.' },
  UserRejected: { code: 4001, message: 'User rejected the request.' },
}
