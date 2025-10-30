import { splitOnDecimal } from './splitOnDecimal.ts'

export const splitOnDecimalToString = (
  value: bigint,
  places = 18,
  maxDecimal = places,
  maxCharacters = 9,
  minDecimals = 1,
  locale: Intl.LocalesArgument = 'en-US',
): string => {
  const [whole, decimal] = splitOnDecimal(value, places)
  if (whole === 0n && decimal < 10 ** maxDecimal && decimal !== 0n) return '< 0.'.padEnd(maxDecimal + 5, '0') + '1'

  const wholeCharacters = whole.toString(10).length
  const calcMaxDecimalCharacters = maxCharacters === -1 ? places : wholeCharacters > maxCharacters ? 0 : maxCharacters - wholeCharacters
  // take the max between user defined maxDecimal and calculated maxDecimalCharacters
  // this allows the maxCharacters to take priority over maxDecimal
  const maxDecimalCharacters = Math.max(maxDecimal, calcMaxDecimalCharacters)

  // Format whole number with thousand separators according to locale
  const formattedWhole = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(whole)

  // Get decimal separator for the locale
  const decimalSeparator = new Intl.NumberFormat(locale)
    .formatToParts(1.1)
    .find(part => part.type === 'decimal')?.value ?? '.'

  // Pad decimal part to correct number of places
  let paddedDecimal = decimal.toString().padStart(places, '0').slice(0, maxDecimalCharacters)
  // remove unneeded trailing zeros (honoring minDecimals)
  while (paddedDecimal.length > minDecimals && paddedDecimal.endsWith('0')) {
    paddedDecimal = paddedDecimal.slice(0, -1)
  }

  return `${formattedWhole}${paddedDecimal.length > 0 ? decimalSeparator : ''}${paddedDecimal}`
}
