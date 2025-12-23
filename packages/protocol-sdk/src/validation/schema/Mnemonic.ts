import { z } from 'zod'

/**
 * Validates a single string containing a BIP-39 mnemonic.
 *
 * • Trims leading/trailing whitespace.
 * • Collapses any run of whitespace (spaces, tabs, new-lines) to a single space.
 * • Splits on spaces → array of words.
 * • Checks that the word-count is 12, 15, 18, 21, or 24.
 *
 */
export const MnemonicStringZod = z
  .string()
  .transform(s => s.trim().replaceAll(/\s+/g, ' ')) // normalize spacing
  .refine(
    s => [12, 15, 18, 21, 24].includes(s.split(' ').length),
    { message: 'Mnemonic must contain 12, 15, 18, 21, or 24 words.' },
  ).describe('BIP-39 mnemonic string')

export type MnemonicString = z.infer<typeof MnemonicStringZod>
