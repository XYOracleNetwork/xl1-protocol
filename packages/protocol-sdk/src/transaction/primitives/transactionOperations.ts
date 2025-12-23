export function crackOperation(operation: string): [string, string[]] {
  const parts = operation.split('|')
  if (parts.length < 2) {
    throw new Error(`Invalid operation format: ${operation}`)
  }
  return [parts[0], parts.slice(1)]
}

export function crackOperations(operations: string[]): [string, string[]][] {
  return operations.map(op => crackOperation(op))
}
