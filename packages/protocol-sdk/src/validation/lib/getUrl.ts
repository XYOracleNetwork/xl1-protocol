import { isLocalhost } from './isLocalhost.ts'

export const getUrl = (host: string, port: number): string => {
  const scheme = isLocalhost(host) ? 'http' : 'https'
  return `${scheme}://${host}:${port}`
}
