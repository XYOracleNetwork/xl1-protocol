import { type Logger } from '@xylabs/sdk-js'

export async function timeBudget<TResult>(
  name: string,
  logger: Logger | undefined,
  func: () => Promise<TResult>,
  budget: number,
  status = false,
): Promise<TResult> {
  const start = Date.now()
  const timer = status
    ? setInterval(() => {
        const duration = Date.now() - start
        if ((budget > 0) && (duration > budget)) {
          logger?.warn(`Function [${name}] execution is exceeding budget: ${duration}ms > ${budget}ms`)
        }
      }, Math.max(100, budget))
    : undefined

  const result = await func()
  const duration = Date.now() - start

  if (!timer && (budget > 0) && (duration > budget)) {
    logger?.warn(`Function [${name}] execution exceeded budget: ${duration}ms > ${budget}ms`)
  }
  if (timer) {
    clearInterval(timer)
  }
  return result
}
