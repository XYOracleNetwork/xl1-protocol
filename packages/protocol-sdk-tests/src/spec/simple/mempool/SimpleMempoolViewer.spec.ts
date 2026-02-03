import '@xylabs/vitest-extended'

import type { Hash } from '@xylabs/sdk-js'
import {
  asHex,
  assertEx,
  ZERO_ADDRESS,
} from '@xylabs/sdk-js'
import { MemoryArchivist } from '@xyo-network/archivist-memory'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import type {
  CachingContext, ChainId, SignedHydratedBlockWithStorageMeta,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, StepSizes } from '@xyo-network/xl1-protocol'
import type {
  BalancesStepSummary,
  BalanceStepSummaryContext,
  ProviderFactoryLocator, SimpleChainContractViewerParams,
  TransfersStepSummary,
  TransfersStepSummaryContext,
} from '@xyo-network/xl1-protocol-sdk'
import {
  buildRandomTransaction,
  findMostRecentBlock,
  flattenHydratedBlock, MemoryMap, payloadMapFromStore, SimpleAccountBalanceViewer, SimpleBlockValidationViewer, SimpleBlockViewer, SimpleChainContractViewer,
  SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
  SimpleWindowedBlockViewer,
} from '@xyo-network/xl1-protocol-sdk'
import { buildSimpleProviderLocator } from '@xyo-network/xl1-providers'
import { Semaphore } from 'async-mutex'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

