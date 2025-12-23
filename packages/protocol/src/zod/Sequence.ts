import { HexRegExMinMax, toHex } from '@xylabs/sdk-js'
import type { LocalSequence, QualifiedSequence } from '@xyo-network/payload-model'
import { SequenceConstants } from '@xyo-network/payload-model'
import { z } from 'zod'

const LocalSequenceRegex = new RegExp(HexRegExMinMax(SequenceConstants.localSequenceBytes, SequenceConstants.localSequenceBytes))
export const LocalSequenceToStringZod = z.string().regex(LocalSequenceRegex)
export const LocalSequenceFromStringZod = z.string().regex(LocalSequenceRegex).transform<LocalSequence>(v => toHex(v) as LocalSequence)

const QualifiedSequenceRegex = new RegExp(HexRegExMinMax(SequenceConstants.qualifiedSequenceBytes, SequenceConstants.qualifiedSequenceBytes))
export const QualifiedSequenceToStringZod = z.string().regex(QualifiedSequenceRegex)
export const QualifiedSequenceFromStringZod = z.string().regex(QualifiedSequenceRegex).transform<QualifiedSequence>(v => toHex(v) as QualifiedSequence)

export const SequenceToStringZod = z.union([LocalSequenceToStringZod, QualifiedSequenceToStringZod])
export const SequenceFromStringZod = z.union([LocalSequenceFromStringZod, QualifiedSequenceFromStringZod])
