export default function globalTeardown() {
  console.log('Stopping Ganache CLI...')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ganacheProcess = (globalThis as any).__GANACHE_PROCESS__
  if (ganacheProcess) {
    ganacheProcess.kill('SIGTERM')
    console.log('Ganache CLI stopped.')
  }
}