describe('SimpleMempoolViewer', () => {
  const chainId = asHex('c5fe2e6f6841cbab12d8c0618be2df8c6156cc44', true)
  const genesisBlock = [
    {
      $epoch: 1_767_992_356_662,
      $signatures: [
        '8cb2b51ed4e9ab0e460854b961e2913a236505b6c93159f805b0caaa8417a35f35c1a5bf79257c2024cab6df4d53745c903b03daa0780922bfd28b296b2e8931'],
      block: 0,
      chain: chainId,
      previous: null,
      step_hashes: [],
      protocol: 1_002_000,
      addresses: ['f93c0cff2245a7776792efeb4b229044cea4ec06'],
      payload_hashes: [
        'cd89584cb86d457159800aae81a6eb7a353b64cbe8a03c23c6eaef4c1da004a7',
        '700b8549d16a22efa8241233ef1daee607d05fea3c88c70d6d209bb2476b777d',
        '4aff15b6455a26a535b356d7ab772dde329397b46560bd58cafec208e5ee7d7e',
        '17a82b108cf3ae09335a63e18762205fd44719444764f5238154fe678daee1e4',
        '43870f5f00e40dece933c26e7a9d101a5d675e108ef9dec72c80a39ef3ae0eac',
        '697045857de63c56155a283c592c4b3496602bc3291a44f676345d04976a052a',
        '4a72cd779093a606d4d141e00471f75f5c11846b16f5d3d1914896a74fc933d2',
        '8e3db409009d721b8aba87fe39d127fd31e0594207cee28424b3d3023845702e',
        '5b89af6f3de83425600d4003679f3fc5c547af6311cce40735cadf8699feb152'],
      payload_schemas: [
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.schema',
        'network.xyo.chain.stake.intent',
        'network.xyo.transfer'],
      previous_hashes: [null],
      schema: 'network.xyo.boundwitness',
      _dataHash: 'cc55f5c4f814403a7e0dba175c12d513cf6ece3724588ffc6b3348c4282d382c',
      _hash: '5aeebb8767ee8ec23925cc4a1cb5a6c6cf30a0ae995a6fe06a23c4158d6086c9',
      _sequence: '0000000000000000000000008d6086c9',
    },
    [
      {
        _dataHash: 'cd89584cb86d457159800aae81a6eb7a353b64cbe8a03c23c6eaef4c1da004a7',
        _hash: 'cd89584cb86d457159800aae81a6eb7a353b64cbe8a03c23c6eaef4c1da004a7',
        _sequence: '0000019ba48e6f36000000001da004a7',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/payload/transfer',
          additionalProperties: false,
          properties: {
            $sources: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            epoch: { type: 'number' },
            from: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            schema: { pattern: 'network.xyo.transfer', type: 'string' },
            transfers: {
              patternProperties: { '^[a-f0-9]{40,40}$': { pattern: '^[a-f0-9]{0,64}$', type: 'string' } },
              propertyNames: { pattern: '^[a-f0-9]{40,40}$' },
              type: 'object',
            },
          },
          required: ['schema', 'transfers', 'epoch'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '700b8549d16a22efa8241233ef1daee607d05fea3c88c70d6d209bb2476b777d',
        _hash: '700b8549d16a22efa8241233ef1daee607d05fea3c88c70d6d209bb2476b777d',
        _sequence: '0000019ba48e6f3600000001476b777d',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/block',
          additionalProperties: false,
          properties: {
            $destination: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            $epoch: { type: 'integer' },
            $signatures: { items: { pattern: '^[a-f0-9]{128,128}$', type: 'string' }, type: 'array' },
            $sourceQuery: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            $sources: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            addresses: { items: { pattern: '^[a-f0-9]{40,40}$', type: 'string' }, type: 'array' },
            block: { type: 'integer' },
            chain: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            payload_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            payload_schemas: { items: { pattern: String.raw`^(?:[a-z0-9]+\.)*[a-z0-9]+$`, type: 'string' }, type: 'array' },
            previous: {
              nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
            },
            previous_hashes: {
              items: {
                nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
              },
              type: 'array',
            },
            root: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            schema: { pattern: 'network.xyo.boundwitness', type: 'string' },
            step_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
          },
          required: ['schema', 'addresses', 'payload_hashes', 'payload_schemas', 'previous_hashes', 'block', 'chain', 'step_hashes', 'previous', '$epoch'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '4aff15b6455a26a535b356d7ab772dde329397b46560bd58cafec208e5ee7d7e',
        _hash: '4aff15b6455a26a535b356d7ab772dde329397b46560bd58cafec208e5ee7d7e',
        _sequence: '0000019ba48e6f3600000002e5ee7d7e',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/block-with-storage-meta',
          properties: {
            $destination: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            $epoch: { type: 'integer' },
            $signatures: { items: { pattern: '^[a-f0-9]{128,128}$', type: 'string' }, type: 'array' },
            $sourceQuery: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            $sources: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            _dataHash: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            _hash: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            _sequence: { pattern: '^[0-9a-f]+$', type: 'string' },
            addresses: { items: { pattern: '^[a-f0-9]{40,40}$', type: 'string' }, type: 'array' },
            block: { type: 'integer' },
            chain: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            payload_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            payload_schemas: { items: { pattern: String.raw`^(?:[a-z0-9]+\.)*[a-z0-9]+$`, type: 'string' }, type: 'array' },
            previous: {
              nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
            },
            previous_hashes: {
              items: {
                nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
              },
              type: 'array',
            },
            root: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            schema: { pattern: 'network.xyo.boundwitness', type: 'string' },
            step_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
          },
          required: [
            'schema',
            'addresses',
            'payload_hashes',
            'payload_schemas',
            'previous_hashes',
            'block',
            'chain',
            'step_hashes',
            'previous',
            '$epoch',
            '_sequence',
            '_hash',
            '_dataHash'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '17a82b108cf3ae09335a63e18762205fd44719444764f5238154fe678daee1e4',
        _hash: '17a82b108cf3ae09335a63e18762205fd44719444764f5238154fe678daee1e4',
        _sequence: '0000019ba48e6f36000000038daee1e4',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/transaction',
          additionalProperties: false,
          properties: {
            $destination: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            $signatures: { items: { pattern: '^[a-f0-9]{128,128}$', type: 'string' }, type: 'array' },
            $sourceQuery: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            $sources: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            addresses: { items: { pattern: '^[a-f0-9]{40,40}$', type: 'string' }, type: 'array' },
            chain: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            exp: { type: 'integer' },
            fees: {
              additionalProperties: false,
              properties: {
                base: { pattern: '^[a-f0-9]{0,64}$', type: 'string' },
                gasLimit: { pattern: '^[a-f0-9]{0,64}$', type: 'string' },
                gasPrice: { pattern: '^[a-f0-9]{0,64}$', type: 'string' },
                priority: { pattern: '^[a-f0-9]{0,64}$', type: 'string' },
              },
              required: ['base'],
              type: 'object',
            },
            from: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            nbf: { type: 'integer' },
            payload_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            payload_schemas: { items: { pattern: String.raw`^(?:[a-z0-9]+\.)*[a-z0-9]+$`, type: 'string' }, type: 'array' },
            previous_hashes: {
              items: {
                nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
              },
              type: 'array',
            },
            root: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            schema: { pattern: 'network.xyo.boundwitness', type: 'string' },
            script: { items: { pattern: String.raw`^elevate\|`, type: 'string' }, type: 'array' },
          },
          required: ['schema', 'addresses', 'payload_hashes', 'payload_schemas', 'previous_hashes', 'chain', 'fees', 'nbf', 'exp'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '43870f5f00e40dece933c26e7a9d101a5d675e108ef9dec72c80a39ef3ae0eac',
        _hash: '43870f5f00e40dece933c26e7a9d101a5d675e108ef9dec72c80a39ef3ae0eac',
        _sequence: '0000019ba48e6f3600000004f3ae0eac',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/transaction-with-storage-meta',
          additionalProperties: false,
          properties: {
            $destination: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            $signatures: { items: { pattern: '^[a-f0-9]{128,128}$', type: 'string' }, type: 'array' },
            $sourceQuery: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            $sources: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            _dataHash: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            _hash: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            _sequence: { pattern: '^[0-9a-f]+$', type: 'string' },
            addresses: { items: { pattern: '^[a-f0-9]{40,40}$', type: 'string' }, type: 'array' },
            chain: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            exp: { type: 'integer' },
            gas: { pattern: '^[a-f0-9]{0,64}$', type: 'string' },
            nbf: { type: 'integer' },
            payload_hashes: { items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' }, type: 'array' },
            payload_schemas: { items: { pattern: String.raw`^(?:[a-z0-9]+\.)*[a-z0-9]+$`, type: 'string' }, type: 'array' },
            previous_hashes: {
              items: {
                nullable: true, pattern: '^[a-f0-9]{64,64}$', type: 'string',
              },
              type: 'array',
            },
            root: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            schema: { pattern: 'network.xyo.boundwitness', type: 'string' },
          },
          required: [
            'schema',
            'addresses',
            'payload_hashes',
            'payload_schemas',
            'previous_hashes',
            '_sequence',
            '_hash',
            '_dataHash',
            'chain',
            'gas',
            'nbf',
            'exp'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '697045857de63c56155a283c592c4b3496602bc3291a44f676345d04976a052a',
        _hash: '697045857de63c56155a283c592c4b3496602bc3291a44f676345d04976a052a',
        _sequence: '0000019ba48e6f3600000005976a052a',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/payload/chain-stake-intent',
          additionalProperties: false,
          properties: {
            $sources: {
              items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
              type: 'array',
            },
            from: { pattern: '^[a-f0-9]{40,40}$', type: 'string' },
            intent: { enum: ['producer'], type: 'string' },
            schema: { pattern: 'network.xyo.chain.stake.intent', type: 'string' },
          },
          required: ['schema', 'intent'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '4a72cd779093a606d4d141e00471f75f5c11846b16f5d3d1914896a74fc933d2',
        _hash: '4a72cd779093a606d4d141e00471f75f5c11846b16f5d3d1914896a74fc933d2',
        _sequence: '0000019ba48e6f36000000064fc933d2',
        definition: {
          $id: 'https://schemas.xyo.network/2.0/payload/hash',
          additionalProperties: false,
          properties: {
            $sources: {
              items: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
              type: 'array',
            },
            hash: { pattern: '^[a-f0-9]{64,64}$', type: 'string' },
            schema: { pattern: 'network.xyo.hash', type: 'string' },
          },
          required: ['schema', 'hash'],
          type: 'object',
        },
        schema: 'network.xyo.schema',
      }, {
        _dataHash: '8e3db409009d721b8aba87fe39d127fd31e0594207cee28424b3d3023845702e',
        _hash: '8e3db409009d721b8aba87fe39d127fd31e0594207cee28424b3d3023845702e',
        _sequence: '0000019ba48e6f36000000073845702e',
        exp: 1,
        from: 'f93c0cff2245a7776792efeb4b229044cea4ec06',
        intent: 'producer',
        nbf: 0,
        schema: 'network.xyo.chain.stake.intent',
      }, {
        _dataHash: '5b89af6f3de83425600d4003679f3fc5c547af6311cce40735cadf8699feb152',
        _hash: '5b89af6f3de83425600d4003679f3fc5c547af6311cce40735cadf8699feb152',
        _sequence: '0000019ba48e6f360000000899feb152',
        epoch: 1_767_992_356_661,
        from: 'c5fe2e6f6841cbab12d8c0618be2df8c6156cc44',
        schema: 'network.xyo.transfer',
        transfers: { '4b6982eb238ff0001b735ff03db5b7a09e643f25': '033b2e3c9fd0803ce8000000' },
      }],
  ] as unknown as SignedHydratedBlockWithStorageMeta

  function initTransfersSummaryContext(context: CachingContext, finalizedArchivist: ArchivistInstance, chainId: ChainId): TransfersStepSummaryContext {
    const transfersSummaryMap = new MemoryMap<string, WithStorageMeta<TransfersStepSummary>>()
    const chainMap = payloadMapFromStore<WithStorageMeta<Payload>>(finalizedArchivist)

    const transfersSummaryContext = {
      ...context,
      stepSemaphores: StepSizes.map(() => new Semaphore(20)),
      summaryMap: transfersSummaryMap,
      head: async function (): Promise<[Hash, number]> {
        const head = assertEx(await findMostRecentBlock(finalizedArchivist))
        return [head._hash, head.block]
      },
      store: { chainMap },
      chainId,
    } satisfies TransfersStepSummaryContext
    return transfersSummaryContext
  }

  function initBalanceSummaryContext(context: CachingContext, finalizedArchivist: ArchivistInstance, chainId: ChainId): BalanceStepSummaryContext {
    const balancesSummaryMap = new MemoryMap<string, WithStorageMeta<BalancesStepSummary>>()
    const chainMap = payloadMapFromStore<WithStorageMeta<Payload>>(finalizedArchivist)

    const balanceSummaryContext = {
      ...context,
      stepSemaphores: StepSizes.map(() => new Semaphore(20)),
      summaryMap: balancesSummaryMap,
      head: async function (): Promise<[Hash, number]> {
        const head = assertEx(await findMostRecentBlock(finalizedArchivist))
        return [head._hash, head.block]
      },
      store: { chainMap },
      chainId,
    } satisfies BalanceStepSummaryContext
    return balanceSummaryContext
  }

  async function buildTestLocator(
    finalizedArchivist: MemoryArchivist,
    pendingBlocksArchivist: MemoryArchivist,
    pendingTransactionsArchivist: MemoryArchivist,
    contractViewerParams: Omit<SimpleChainContractViewerParams, 'context'>,
  ) {
    const locator = buildSimpleProviderLocator()
    const transfersSummaryContext = initTransfersSummaryContext(locator.context, finalizedArchivist, chainId)
    const balanceSummaryContext = initBalanceSummaryContext(locator.context, finalizedArchivist, chainId)
    await finalizedArchivist.clear()
    await pendingBlocksArchivist.clear()
    await pendingTransactionsArchivist.clear()
    await finalizedArchivist.insert(flattenHydratedBlock(genesisBlock))
    locator.registerMany([
      SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
      SimpleAccountBalanceViewer.factory<SimpleAccountBalanceViewer>(
        SimpleAccountBalanceViewer.dependencies,
        { transfersSummaryContext, balanceSummaryContext },
      ),
      SimpleBlockValidationViewer.factory<SimpleBlockValidationViewer>(SimpleBlockValidationViewer.dependencies),
      SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
      SimpleChainContractViewer.factory<SimpleChainContractViewer>(SimpleChainContractViewer.dependencies, contractViewerParams),
      SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 1000, syncInterval: 10_000 }),
      SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingBlocksArchivist, pendingTransactionsArchivist }),
      SimpleMempoolRunner.factory<SimpleMempoolRunner>(SimpleMempoolRunner.dependencies, { pendingBlocksArchivist, pendingTransactionsArchivist }),
    ])
    return locator
  }

  let finalizedArchivist: MemoryArchivist
  let pendingBlocksArchivist: MemoryArchivist
  let pendingTransactionsArchivist: MemoryArchivist
  let locator: ProviderFactoryLocator
  let sut: SimpleMempoolViewer

  beforeAll(async () => {
    finalizedArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingBlocksArchivist = await MemoryArchivist.create({ account: 'random' })
    pendingTransactionsArchivist = await MemoryArchivist.create({ account: 'random' })
    locator = await buildTestLocator(finalizedArchivist, pendingBlocksArchivist, pendingTransactionsArchivist, {
      chainId,
      minWithdrawalBlocks: 10,
      rewardsContract: ZERO_ADDRESS,
      stakingTokenAddress: ZERO_ADDRESS,
    })
    sut = await locator.getInstance<SimpleMempoolViewer>(SimpleMempoolViewer.defaultMoniker)
  })

  beforeEach(async () => {
    await pendingBlocksArchivist.clear()
    await pendingTransactionsArchivist.clear()
  })

  describe('pendingTransactions', () => {
    describe('with no pending transactions', () => {
      it('returns 0 pending transactions', async () => {
        const pendingTransactions = await sut.pendingTransactions()
        expect(pendingTransactions).toBeArrayOfSize(0)
      })
    })
    describe('with pending transaction', () => {
      it('returns the pending transaction', async () => {
        const tx = await buildRandomTransaction(chainId)
        const mempoolRunner = await locator.getInstance<SimpleMempoolRunner>(SimpleMempoolRunner.defaultMoniker)
        await mempoolRunner.submitTransactions([tx])
        const pendingTransactions = await sut.pendingTransactions()
        expect(pendingTransactions).toBeArrayOfSize(1)
      })
    })
    describe('with pending transactions', () => {
      it('returns the pending transactions', async () => {
        const transactions = [await buildRandomTransaction(chainId), await buildRandomTransaction(chainId)]
        const mempoolRunner = await locator.getInstance<SimpleMempoolRunner>(SimpleMempoolRunner.defaultMoniker)
        await mempoolRunner.submitTransactions(transactions)
        const pendingTransactions = await sut.pendingTransactions()
        expect(pendingTransactions).toBeArrayOfSize(transactions.length)
      })
    })
    describe('with expired transactions', () => {
      it('returns the non-expired pending transactions', async () => {
        const nbf = asXL1BlockNumber(0, true)
        const exp = asXL1BlockNumber(0, true)
        const transactions = [await buildRandomTransaction(chainId), await buildRandomTransaction(chainId, [], undefined, nbf, exp)]
        const mempoolRunner = await locator.getInstance<SimpleMempoolRunner>(SimpleMempoolRunner.defaultMoniker)
        await mempoolRunner.submitTransactions(transactions)
        const pendingTransactions = await sut.pendingTransactions()
        expect(pendingTransactions).toBeArrayOfSize(1)
      })
    })
    describe('with future transactions', () => {
      it('returns the non-future pending transactions', async () => {
        const nbf = asXL1BlockNumber(1000, true)
        const exp = asXL1BlockNumber(2000, true)
        const transactions = [await buildRandomTransaction(chainId), await buildRandomTransaction(chainId, [], undefined, nbf, exp)]
        const mempoolRunner = await locator.getInstance<SimpleMempoolRunner>(SimpleMempoolRunner.defaultMoniker)
        await mempoolRunner.submitTransactions(transactions)
        const pendingTransactions = await sut.pendingTransactions()
        expect(pendingTransactions).toBeArrayOfSize(1)
      })
    })
  })
})
