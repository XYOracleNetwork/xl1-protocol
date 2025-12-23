/* eslint-disable @stylistic/max-len */
import type { Address } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { generateXyoBaseWalletFromPhrase } from '../generateXyoBaseWalletFromPhrase.ts'

describe('generateXyoWalletFromPhrase', () => {
  const cases: [string, Address][] = [
    ['soft stock horn gas screen eager warrior capital chair hamster act ritual pole favorite reject pupil lamp fox eager gospel around before oyster impose', '8789005ecc0ba7be1b8c73573c772b569586140e' as Address],
    ['feel word measure clean wire logic crumble require claw agree process animal doctor acoustic phone fury struggle exist child venture delay afraid grant wreck', '1fb0361af69fd563f69f0b3bcb6561b43e3ef7d8' as Address],
    ['congress proof lunar return illness stone tourist fine guard catch dry pen spatial clerk reopen resemble law humor metal entire sugar nasty voyage august', '58c0ff5f646794d463ffac5f8b5bfa031a8c3975' as Address],
    ['sight immune weird plastic strategy debate key enter gentle custom inject another connect knock lumber illegal easy lucky goose forest baby unfold nature gap', 'e4e65e0bcba8f1b4d276aedb366ffa33d8c64ccf' as Address],
    ['two that lady agree diesel thing path nuclear reopen favorite damp style limit sort tumble flat record one topple demise tag image differ give', '0873350b19bb5bebe17a3eff350218e54ab9e87e' as Address],
    ['tattoo melt despair brown zone stone mango link actor transfer detail owner crumble toy young current olive embody panther harsh kick wool tilt keen', '0e609cabc6a3364aed62fc360d1752e4f1369c28' as Address],
    ['connect umbrella knee title jealous funny modify dinner know unfold sing train siege squeeze monkey kid bullet aisle enact carpet evolve artist rice shuffle', '3b84ea92b81b201b8efda1cc95f3a86b8db0865c' as Address],
    ['kite hand april ready marriage idea enforce now people luxury core animal detail renew announce combine country taxi relief april fatal arrow explain panda', '1ffe9e39aca66726dd616ba46296755195a15a47' as Address],
    ['pyramid leaf person total remove spend banana skull blouse evolve jewel heart daring chapter grid hand day defy evolve aunt exist elevator nature crop', '5028e3e8e4ce7f890ad37f19eac0ba54ee4dfbbc' as Address],
    ['surface tongue decline aerobic letter deer small ankle liberty begin copy elevator tent latin flight bitter large pizza bright sudden cry short pattern table', '3d4755603738f6555508341c48c59456e8021e04' as Address],
  ]
  it.each(cases)('should generate the default wallet path correctly', async (phrase, address) => {
    const wallet = await generateXyoBaseWalletFromPhrase(phrase)
    const child = await wallet.derivePath('0')
    expect(child).toBeDefined()
    expect(child.address).toBe(address)
  })
})
