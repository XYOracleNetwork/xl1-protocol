import ky from 'ky'

export const isInternetAvailable = async (): Promise<boolean> => {
  try {
    await ky('https://cloudflare.com/cdn-cgi/trace', { signal: AbortSignal.timeout(2000) })
    return true
  } catch {
    return false
  }
}
