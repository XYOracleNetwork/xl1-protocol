import * as z from 'zod'

function base64Encode(u8: Uint8Array): string {
  // Node
  if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    return Buffer.from(u8).toString('base64')
  }

  // Browser
  let binary = ''
  const chunk = 0x80_00
  for (let i = 0; i < u8.length; i += chunk) {
    // eslint-disable-next-line unicorn/prefer-code-point
    binary += String.fromCharCode(...u8.subarray(i, i + chunk))
  }
  return btoa(binary)
}

/** Base64 decode that works in Node and browsers -> Uint8Array */
function base64Decode(b64: string): Uint8Array {
  // Node
  if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    return new Uint8Array(Buffer.from(b64, 'base64'))
  }

  // Browser
  const binary = atob(b64)
  const u8 = new Uint8Array(binary.length)
  // eslint-disable-next-line unicorn/prefer-code-point
  for (let i = 0; i < binary.length; i++) u8[i] = binary.charCodeAt(i)
  return u8
}

export const ArrayBufferToJsonZod = z.instanceof(ArrayBuffer).transform((x) => {
  const u8 = new Uint8Array(x)
  return base64Encode(u8)
})

export const JsonToArrayBufferZod = z.string().transform((x) => {
  const u8 = base64Decode(x)
  return u8.buffer
})
