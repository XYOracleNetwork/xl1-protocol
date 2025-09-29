export const splitOnDecimal = (value: bigint, places = 18): [bigint, bigint] => {
  const whole = value / BigInt(10 ** places)
  const decimal = value % BigInt(10 ** places)
  return [whole, decimal]
}
