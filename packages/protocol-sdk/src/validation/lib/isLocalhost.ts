export const isLocalhost = (hostname: string): boolean => {
  return (
    hostname === 'localhost'
    || hostname === '127.0.0.1'
    || hostname === '::1' // IPv6 localhost
    || hostname.endsWith('.localhost')
  )
}
