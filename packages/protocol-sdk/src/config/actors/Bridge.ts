import {
  AddressZod, HexZod, toAddress, toHex,
} from '@xylabs/sdk-js'
import type { ChainId } from '@xyo-network/xl1-protocol'
import { AttoXL1ConvertFactor, XL1 } from '@xyo-network/xl1-protocol'
import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../../validation/index.ts'
import { BaseConfigZod } from '../Base.ts'

const DEFAULT_FIXED_FEE = toHex(XL1(1n) * AttoXL1ConvertFactor.xl1)
const DEFAULT_HARDHAT_BRIDGE_CONTRACT = toAddress('2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6')
const DEFAULT_HARDHAT_CHAIN_ID: ChainId = toHex('7A69')
const DEFAULT_HARDHAT_REMOTE_CHAIN_WALLET_PRIVATE_KEY = toHex('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')
const DEFAULT_HARDHAT_TOKEN_CONTRACT = toAddress('5FbDB2315678afecb367f032d93F642f64180aa3')
const DEFAULT_MAX_BRIDGE_AMOUNT = toHex(XL1(100_000n) * AttoXL1ConvertFactor.xl1)
const DEFAULT_MIN_BRIDGE_AMOUNT = toHex(XL1(10n) * AttoXL1ConvertFactor.xl1)

export const BasisPointsZod = z.coerce.number().int().nonnegative().max(10_000)
export type BasisPoints = z.infer<typeof BasisPointsZod>

export const BridgeConfigZod = BaseConfigZod.extend(z.object({
  chainRpcApiUrl: z.string().default('http://localhost:8080/rpc').register(globalRegistry, {
    default: 'http://localhost:8080/rpc',
    description: 'URL for the Chain RPC API',
    title: 'bridge.chainRpcApiUrl',
    type: 'string',
  }),
  escrowAddress: AddressZod.optional().register(globalRegistry, {
    description: 'Address to which bridge escrow will be sent',
    title: 'bridge.escrowAddress',
    type: 'string',
  }),
  feesAddress: AddressZod.optional().register(globalRegistry, {
    description: 'Address to which bridge fees will be sent',
    title: 'bridge.feesAddress',
    type: 'string',
  }),
  feeFixed: HexZod.default(DEFAULT_FIXED_FEE).register(globalRegistry, {
    default: DEFAULT_FIXED_FEE,
    description: 'Fixed fee (in AttoXL1) applied to bridge transfers',
    title: 'bridge.feeFixed',
    type: 'bigint',
  }),
  feeRateBasisPoints: BasisPointsZod.default(500).register(globalRegistry, {
    default: 500,
    description: 'Variable rate fee (in basis points where 1 bps = 0.01%) applied to bridge transfers',
    title: 'bridge.feeRateBasisPoints',
    type: 'number',
  }),
  host: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the Bridge',
    title: 'bridge.host',
    type: 'string',
  }),
  maxBridgeAmount: HexZod.default(DEFAULT_MAX_BRIDGE_AMOUNT).register(globalRegistry, {
    default: DEFAULT_MAX_BRIDGE_AMOUNT,
    description: 'Maximum amount allowed for a bridge transfer',
    title: 'bridge.maxBridgeAmount',
    type: 'string',
  }),
  minBridgeAmount: HexZod.default(DEFAULT_MIN_BRIDGE_AMOUNT).register(globalRegistry, {
    default: DEFAULT_MIN_BRIDGE_AMOUNT,
    description: 'Minimum amount required for a bridge transfer',
    title: 'bridge.minBridgeAmount',
    type: 'string',
  }),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the Bridge wallet',
    title: 'bridge.mnemonic',
    type: 'string',
  }),
  port: z.coerce.number().int().positive().default(8081).register(globalRegistry, {
    default: 8081,
    description: 'Port for the Bridge',
    title: 'bridge.port',
    type: 'number',
  }),
  redisHost: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the Bridge Redis instance',
    title: 'bridge.redisHost',
    type: 'string',
  }),
  redisPort: z.coerce.number().int().positive().default(6379).register(globalRegistry, {
    default: 6379,
    description: 'Port for the Bridge Redis instance',
    title: 'bridge.redisPort',
    type: 'number',
  }),
  remoteBridgeContractAddress: AddressZod.default(DEFAULT_HARDHAT_BRIDGE_CONTRACT).register(globalRegistry, {
    default: DEFAULT_HARDHAT_BRIDGE_CONTRACT,
    description: 'Hex representation of remote token address used for bridging',
    title: 'bridge.remoteBridgeContractAddress',
    type: 'string',
  }),
  remoteChainId: HexZod.default(DEFAULT_HARDHAT_CHAIN_ID).register(globalRegistry, {
    default: DEFAULT_HARDHAT_CHAIN_ID,
    description: 'Remote chain ID',
    title: 'bridge.remoteChainId',
    type: 'string',
  }),
  remoteTokenAddress: HexZod.default(DEFAULT_HARDHAT_TOKEN_CONTRACT).register(globalRegistry, {
    default: DEFAULT_HARDHAT_TOKEN_CONTRACT,
    description: 'Hex representation of remote token address used for bridging',
    title: 'bridge.remoteTokenAddress',
    type: 'string',
  }),
  remoteChainWalletPrivateKey: HexZod.default(DEFAULT_HARDHAT_REMOTE_CHAIN_WALLET_PRIVATE_KEY).register(globalRegistry, {
    description: 'Private key for the wallet to use for the remote chain wallet',
    title: 'bridge.remoteChainWalletPrivateKey',
    type: 'string',
  }),
  xl1ChainId: HexZod.optional().register(globalRegistry, {
    description: 'XL1 chain id used for bridging',
    title: 'bridge.xl1ChainId',
    type: 'string',
  }),
  xl1TokenAddress: HexZod.optional().register(globalRegistry, {
    description: 'XL1 token address used for bridging',
    title: 'bridge.xl1TokenAddress',
    type: 'string',
  }),
}).shape)

export type BridgeConfig = z.infer<typeof BridgeConfigZod>

export const BridgeSettingsZod = BridgeConfigZod.pick({
  feeFixed: true,
  feeRateBasisPoints: true,
  feesAddress: true,
  escrowAddress: true,
  maxBridgeAmount: true,
  minBridgeAmount: true,
  remoteChainId: true,
  remoteTokenAddress: true,
  xl1TokenAddress: true,
  xl1ChainId: true,
}).required()

export type BridgeSettings = z.infer<typeof BridgeSettingsZod>
