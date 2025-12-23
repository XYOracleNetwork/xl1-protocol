# @xyo-network/xl1-protocol-sdk

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One SDK Protocol



## Reference

**@xyo-network/xl1-protocol-sdk**

***

## Classes

- [LruCacheMap](#classes/LruCacheMap)
- [MemoryMap](#classes/MemoryMap)
- [SimpleAccountBalanceViewer](#classes/SimpleAccountBalanceViewer)
- [SimpleXyoClient](#classes/SimpleXyoClient)
- [SimpleDataLakeRunner](#classes/SimpleDataLakeRunner)
- [SimpleDataLakeViewer](#classes/SimpleDataLakeViewer)
- [SimpleXyoGateway](#classes/SimpleXyoGateway)
- [SimpleXyoGatewayRunner](#classes/SimpleXyoGatewayRunner)
- [SimpleXyoNetwork](#classes/SimpleXyoNetwork)
- [SimpleXyoPermissions](#classes/SimpleXyoPermissions)
- [MemoryPermissionsStore](#classes/MemoryPermissionsStore)
- [SimpleXyoRunner](#classes/SimpleXyoRunner)
- [SimpleXyoSigner](#classes/SimpleXyoSigner)
- [SimpleTimeSyncViewer](#classes/SimpleTimeSyncViewer)
- [BlockValidationError](#classes/BlockValidationError)
- [HydratedBlockValidationError](#classes/HydratedBlockValidationError)
- [HydratedBlockStateValidationError](#classes/HydratedBlockStateValidationError)

## Interfaces

- [ChainServiceCollectionV2](#interfaces/ChainServiceCollectionV2)
- [NegativeBigInt](#interfaces/NegativeBigInt)
- [PositiveBigInt](#interfaces/PositiveBigInt)
- [ChainWindow](#interfaces/ChainWindow)
- [AddressInstance](#interfaces/AddressInstance)
- [AddressStateInstance](#interfaces/AddressStateInstance)
- [BoundWitnessInstance](#interfaces/BoundWitnessInstance)
- [DataInstance](#interfaces/DataInstance)
- [TransactionFeesInstance](#interfaces/TransactionFeesInstance)
- [ObjectInstance](#interfaces/ObjectInstance)
- [PayloadInstance](#interfaces/PayloadInstance)
- [SignatureInstance](#interfaces/SignatureInstance)
- [HydratedBlockInstance](#interfaces/HydratedBlockInstance)
- [BlockWindowInstance](#interfaces/BlockWindowInstance)
- [BlockWindowStateInstance](#interfaces/BlockWindowStateInstance)
- [SignedInstance](#interfaces/SignedInstance)
- [ValidatableInstance](#interfaces/ValidatableInstance)
- [HydratedTransactionInstance](#interfaces/HydratedTransactionInstance)
- [AsynchronousMapRead](#interfaces/AsynchronousMapRead)
- [AsynchronousMapWrite](#interfaces/AsynchronousMapWrite)
- [AsynchronousMap](#interfaces/AsynchronousMap)
- [SynchronousMapRead](#interfaces/SynchronousMapRead)
- [SynchronousMapWrite](#interfaces/SynchronousMapWrite)
- [SynchronousMap](#interfaces/SynchronousMap)
- [BaseContext](#interfaces/BaseContext)
- [withContextCacheResponseOptions](#interfaces/withContextCacheResponseOptions)
- [ChainContextWrite](#interfaces/ChainContextWrite)
- [StakedChainContextWrite](#interfaces/StakedChainContextWrite)
- [ChainContextRead](#interfaces/ChainContextRead)
- [StakedChainContextRead](#interfaces/StakedChainContextRead)
- [ChainStakeContextWrite](#interfaces/ChainStakeContextWrite)
- [ChainStakeContextRead](#interfaces/ChainStakeContextRead)
- [ChainStateContextRead](#interfaces/ChainStateContextRead)
- [ChainStateContextWrite](#interfaces/ChainStateContextWrite)
- [ChainStoreContextWrite](#interfaces/ChainStoreContextWrite)
- [ChainStoreContextRead](#interfaces/ChainStoreContextRead)
- [ChainForkStatic](#interfaces/ChainForkStatic)
- [ChainIdentity](#interfaces/ChainIdentity)
- [ChainStoreWrite](#interfaces/ChainStoreWrite)
- [ChainStoreRead](#interfaces/ChainStoreRead)
- [ChainSummaryContextBase](#interfaces/ChainSummaryContextBase)
- [ChainSummaryContextRead](#interfaces/ChainSummaryContextRead)
- [ChainSummaryContextWrite](#interfaces/ChainSummaryContextWrite)
- [BalanceStepSummaryContextRead](#interfaces/BalanceStepSummaryContextRead)
- [BalanceStepSummaryContext](#interfaces/BalanceStepSummaryContext)
- [TransfersStepSummaryContextRead](#interfaces/TransfersStepSummaryContextRead)
- [TransfersStepSummaryContext](#interfaces/TransfersStepSummaryContext)
- [AddressFields](#interfaces/AddressFields)
- [StepSummaryFields](#interfaces/StepSummaryFields)
- [DataLakeViewer](#interfaces/DataLakeViewer)
- [DataLakeRunner](#interfaces/DataLakeRunner)
- [~~TransactionSubmitterOptions~~](#interfaces/TransactionSubmitterOptions)
- [~~TransactionSubmitter~~](#interfaces/TransactionSubmitter)
- [XyoGatewayConfig](#interfaces/XyoGatewayConfig)
- [XyoRpcGatewayConfig](#interfaces/XyoRpcGatewayConfig)
- [XyoClient](#interfaces/XyoClient)
- [XyoConnection](#interfaces/XyoConnection)
- [XyoGateway](#interfaces/XyoGateway)
- [TransactionOptions](#interfaces/TransactionOptions)
- [XyoGatewayRunnerMethods](#interfaces/XyoGatewayRunnerMethods)
- [XyoGatewayRunner](#interfaces/XyoGatewayRunner)
- [XyoNetwork](#interfaces/XyoNetwork)
- [XyoRunner](#interfaces/XyoRunner)
- [~~XyoWallet~~](#interfaces/XyoWallet)
- [PermissionRequest](#interfaces/PermissionRequest)
- [RequestedPermission](#interfaces/RequestedPermission)
- [Caveats](#interfaces/Caveats)
- [Permission](#interfaces/Permission)
- [InvokerPermission](#interfaces/InvokerPermission)
- [PermissionsGetHandler](#interfaces/PermissionsGetHandler)
- [PermissionRequestsHandler](#interfaces/PermissionRequestsHandler)
- [XyoPermissions](#interfaces/XyoPermissions)
- [PermissionsProvider](#interfaces/PermissionsProvider)
- [XyoSigner](#interfaces/XyoSigner)
- [XyoSignerDeprecated](#interfaces/XyoSignerDeprecated)
- [NetworkStakeViewerMethods](#interfaces/NetworkStakeViewerMethods)
- [NetworkStakeViewer](#interfaces/NetworkStakeViewer)
- [NetworkStakeStepRewardsByPositionViewerMethods](#interfaces/NetworkStakeStepRewardsByPositionViewerMethods)
- [NetworkStakeStepRewardsByPositionViewer](#interfaces/NetworkStakeStepRewardsByPositionViewer)
- [NetworkStakeStepRewardsByStakerViewerMethods](#interfaces/NetworkStakeStepRewardsByStakerViewerMethods)
- [NetworkStakeStepRewardsByStakerViewer](#interfaces/NetworkStakeStepRewardsByStakerViewer)
- [NetworkStakeStepRewardsByStepViewerMethods](#interfaces/NetworkStakeStepRewardsByStepViewerMethods)
- [NetworkStakeStepRewardsByStepViewer](#interfaces/NetworkStakeStepRewardsByStepViewer)
- [NetworkStakeStepRewardsRangeOptions](#interfaces/NetworkStakeStepRewardsRangeOptions)
- [NetworkStakeStepRewardsByStepViewerOptions](#interfaces/NetworkStakeStepRewardsByStepViewerOptions)
- [NetworkStakeStepRewardsByStakerViewerOptions](#interfaces/NetworkStakeStepRewardsByStakerViewerOptions)
- [NetworkStakeStepRewardsByPositionViewerOptions](#interfaces/NetworkStakeStepRewardsByPositionViewerOptions)
- [NetworkStakeStepRewardsTotalViewerMethods](#interfaces/NetworkStakeStepRewardsTotalViewerMethods)
- [NetworkStakeStepRewardsTotalViewer](#interfaces/NetworkStakeStepRewardsTotalViewer)
- [NetworkStakeStepRewardsViewerMethods](#interfaces/NetworkStakeStepRewardsViewerMethods)
- [NetworkStakeStepRewardsViewer](#interfaces/NetworkStakeStepRewardsViewer)
- [NetworkStakeStepRewardsByIndexViewerMethodsTemplate](#interfaces/NetworkStakeStepRewardsByIndexViewerMethodsTemplate)
- [NetworkStakeStepRewardsViewerMethodsTemplate](#interfaces/NetworkStakeStepRewardsViewerMethodsTemplate)
- [PagedPositionsOptions](#interfaces/PagedPositionsOptions)
- [PagedStakersOptions](#interfaces/PagedStakersOptions)
- [StepStatistics](#interfaces/StepStatistics)
- [StepViewerMethods](#interfaces/StepViewerMethods)
- [StepViewer](#interfaces/StepViewer)
- [XyoViewerMethods](#interfaces/XyoViewerMethods)
- [XyoViewer](#interfaces/XyoViewer)
- [AccountBalanceService](#interfaces/AccountBalanceService)
- [AccountTransfersProvider](#interfaces/AccountTransfersProvider)
- [AccountTransfersService](#interfaces/AccountTransfersService)
- [BlockProducerService](#interfaces/BlockProducerService)
- [BlockRewardService](#interfaces/BlockRewardService)
- [BlockRewardServiceV2](#interfaces/BlockRewardServiceV2)
- [BaseChainService](#interfaces/BaseChainService)
- [ChainHeadService](#interfaces/ChainHeadService)
- [ChainService](#interfaces/ChainService)
- [ChainStakeViewer](#interfaces/ChainStakeViewer)
- [ChainStaker](#interfaces/ChainStaker)
- [ChainIteratorService](#interfaces/ChainIteratorService)
- [EventingChainIteratorService](#interfaces/EventingChainIteratorService)
- [ChainBlockNumberIteratorService](#interfaces/ChainBlockNumberIteratorService)
- [EventingChainBlockNumberIteratorService](#interfaces/EventingChainBlockNumberIteratorService)
- [ChainHashIteratorService](#interfaces/ChainHashIteratorService)
- [EventingChainHashIteratorService](#interfaces/EventingChainHashIteratorService)
- [HeadEventData](#interfaces/HeadEventData)
- [ChainIteratorServiceEventData](#interfaces/ChainIteratorServiceEventData)
- [ElectionService](#interfaces/ElectionService)
- [NetworkStakeStepRewardService](#interfaces/NetworkStakeStepRewardService)
- [PendingTransactionsService](#interfaces/PendingTransactionsService)
- [ChainIndexingServiceStateFields](#interfaces/ChainIndexingServiceStateFields)
- [StakeIntentService](#interfaces/StakeIntentService)
- [DataLakeRunnerParams](#interfaces/DataLakeRunnerParams)
- [DataLakeViewerParams](#interfaces/DataLakeViewerParams)
- [PermissionsStore](#interfaces/PermissionsStore)
- [AccountBalancesViewerMethods](#interfaces/AccountBalancesViewerMethods)
- [AccountBalanceViewerMethods](#interfaces/AccountBalanceViewerMethods)
- [AccountBalanceViewer](#interfaces/AccountBalanceViewer)
- [BlockViewierMethods](#interfaces/BlockViewierMethods)
- [BlockViewer](#interfaces/BlockViewer)
- [ChainViewerMethods](#interfaces/ChainViewerMethods)
- [ChainContractViewerMethods](#interfaces/ChainContractViewerMethods)
- [ChainContractViewer](#interfaces/ChainContractViewer)
- [ForkViewerMethods](#interfaces/ForkViewerMethods)
- [NetworkStakeStepAddressRewardViewerMethods](#interfaces/NetworkStakeStepAddressRewardViewerMethods)
- [NetworkStakeStepPoolRewardViewerMethods](#interfaces/NetworkStakeStepPoolRewardViewerMethods)
- [NetworkStakeStepRewardPositionViewerMethods](#interfaces/NetworkStakeStepRewardPositionViewerMethods)
- [NetworkStakeStepRewardViewer](#interfaces/NetworkStakeStepRewardViewer)
- [StakeViewerProperties](#interfaces/StakeViewerProperties)
- [StakeViewerMethods](#interfaces/StakeViewerMethods)
- [StakeViewer](#interfaces/StakeViewer)
- [StakeRunner](#interfaces/StakeRunner)
- [ExternalEvent](#interfaces/ExternalEvent)
- [EventFilter](#interfaces/EventFilter)
- [StakeEventArgs](#interfaces/StakeEventArgs)
- [StakeEventFilter](#interfaces/StakeEventFilter)
- [StakeEvent](#interfaces/StakeEvent)
- [StakeEventsViewer](#interfaces/StakeEventsViewer)
- [StakeTotalsViewerMethods](#interfaces/StakeTotalsViewerMethods)
- [StakeTotalsViewer](#interfaces/StakeTotalsViewer)
- [StepStakeViewerMethods](#interfaces/StepStakeViewerMethods)
- [StepStakeViewer](#interfaces/StepStakeViewer)
- [TimeSyncViewerMethods](#interfaces/TimeSyncViewerMethods)
- [TimeSyncViewer](#interfaces/TimeSyncViewer)
- [TransactionViewerMethods](#interfaces/TransactionViewerMethods)
- [TransferBalancesViewerMethods](#interfaces/TransferBalancesViewerMethods)
- [TransferBalanceViewerMethods](#interfaces/TransferBalanceViewerMethods)

## Type Aliases

- [SignedBigInt](#type-aliases/SignedBigInt)
- [Config](#type-aliases/Config)
- [UsageMeta](#type-aliases/UsageMeta)
- [EIP712DataPayloadFields](#type-aliases/EIP712DataPayloadFields)
- [EIP712DataPayloadSchema](#type-aliases/EIP712DataPayloadSchema)
- [EIP712DataPayload](#type-aliases/EIP712DataPayload)
- [EIP712SignaturePayloadFields](#type-aliases/EIP712SignaturePayloadFields)
- [EIP712SignaturePayloadSchema](#type-aliases/EIP712SignaturePayloadSchema)
- [EIP712SignaturePayload](#type-aliases/EIP712SignaturePayload)
- [TypedDataDomain](#type-aliases/TypedDataDomain)
- [TypedDataField](#type-aliases/TypedDataField)
- [TypedDataTypes](#type-aliases/TypedDataTypes)
- [TypedDataValues](#type-aliases/TypedDataValues)
- [MapTypeWrite](#type-aliases/MapTypeWrite)
- [MapTypeRead](#type-aliases/MapTypeRead)
- [AsynchronousMapType](#type-aliases/AsynchronousMapType)
- [SynchronousMapType](#type-aliases/SynchronousMapType)
- [MapType](#type-aliases/MapType)
- [ChainContext](#type-aliases/ChainContext)
- [StakedChainContext](#type-aliases/StakedChainContext)
- [ChainStakeContext](#type-aliases/ChainStakeContext)
- [ChainStateContext](#type-aliases/ChainStateContext)
- [ChainStoreContext](#type-aliases/ChainStoreContext)
- [ChainStore](#type-aliases/ChainStore)
- [PayloadMapWrite](#type-aliases/PayloadMapWrite)
- [PayloadMapRead](#type-aliases/PayloadMapRead)
- [PayloadMap](#type-aliases/PayloadMap)
- [Position](#type-aliases/Position)
- [~~Stake~~](#type-aliases/Stake)
- [RecordKeyType](#type-aliases/RecordKeyType)
- [ChainSummaryContext](#type-aliases/ChainSummaryContext)
- [AddressPairSchema](#type-aliases/AddressPairSchema)
- [AddressPairPayload](#type-aliases/AddressPairPayload)
- [BalancesStepSummarySchema](#type-aliases/BalancesStepSummarySchema)
- [BalancesStepSummary](#type-aliases/BalancesStepSummary)
- [StepSummarySchema](#type-aliases/StepSummarySchema)
- [StepSummary](#type-aliases/StepSummary)
- [TransfersStepSummarySchema](#type-aliases/TransfersStepSummarySchema)
- [TransfersStepSummary](#type-aliases/TransfersStepSummary)
- [DataLakeData](#type-aliases/DataLakeData)
- [DataLakeViewerMethods](#type-aliases/DataLakeViewerMethods)
- [DataLakeRunnerMethods](#type-aliases/DataLakeRunnerMethods)
- [CaveatTypes](#type-aliases/CaveatTypes)
- [NextBlockProducer](#type-aliases/NextBlockProducer)
- [HeadEventArgs](#type-aliases/HeadEventArgs)
- [ChainIndexingServiceStateSchema](#type-aliases/ChainIndexingServiceStateSchema)
- [ChainIndexingServiceState](#type-aliases/ChainIndexingServiceState)
- [Invoker](#type-aliases/Invoker)
- [ParentCapability](#type-aliases/ParentCapability)
- [ConfirmSubmittedTransactionOptions](#type-aliases/ConfirmSubmittedTransactionOptions)
- [BlockValidatorFunction](#type-aliases/BlockValidatorFunction)
- [HydratedBlockStateValidationFunction](#type-aliases/HydratedBlockStateValidationFunction)
- [HydratedBlockValidationFunction](#type-aliases/HydratedBlockValidationFunction)
- [MnemonicString](#type-aliases/MnemonicString)
- [AccountBalanceHistoryItem](#type-aliases/AccountBalanceHistoryItem)
- [ForkHistory](#type-aliases/ForkHistory)
- [StakeEventName](#type-aliases/StakeEventName)
- [StakeEventFilterArgs](#type-aliases/StakeEventFilterArgs)
- [TransferBalanceHistoryItem](#type-aliases/TransferBalanceHistoryItem)
- [TransferPair](#type-aliases/TransferPair)

## Variables

- [Xl1CommonConfigSchema](#variables/Xl1CommonConfigSchema)
- [ConfigZod](#variables/ConfigZod)
- [JSONSchemaMetaSchema](#variables/JSONSchemaMetaSchema)
- [GlobalMetaSchema](#variables/GlobalMetaSchema)
- [UsageMetaSchema](#variables/UsageMetaSchema)
- [XL1\_NETWORK\_STAKING\_GENESIS\_PERIOD\_END\_EPOCH](#variables/XL1_NETWORK_STAKING_GENESIS_PERIOD_END_EPOCH)
- [XL1\_NETWORK\_STAKING\_GENESIS\_PERIOD\_END\_XL1\_BLOCK](#variables/XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK)
- [EIP712DataPayloadFieldsZod](#variables/EIP712DataPayloadFieldsZod)
- [EIP712DataPayloadSchema](#variables/EIP712DataPayloadSchema)
- [isEIP712DataPayload](#variables/isEIP712DataPayload)
- [asEIP712DataPayload](#variables/asEIP712DataPayload)
- [EIP712SignaturePayloadFieldsZod](#variables/EIP712SignaturePayloadFieldsZod)
- [EIP712SignaturePayloadSchema](#variables/EIP712SignaturePayloadSchema)
- [isEIP712SignaturePayload](#variables/isEIP712SignaturePayload)
- [asEIP712SignaturePayload](#variables/asEIP712SignaturePayload)
- [TypedDataDomainZod](#variables/TypedDataDomainZod)
- [TypedDataFieldZod](#variables/TypedDataFieldZod)
- [TypedDataTypesZod](#variables/TypedDataTypesZod)
- [TypedDataValueZod](#variables/TypedDataValueZod)
- [XL1\_NETWORK\_STAKING\_GENESIS\_PERIOD\_TOTAL\_EARNED\_REWARDS](#variables/XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_EARNED_REWARDS)
- [XL1\_NETWORK\_STAKING\_GENESIS\_PERIOD\_TOTAL\_BONUS\_REWARDS](#variables/XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_BONUS_REWARDS)
- [XL1\_NETWORK\_STAKING\_GENESIS\_PERIOD\_TOTAL\_REWARDS](#variables/XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_REWARDS)
- [RewardMultipliers](#variables/RewardMultipliers)
- [AddressPairSchema](#variables/AddressPairSchema)
- [isAddressPairPayload](#variables/isAddressPairPayload)
- [asAddressPairPayload](#variables/asAddressPairPayload)
- [asOptionalAddressPairPayload](#variables/asOptionalAddressPairPayload)
- [BalancesStepSummarySchema](#variables/BalancesStepSummarySchema)
- [isBalancesStepSummary](#variables/isBalancesStepSummary)
- [asBalancesStepSummary](#variables/asBalancesStepSummary)
- [asBalancesStepSummaryWithStorageMeta](#variables/asBalancesStepSummaryWithStorageMeta)
- [StepSummarySchema](#variables/StepSummarySchema)
- [TransfersStepSummarySchema](#variables/TransfersStepSummarySchema)
- [isTransfersStepSummary](#variables/isTransfersStepSummary)
- [asTransfersStepSummary](#variables/asTransfersStepSummary)
- [asTransfersStepSummaryWithStorageMeta](#variables/asTransfersStepSummaryWithStorageMeta)
- [ChainIndexingServiceStateSchema](#variables/ChainIndexingServiceStateSchema)
- [asChainIndexingServiceState](#variables/asChainIndexingServiceState)
- [asChainIndexingServiceStateWithStorageMeta](#variables/asChainIndexingServiceStateWithStorageMeta)
- [TODO](#variables/TODO)
- [MnemonicStringZod](#variables/MnemonicStringZod)
- [StakeEventNames](#variables/StakeEventNames)
- [WALLET\_COMPLIANCE](#variables/WALLET_COMPLIANCE)
- [COIN\_TYPES](#variables/COIN_TYPES)
- [ACCOUNT\_TYPE](#variables/ACCOUNT_TYPE)
- [CHANGE\_ADDRESS](#variables/CHANGE_ADDRESS)
- [ADDRESS\_INDEX](#variables/ADDRESS_INDEX)
- [DEFAULT\_WALLET\_PATH](#variables/DEFAULT_WALLET_PATH)

## Functions

- [isNegativeBigInt](#functions/isNegativeBigInt)
- [isPositiveBigInt](#functions/isPositiveBigInt)
- [parseSignedBigInt](#functions/parseSignedBigInt)
- [toSignedBigInt](#functions/toSignedBigInt)
- [toPositiveBigInt](#functions/toPositiveBigInt)
- [allHashesPresent](#functions/allHashesPresent)
- [blockPayloadsFromHydratedBlock](#functions/blockPayloadsFromHydratedBlock)
- [flattenHydratedBlock](#functions/flattenHydratedBlock)
- [flattenHydratedBlocks](#functions/flattenHydratedBlocks)
- [hydrateBlock](#functions/hydrateBlock)
- [transactionsFromHydratedBlock](#functions/transactionsFromHydratedBlock)
- [tryHydrateBlock](#functions/tryHydrateBlock)
- [blockFromBlockNumber](#functions/blockFromBlockNumber)
- [calculateFramesFromRange](#functions/calculateFramesFromRange)
- [deepCalculateFramesFromRange](#functions/deepCalculateFramesFromRange)
- [hashFromBlockNumber](#functions/hashFromBlockNumber)
- [isReadArchivist](#functions/isReadArchivist)
- [isWriteArchivist](#functions/isWriteArchivist)
- [isReadWriteArchivist](#functions/isReadWriteArchivist)
- [toStepIdentityString](#functions/toStepIdentityString)
- [transfersStepSummaryFromRange](#functions/transfersStepSummaryFromRange)
- [transfersSummary](#functions/transfersSummary)
- [transfersSummaryKey](#functions/transfersSummaryKey)
- [getDefaultConfig](#functions/getDefaultConfig)
- [isUsageMeta](#functions/isUsageMeta)
- [hasMongoConfig](#functions/hasMongoConfig)
- [signEIP712Message](#functions/signEIP712Message)
- [verifyEIP712Message](#functions/verifyEIP712Message)
- [contextCache](#functions/contextCache)
- [withContextCacheResponse](#functions/withContextCacheResponse)
- [netBalancesForPayloads](#functions/netBalancesForPayloads)
- [netTransfersForPayloads](#functions/netTransfersForPayloads)
- [isBalancesStepSummaryWithStorageMeta](#functions/isBalancesStepSummaryWithStorageMeta)
- [isTransfersStepSummaryWithStorageMeta](#functions/isTransfersStepSummaryWithStorageMeta)
- [readPayloadMapFromStore](#functions/readPayloadMapFromStore)
- [completedStepRewardAddress](#functions/completedStepRewardAddress)
- [derivedReceiveAddress](#functions/derivedReceiveAddress)
- [stepBlockRange](#functions/stepBlockRange)
- [stepTransferIndex](#functions/stepTransferIndex)
- [balancesStepSummaryFromRange](#functions/balancesStepSummaryFromRange)
- [balancesSummary](#functions/balancesSummary)
- [timeBudget](#functions/timeBudget)
- [elevatedPayloads](#functions/elevatedPayloads)
- [isChainIndexingServiceState](#functions/isChainIndexingServiceState)
- [isChainIndexingServiceStateWithStorageMeta](#functions/isChainIndexingServiceStateWithStorageMeta)
- [xl1BlockNumberToEthBlockNumber](#functions/xl1BlockNumberToEthBlockNumber)
- [buildTransaction](#functions/buildTransaction)
- [buildUnsignedTransaction](#functions/buildUnsignedTransaction)
- [confirmSubmittedTransaction](#functions/confirmSubmittedTransaction)
- [tryHydrateTransaction](#functions/tryHydrateTransaction)
- [hydrateTransaction](#functions/hydrateTransaction)
- [flattenHydratedTransaction](#functions/flattenHydratedTransaction)
- [flattenHydratedTransactions](#functions/flattenHydratedTransactions)
- [tryHydrateElevatedTransaction](#functions/tryHydrateElevatedTransaction)
- [hydrateElevatedTransaction](#functions/hydrateElevatedTransaction)
- [transactionBlockByteCount](#functions/transactionBlockByteCount)
- [transactionElevatedPayloadHashes](#functions/transactionElevatedPayloadHashes)
- [transactionElevatedPayloads](#functions/transactionElevatedPayloads)
- [crackOperation](#functions/crackOperation)
- [crackOperations](#functions/crackOperations)
- [transactionBytesRequiredGas](#functions/transactionBytesRequiredGas)
- [transactionRequiredGas](#functions/transactionRequiredGas)
- [tryExtractElevatedHashesFromScript](#functions/tryExtractElevatedHashesFromScript)
- [extractElevatedHashesFromScript](#functions/extractElevatedHashesFromScript)
- [tryExtractElevatedHashes](#functions/tryExtractElevatedHashes)
- [extractElevatedHashes](#functions/extractElevatedHashes)
- [signTransaction](#functions/signTransaction)
- [isBlockValidationError](#functions/isBlockValidationError)
- [isHydratedBlockValidationError](#functions/isHydratedBlockValidationError)
- [isHydratedBlockStateValidationError](#functions/isHydratedBlockStateValidationError)
- [getUrl](#functions/getUrl)
- [isLocalhost](#functions/isLocalhost)
- [generateXyoBaseWalletFromPhrase](#functions/generateXyoBaseWalletFromPhrase)

### classes

  ### <a id="BlockValidationError"></a>BlockValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `ValidationError`\<`BlockBoundWitness`\>

## Constructors

### Constructor

```ts
new BlockValidationError(
   hash, 
   value, 
   message?, 
   cause?): BlockValidationError;
```

### Parameters

#### hash

`Hash`

#### value

`BlockBoundWitness`

#### message?

`string`

#### cause?

`unknown`

### Returns

`BlockValidationError`

### Inherited from

```ts
ValidationError<BlockBoundWitness>.constructor
```

  ### <a id="HydratedBlockStateValidationError"></a>HydratedBlockStateValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `ValidationError`\<`HydratedBlock`\>

## Constructors

### Constructor

```ts
new HydratedBlockStateValidationError(
   hash, 
   chainId, 
   value, 
   message?, 
   cause?): HydratedBlockStateValidationError;
```

### Parameters

#### hash

`Hash`

#### chainId

`ChainId`

#### value

`HydratedBlock`

#### message?

`string`

#### cause?

`unknown`

### Returns

`HydratedBlockStateValidationError`

### Overrides

```ts
ValidationError<HydratedBlock>.constructor
```

## Properties

### chainId

```ts
chainId: ChainId;
```

  ### <a id="HydratedBlockValidationError"></a>HydratedBlockValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `ValidationError`\<`HydratedBlock`\>

## Constructors

### Constructor

```ts
new HydratedBlockValidationError(
   hash, 
   value, 
   message?, 
   cause?): HydratedBlockValidationError;
```

### Parameters

#### hash

`Hash`

#### value

`HydratedBlock`

#### message?

`string`

#### cause?

`unknown`

### Returns

`HydratedBlockValidationError`

### Inherited from

```ts
ValidationError<HydratedBlock>.constructor
```

  ### <a id="LruCacheMap"></a>LruCacheMap

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Type Parameters

### K

`K` *extends* `object`

### V

`V` *extends* 
  \| \{
\}
  \| `string`
  \| `number`
  \| `bigint`

### FC

`FC` = () => `void`

## Implements

- [`SynchronousMap`](#../interfaces/SynchronousMap)\<`K`, `V`\>

## Constructors

### Constructor

```ts
new LruCacheMap<K, V, FC>(options?): LruCacheMap<K, V, FC>;
```

### Parameters

#### options?

`Options`\<`K`, `V`, `FC`\>

### Returns

`LruCacheMap`\<`K`, `V`, `FC`\>

## Methods

### clear()

```ts
clear(): void;
```

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`clear`](../interfaces/SynchronousMap.md#clear)

***

### delete()

```ts
delete(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`delete`](../interfaces/SynchronousMap.md#delete)

***

### get()

```ts
get(id): V | undefined;
```

### Parameters

#### id

`K`

### Returns

`V` \| `undefined`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`get`](../interfaces/SynchronousMap.md#get)

***

### getMany()

```ts
getMany(id): V[];
```

### Parameters

#### id

`K`[]

### Returns

`V`[]

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`getMany`](../interfaces/SynchronousMap.md#getmany)

***

### has()

```ts
has(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`has`](../interfaces/SynchronousMap.md#has)

***

### set()

```ts
set(id, data): void;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`set`](../interfaces/SynchronousMap.md#set)

***

### setMany()

```ts
setMany(entries): void;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`setMany`](../interfaces/SynchronousMap.md#setmany)

  ### <a id="MemoryMap"></a>MemoryMap

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Type Parameters

### K

`K` *extends* `object`

### V

`V` = \{
\}

## Implements

- [`SynchronousMap`](#../interfaces/SynchronousMap)\<`K`, `V`\>

## Constructors

### Constructor

```ts
new MemoryMap<K, V>(): MemoryMap<K, V>;
```

### Returns

`MemoryMap`\<`K`, `V`\>

## Methods

### clear()

```ts
clear(): void;
```

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`clear`](../interfaces/SynchronousMap.md#clear)

***

### delete()

```ts
delete(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`delete`](../interfaces/SynchronousMap.md#delete)

***

### get()

```ts
get(id): V | undefined;
```

### Parameters

#### id

`K`

### Returns

`V` \| `undefined`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`get`](../interfaces/SynchronousMap.md#get)

***

### getMany()

```ts
getMany(ids): V[];
```

### Parameters

#### ids

`K`[]

### Returns

`V`[]

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`getMany`](../interfaces/SynchronousMap.md#getmany)

***

### has()

```ts
has(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`has`](../interfaces/SynchronousMap.md#has)

***

### set()

```ts
set(id, data): void;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`set`](../interfaces/SynchronousMap.md#set)

***

### setMany()

```ts
setMany(entries): void;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`void`

### Implementation of

[`SynchronousMap`](#../interfaces/SynchronousMap).[`setMany`](../interfaces/SynchronousMap.md#setmany)

  ### <a id="MemoryPermissionsStore"></a>MemoryPermissionsStore

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

In-memory implementation of XyoPermissions for testing or ephemeral use cases.
Does not persist data beyond the lifetime of the instance.
Assumes all permission requests are granted and revocations always succeed.

## Implements

- [`PermissionsStore`](#../interfaces/PermissionsStore)

## Constructors

### Constructor

```ts
new MemoryPermissionsStore(invoker): MemoryPermissionsStore;
```

### Parameters

#### invoker

`string`

### Returns

`MemoryPermissionsStore`

## Accessors

### invoker

### Get Signature

```ts
get invoker(): string;
```

#### Returns

`string`

### Implementation of

[`PermissionsStore`](#../interfaces/PermissionsStore).[`invoker`](../interfaces/PermissionsStore.md#invoker)

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#../interfaces/InvokerPermission)[]\>

### Implementation of

[`PermissionsStore`](#../interfaces/PermissionsStore).[`getPermissions`](../interfaces/PermissionsStore.md#getpermissions)

***

### setPermissions()

```ts
setPermissions(permissions): Promise<void>;
```

### Parameters

#### permissions

[`InvokerPermission`](#../interfaces/InvokerPermission)[]

### Returns

`Promise`\<`void`\>

### Implementation of

[`PermissionsStore`](#../interfaces/PermissionsStore).[`setPermissions`](../interfaces/PermissionsStore.md#setpermissions)

  ### <a id="SimpleAccountBalanceViewer"></a>SimpleAccountBalanceViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`AccountBalanceViewer`](#../interfaces/AccountBalanceViewer)

## Constructors

### Constructor

```ts
new SimpleAccountBalanceViewer(
   context, 
   transferContext, 
   blockViewer): SimpleAccountBalanceViewer;
```

### Parameters

#### context

[`BalanceStepSummaryContext`](#../interfaces/BalanceStepSummaryContext)

#### transferContext

[`TransfersStepSummaryContext`](#../interfaces/TransfersStepSummaryContext)

#### blockViewer

[`BlockViewer`](#../interfaces/BlockViewer)

### Returns

`SimpleAccountBalanceViewer`

## Properties

### blockViewer

```ts
protected readonly blockViewer: BlockViewer;
```

***

### context

```ts
protected readonly context: BalanceStepSummaryContext;
```

***

### transferContext

```ts
protected readonly transferContext: TransfersStepSummaryContext;
```

## Methods

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promise<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promise`\<`AttoXL1`\>

### Implementation of

[`AccountBalanceViewer`](#../interfaces/AccountBalanceViewer).[`accountBalance`](../interfaces/AccountBalanceViewer.md#accountbalance)

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promise<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promise`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

### Implementation of

[`AccountBalanceViewer`](#../interfaces/AccountBalanceViewer).[`accountBalanceHistory`](../interfaces/AccountBalanceViewer.md#accountbalancehistory)

***

### accountBalances()

```ts
accountBalances(address, _headOrRange?): Promise<Partial<Record<Address, AttoXL1>>>;
```

### Parameters

#### address

`Address`[]

#### \_headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promise`\<`Partial`\<`Record`\<`Address`, `AttoXL1`\>\>\>

***

### accountBalancesHistories()

```ts
accountBalancesHistories(_addresses, _rangeOrHash?): Promise<Partial<Record<Address, AccountBalanceHistoryItem[]>>>;
```

### Parameters

#### \_addresses

`Address`[]

#### \_rangeOrHash?

`Hash` | `XL1BlockRange`

### Returns

`Promise`\<`Partial`\<`Record`\<`Address`, [`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>\>\>

  ### <a id="SimpleDataLakeRunner"></a>SimpleDataLakeRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`SimpleDataLakeViewer`](#SimpleDataLakeViewer)\<[`MapType`](#../type-aliases/MapType)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\>\>

## Type Parameters

### TParams

`TParams` *extends* [`DataLakeRunnerParams`](#../interfaces/DataLakeRunnerParams)

## Implements

- [`DataLakeRunner`](#../interfaces/DataLakeRunner)

## Constructors

### Constructor

```ts
new SimpleDataLakeRunner<TParams>(params): SimpleDataLakeRunner<TParams>;
```

### Parameters

#### params

`TParams`

### Returns

`SimpleDataLakeRunner`\<`TParams`\>

### Overrides

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`constructor`](SimpleDataLakeViewer.md#constructor)

## Accessors

### allowedSchemas

### Get Signature

```ts
get allowedSchemas(): string[] | undefined;
```

#### Returns

`string`[] \| `undefined`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`allowedSchemas`](SimpleDataLakeViewer.md#allowedschemas)

***

### disallowedSchemas

### Get Signature

```ts
get disallowedSchemas(): string[] | undefined;
```

#### Returns

`string`[] \| `undefined`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`disallowedSchemas`](SimpleDataLakeViewer.md#disallowedschemas)

***

### map

### Get Signature

```ts
get protected map(): TMap;
```

#### Returns

`TMap`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`map`](SimpleDataLakeViewer.md#map)

***

### params

### Get Signature

```ts
get protected params(): TParams;
```

#### Returns

`TParams`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`params`](SimpleDataLakeViewer.md#params)

## Methods

### clear()

```ts
clear(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`clear`](../interfaces/DataLakeRunner.md#clear)

***

### delete()

```ts
delete(hash): Promise<boolean>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<`boolean`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`delete`](../interfaces/DataLakeRunner.md#delete)

***

### set()

```ts
set(hash, data): Promise<void>;
```

### Parameters

#### hash

`Hash`

#### data

[`DataLakeData`](#../type-aliases/DataLakeData)

### Returns

`Promise`\<`void`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`set`](../interfaces/DataLakeRunner.md#set)

***

### setMany()

```ts
setMany(entries): Promise<void>;
```

### Parameters

#### entries

\[`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\][]

### Returns

`Promise`\<`void`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`setMany`](../interfaces/DataLakeRunner.md#setmany)

***

### get()

```ts
get(hash): Promise<DataLakeData | undefined>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`get`](../interfaces/DataLakeRunner.md#get)

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`get`](SimpleDataLakeViewer.md#get)

***

### getMany()

```ts
getMany(hashes): Promise<DataLakeData[]>;
```

### Parameters

#### hashes

`Hash`[]

### Returns

`Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData)[]\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`getMany`](../interfaces/DataLakeRunner.md#getmany)

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`getMany`](SimpleDataLakeViewer.md#getmany)

***

### has()

```ts
has(hash): Promise<boolean>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<`boolean`\>

### Implementation of

[`DataLakeRunner`](#../interfaces/DataLakeRunner).[`has`](../interfaces/DataLakeRunner.md#has)

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`has`](SimpleDataLakeViewer.md#has)

***

### isAllowed()

```ts
protected isAllowed(value): boolean;
```

### Parameters

#### value

[`DataLakeData`](#../type-aliases/DataLakeData) | `undefined`

### Returns

`boolean`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`isAllowed`](SimpleDataLakeViewer.md#isallowed)

***

### isAllowedSchema()

```ts
protected isAllowedSchema(schema): boolean;
```

### Parameters

#### schema

`string`

### Returns

`boolean`

### Inherited from

[`SimpleDataLakeViewer`](#SimpleDataLakeViewer).[`isAllowedSchema`](SimpleDataLakeViewer.md#isallowedschema)

  ### <a id="SimpleDataLakeViewer"></a>SimpleDataLakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`SimpleDataLakeRunner`](#SimpleDataLakeRunner)

## Type Parameters

### TMap

`TMap` *extends* [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\> = [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\>

### TParams

`TParams` *extends* [`DataLakeViewerParams`](#../interfaces/DataLakeViewerParams)\<`TMap`\> = [`DataLakeViewerParams`](#../interfaces/DataLakeViewerParams)\<`TMap`\>

## Implements

- [`DataLakeViewer`](#../interfaces/DataLakeViewer)

## Constructors

### Constructor

```ts
new SimpleDataLakeViewer<TMap, TParams>(params): SimpleDataLakeViewer<TMap, TParams>;
```

### Parameters

#### params

`TParams`

### Returns

`SimpleDataLakeViewer`\<`TMap`, `TParams`\>

## Accessors

### allowedSchemas

### Get Signature

```ts
get allowedSchemas(): string[] | undefined;
```

#### Returns

`string`[] \| `undefined`

### Implementation of

[`DataLakeViewer`](#../interfaces/DataLakeViewer).[`allowedSchemas`](../interfaces/DataLakeViewer.md#allowedschemas)

***

### disallowedSchemas

### Get Signature

```ts
get disallowedSchemas(): string[] | undefined;
```

#### Returns

`string`[] \| `undefined`

### Implementation of

[`DataLakeViewer`](#../interfaces/DataLakeViewer).[`disallowedSchemas`](../interfaces/DataLakeViewer.md#disallowedschemas)

***

### map

### Get Signature

```ts
get protected map(): TMap;
```

#### Returns

`TMap`

***

### params

### Get Signature

```ts
get protected params(): TParams;
```

#### Returns

`TParams`

## Methods

### get()

```ts
get(hash): Promise<DataLakeData | undefined>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`\>

### Implementation of

[`DataLakeViewer`](#../interfaces/DataLakeViewer).[`get`](../interfaces/DataLakeViewer.md#get)

***

### getMany()

```ts
getMany(hashes): Promise<DataLakeData[]>;
```

### Parameters

#### hashes

`Hash`[]

### Returns

`Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData)[]\>

### Implementation of

[`DataLakeViewer`](#../interfaces/DataLakeViewer).[`getMany`](../interfaces/DataLakeViewer.md#getmany)

***

### has()

```ts
has(hash): Promise<boolean>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<`boolean`\>

### Implementation of

[`DataLakeViewer`](#../interfaces/DataLakeViewer).[`has`](../interfaces/DataLakeViewer.md#has)

***

### isAllowed()

```ts
protected isAllowed(value): boolean;
```

### Parameters

#### value

[`DataLakeData`](#../type-aliases/DataLakeData) | `undefined`

### Returns

`boolean`

***

### isAllowedSchema()

```ts
protected isAllowedSchema(schema): boolean;
```

### Parameters

#### schema

`string`

### Returns

`boolean`

  ### <a id="SimpleTimeSyncViewer"></a>SimpleTimeSyncViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`TimeSyncViewer`](#../interfaces/TimeSyncViewer)

## Constructors

### Constructor

```ts
new SimpleTimeSyncViewer(blockViewer, ethProvider?): SimpleTimeSyncViewer;
```

### Parameters

#### blockViewer

[`BlockViewer`](#../interfaces/BlockViewer)

#### ethProvider?

`Provider`

### Returns

`SimpleTimeSyncViewer`

## Properties

### blockViewer

```ts
protected readonly blockViewer: BlockViewer;
```

***

### ethProvider?

```ts
protected readonly optional ethProvider: Provider;
```

## Methods

### convertTime()

```ts
convertTime(
   fromDomain, 
   toDomain, 
from): Promise<number>;
```

Convert time between different domains

### Parameters

#### fromDomain

`TimeDomain`

#### toDomain

`TimeDomain`

#### from

`number`

### Returns

`Promise`\<`number`\>

### Implementation of

[`TimeSyncViewer`](#../interfaces/TimeSyncViewer).[`convertTime`](../interfaces/TimeSyncViewer.md#converttime)

***

### currentTime()

```ts
currentTime(domain): Promise<[string, number]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promise`\<\[`string`, `number`\]\>

### Implementation of

[`TimeSyncViewer`](#../interfaces/TimeSyncViewer).[`currentTime`](../interfaces/TimeSyncViewer.md#currenttime)

***

### currentTimeAndHash()

```ts
currentTimeAndHash(domain): Promise<[number, Hash | null]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promise`\<\[`number`, `Hash` \| `null`\]\>

### Implementation of

[`TimeSyncViewer`](#../interfaces/TimeSyncViewer).[`currentTimeAndHash`](../interfaces/TimeSyncViewer.md#currenttimeandhash)

***

### currentTimePayload()

```ts
currentTimePayload(): Promisable<{
}>;
```

Create a TimePayload with the current time from all configured domains

### Returns

`Promisable`\<\{
\}\>

### Implementation of

[`TimeSyncViewer`](#../interfaces/TimeSyncViewer).[`currentTimePayload`](../interfaces/TimeSyncViewer.md#currenttimepayload)

  ### <a id="SimpleXyoClient"></a>SimpleXyoClient

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoClient`](#../interfaces/XyoClient)

## Constructors

### Constructor

```ts
new SimpleXyoClient(gateways, permissions): SimpleXyoClient;
```

### Parameters

#### gateways

`Readonly`\<`Record`\<`string`, [`XyoGateway`](#../interfaces/XyoGateway)\>\>

#### permissions

[`XyoPermissions`](#../interfaces/XyoPermissions)

### Returns

`SimpleXyoClient`

## Properties

### gateways

```ts
gateways: Readonly<Record<string, XyoGateway>>;
```

### Implementation of

[`XyoClient`](#../interfaces/XyoClient).[`gateways`](../interfaces/XyoClient.md#gateways)

***

### permissions

```ts
permissions: XyoPermissions;
```

### Implementation of

[`XyoClient`](#../interfaces/XyoClient).[`permissions`](../interfaces/XyoClient.md#permissions)

  ### <a id="SimpleXyoGateway"></a>SimpleXyoGateway

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoGateway`](#../interfaces/XyoGateway)

## Constructors

### Constructor

```ts
new SimpleXyoGateway(signer, connection): SimpleXyoGateway;
```

### Parameters

#### signer

[`XyoSigner`](#../interfaces/XyoSigner)

#### connection

[`XyoConnection`](#../interfaces/XyoConnection)

### Returns

`SimpleXyoGateway`

## Accessors

### connectionInstance

### Get Signature

```ts
get connectionInstance(): XyoConnection;
```

Returns the connection provider for this gateway.

#### Returns

[`XyoConnection`](#../interfaces/XyoConnection)

Returns the connection provider for this gateway.

### Implementation of

[`XyoGateway`](#../interfaces/XyoGateway).[`connectionInstance`](../interfaces/XyoGateway.md#connectioninstance)

***

### signerInstance

### Get Signature

```ts
get signerInstance(): XyoSigner;
```

Returns the signer for this gateway.

#### Returns

[`XyoSigner`](#../interfaces/XyoSigner)

Returns the signer for this gateway.

### Implementation of

[`XyoGateway`](#../interfaces/XyoGateway).[`signerInstance`](../interfaces/XyoGateway.md#signerinstance)

## Methods

### ~~connection()~~

```ts
connection(): Promisable<XyoConnection>;
```

### Returns

`Promisable`\<[`XyoConnection`](#../interfaces/XyoConnection)\>

### Deprecated

use connectionInstance

### Implementation of

[`XyoGateway`](#../interfaces/XyoGateway).[`connection`](../interfaces/XyoGateway.md#connection)

***

### ~~signer()~~

```ts
signer(): Promisable<XyoSigner>;
```

### Returns

`Promisable`\<[`XyoSigner`](#../interfaces/XyoSigner)\>

### Deprecated

use signerInstance

### Implementation of

[`XyoGateway`](#../interfaces/XyoGateway).[`signer`](../interfaces/XyoGateway.md#signer)

  ### <a id="SimpleXyoGatewayRunner"></a>SimpleXyoGatewayRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner)

## Constructors

### Constructor

```ts
new SimpleXyoGatewayRunner(
   connection, 
   signer, 
   dataLakes): SimpleXyoGatewayRunner;
```

### Parameters

#### connection

[`XyoConnection`](#../interfaces/XyoConnection)

#### signer

[`XyoSigner`](#../interfaces/XyoSigner)

#### dataLakes

[`DataLakeRunner`](#../interfaces/DataLakeRunner)[] = `[]`

### Returns

`SimpleXyoGatewayRunner`

## Accessors

### connectionInstance

### Get Signature

```ts
get connectionInstance(): XyoConnection;
```

Returns the connection provider for this gateway.

#### Returns

[`XyoConnection`](#../interfaces/XyoConnection)

Returns the connection provider for this gateway.

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`connectionInstance`](../interfaces/XyoGatewayRunner.md#connectioninstance)

***

### dataLakes

### Get Signature

```ts
get dataLakes(): DataLakeRunner[];
```

#### Returns

[`DataLakeRunner`](#../interfaces/DataLakeRunner)[]

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`dataLakes`](../interfaces/XyoGatewayRunner.md#datalakes)

***

### signerInstance

### Get Signature

```ts
get signerInstance(): XyoSigner;
```

Returns the signer for this gateway.

#### Returns

[`XyoSigner`](#../interfaces/XyoSigner)

Returns the signer for this gateway.

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`signerInstance`](../interfaces/XyoGatewayRunner.md#signerinstance)

## Methods

### addDataLake()

```ts
addDataLake(dataLake): number;
```

### Parameters

#### dataLake

[`DataLakeRunner`](#../interfaces/DataLakeRunner)

### Returns

`number`

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`addDataLake`](../interfaces/XyoGatewayRunner.md#adddatalake)

***

### addPayloadsToChain()

```ts
addPayloadsToChain(
   onChain, 
   offChain, 
options?): Promise<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### onChain

`AllowedBlockPayload`[]

#### offChain

`Payload`[]

#### options?

[`TransactionOptions`](#../interfaces/TransactionOptions)

### Returns

`Promise`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`addPayloadsToChain`](../interfaces/XyoGatewayRunner.md#addpayloadstochain)

***

### addTransactionToChain()

```ts
addTransactionToChain(tx): Promise<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### tx

`SignedHydratedTransaction`

### Returns

`Promise`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`addTransactionToChain`](../interfaces/XyoGatewayRunner.md#addtransactiontochain)

***

### confirmSubmittedTransaction()

```ts
confirmSubmittedTransaction(txHash, options?): Promise<SignedHydratedTransaction>;
```

### Parameters

#### txHash

`Hash`

#### options?

[`ConfirmSubmittedTransactionOptions`](#../type-aliases/ConfirmSubmittedTransactionOptions)

### Returns

`Promise`\<`SignedHydratedTransaction`\>

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`confirmSubmittedTransaction`](../interfaces/XyoGatewayRunner.md#confirmsubmittedtransaction)

***

### ~~connection()~~

```ts
connection(): Promisable<XyoConnection>;
```

### Returns

`Promisable`\<[`XyoConnection`](#../interfaces/XyoConnection)\>

### Deprecated

use connectionInstance instead

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`connection`](../interfaces/XyoGatewayRunner.md#connection)

***

### removeDataLake()

```ts
removeDataLake(index): void;
```

### Parameters

#### index

`number`

### Returns

`void`

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`removeDataLake`](../interfaces/XyoGatewayRunner.md#removedatalake)

***

### send()

```ts
send(
   to, 
   amount, 
options?): Promise<Hash>;
```

### Parameters

#### to

`Address`

#### amount

`AttoXL1`

#### options?

[`TransactionOptions`](#../interfaces/TransactionOptions)

### Returns

`Promise`\<`Hash`\>

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`send`](../interfaces/XyoGatewayRunner.md#send)

***

### sendMany()

```ts
sendMany(transfers, options?): Promise<Hash>;
```

### Parameters

#### transfers

`Record`\<`Address`, `AttoXL1`\>

#### options?

[`TransactionOptions`](#../interfaces/TransactionOptions)

### Returns

`Promise`\<`Hash`\>

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`sendMany`](../interfaces/XyoGatewayRunner.md#sendmany)

***

### ~~signer()~~

```ts
signer(): Promisable<XyoSigner>;
```

### Returns

`Promisable`\<[`XyoSigner`](#../interfaces/XyoSigner)\>

### Deprecated

use signerInstance instead

### Implementation of

[`XyoGatewayRunner`](#../interfaces/XyoGatewayRunner).[`signer`](../interfaces/XyoGatewayRunner.md#signer)

***

### addPayloadsToDataLakes()

```ts
protected addPayloadsToDataLakes(payloads): Promise<void>;
```

### Parameters

#### payloads

`WithHashMeta`\<`Payload`\>[]

### Returns

`Promise`\<`void`\>

  ### <a id="SimpleXyoNetwork"></a>SimpleXyoNetwork

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoNetwork`](#../interfaces/XyoNetwork)

## Constructors

### Constructor

```ts
new SimpleXyoNetwork(networkId): SimpleXyoNetwork;
```

### Parameters

#### networkId

`GatewayName`

### Returns

`SimpleXyoNetwork`

## Properties

### \_networkId

```ts
protected readonly _networkId: GatewayName;
```

## Methods

### status()

```ts
status(): Promise<NetworkStatus>;
```

### Returns

`Promise`\<`NetworkStatus`\>

### Implementation of

[`XyoNetwork`](#../interfaces/XyoNetwork).[`status`](../interfaces/XyoNetwork.md#status)

  ### <a id="SimpleXyoPermissions"></a>SimpleXyoPermissions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

In-memory implementation of XyoPermissions for testing or ephemeral use cases.
Does not persist data beyond the lifetime of the instance.
Assumes all permission requests are granted and revocations always succeed.

## Implements

- [`XyoPermissions`](#../interfaces/XyoPermissions)

## Constructors

### Constructor

```ts
new SimpleXyoPermissions(store): SimpleXyoPermissions;
```

### Parameters

#### store

[`PermissionsStore`](#../interfaces/PermissionsStore)

### Returns

`SimpleXyoPermissions`

## Properties

### invoker

```ts
invoker: string;
```

## Accessors

### store

### Get Signature

```ts
get store(): PermissionsStore;
```

#### Returns

[`PermissionsStore`](#../interfaces/PermissionsStore)

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#../interfaces/InvokerPermission)[]\>

### Implementation of

[`XyoPermissions`](#../interfaces/XyoPermissions).[`getPermissions`](../interfaces/XyoPermissions.md#getpermissions)

***

### requestPermissions()

```ts
requestPermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#../interfaces/PermissionRequest)[]

### Returns

`Promise`\<[`RequestedPermission`](#../interfaces/RequestedPermission)[]\>

### Implementation of

[`XyoPermissions`](#../interfaces/XyoPermissions).[`requestPermissions`](../interfaces/XyoPermissions.md#requestpermissions)

***

### revokePermissions()

```ts
revokePermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#../interfaces/PermissionRequest)

### Returns

`Promise`\<[`RequestedPermission`](#../interfaces/RequestedPermission)[]\>

### Implementation of

[`XyoPermissions`](#../interfaces/XyoPermissions).[`revokePermissions`](../interfaces/XyoPermissions.md#revokepermissions)

  ### <a id="SimpleXyoRunner"></a>SimpleXyoRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoRunner`](#../interfaces/XyoRunner)

## Constructors

### Constructor

```ts
new SimpleXyoRunner(mempoolArchivist?): SimpleXyoRunner;
```

### Parameters

#### mempoolArchivist?

`ArchivistInstance`\<`ArchivistParams`\<`AnyConfigSchema`\<`ArchivistConfig`\>\>, `ArchivistModuleEventData`, `Payload`\>

### Returns

`SimpleXyoRunner`

## Methods

### broadcastTransaction()

```ts
broadcastTransaction(transaction): Promise<Hash>;
```

### Parameters

#### transaction

`SignedHydratedTransactionWithStorageMeta`

### Returns

`Promise`\<`Hash`\>

### Implementation of

[`XyoRunner`](#../interfaces/XyoRunner).[`broadcastTransaction`](../interfaces/XyoRunner.md#broadcasttransaction)

***

### getMempoolArchivist()

```ts
protected getMempoolArchivist(): Promise<ArchivistInstance<ArchivistParams<AnyConfigSchema<ArchivistConfig>>, ArchivistModuleEventData, Payload>>;
```

### Returns

`Promise`\<`ArchivistInstance`\<`ArchivistParams`\<`AnyConfigSchema`\<`ArchivistConfig`\>\>, `ArchivistModuleEventData`, `Payload`\>\>

  ### <a id="SimpleXyoSigner"></a>SimpleXyoSigner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Implements

- [`XyoSigner`](#../interfaces/XyoSigner)

## Constructors

### Constructor

```ts
new SimpleXyoSigner(account): SimpleXyoSigner;
```

### Parameters

#### account

`AccountInstance`

### Returns

`SimpleXyoSigner`

## Properties

### \_account

```ts
protected readonly _account: AccountInstance;
```

## Methods

### address()

```ts
address(): Promisable<Address>;
```

### Returns

`Promisable`\<`Address`\>

### Implementation of

[`XyoSigner`](#../interfaces/XyoSigner).[`address`](../interfaces/XyoSigner.md#address)

***

### createSignedTransaction()

```ts
createSignedTransaction(
   chain, 
   elevatedPayloads, 
   additionalPayloads, 
   nbf, 
   exp, 
   fees, 
from?): Promise<Signed<TransactionBoundWitness>>;
```

### Parameters

#### chain

`ChainId`

#### elevatedPayloads

`AllowedBlockPayload`[]

#### additionalPayloads

`Payload`[]

#### nbf

`number`

#### exp

`number`

#### fees

`TransactionFeesBigInt`

#### from?

`Address`

### Returns

`Promise`\<`Signed`\<`TransactionBoundWitness`\>\>

***

### signTransaction()

```ts
signTransaction(tx): Promise<SignedHydratedTransactionWithHashMeta>;
```

### Parameters

#### tx

\[`UnsignedBoundWitness`\<`TransactionBoundWitness`\>, `Payload`[]\]

### Returns

`Promise`\<`SignedHydratedTransactionWithHashMeta`\>

### Implementation of

[`XyoSigner`](#../interfaces/XyoSigner).[`signTransaction`](../interfaces/XyoSigner.md#signtransaction)

### functions

  ### <a id="allHashesPresent"></a>allHashesPresent

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function allHashesPresent(hashes, payloads): boolean;
```

## Parameters

### hashes

`Hash`[]

### payloads

`WithStorageMeta`\<`Payload`\>[]

## Returns

`boolean`

  ### <a id="balancesStepSummaryFromRange"></a>balancesStepSummaryFromRange

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function balancesStepSummaryFromRange(context, range): Promise<WithStorageMeta<BalancesStepSummary>>;
```

## Parameters

### context

[`BalanceStepSummaryContext`](#../interfaces/BalanceStepSummaryContext)

### range

`XL1BlockRange`

## Returns

`Promise`\<`WithStorageMeta`\<[`BalancesStepSummary`](#../type-aliases/BalancesStepSummary)\>\>

  ### <a id="balancesSummary"></a>balancesSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function balancesSummary(context): Promise<Partial<Record<Address, bigint>>>;
```

## Parameters

### context

[`BalanceStepSummaryContext`](#../interfaces/BalanceStepSummaryContext)

## Returns

`Promise`\<`Partial`\<`Record`\<`Address`, `bigint`\>\>\>

  ### <a id="blockFromBlockNumber"></a>blockFromBlockNumber

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function blockFromBlockNumber(context, blockNumber): Promise<WithStorageMeta<BlockBoundWitness>>;
```

## Parameters

### context

[`ChainContextRead`](#../interfaces/ChainContextRead)

### blockNumber

`XL1BlockNumber`

## Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

  ### <a id="blockPayloadsFromHydratedBlock"></a>blockPayloadsFromHydratedBlock

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function blockPayloadsFromHydratedBlock(block): WithStorageMeta<Payload>[];
```

## Parameters

### block

`HydratedBlock`

## Returns

`WithStorageMeta`\<`Payload`\>[]

  ### <a id="buildTransaction"></a>buildTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function buildTransaction(
   chain, 
   onChainPayloads, 
   offChainPayloads, 
   signer, 
   nbf, 
   exp, 
   from?, 
fees?): Promise<SignedHydratedTransactionWithStorageMeta>;
```

## Parameters

### chain

`ChainId`

### onChainPayloads

`AllowedBlockPayload`[]

### offChainPayloads

`Payload`[]

### signer

`AccountInstance` | `AccountInstance`[]

### nbf

`number`

### exp

`number`

### from?

`Address`

### fees?

`TransactionFeesBigInt` = `defaultTransactionFees`

## Returns

`Promise`\<`SignedHydratedTransactionWithStorageMeta`\>

  ### <a id="buildUnsignedTransaction"></a>buildUnsignedTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function buildUnsignedTransaction(
   chain, 
   onChainPayloads, 
   offChainPayloads, 
   nbf, 
   exp, 
   from, 
fees): Promise<UnsignedHydratedTransaction>;
```

## Parameters

### chain

`ChainId`

### onChainPayloads

`AllowedBlockPayload`[]

### offChainPayloads

`Payload`[]

### nbf

`number`

### exp

`number`

### from

`Address`

### fees

`TransactionFeesBigInt` = `defaultTransactionFees`

## Returns

`Promise`\<`UnsignedHydratedTransaction`\>

  ### <a id="calculateFramesFromRange"></a>calculateFramesFromRange

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function calculateFramesFromRange(range, step): [XL1BlockRange[], XL1BlockRange[]];
```

## Parameters

### range

`XL1BlockRange`

### step

`number`

## Returns

\[`XL1BlockRange`[], `XL1BlockRange`[]\]

  ### <a id="completedStepRewardAddress"></a>completedStepRewardAddress

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function completedStepRewardAddress(__namedParameters): Address;
```

## Parameters

### \_\_namedParameters

## Returns

`Address`

  ### <a id="confirmSubmittedTransaction"></a>confirmSubmittedTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function confirmSubmittedTransaction(
   viewer, 
   txHash, 
options?): Promise<SignedHydratedTransaction>;
```

Confirms a submitted transaction by checking if it has been included in the blockchain.

## Parameters

### viewer

[`XyoViewer`](#../interfaces/XyoViewer)

The viewer

### txHash

`Hash`

The hash of the transaction to confirm

### options?

[`ConfirmSubmittedTransactionOptions`](#../type-aliases/ConfirmSubmittedTransactionOptions)

Options for confirmation

## Returns

`Promise`\<`SignedHydratedTransaction`\>

The confirmed transaction or throws an error if not confirmed

  ### <a id="contextCache"></a>contextCache

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function contextCache<TCacheValue>(
   context, 
   name, 
create?): MapType<string, TCacheValue>;
```

## Type Parameters

### TCacheValue

`TCacheValue`

## Parameters

### context

[`BaseContext`](#../interfaces/BaseContext)\<`unknown`\>

### name

`string`

### create?

() => [`MapType`](#../type-aliases/MapType)\<`string`, `TCacheValue`\>

## Returns

[`MapType`](#../type-aliases/MapType)\<`string`, `TCacheValue`\>

  ### <a id="crackOperation"></a>crackOperation

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function crackOperation(operation): [string, string[]];
```

## Parameters

### operation

`string`

## Returns

\[`string`, `string`[]\]

  ### <a id="crackOperations"></a>crackOperations

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function crackOperations(operations): [string, string[]][];
```

## Parameters

### operations

`string`[]

## Returns

\[`string`, `string`[]\][]

  ### <a id="deepCalculateFramesFromRange"></a>deepCalculateFramesFromRange

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function deepCalculateFramesFromRange(range, startingStep): XL1BlockRange[];
```

## Parameters

### range

`XL1BlockRange`

### startingStep

`number` = `...`

## Returns

`XL1BlockRange`[]

  ### <a id="derivedReceiveAddress"></a>derivedReceiveAddress

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function derivedReceiveAddress(address, scope?): Address;
```

## Parameters

### address

`Address`

### scope?

`string`

## Returns

`Address`

  ### <a id="elevatedPayloads"></a>elevatedPayloads

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function elevatedPayloads(__namedParameters): WithStorageMeta<AllowedBlockPayload>[];
```

## Parameters

### \_\_namedParameters

`SignedHydratedTransactionWithStorageMeta`

## Returns

`WithStorageMeta`\<`AllowedBlockPayload`\>[]

  ### <a id="extractElevatedHashes"></a>extractElevatedHashes

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function extractElevatedHashes(tx): WithStorageMeta<AllowedBlockPayload>[];
```

## Parameters

### tx

`HydratedTransactionWithStorageMeta`

## Returns

`WithStorageMeta`\<`AllowedBlockPayload`\>[]

  ### <a id="extractElevatedHashesFromScript"></a>extractElevatedHashesFromScript

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function extractElevatedHashesFromScript(strings): Hash[];
```

## Parameters

### strings

`string`[]

## Returns

`Hash`[]

  ### <a id="flattenHydratedBlock"></a>flattenHydratedBlock

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function flattenHydratedBlock(hydratedBlock): WithStorageMeta<Payload>[];
```

## Parameters

### hydratedBlock

`HydratedBlock`

## Returns

`WithStorageMeta`\<`Payload`\>[]

  ### <a id="flattenHydratedBlocks"></a>flattenHydratedBlocks

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function flattenHydratedBlocks(hydratedBlocks): WithStorageMeta<Payload>[];
```

## Parameters

### hydratedBlocks

`HydratedBlock`[]

## Returns

`WithStorageMeta`\<`Payload`\>[]

  ### <a id="flattenHydratedTransaction"></a>flattenHydratedTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function flattenHydratedTransaction(hydratedTransaction): Payload[];
```

## Parameters

### hydratedTransaction

`SignedHydratedTransaction`

## Returns

`Payload`[]

  ### <a id="flattenHydratedTransactions"></a>flattenHydratedTransactions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function flattenHydratedTransactions(hydratedTransactions): Payload[];
```

## Parameters

### hydratedTransactions

`SignedHydratedTransaction`[]

## Returns

`Payload`[]

  ### <a id="generateXyoBaseWalletFromPhrase"></a>generateXyoBaseWalletFromPhrase

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function generateXyoBaseWalletFromPhrase(walletPhrase): Promise<WalletInstance>;
```

Initializes a wallet to the default XYO path from a mnemonic phrase

## Parameters

### walletPhrase

`string`

The mnemonic phrase for the wallet

## Returns

`Promise`\<`WalletInstance`\>

A wallet initialized to the default XYO path using the provided phrase

  ### <a id="getDefaultConfig"></a>getDefaultConfig

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function getDefaultConfig(): object;
```

## Returns

`object`

### api

```ts
api: object;
```

### api.host

```ts
host: string;
```

### api.initRewardsCache

```ts
initRewardsCache: boolean;
```

### api.mnemonic?

```ts
optional mnemonic: string;
```

### api.port

```ts
port: number;
```

### app

```ts
app: object;
```

### app.port

```ts
port: number;
```

### bridge

```ts
bridge: object;
```

### bridge.host

```ts
host: string;
```

### bridge.mnemonic?

```ts
optional mnemonic: string;
```

### bridge.port

```ts
port: number;
```

### chain

```ts
chain: object;
```

### chain.id?

```ts
optional id: string;
```

### evm

```ts
evm: object;
```

### evm.chainId?

```ts
optional chainId: string;
```

### evm.infura?

```ts
optional infura: object;
```

### evm.infura.projectId?

```ts
optional projectId: string;
```

### evm.infura.projectSecret?

```ts
optional projectSecret: string;
```

### evm.jsonRpc?

```ts
optional jsonRpc: object;
```

### evm.jsonRpc.url?

```ts
optional url: string;
```

### mempool

```ts
mempool: object;
```

### mempool.enabled

```ts
enabled: boolean;
```

### mempool.host

```ts
host: string;
```

### mempool.mnemonic?

```ts
optional mnemonic: string;
```

### mempool.port

```ts
port: number;
```

### producer

```ts
producer: object;
```

### producer.allowlist?

```ts
optional allowlist: Address[];
```

### producer.disableIntentRedeclaration?

```ts
optional disableIntentRedeclaration: boolean;
```

### producer.healthCheckPort?

```ts
optional healthCheckPort: number;
```

### producer.heartbeatInterval

```ts
heartbeatInterval: number;
```

### producer.minStake

```ts
minStake: number;
```

### producer.mnemonic?

```ts
optional mnemonic: string;
```

### producer.port

```ts
port: number;
```

### producer.rewardAddress?

```ts
optional rewardAddress: string;
```

### rewardRedemptionApi

```ts
rewardRedemptionApi: object;
```

### rewardRedemptionApi.chainRpcApiUrl

```ts
chainRpcApiUrl: string;
```

### rewardRedemptionApi.host

```ts
host: string;
```

### rewardRedemptionApi.mnemonic?

```ts
optional mnemonic: string;
```

### rewardRedemptionApi.port

```ts
port: number;
```

### storage

```ts
storage: object;
```

### storage.mongo?

```ts
optional mongo: object;
```

### storage.mongo.connectionString?

```ts
optional connectionString: string;
```

### storage.mongo.database?

```ts
optional database: string;
```

### storage.mongo.domain?

```ts
optional domain: string;
```

### storage.mongo.password?

```ts
optional password: string;
```

### storage.mongo.username?

```ts
optional username: string;
```

### storage.root?

```ts
optional root: string;
```

### telemetry

```ts
telemetry: object;
```

### telemetry.otel?

```ts
optional otel: object;
```

### telemetry.otel.otlpEndpoint?

```ts
optional otlpEndpoint: string;
```

### validation

```ts
validation: object;
```

### validation.allowedRewardRedeemers?

```ts
optional allowedRewardRedeemers: Address[];
```

### validation.allowedRewardEscrowAccountSigners?

```ts
optional allowedRewardEscrowAccountSigners: Address[];
```

### logLevel

```ts
logLevel: "error" | "warn" | "info" | "log" | "debug" | "trace";
```

### silent

```ts
silent: boolean;
```

  ### <a id="getUrl"></a>getUrl

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function getUrl(host, port): string;
```

## Parameters

### host

`string`

### port

`number`

## Returns

`string`

  ### <a id="hasMongoConfig"></a>hasMongoConfig

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function hasMongoConfig(config?): config is Required<{ connectionString?: string; database?: string; domain?: string; password?: string; username?: string }>;
```

Checks if the provided MongoDB configuration contains all necessary fields
for establishing a connection.

## Parameters

### config?

MongoDB configuration object

### connectionString?

`string` = `...`

### database?

`string` = `...`

### domain?

`string` = `...`

### password?

`string` = `...`

### username?

`string` = `...`

## Returns

`config is Required<{ connectionString?: string; database?: string; domain?: string; password?: string; username?: string }>`

True if the configuration contains all necessary fields for
establishing a connection

  ### <a id="hashFromBlockNumber"></a>hashFromBlockNumber

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function hashFromBlockNumber(context, blockNumber): Promise<Hash>;
```

## Parameters

### context

[`ChainContextRead`](#../interfaces/ChainContextRead)

### blockNumber

`XL1BlockNumber`

## Returns

`Promise`\<`Hash`\>

  ### <a id="hydrateBlock"></a>hydrateBlock

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function hydrateBlock(
   __namedParameters, 
   hash, 
   maxDepth, 
minDepth): Promise<HydratedBlock>;
```

## Parameters

### \_\_namedParameters

[`ChainStoreRead`](#../interfaces/ChainStoreRead)

### hash

`Hash`

### maxDepth

`number` = `1`

### minDepth

`number` = `maxDepth`

## Returns

`Promise`\<`HydratedBlock`\>

  ### <a id="hydrateElevatedTransaction"></a>hydrateElevatedTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function hydrateElevatedTransaction(context, hash): Promise<SignedHydratedTransaction>;
```

## Parameters

### context

[`ChainStoreRead`](#../interfaces/ChainStoreRead)

### hash

`Hash`

## Returns

`Promise`\<`SignedHydratedTransaction`\>

  ### <a id="hydrateTransaction"></a>hydrateTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function hydrateTransaction(__namedParameters, hash): Promise<SignedHydratedTransaction>;
```

## Parameters

### \_\_namedParameters

[`ChainStoreRead`](#../interfaces/ChainStoreRead)

### hash

`Hash`

## Returns

`Promise`\<`SignedHydratedTransaction`\>

  ### <a id="isBalancesStepSummaryWithStorageMeta"></a>isBalancesStepSummaryWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isBalancesStepSummaryWithStorageMeta(value): value is WithStorageMeta<BalancesStepSummary>;
```

Identity function for determining if an object is an BalancesStepSummary with Storage Meta

## Parameters

### value

`unknown`

## Returns

`value is WithStorageMeta<BalancesStepSummary>`

  ### <a id="isBlockValidationError"></a>isBlockValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isBlockValidationError(error): error is BlockValidationError;
```

## Parameters

### error

`unknown`

## Returns

`error is BlockValidationError`

  ### <a id="isChainIndexingServiceState"></a>isChainIndexingServiceState

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isChainIndexingServiceState<T>(payload?): payload is ChainIndexingServiceState<T>;
```

Identity functions for determining if an object is an ChainIndexingServiceState

## Type Parameters

### T

`T` *extends* `JsonValue` = `JsonValue`

## Parameters

### payload?

`unknown`

## Returns

`payload is ChainIndexingServiceState<T>`

  ### <a id="isChainIndexingServiceStateWithStorageMeta"></a>isChainIndexingServiceStateWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isChainIndexingServiceStateWithStorageMeta<T>(value): value is WithStorageMeta<ChainIndexingServiceState<T>>;
```

## Type Parameters

### T

`T` *extends* `JsonValue` = `JsonValue`

## Parameters

### value

`unknown`

## Returns

`value is WithStorageMeta<ChainIndexingServiceState<T>>`

  ### <a id="isHydratedBlockStateValidationError"></a>isHydratedBlockStateValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isHydratedBlockStateValidationError(error): error is HydratedBlockStateValidationError;
```

## Parameters

### error

`unknown`

## Returns

`error is HydratedBlockStateValidationError`

  ### <a id="isHydratedBlockValidationError"></a>isHydratedBlockValidationError

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isHydratedBlockValidationError(error): error is HydratedBlockValidationError;
```

## Parameters

### error

`unknown`

## Returns

`error is HydratedBlockValidationError`

  ### <a id="isLocalhost"></a>isLocalhost

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isLocalhost(hostname): boolean;
```

## Parameters

### hostname

`string`

## Returns

`boolean`

  ### <a id="isNegativeBigInt"></a>isNegativeBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isNegativeBigInt(value): value is NegativeBigInt;
```

## Parameters

### value

`unknown`

## Returns

`value is NegativeBigInt`

  ### <a id="isPositiveBigInt"></a>isPositiveBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isPositiveBigInt(value): value is PositiveBigInt;
```

## Parameters

### value

`unknown`

## Returns

`value is PositiveBigInt`

  ### <a id="isReadArchivist"></a>isReadArchivist

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isReadArchivist(value): value is ReadArchivist<Payload, Hash, Sequence>;
```

## Parameters

### value

`unknown`

## Returns

`value is ReadArchivist<Payload, Hash, Sequence>`

  ### <a id="isReadWriteArchivist"></a>isReadWriteArchivist

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isReadWriteArchivist(value): value is ReadWriteArchivist<Payload, Payload, Payload, Hash>;
```

## Parameters

### value

`unknown`

## Returns

`value is ReadWriteArchivist<Payload, Payload, Payload, Hash>`

  ### <a id="isTransfersStepSummaryWithStorageMeta"></a>isTransfersStepSummaryWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isTransfersStepSummaryWithStorageMeta(value): value is WithStorageMeta<TransfersStepSummary>;
```

Identity function for determining if an object is an TransfersStepSummary with Storage Meta

## Parameters

### value

`unknown`

## Returns

`value is WithStorageMeta<TransfersStepSummary>`

  ### <a id="isUsageMeta"></a>isUsageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isUsageMeta(v): v is { id?: string; deprecated?: boolean; choices?: readonly (string | number | true | undefined)[]; default?: unknown; description: string; group?: string; hidden?: boolean; title: string; type: "string" | "number" | "boolean" | "array" | "count"; [key: string]: unknown };
```

## Parameters

### v

`unknown`

## Returns

v is \{ id?: string; deprecated?: boolean; choices?: readonly (string \| number \| true \| undefined)\[\]; default?: unknown; description: string; group?: string; hidden?: boolean; title: string; type: "string" \| "number" \| "boolean" \| "array" \| "count"; \[key: string\]: unknown \}

  ### <a id="isWriteArchivist"></a>isWriteArchivist

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function isWriteArchivist(value): value is WriteArchivist<Payload, Payload, Payload, Hash>;
```

## Parameters

### value

`unknown`

## Returns

`value is WriteArchivist<Payload, Payload, Payload, Hash>`

  ### <a id="netBalancesForPayloads"></a>netBalancesForPayloads

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function netBalancesForPayloads(payloads): Record<Address, bigint>;
```

## Parameters

### payloads

`Payload`[]

## Returns

`Record`\<`Address`, `bigint`\>

  ### <a id="netTransfersForPayloads"></a>netTransfersForPayloads

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function netTransfersForPayloads(payloads): Record<Address, Record<Address, bigint>>;
```

## Parameters

### payloads

`Payload`[]

## Returns

`Record`\<`Address`, `Record`\<`Address`, `bigint`\>\>

  ### <a id="parseSignedBigInt"></a>parseSignedBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function parseSignedBigInt(value): bigint;
```

## Parameters

### value

[`SignedBigInt`](#../type-aliases/SignedBigInt)

## Returns

`bigint`

  ### <a id="readPayloadMapFromStore"></a>readPayloadMapFromStore

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function readPayloadMapFromStore<T>(store): PayloadMapRead<T>;
```

## Type Parameters

### T

`T` *extends* `Payload`

## Parameters

### store

`ReadArchivist`\<`T`, `Hash`, `Sequence`\> | [`PayloadMapRead`](#../type-aliases/PayloadMapRead)\<`T`\>

## Returns

[`PayloadMapRead`](#../type-aliases/PayloadMapRead)\<`T`\>

  ### <a id="signEIP712Message"></a>signEIP712Message

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function signEIP712Message(signer, data): Promise<EIP712SignaturePayload>;
```

## Parameters

### signer

`Signer`

### data

[`EIP712DataPayload`](#../type-aliases/EIP712DataPayload)

## Returns

`Promise`\<[`EIP712SignaturePayload`](#../type-aliases/EIP712SignaturePayload)\>

  ### <a id="signTransaction"></a>signTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function signTransaction(tx, account): Promise<Unsigned<TransactionBoundWitness>>;
```

Signs an unsigned transaction with the provided account.

## Parameters

### tx

`Unsigned`\<`TransactionBoundWitness`\>

The transaction to sign

### account

`AccountInstance`

The account to sign the transaction with

## Returns

`Promise`\<`Unsigned`\<`TransactionBoundWitness`\>\>

The signed transaction

  ### <a id="stepBlockRange"></a>stepBlockRange

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function stepBlockRange(__namedParameters): XL1BlockRange;
```

## Parameters

### \_\_namedParameters

## Returns

`XL1BlockRange`

  ### <a id="stepTransferIndex"></a>stepTransferIndex

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function stepTransferIndex(block, step): number[];
```

## Parameters

### block

`number`

### step

`number`

## Returns

`number`[]

  ### <a id="timeBudget"></a>timeBudget

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function timeBudget<TResult>(
   name, 
   logger, 
   func, 
budget): Promise<TResult>;
```

## Type Parameters

### TResult

`TResult`

## Parameters

### name

`string`

### logger

`Logger` | `undefined`

### func

() => `Promise`\<`TResult`\>

### budget

`number`

## Returns

`Promise`\<`TResult`\>

  ### <a id="toPositiveBigInt"></a>toPositiveBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function toPositiveBigInt(value): PositiveBigInt;
```

## Parameters

### value

`unknown`

## Returns

[`PositiveBigInt`](#../interfaces/PositiveBigInt)

  ### <a id="toSignedBigInt"></a>toSignedBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function toSignedBigInt(value): SignedBigInt;
```

## Parameters

### value

`bigint`

## Returns

[`SignedBigInt`](#../type-aliases/SignedBigInt)

  ### <a id="toStepIdentityString"></a>toStepIdentityString

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function toStepIdentityString(__namedParameters): StepIdentityString;
```

## Parameters

### \_\_namedParameters

## Returns

`StepIdentityString`

  ### <a id="transactionBlockByteCount"></a>transactionBlockByteCount

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionBlockByteCount(__namedParameters): number;
```

The number of bytes that a transaction and its payloads will take up in a block

## Parameters

### \_\_namedParameters

`SignedHydratedTransaction`

## Returns

`number`

  ### <a id="transactionBytesRequiredGas"></a>transactionBytesRequiredGas

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionBytesRequiredGas(__namedParameters): AttoXL1;
```

The required gas for the byte storage on the block chain for a transaction

## Parameters

### \_\_namedParameters

`SignedHydratedTransactionWithStorageMeta`

## Returns

`AttoXL1`

  ### <a id="transactionElevatedPayloadHashes"></a>transactionElevatedPayloadHashes

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionElevatedPayloadHashes(transaction): Hash[];
```

## Parameters

### transaction

`TransactionBoundWitness`

## Returns

`Hash`[]

  ### <a id="transactionElevatedPayloads"></a>transactionElevatedPayloads

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionElevatedPayloads(__namedParameters): WithHashMeta<Payload>[];
```

## Parameters

### \_\_namedParameters

`SignedHydratedTransactionWithStorageMeta`

## Returns

`WithHashMeta`\<`Payload`\>[]

  ### <a id="transactionRequiredGas"></a>transactionRequiredGas

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionRequiredGas(hydratedTransaction): AttoXL1;
```

## Parameters

### hydratedTransaction

`SignedHydratedTransactionWithStorageMeta`

## Returns

`AttoXL1`

  ### <a id="transactionsFromHydratedBlock"></a>transactionsFromHydratedBlock

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transactionsFromHydratedBlock(block): WithStorageMeta<TransactionBoundWitness>[];
```

## Parameters

### block

`HydratedBlock`

## Returns

`WithStorageMeta`\<`TransactionBoundWitness`\>[]

  ### <a id="transfersStepSummaryFromRange"></a>transfersStepSummaryFromRange

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transfersStepSummaryFromRange(context, range): Promise<WithStorageMeta<TransfersStepSummary>>;
```

## Parameters

### context

[`TransfersStepSummaryContext`](#../interfaces/TransfersStepSummaryContext)

### range

`XL1BlockRange`

## Returns

`Promise`\<`WithStorageMeta`\<[`TransfersStepSummary`](#../type-aliases/TransfersStepSummary)\>\>

  ### <a id="transfersSummary"></a>transfersSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transfersSummary(transferContext): Promise<Partial<Record<Address, Partial<Record<Address, bigint>>>>>;
```

## Parameters

### transferContext

[`TransfersStepSummaryContext`](#../interfaces/TransfersStepSummaryContext)

## Returns

`Promise`\<`Partial`\<`Record`\<`Address`, `Partial`\<`Record`\<`Address`, `bigint`\>\>\>\>\>

  ### <a id="transfersSummaryKey"></a>transfersSummaryKey

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function transfersSummaryKey(frameHeadHash, frameSize): string;
```

## Parameters

### frameHeadHash

`Hash`

### frameSize

`number`

## Returns

`string`

  ### <a id="tryExtractElevatedHashes"></a>tryExtractElevatedHashes

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function tryExtractElevatedHashes(tx): WithStorageMeta<AllowedBlockPayload>[];
```

## Parameters

### tx

`HydratedTransactionWithStorageMeta`

## Returns

`WithStorageMeta`\<`AllowedBlockPayload`\>[]

  ### <a id="tryExtractElevatedHashesFromScript"></a>tryExtractElevatedHashesFromScript

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function tryExtractElevatedHashesFromScript(strings): Hash[];
```

## Parameters

### strings

`string`[]

## Returns

`Hash`[]

  ### <a id="tryHydrateBlock"></a>tryHydrateBlock

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function tryHydrateBlock(
   archivist, 
   hash, 
maxDepth): Promise<HydratedBlock | undefined>;
```

## Parameters

### archivist

`ReadArchivist`

### hash

`Hash`

### maxDepth

`number` = `1`

## Returns

`Promise`\<`HydratedBlock` \| `undefined`\>

  ### <a id="tryHydrateElevatedTransaction"></a>tryHydrateElevatedTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function tryHydrateElevatedTransaction(__namedParameters, hash): Promise<SignedHydratedTransactionWithStorageMeta | undefined>;
```

## Parameters

### \_\_namedParameters

[`ChainStoreRead`](#../interfaces/ChainStoreRead)

### hash

`Hash`

## Returns

`Promise`\<`SignedHydratedTransactionWithStorageMeta` \| `undefined`\>

  ### <a id="tryHydrateTransaction"></a>tryHydrateTransaction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function tryHydrateTransaction(__namedParameters, hash): Promise<SignedHydratedTransactionWithStorageMeta | undefined>;
```

## Parameters

### \_\_namedParameters

[`ChainStoreRead`](#../interfaces/ChainStoreRead)

### hash

`Hash`

## Returns

`Promise`\<`SignedHydratedTransactionWithStorageMeta` \| `undefined`\>

  ### <a id="verifyEIP712Message"></a>verifyEIP712Message

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function verifyEIP712Message(data, sig): Promise<boolean>;
```

## Parameters

### data

[`EIP712DataPayload`](#../type-aliases/EIP712DataPayload)

### sig

[`EIP712SignaturePayload`](#../type-aliases/EIP712SignaturePayload)

## Returns

`Promise`\<`boolean`\>

  ### <a id="withContextCacheResponse"></a>withContextCacheResponse

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function withContextCacheResponse<T>(
   context, 
   name, 
   key, 
   func, 
__namedParameters): Promise<T>;
```

## Type Parameters

### T

`T` *extends* 
  \| `string`
  \| `number`
  \| `bigint`
  \| \{
\}

## Parameters

### context

[`BaseContext`](#../interfaces/BaseContext)

### name

`string`

### key

`string`

### func

() => `Promise`\<`T` *extends* 
  \| `string`
  \| `number`
  \| `bigint`
  \| \{
\} ? `T`\<`T`\> : `never`\>

### \_\_namedParameters

[`withContextCacheResponseOptions`](#../interfaces/withContextCacheResponseOptions) = `{}`

## Returns

`Promise`\<`T`\>

  ### <a id="xl1BlockNumberToEthBlockNumber"></a>xl1BlockNumberToEthBlockNumber

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
function xl1BlockNumberToEthBlockNumber(context, xl1BlockNumber): Promise<number>;
```

## Parameters

### context

[`ChainContextRead`](#../interfaces/ChainContextRead)

### xl1BlockNumber

`XL1BlockNumber`

## Returns

`Promise`\<`number`\>

### interfaces

  ### <a id="AccountBalanceService"></a>AccountBalanceService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AccountBalancesViewerMethods`](#AccountBalancesViewerMethods).[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods)

## Methods

### accountBalances()

```ts
accountBalances(address, headOrRange?): Promisable<Partial<Record<Address, AttoXL1>>>;
```

### Parameters

#### address

`Address`[]

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `AttoXL1`\>\>\>

### Inherited from

[`AccountBalancesViewerMethods`](#AccountBalancesViewerMethods).[`accountBalances`](AccountBalancesViewerMethods.md#accountbalances)

***

### accountBalancesHistories()

```ts
accountBalancesHistories(address, headOrRange?): Promisable<Partial<Record<Address, AccountBalanceHistoryItem[]>>>;
```

### Parameters

#### address

`Address`[]

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, [`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>\>\>

### Inherited from

[`AccountBalancesViewerMethods`](#AccountBalancesViewerMethods).[`accountBalancesHistories`](AccountBalancesViewerMethods.md#accountbalanceshistories)

***

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalance`](AccountBalanceViewerMethods.md#accountbalance)

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promisable<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalanceHistory`](AccountBalanceViewerMethods.md#accountbalancehistory)

  ### <a id="AccountBalanceViewer"></a>AccountBalanceViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods)

## Methods

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalance`](AccountBalanceViewerMethods.md#accountbalance)

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promisable<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalanceHistory`](AccountBalanceViewerMethods.md#accountbalancehistory)

  ### <a id="AccountBalanceViewerMethods"></a>AccountBalanceViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)
- [`AccountBalanceService`](#AccountBalanceService)
- [`AccountBalanceViewer`](#AccountBalanceViewer)

## Methods

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`AttoXL1`\>

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promisable<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

  ### <a id="AccountBalancesViewerMethods"></a>AccountBalancesViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AccountBalanceService`](#AccountBalanceService)

## Methods

### accountBalances()

```ts
accountBalances(address, headOrRange?): Promisable<Partial<Record<Address, AttoXL1>>>;
```

### Parameters

#### address

`Address`[]

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `AttoXL1`\>\>\>

***

### accountBalancesHistories()

```ts
accountBalancesHistories(address, headOrRange?): Promisable<Partial<Record<Address, AccountBalanceHistoryItem[]>>>;
```

### Parameters

#### address

`Address`[]

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, [`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>\>\>

  ### <a id="AccountTransfersProvider"></a>AccountTransfersProvider

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AccountTransfersService`](#AccountTransfersService)

## Methods

### transfer()

```ts
transfer(head, account): Promisable<AttoXL1>;
```

### Parameters

#### head

`Hash`

#### account

`Address`

### Returns

`Promisable`\<`AttoXL1`\>

***

### transfers()

```ts
transfers(head, accounts): Promisable<Partial<Record<Address, AttoXL1>>>;
```

### Parameters

#### head

`Hash`

#### accounts

`Address`[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `AttoXL1`\>\>\>

  ### <a id="AccountTransfersService"></a>AccountTransfersService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AccountTransfersProvider`](#AccountTransfersProvider)

## Methods

### transfer()

```ts
transfer(head, account): Promisable<AttoXL1>;
```

### Parameters

#### head

`Hash`

#### account

`Address`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`AccountTransfersProvider`](#AccountTransfersProvider).[`transfer`](AccountTransfersProvider.md#transfer)

***

### transfers()

```ts
transfers(head, accounts): Promisable<Partial<Record<Address, AttoXL1>>>;
```

### Parameters

#### head

`Hash`

#### accounts

`Address`[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `AttoXL1`\>\>\>

### Inherited from

[`AccountTransfersProvider`](#AccountTransfersProvider).[`transfers`](AccountTransfersProvider.md#transfers)

  ### <a id="AddressFields"></a>AddressFields

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### addresses

```ts
addresses: [Address, Address];
```

  ### <a id="AddressInstance"></a>AddressInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ValidatableInstance`](#ValidatableInstance)

## Extended by

- [`AddressStateInstance`](#AddressStateInstance)

## Properties

### address

```ts
address: Address;
```

## Methods

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`ValidatableInstance`](#ValidatableInstance).[`validate`](ValidatableInstance.md#validate)

  ### <a id="AddressStateInstance"></a>AddressStateInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AddressInstance`](#AddressInstance).[`BlockWindowStateInstance`](#BlockWindowStateInstance)

## Properties

### address

```ts
address: Address;
```

### Inherited from

[`AddressInstance`](#AddressInstance).[`address`](AddressInstance.md#address)

***

### blockWindow

```ts
blockWindow: BlockWindowInstance;
```

### Inherited from

[`BlockWindowStateInstance`](#BlockWindowStateInstance).[`blockWindow`](BlockWindowStateInstance.md#blockwindow)

## Methods

### balance()

```ts
balance(): Promisable<[XL1AmountInstance, BlockWindowInstance]>;
```

### Returns

`Promisable`\<\[`XL1AmountInstance`, [`BlockWindowInstance`](#BlockWindowInstance)\]\>

***

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`AddressInstance`](#AddressInstance).[`validate`](AddressInstance.md#validate)

  ### <a id="AsynchronousMap"></a>AsynchronousMap

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AsynchronousMapRead`](#AsynchronousMapRead)\<`K`, `V`\>.[`AsynchronousMapWrite`](#AsynchronousMapWrite)\<`K`, `V`\>

## Type Parameters

### K

`K`

### V

`V`

## Methods

### get()

```ts
get(id): Promisable<V | undefined>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`V` \| `undefined`\>

### Inherited from

[`AsynchronousMapRead`](#AsynchronousMapRead).[`get`](AsynchronousMapRead.md#get)

***

### getMany()

```ts
getMany(id): Promisable<V[]>;
```

### Parameters

#### id

`K`[]

### Returns

`Promisable`\<`V`[]\>

### Inherited from

[`AsynchronousMapRead`](#AsynchronousMapRead).[`getMany`](AsynchronousMapRead.md#getmany)

***

### has()

```ts
has(id): Promisable<boolean>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`boolean`\>

### Inherited from

[`AsynchronousMapRead`](#AsynchronousMapRead).[`has`](AsynchronousMapRead.md#has)

***

### clear()

```ts
clear(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AsynchronousMapWrite`](#AsynchronousMapWrite).[`clear`](AsynchronousMapWrite.md#clear)

***

### delete()

```ts
delete(id): Promisable<boolean>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`boolean`\>

### Inherited from

[`AsynchronousMapWrite`](#AsynchronousMapWrite).[`delete`](AsynchronousMapWrite.md#delete)

***

### set()

```ts
set(id, data): Promisable<void>;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AsynchronousMapWrite`](#AsynchronousMapWrite).[`set`](AsynchronousMapWrite.md#set)

***

### setMany()

```ts
setMany(entries): Promisable<void>;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`Promisable`\<`void`\>

### Inherited from

[`AsynchronousMapWrite`](#AsynchronousMapWrite).[`setMany`](AsynchronousMapWrite.md#setmany)

  ### <a id="AsynchronousMapRead"></a>AsynchronousMapRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AsynchronousMap`](#AsynchronousMap)

## Type Parameters

### K

`K`

### V

`V`

## Methods

### get()

```ts
get(id): Promisable<V | undefined>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`V` \| `undefined`\>

***

### getMany()

```ts
getMany(id): Promisable<V[]>;
```

### Parameters

#### id

`K`[]

### Returns

`Promisable`\<`V`[]\>

***

### has()

```ts
has(id): Promisable<boolean>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`boolean`\>

  ### <a id="AsynchronousMapWrite"></a>AsynchronousMapWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AsynchronousMap`](#AsynchronousMap)

## Type Parameters

### K

`K`

### V

`V`

## Methods

### clear()

```ts
clear(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

***

### delete()

```ts
delete(id): Promisable<boolean>;
```

### Parameters

#### id

`K`

### Returns

`Promisable`\<`boolean`\>

***

### set()

```ts
set(id, data): Promisable<void>;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`Promisable`\<`void`\>

***

### setMany()

```ts
setMany(entries): Promisable<void>;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`Promisable`\<`void`\>

  ### <a id="BalanceStepSummaryContext"></a>BalanceStepSummaryContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContext`](#../type-aliases/ChainSummaryContext)\<[`BalancesStepSummary`](#../type-aliases/BalancesStepSummary)\>

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

```ts
ChainSummaryContext.caches
```

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

```ts
ChainSummaryContext.logger
```

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

```ts
ChainSummaryContext.store
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

```ts
ChainSummaryContext.chainId
```

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

```ts
ChainSummaryContext.stepSemaphores
```

***

### summaryMap

```ts
summaryMap: MapTypeRead<string, BalancesStepSummary> & MapTypeWrite<string, BalancesStepSummary>;
```

### Inherited from

```ts
ChainSummaryContext.summaryMap
```

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

```ts
ChainSummaryContext.windowSize
```

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

```ts
ChainSummaryContext.head
```

  ### <a id="BalanceStepSummaryContextRead"></a>BalanceStepSummaryContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContextRead`](#ChainSummaryContextRead)\<[`BalancesStepSummary`](#../type-aliases/BalancesStepSummary)\>

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`caches`](ChainSummaryContextRead.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`logger`](ChainSummaryContextRead.md#logger)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`store`](ChainSummaryContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`chainId`](ChainSummaryContextRead.md#chainid)

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`stepSemaphores`](ChainSummaryContextRead.md#stepsemaphores)

***

### summaryMap

```ts
summaryMap: MapTypeRead;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`summaryMap`](ChainSummaryContextRead.md#summarymap)

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`windowSize`](ChainSummaryContextRead.md#windowsize)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`head`](ChainSummaryContextRead.md#head)

  ### <a id="BaseChainService"></a>BaseChainService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainHeadService`](#ChainHeadService)
- [`ChainService`](#ChainService)

## Properties

### chainId

```ts
chainId: ChainId;
```

  ### <a id="BaseContext"></a>BaseContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainContextWrite`](#ChainContextWrite)
- [`StakedChainContextWrite`](#StakedChainContextWrite)
- [`ChainContextRead`](#ChainContextRead)
- [`StakedChainContextRead`](#StakedChainContextRead)
- [`ChainSummaryContextBase`](#ChainSummaryContextBase)

## Type Parameters

### TCacheValue

`TCacheValue` = `string` \| `object` \| `number` \| `bigint`

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, TCacheValue>>;
```

***

### logger?

```ts
optional logger: Logger;
```

  ### <a id="BlockProducerService"></a>BlockProducerService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `Addressable`.[`NextBlockProducer`](#../type-aliases/NextBlockProducer)

  ### <a id="BlockRewardService"></a>BlockRewardService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`BlockRewardServiceV2`](#BlockRewardServiceV2)

## Methods

### getRewardForBlock()

```ts
getRewardForBlock(block): Promisable<bigint>;
```

### Parameters

#### block

`bigint`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="BlockRewardServiceV2"></a>BlockRewardServiceV2

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BlockRewardService`](#BlockRewardService)

## Methods

### getRewardForBlock()

```ts
getRewardForBlock(block): Promisable<bigint>;
```

### Parameters

#### block

`bigint`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`BlockRewardService`](#BlockRewardService).[`getRewardForBlock`](BlockRewardService.md#getrewardforblock)

***

### getRewardForStepPool()

```ts
getRewardForStepPool(block): Promisable<bigint>;
```

### Parameters

#### block

`bigint`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="BlockViewer"></a>BlockViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BlockViewierMethods`](#BlockViewierMethods)

## Methods

### blockByHash()

```ts
blockByHash(hash): Promisable<HydratedBlock | null>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blockByHash`](BlockViewierMethods.md#blockbyhash)

***

### blockByNumber()

```ts
blockByNumber(block): Promisable<HydratedBlock | null>;
```

### Parameters

#### block

`XL1BlockNumber`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blockByNumber`](BlockViewierMethods.md#blockbynumber)

***

### blocksByHash()

```ts
blocksByHash(hash, limit?): Promisable<HydratedBlock[]>;
```

### Parameters

#### hash

`Hash`

#### limit?

`number`

### Returns

`Promisable`\<`HydratedBlock`[]\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blocksByHash`](BlockViewierMethods.md#blocksbyhash)

***

### currentBlock()

```ts
currentBlock(): Promisable<HydratedBlock>;
```

### Returns

`Promisable`\<`HydratedBlock`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlock`](BlockViewierMethods.md#currentblock)

***

### currentBlockHash()

```ts
currentBlockHash(): Promisable<Hash>;
```

### Returns

`Promisable`\<`Hash`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlockHash`](BlockViewierMethods.md#currentblockhash)

***

### currentBlockNumber()

```ts
currentBlockNumber(): Promisable<XL1BlockNumber>;
```

### Returns

`Promisable`\<`XL1BlockNumber`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlockNumber`](BlockViewierMethods.md#currentblocknumber)

  ### <a id="BlockViewierMethods"></a>BlockViewierMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)
- [`BlockViewer`](#BlockViewer)

## Methods

### blockByHash()

```ts
blockByHash(hash): Promisable<HydratedBlock | null>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

***

### blockByNumber()

```ts
blockByNumber(block): Promisable<HydratedBlock | null>;
```

### Parameters

#### block

`XL1BlockNumber`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

***

### blocksByHash()

```ts
blocksByHash(hash, limit?): Promisable<HydratedBlock[]>;
```

### Parameters

#### hash

`Hash`

#### limit?

`number`

### Returns

`Promisable`\<`HydratedBlock`[]\>

***

### currentBlock()

```ts
currentBlock(): Promisable<HydratedBlock>;
```

### Returns

`Promisable`\<`HydratedBlock`\>

***

### currentBlockHash()

```ts
currentBlockHash(): Promisable<Hash>;
```

### Returns

`Promisable`\<`Hash`\>

***

### currentBlockNumber()

```ts
currentBlockNumber(): Promisable<XL1BlockNumber>;
```

### Returns

`Promisable`\<`XL1BlockNumber`\>

  ### <a id="BlockWindowInstance"></a>BlockWindowInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### count

```ts
count: number;
```

***

### numberRange

```ts
numberRange: [number, number];
```

***

### range

```ts
range: [Hash, Hash];
```

  ### <a id="BlockWindowStateInstance"></a>BlockWindowStateInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AddressStateInstance`](#AddressStateInstance)

## Properties

### blockWindow

```ts
blockWindow: BlockWindowInstance;
```

  ### <a id="BoundWitnessInstance"></a>BoundWitnessInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`PayloadInstance`](#PayloadInstance)\<`TBoundWitness`\>

## Type Parameters

### TBoundWitness

`TBoundWitness` *extends* `BoundWitness` = `BoundWitness`

### TPayload

`TPayload` *extends* `Payload` = `Payload`

## Properties

### payloadCount

```ts
payloadCount: number;
```

***

### payloads

```ts
payloads: PayloadInstance<TPayload>[];
```

***

### data

```ts
data: TBoundWitness;
```

### Inherited from

[`PayloadInstance`](#PayloadInstance).[`data`](PayloadInstance.md#data)

## Methods

### payload()

```ts
payload(index): PayloadInstance<TPayload> | undefined;
```

### Parameters

#### index

`number`

### Returns

[`PayloadInstance`](#PayloadInstance)\<`TPayload`\> \| `undefined`

***

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`PayloadInstance`](#PayloadInstance).[`validate`](PayloadInstance.md#validate)

  ### <a id="Caveats"></a>Caveats

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Modeled after EIP-2255
See - https://eips.ethereum.org/EIPS/eip-2255#specification

## Properties

### type

```ts
type: CaveatTypes;
```

Type of caveat

***

### value

```ts
value: JsonValue;
```

Value for the caveat (i.e. chain id, subset of accounts, expiration, max request per minute, etc.)

  ### <a id="ChainBlockNumberIteratorService"></a>ChainBlockNumberIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIteratorService`](#ChainIteratorService)\<`number`\>

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`chainId`](ChainIteratorService.md#chainid)

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`head`](ChainIteratorService.md#head)

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`number`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`previous`](ChainIteratorService.md#previous)

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`updateHead`](ChainIteratorService.md#updatehead)

  ### <a id="ChainContextRead"></a>ChainContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseContext`](#BaseContext).[`ChainIdentity`](#ChainIdentity).[`ChainStateContextRead`](#ChainStateContextRead).[`ChainStoreContextRead`](#ChainStoreContextRead)

## Extended by

- [`StakedChainContextRead`](#StakedChainContextRead)
- [`ChainSummaryContextRead`](#ChainSummaryContextRead)
- [`ChainSummaryContextWrite`](#ChainSummaryContextWrite)

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`BaseContext`](#BaseContext).[`caches`](BaseContext.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`BaseContext`](#BaseContext).[`logger`](BaseContext.md#logger)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainStoreContextRead`](#ChainStoreContextRead).[`store`](ChainStoreContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainStateContextRead`](#ChainStateContextRead).[`head`](ChainStateContextRead.md#head)

  ### <a id="ChainContextWrite"></a>ChainContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseContext`](#BaseContext).[`ChainIdentity`](#ChainIdentity).[`ChainStateContextWrite`](#ChainStateContextWrite).[`ChainStoreContextWrite`](#ChainStoreContextWrite)

## Extended by

- [`StakedChainContextWrite`](#StakedChainContextWrite)

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`BaseContext`](#BaseContext).[`caches`](BaseContext.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`BaseContext`](#BaseContext).[`logger`](BaseContext.md#logger)

***

### store

```ts
store: ChainStoreWrite;
```

### Inherited from

[`ChainStoreContextWrite`](#ChainStoreContextWrite).[`store`](ChainStoreContextWrite.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

  ### <a id="ChainContractViewer"></a>ChainContractViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainContractViewerMethods`](#ChainContractViewerMethods)

## Extended by

- [`ChainService`](#ChainService)
- [`ChainStakeViewer`](#ChainStakeViewer)

## Methods

### forkedAtBlockNumber()

```ts
forkedAtBlockNumber(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`forkedAtBlockNumber`](ChainContractViewerMethods.md#forkedatblocknumber)

***

### forkedAtHash()

```ts
forkedAtHash(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`forkedAtHash`](ChainContractViewerMethods.md#forkedathash)

***

### forkedChainId()

```ts
forkedChainId(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`forkedChainId`](ChainContractViewerMethods.md#forkedchainid)

***

### minWithdrawalBlocks()

```ts
minWithdrawalBlocks(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`minWithdrawalBlocks`](ChainContractViewerMethods.md#minwithdrawalblocks)

***

### rewardsContract()

```ts
rewardsContract(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`rewardsContract`](ChainContractViewerMethods.md#rewardscontract)

***

### stakingTokenAddress()

```ts
stakingTokenAddress(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewerMethods`](#ChainContractViewerMethods).[`stakingTokenAddress`](ChainContractViewerMethods.md#stakingtokenaddress)

  ### <a id="ChainContractViewerMethods"></a>ChainContractViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainContractViewer`](#ChainContractViewer)

## Methods

### forkedAtBlockNumber()

```ts
forkedAtBlockNumber(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

***

### forkedAtHash()

```ts
forkedAtHash(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

***

### forkedChainId()

```ts
forkedChainId(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

***

### minWithdrawalBlocks()

```ts
minWithdrawalBlocks(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

***

### rewardsContract()

```ts
rewardsContract(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

***

### stakingTokenAddress()

```ts
stakingTokenAddress(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

  ### <a id="ChainForkStatic"></a>ChainForkStatic

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### forkedAtBlockNumber

```ts
forkedAtBlockNumber: number;
```

***

### forkedAtHash

```ts
forkedAtHash: Hash;
```

***

### forkedChainId

```ts
forkedChainId: ChainId;
```

  ### <a id="ChainHashIteratorService"></a>ChainHashIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIteratorService`](#ChainIteratorService)\<`Hash`\>

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`chainId`](ChainIteratorService.md#chainid)

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`head`](ChainIteratorService.md#head)

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`Hash`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`previous`](ChainIteratorService.md#previous)

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`updateHead`](ChainIteratorService.md#updatehead)

  ### <a id="ChainHeadService"></a>ChainHeadService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseChainService`](#BaseChainService)

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`BaseChainService`](#BaseChainService).[`chainId`](BaseChainService.md#chainid)

***

### head

```ts
head: Hash | null;
```

  ### <a id="ChainIdentity"></a>ChainIdentity

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainContextWrite`](#ChainContextWrite)
- [`ChainContextRead`](#ChainContextRead)
- [`ChainStakeContextWrite`](#ChainStakeContextWrite)
- [`ChainStakeContextRead`](#ChainStakeContextRead)
- [`ChainStoreContextWrite`](#ChainStoreContextWrite)
- [`ChainStoreContextRead`](#ChainStoreContextRead)

## Properties

### chainId

```ts
chainId: ChainId;
```

  ### <a id="ChainIndexingServiceStateFields"></a>ChainIndexingServiceStateFields

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Type Parameters

### T

`T` *extends* `JsonValue` = `JsonValue`

## Properties

### endBlockHash

```ts
endBlockHash: Hash;
```

The hash of the last block that this service has indexing

***

### startBlockHash?

```ts
optional startBlockHash: Hash;
```

The hash of the block that the service started indexing. If undefined, the service is
assumed to have started indexing from the genesis block

***

### state

```ts
state: T;
```

The indexed state for the range

  ### <a id="ChainIteratorService"></a>ChainIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `ReadRepository`\<`TKey`, `BlockBoundWitness` \| `undefined`\>.`IterableRepository`\<`TKey`, `WithStorageMeta`\<`BlockBoundWitness`\> \| `undefined`\>

## Extended by

- [`EventingChainIteratorService`](#EventingChainIteratorService)
- [`ChainBlockNumberIteratorService`](#ChainBlockNumberIteratorService)
- [`ChainHashIteratorService`](#ChainHashIteratorService)

## Type Parameters

### TKey

`TKey`

## Properties

### chainId

```ts
chainId: ChainId;
```

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`TKey`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

  ### <a id="ChainIteratorServiceEventData"></a>ChainIteratorServiceEventData

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`HeadEventData`](#HeadEventData)

## Indexable

```ts
[key: string | number | symbol]: EventArgs
```

## Properties

### headUpdated

```ts
headUpdated: HeadEventArgs;
```

### Inherited from

[`HeadEventData`](#HeadEventData).[`headUpdated`](HeadEventData.md#headupdated)

  ### <a id="ChainService"></a>ChainService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainContractViewer`](#ChainContractViewer).[`ChainStakeViewer`](#ChainStakeViewer).[`ChainStaker`](#ChainStaker).[`BaseChainService`](#BaseChainService)

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`BaseChainService`](#BaseChainService).[`chainId`](BaseChainService.md#chainid)

## Methods

### addStake()

```ts
addStake(staked, amount): Promise<boolean>;
```

### Parameters

#### staked

`string`

#### amount

`bigint`

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`ChainStaker`](#ChainStaker).[`addStake`](ChainStaker.md#addstake)

***

### removeStake()

```ts
removeStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`ChainStaker`](#ChainStaker).[`removeStake`](ChainStaker.md#removestake)

***

### withdrawStake()

```ts
withdrawStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

### Inherited from

[`ChainStaker`](#ChainStaker).[`withdrawStake`](ChainStaker.md#withdrawstake)

***

### forkedAtBlockNumber()

```ts
forkedAtBlockNumber(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedAtBlockNumber`](ChainContractViewer.md#forkedatblocknumber)

***

### forkedAtHash()

```ts
forkedAtHash(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedAtHash`](ChainContractViewer.md#forkedathash)

***

### forkedChainId()

```ts
forkedChainId(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedChainId`](ChainContractViewer.md#forkedchainid)

***

### minWithdrawalBlocks()

```ts
minWithdrawalBlocks(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`minWithdrawalBlocks`](ChainContractViewer.md#minwithdrawalblocks)

***

### rewardsContract()

```ts
rewardsContract(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`rewardsContract`](ChainContractViewer.md#rewardscontract)

***

### stakingTokenAddress()

```ts
stakingTokenAddress(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`stakingTokenAddress`](ChainContractViewer.md#stakingtokenaddress)

***

### active()

```ts
active(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`active`](ChainStakeViewer.md#active)

***

### activeByStaked()

```ts
activeByStaked(staked): Promisable<bigint>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`activeByStaked`](ChainStakeViewer.md#activebystaked)

***

### activeByStaker()

```ts
activeByStaker(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`activeByStaker`](ChainStakeViewer.md#activebystaker)

***

### pending()

```ts
pending(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`pending`](ChainStakeViewer.md#pending)

***

### pendingByStaker()

```ts
pendingByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`pendingByStaker`](ChainStakeViewer.md#pendingbystaker)

***

### withdrawn()

```ts
withdrawn(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`withdrawn`](ChainStakeViewer.md#withdrawn)

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`ChainStakeViewer`](#ChainStakeViewer).[`withdrawnByStaker`](ChainStakeViewer.md#withdrawnbystaker)

  ### <a id="ChainServiceCollectionV2"></a>ChainServiceCollectionV2

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### account

```ts
account: WalletInstance;
```

The account which is used to sign transactions

***

### balance

```ts
balance: AccountBalanceService;
```

Services for working with account balances

***

### chainArchivist

```ts
chainArchivist: ArchivistInstance;
```

The archivist which the chain data is stored in

***

### chainContractViewer

```ts
chainContractViewer: ChainContractViewer;
```

Service for viewing codified chain information
from a contract

***

### chainIterator?

```ts
optional chainIterator: EventingChainBlockNumberIteratorService;
```

The chain iterator

***

### chainStakeViewer

```ts
chainStakeViewer: ChainStakeViewer;
```

Service for viewing stake information

***

### chainStaker

```ts
chainStaker: ChainStaker;
```

Service for staking

***

### chainSubmissionsArchivistWrite

```ts
chainSubmissionsArchivistWrite: WriteArchivist;
```

The archivist which the chain submissions are stored in

***

### election

```ts
election: ElectionService;
```

Service for determining leader election

***

### pendingBundledTransactionsArchivistWrite

```ts
pendingBundledTransactionsArchivistWrite: ArchivistInstance;
```

The archivist which the pending transactions are stored
as bundled transactions

***

### pendingTransactions

```ts
pendingTransactions: PendingTransactionsService;
```

Service for managing pending transactions

***

### producer

```ts
producer: BlockProducerService;
```

The block producer service

***

### reward

```ts
reward: BlockRewardService;
```

Service response for calculating block rewards

***

### stakeIntent

```ts
stakeIntent: StakeIntentService;
```

Services for working with staked intents

  ### <a id="ChainStakeContextRead"></a>ChainStakeContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIdentity`](#ChainIdentity)

## Extended by

- [`StakedChainContextRead`](#StakedChainContextRead)

## Properties

### events

```ts
events: StakeEventsViewer;
```

***

### stake

```ts
stake: StakeViewer;
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

  ### <a id="ChainStakeContextWrite"></a>ChainStakeContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIdentity`](#ChainIdentity)

## Extended by

- [`StakedChainContextWrite`](#StakedChainContextWrite)

## Properties

### stake

```ts
stake: StakeRunner;
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

  ### <a id="ChainStakeViewer"></a>ChainStakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainContractViewer`](#ChainContractViewer).[`StakeTotalsViewer`](#StakeTotalsViewer)

## Extended by

- [`ChainService`](#ChainService)

## Methods

### forkedAtBlockNumber()

```ts
forkedAtBlockNumber(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedAtBlockNumber`](ChainContractViewer.md#forkedatblocknumber)

***

### forkedAtHash()

```ts
forkedAtHash(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedAtHash`](ChainContractViewer.md#forkedathash)

***

### forkedChainId()

```ts
forkedChainId(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`forkedChainId`](ChainContractViewer.md#forkedchainid)

***

### minWithdrawalBlocks()

```ts
minWithdrawalBlocks(): Promise<bigint>;
```

### Returns

`Promise`\<`bigint`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`minWithdrawalBlocks`](ChainContractViewer.md#minwithdrawalblocks)

***

### rewardsContract()

```ts
rewardsContract(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`rewardsContract`](ChainContractViewer.md#rewardscontract)

***

### stakingTokenAddress()

```ts
stakingTokenAddress(): Promise<string>;
```

### Returns

`Promise`\<`string`\>

### Inherited from

[`ChainContractViewer`](#ChainContractViewer).[`stakingTokenAddress`](ChainContractViewer.md#stakingtokenaddress)

***

### active()

```ts
active(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`active`](StakeTotalsViewer.md#active)

***

### activeByStaked()

```ts
activeByStaked(staked): Promisable<bigint>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`activeByStaked`](StakeTotalsViewer.md#activebystaked)

***

### activeByStaker()

```ts
activeByStaker(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`activeByStaker`](StakeTotalsViewer.md#activebystaker)

***

### pending()

```ts
pending(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`pending`](StakeTotalsViewer.md#pending)

***

### pendingByStaker()

```ts
pendingByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`pendingByStaker`](StakeTotalsViewer.md#pendingbystaker)

***

### withdrawn()

```ts
withdrawn(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`withdrawn`](StakeTotalsViewer.md#withdrawn)

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewer`](#StakeTotalsViewer).[`withdrawnByStaker`](StakeTotalsViewer.md#withdrawnbystaker)

  ### <a id="ChainStaker"></a>ChainStaker

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainService`](#ChainService)

## Methods

### addStake()

```ts
addStake(staked, amount): Promise<boolean>;
```

### Parameters

#### staked

`string`

#### amount

`bigint`

### Returns

`Promise`\<`boolean`\>

***

### removeStake()

```ts
removeStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

***

### withdrawStake()

```ts
withdrawStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

  ### <a id="ChainStateContextRead"></a>ChainStateContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainContextRead`](#ChainContextRead)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

  ### <a id="ChainStateContextWrite"></a>ChainStateContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ChainContextWrite`](#ChainContextWrite)

  ### <a id="ChainStoreContextRead"></a>ChainStoreContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIdentity`](#ChainIdentity)

## Extended by

- [`ChainContextRead`](#ChainContextRead)

## Properties

### store

```ts
store: ChainStoreRead;
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

  ### <a id="ChainStoreContextWrite"></a>ChainStoreContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIdentity`](#ChainIdentity)

## Extended by

- [`ChainContextWrite`](#ChainContextWrite)

## Properties

### store

```ts
store: ChainStoreWrite;
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIdentity`](#ChainIdentity).[`chainId`](ChainIdentity.md#chainid)

  ### <a id="ChainStoreRead"></a>ChainStoreRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### chainMap

```ts
chainMap: PayloadMapRead<WithStorageMeta<Payload>>;
```

  ### <a id="ChainStoreWrite"></a>ChainStoreWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### chainMap

```ts
chainMap: PayloadMapWrite<WithStorageMeta<Payload>>;
```

  ### <a id="ChainSummaryContextBase"></a>ChainSummaryContextBase

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseContext`](#BaseContext)

## Extended by

- [`ChainSummaryContextRead`](#ChainSummaryContextRead)
- [`ChainSummaryContextWrite`](#ChainSummaryContextWrite)

## Type Parameters

### TPayload

`TPayload` *extends* `Payload`

### T

`T` *extends* 
  \| [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`string`, `TPayload`\>
  \| [`MapTypeWrite`](#../type-aliases/MapTypeWrite)\<`string`, `TPayload`\>

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`BaseContext`](#BaseContext).[`caches`](BaseContext.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`BaseContext`](#BaseContext).[`logger`](BaseContext.md#logger)

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

***

### summaryMap

```ts
summaryMap: T;
```

***

### windowSize?

```ts
optional windowSize: number;
```

  ### <a id="ChainSummaryContextRead"></a>ChainSummaryContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContextBase`](#ChainSummaryContextBase)\<`T`, [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`string`, `T`\>\>.[`ChainContextRead`](#ChainContextRead)

## Extended by

- [`BalanceStepSummaryContextRead`](#BalanceStepSummaryContextRead)
- [`TransfersStepSummaryContextRead`](#TransfersStepSummaryContextRead)

## Type Parameters

### T

`T` *extends* `Payload`

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`caches`](ChainSummaryContextBase.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`logger`](ChainSummaryContextBase.md#logger)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`store`](ChainContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`chainId`](ChainContextRead.md#chainid)

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`stepSemaphores`](ChainSummaryContextBase.md#stepsemaphores)

***

### summaryMap

```ts
summaryMap: MapTypeRead;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`summaryMap`](ChainSummaryContextBase.md#summarymap)

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`windowSize`](ChainSummaryContextBase.md#windowsize)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`head`](ChainContextRead.md#head)

  ### <a id="ChainSummaryContextWrite"></a>ChainSummaryContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContextBase`](#ChainSummaryContextBase)\<`T`, [`MapTypeWrite`](#../type-aliases/MapTypeWrite)\<`string`, `T`\>\>.[`ChainContextRead`](#ChainContextRead)

## Type Parameters

### T

`T` *extends* `Payload`

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`caches`](ChainSummaryContextBase.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`logger`](ChainSummaryContextBase.md#logger)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`store`](ChainContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`chainId`](ChainContextRead.md#chainid)

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`stepSemaphores`](ChainSummaryContextBase.md#stepsemaphores)

***

### summaryMap

```ts
summaryMap: MapTypeWrite;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`summaryMap`](ChainSummaryContextBase.md#summarymap)

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

[`ChainSummaryContextBase`](#ChainSummaryContextBase).[`windowSize`](ChainSummaryContextBase.md#windowsize)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`head`](ChainContextRead.md#head)

  ### <a id="ChainViewerMethods"></a>ChainViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)

## Methods

### chainId()

```ts
chainId(): Promisable<ChainId>;
```

### Returns

`Promisable`\<`ChainId`\>

  ### <a id="ChainWindow"></a>ChainWindow

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### depth

```ts
depth: number;
```

***

### head

```ts
head: Hash;
```

  ### <a id="DataInstance"></a>DataInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`ObjectInstance`](#ObjectInstance)

## Type Parameters

### T

`T`

## Properties

### data

```ts
data: T;
```

  ### <a id="DataLakeRunner"></a>DataLakeRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`DataLakeViewerMethods`](#../type-aliases/DataLakeViewerMethods).[`DataLakeRunnerMethods`](#../type-aliases/DataLakeRunnerMethods)

## Methods

### get()

```ts
get(id): 
  | Payload
  | ArrayBuffer
  | PromiseEx<DataLakeData | undefined, never>
  | Promise<DataLakeData | undefined>
  | undefined;
```

### Parameters

#### id

`Hash`

### Returns

  \| `Payload`
  \| `ArrayBuffer`
  \| `PromiseEx`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`, `never`\>
  \| `Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`\>
  \| `undefined`

### Inherited from

```ts
DataLakeViewerMethods.get
```

***

### getMany()

```ts
getMany(id): Promisable<DataLakeData[]>;
```

### Parameters

#### id

`Hash`[]

### Returns

`Promisable`\<[`DataLakeData`](#../type-aliases/DataLakeData)[]\>

### Inherited from

```ts
DataLakeViewerMethods.getMany
```

***

### has()

```ts
has(id): Promisable<boolean>;
```

### Parameters

#### id

`Hash`

### Returns

`Promisable`\<`boolean`\>

### Inherited from

```ts
DataLakeViewerMethods.has
```

***

### clear()

```ts
clear(): Promisable<void>;
```

### Returns

`Promisable`\<`void`\>

### Inherited from

```ts
DataLakeRunnerMethods.clear
```

***

### delete()

```ts
delete(id): Promisable<boolean>;
```

### Parameters

#### id

`Hash`

### Returns

`Promisable`\<`boolean`\>

### Inherited from

```ts
DataLakeRunnerMethods.delete
```

***

### set()

```ts
set(id, data): Promisable<void>;
```

### Parameters

#### id

`Hash`

#### data

[`DataLakeData`](#../type-aliases/DataLakeData)

### Returns

`Promisable`\<`void`\>

### Inherited from

```ts
DataLakeRunnerMethods.set
```

***

### setMany()

```ts
setMany(entries): Promise<void>;
```

### Parameters

#### entries

\[`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\][]

### Returns

`Promise`\<`void`\>

### Inherited from

```ts
DataLakeRunnerMethods.setMany
```

  ### <a id="DataLakeRunnerParams"></a>DataLakeRunnerParams

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`DataLakeViewerParams`](#DataLakeViewerParams)\<[`MapType`](#../type-aliases/MapType)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\>\>

## Properties

### allowedSchemas?

```ts
optional allowedSchemas: string[];
```

### Inherited from

[`DataLakeViewerParams`](#DataLakeViewerParams).[`allowedSchemas`](DataLakeViewerParams.md#allowedschemas)

***

### disallowedSchemas?

```ts
optional disallowedSchemas: string[];
```

### Inherited from

[`DataLakeViewerParams`](#DataLakeViewerParams).[`disallowedSchemas`](DataLakeViewerParams.md#disallowedschemas)

***

### map

```ts
map: MapType;
```

### Inherited from

[`DataLakeViewerParams`](#DataLakeViewerParams).[`map`](DataLakeViewerParams.md#map)

  ### <a id="DataLakeViewer"></a>DataLakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`DataLakeViewerMethods`](#../type-aliases/DataLakeViewerMethods)

## Properties

### allowedSchemas?

```ts
optional allowedSchemas: string[];
```

***

### disallowedSchemas?

```ts
optional disallowedSchemas: string[];
```

## Methods

### get()

```ts
get(id): 
  | Payload
  | ArrayBuffer
  | PromiseEx<DataLakeData | undefined, never>
  | Promise<DataLakeData | undefined>
  | undefined;
```

### Parameters

#### id

`Hash`

### Returns

  \| `Payload`
  \| `ArrayBuffer`
  \| `PromiseEx`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`, `never`\>
  \| `Promise`\<[`DataLakeData`](#../type-aliases/DataLakeData) \| `undefined`\>
  \| `undefined`

### Inherited from

```ts
DataLakeViewerMethods.get
```

***

### getMany()

```ts
getMany(id): Promisable<DataLakeData[]>;
```

### Parameters

#### id

`Hash`[]

### Returns

`Promisable`\<[`DataLakeData`](#../type-aliases/DataLakeData)[]\>

### Inherited from

```ts
DataLakeViewerMethods.getMany
```

***

### has()

```ts
has(id): Promisable<boolean>;
```

### Parameters

#### id

`Hash`

### Returns

`Promisable`\<`boolean`\>

### Inherited from

```ts
DataLakeViewerMethods.has
```

  ### <a id="DataLakeViewerParams"></a>DataLakeViewerParams

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`DataLakeRunnerParams`](#DataLakeRunnerParams)

## Type Parameters

### TMap

`TMap` *extends* [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\> = [`MapTypeRead`](#../type-aliases/MapTypeRead)\<`Hash`, [`DataLakeData`](#../type-aliases/DataLakeData)\>

## Properties

### allowedSchemas?

```ts
optional allowedSchemas: string[];
```

***

### disallowedSchemas?

```ts
optional disallowedSchemas: string[];
```

***

### map

```ts
map: TMap;
```

  ### <a id="ElectionService"></a>ElectionService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### getCreatorCommitteeForNextBlock()

```ts
getCreatorCommitteeForNextBlock(current): Promise<Address[]>;
```

Given the current block, get the leader for the next block

### Parameters

#### current

`WithHashMeta`\<`BlockBoundWitness`\>

The previous block

### Returns

`Promise`\<`Address`[]\>

  ### <a id="EventFilter"></a>EventFilter

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StakeEventFilter`](#StakeEventFilter)

## Type Parameters

### TName

`TName` *extends* `string` = `string`

## Properties

### name?

```ts
optional name: TName;
```

***

### time?

```ts
optional time: [number, number];
```

  ### <a id="EventingChainBlockNumberIteratorService"></a>EventingChainBlockNumberIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`EventingChainIteratorService`](#EventingChainIteratorService)\<`number`\>

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`chainId`](EventingChainIteratorService.md#chainid)

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`head`](EventingChainIteratorService.md#head)

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`number`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`previous`](EventingChainIteratorService.md#previous)

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`updateHead`](EventingChainIteratorService.md#updatehead)

  ### <a id="EventingChainHashIteratorService"></a>EventingChainHashIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`EventingChainIteratorService`](#EventingChainIteratorService)\<`Hash`\>

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`chainId`](EventingChainIteratorService.md#chainid)

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`head`](EventingChainIteratorService.md#head)

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`Hash`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`previous`](EventingChainIteratorService.md#previous)

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

### Inherited from

[`EventingChainIteratorService`](#EventingChainIteratorService).[`updateHead`](EventingChainIteratorService.md#updatehead)

  ### <a id="EventingChainIteratorService"></a>EventingChainIteratorService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainIteratorService`](#ChainIteratorService)\<`TKey`\>.`BaseEmitter`\<`BaseParams`, [`ChainIteratorServiceEventData`](#ChainIteratorServiceEventData)\>

## Extended by

- [`EventingChainBlockNumberIteratorService`](#EventingChainBlockNumberIteratorService)
- [`EventingChainHashIteratorService`](#EventingChainHashIteratorService)

## Type Parameters

### TKey

`TKey`

## Properties

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`chainId`](ChainIteratorService.md#chainid)

## Methods

### head()

```ts
head(): Promise<WithStorageMeta<BlockBoundWitness>>;
```

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`head`](ChainIteratorService.md#head)

***

### previous()

```ts
previous(cursor?, limit?): Promise<WithStorageMeta<BlockBoundWitness>[]>;
```

### Parameters

#### cursor?

`TKey`

#### limit?

`number`

### Returns

`Promise`\<`WithStorageMeta`\<`BlockBoundWitness`\>[]\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`previous`](ChainIteratorService.md#previous)

***

### updateHead()

```ts
updateHead(head): Promise<void>;
```

### Parameters

#### head

`BlockBoundWitness`

### Returns

`Promise`\<`void`\>

### Inherited from

[`ChainIteratorService`](#ChainIteratorService).[`updateHead`](ChainIteratorService.md#updatehead)

  ### <a id="ExternalEvent"></a>ExternalEvent

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StakeEvent`](#StakeEvent)

## Type Parameters

### TName

`TName` *extends* `string` = `string`

### TArgs

`TArgs` *extends* `JsonObject` = \{
\}

## Properties

### args

```ts
args: TArgs;
```

***

### name

```ts
name: TName;
```

***

### time

```ts
time: number;
```

  ### <a id="ForkViewerMethods"></a>ForkViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)

## Methods

### chainIdAtBlock()

```ts
chainIdAtBlock(blockNumber): Promisable<ChainId | undefined>;
```

### Parameters

#### blockNumber

`number`

### Returns

`Promisable`\<`ChainId` \| `undefined`\>

***

### forkHistory()

```ts
forkHistory(): Promisable<ForkHistory>;
```

### Returns

`Promisable`\<[`ForkHistory`](#../type-aliases/ForkHistory)\>

  ### <a id="HeadEventData"></a>HeadEventData

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `EventData`

## Extended by

- [`ChainIteratorServiceEventData`](#ChainIteratorServiceEventData)

## Indexable

```ts
[key: string | number | symbol]: EventArgs
```

## Properties

### headUpdated

```ts
headUpdated: HeadEventArgs;
```

  ### <a id="HydratedBlockInstance"></a>HydratedBlockInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `BlockFieldsInstance`\<[`HydratedTransactionInstance`](#HydratedTransactionInstance)\>.`HydratedBoundWitnessInstance`\<`T`\>.[`SignedInstance`](#SignedInstance)

## Type Parameters

### T

`T` *extends* `HydratedBlock` = `HydratedBlock`

## Properties

### data

```ts
data: T;
```

### Inherited from

```ts
HydratedBoundWitnessInstance.data
```

***

### boundWitness

```ts
boundWitness: T[0];
```

### Inherited from

```ts
HydratedBoundWitnessInstance.boundWitness
```

***

### payloadCount

```ts
payloadCount: number;
```

### Inherited from

[`HydratedTransactionInstance`](#HydratedTransactionInstance).[`payloadCount`](HydratedTransactionInstance.md#payloadcount)

***

### payloads

```ts
payloads: T[1][number][];
```

### Inherited from

```ts
HydratedBoundWitnessInstance.payloads
```

***

### reward

```ts
reward: bigint;
```

### Inherited from

```ts
BlockFieldsInstance.reward
```

***

### signatureCount

```ts
signatureCount: number;
```

### Inherited from

[`SignedInstance`](#SignedInstance).[`signatureCount`](SignedInstance.md#signaturecount)

***

### signatures

```ts
signatures: SignatureInstance[];
```

### Inherited from

[`SignedInstance`](#SignedInstance).[`signatures`](SignedInstance.md#signatures)

***

### transactionCount

```ts
transactionCount: number;
```

### Inherited from

```ts
BlockFieldsInstance.transactionCount
```

***

### transactions

```ts
transactions: HydratedTransactionInstance<HydratedTransactionWithStorageMeta, AllowedBlockPayload>[];
```

### Inherited from

```ts
BlockFieldsInstance.transactions
```

## Methods

### payload()

```ts
payload(index): T[1][number] | undefined;
```

### Parameters

#### index

`number`

### Returns

`T`\[`1`\]\[`number`\] \| `undefined`

### Inherited from

```ts
HydratedBoundWitnessInstance.payload
```

***

### signature()

```ts
signature(index): SignatureInstance | undefined;
```

### Parameters

#### index

`number`

### Returns

[`SignatureInstance`](#SignatureInstance) \| `undefined`

### Inherited from

[`SignedInstance`](#SignedInstance).[`signature`](SignedInstance.md#signature)

***

### transaction()

```ts
transaction(index): 
  | HydratedTransactionInstance<HydratedTransactionWithStorageMeta, AllowedBlockPayload>
  | undefined;
```

### Parameters

#### index

`number`

### Returns

  \| [`HydratedTransactionInstance`](#HydratedTransactionInstance)\<`HydratedTransactionWithStorageMeta`, `AllowedBlockPayload`\>
  \| `undefined`

### Inherited from

```ts
BlockFieldsInstance.transaction
```

***

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

```ts
HydratedBoundWitnessInstance.validate
```

  ### <a id="HydratedTransactionInstance"></a>HydratedTransactionInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- `TransactionFieldsInstance`\<`T`\[`1`\]\[`number`\] & `TElevatedPayload`\>.`HydratedBoundWitnessInstance`\<`T`\>.[`SignedInstance`](#SignedInstance)

## Type Parameters

### T

`T` *extends* `HydratedTransactionWithStorageMeta` = `HydratedTransactionWithStorageMeta`

### TElevatedPayload

`TElevatedPayload` *extends* `AllowedBlockPayload` = `AllowedBlockPayload`

## Properties

### data

```ts
data: T;
```

### Inherited from

```ts
HydratedBoundWitnessInstance.data
```

***

### boundWitness

```ts
boundWitness: T[0];
```

### Inherited from

```ts
HydratedBoundWitnessInstance.boundWitness
```

***

### payloadCount

```ts
payloadCount: number;
```

### Inherited from

```ts
HydratedBoundWitnessInstance.payloadCount
```

***

### payloads

```ts
payloads: T[1][number][];
```

### Inherited from

```ts
HydratedBoundWitnessInstance.payloads
```

***

### signatureCount

```ts
signatureCount: number;
```

### Inherited from

[`SignedInstance`](#SignedInstance).[`signatureCount`](SignedInstance.md#signaturecount)

***

### signatures

```ts
signatures: SignatureInstance[];
```

### Inherited from

[`SignedInstance`](#SignedInstance).[`signatures`](SignedInstance.md#signatures)

***

### elevatedPayloadCount

```ts
elevatedPayloadCount: number;
```

### Inherited from

```ts
TransactionFieldsInstance.elevatedPayloadCount
```

***

### elevatedPayloads

```ts
elevatedPayloads: WithStorageMeta<T[1][number] & TElevatedPayload>[];
```

### Inherited from

```ts
TransactionFieldsInstance.elevatedPayloads
```

***

### externalPayloads

```ts
externalPayloads: Record<Hash, Schema | Payload>;
```

### Inherited from

```ts
TransactionFieldsInstance.externalPayloads
```

***

### fees

```ts
fees: TransactionFeesInstance;
```

### Inherited from

```ts
TransactionFieldsInstance.fees
```

***

### privateExternalPayloads

```ts
privateExternalPayloads: Record<Hash, Schema>;
```

### Inherited from

```ts
TransactionFieldsInstance.privateExternalPayloads
```

***

### publicExternalPayloads

```ts
publicExternalPayloads: Payload[];
```

### Inherited from

```ts
TransactionFieldsInstance.publicExternalPayloads
```

## Methods

### payload()

```ts
payload(index): T[1][number] | undefined;
```

### Parameters

#### index

`number`

### Returns

`T`\[`1`\]\[`number`\] \| `undefined`

### Inherited from

```ts
HydratedBoundWitnessInstance.payload
```

***

### signature()

```ts
signature(index): SignatureInstance | undefined;
```

### Parameters

#### index

`number`

### Returns

[`SignatureInstance`](#SignatureInstance) \| `undefined`

### Inherited from

[`SignedInstance`](#SignedInstance).[`signature`](SignedInstance.md#signature)

***

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

```ts
HydratedBoundWitnessInstance.validate
```

***

### elevatedPayload()

```ts
elevatedPayload(index): T[1][number] & TElevatedPayload | undefined;
```

### Parameters

#### index

`number`

### Returns

`T`\[`1`\]\[`number`\] & `TElevatedPayload` \| `undefined`

### Inherited from

```ts
TransactionFieldsInstance.elevatedPayload
```

***

### reward()

```ts
reward(): bigint;
```

### Returns

`bigint`

### Inherited from

```ts
TransactionFieldsInstance.reward
```

  ### <a id="InvokerPermission"></a>InvokerPermission

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Modeled after EIP-2255
See - https://eips.ethereum.org/EIPS/eip-2255#specification

## Extends

- [`Permission`](#Permission)

## Properties

### caveats?

```ts
optional caveats: Caveats[];
```

Caveats for the permission, if applicable (i.e. allowed accounts, signing, etc.)

### Inherited from

[`Permission`](#Permission).[`caveats`](Permission.md#caveats)

***

### invoker

```ts
invoker: string;
```

Invoker for the given permission (URI, domain, webpage, address, etc.)

### Inherited from

[`Permission`](#Permission).[`invoker`](Permission.md#invoker)

***

### parentCapability

```ts
parentCapability: string;
```

Permission identifier (i.e. RPC method, action, etc.)

### Inherited from

[`Permission`](#Permission).[`parentCapability`](Permission.md#parentcapability)

***

### date?

```ts
optional date: number;
```

Time at which the permission was granted

  ### <a id="NegativeBigInt"></a>NegativeBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### negative

```ts
negative: Hex;
```

  ### <a id="NetworkStakeStepAddressRewardViewerMethods"></a>NetworkStakeStepAddressRewardViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer)

## Methods

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promisable<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="NetworkStakeStepPoolRewardViewerMethods"></a>NetworkStakeStepPoolRewardViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer)

## Methods

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

  ### <a id="NetworkStakeStepRewardPositionViewerMethods"></a>NetworkStakeStepRewardPositionViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer)

## Methods

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="NetworkStakeStepRewardService"></a>NetworkStakeStepRewardService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer)

## Methods

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressHistory`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddresshistory)

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressReward`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddressreward)

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressShare`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddressshare)

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promisable<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardWeightForAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardweightforaddress)

***

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPoolRewards`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpoolrewards)

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPoolShares`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpoolshares)

***

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPositionWeight`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpositionweight)

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPotentialPositionLoss`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpotentialpositionloss)

***

### networkStakeStepRewardClaimedByAddress()

```ts
networkStakeStepRewardClaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardClaimedByAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardclaimedbyaddress)

***

### networkStakeStepRewardForPosition()

```ts
networkStakeStepRewardForPosition(position, range): Promisable<[bigint, bigint]>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforposition)

***

### networkStakeStepRewardForStep()

```ts
networkStakeStepRewardForStep(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForStep`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforstep)

***

### networkStakeStepRewardForStepForPosition()

```ts
networkStakeStepRewardForStepForPosition(context, position): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForStepForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforstepforposition)

***

### networkStakeStepRewardRandomizer()

```ts
networkStakeStepRewardRandomizer(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardRandomizer`](NetworkStakeStepRewardViewer.md#networkstakesteprewardrandomizer)

***

### networkStakeStepRewardStakerCount()

```ts
networkStakeStepRewardStakerCount(context): Promisable<number>;
```

### Parameters

#### context

### Returns

`Promisable`\<`number`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardStakerCount`](NetworkStakeStepRewardViewer.md#networkstakesteprewardstakercount)

***

### networkStakeStepRewardUnclaimedByAddress()

```ts
networkStakeStepRewardUnclaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardUnclaimedByAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardunclaimedbyaddress)

***

### networkStakeStepRewardsForPosition()

```ts
networkStakeStepRewardsForPosition(position, range): Promisable<Record<StepIdentityString, [bigint, bigint]>>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, \[`bigint`, `bigint`\]\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforposition)

***

### networkStakeStepRewardsForRange()

```ts
networkStakeStepRewardsForRange(range): Promisable<bigint>;
```

### Parameters

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForRange`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforrange)

***

### networkStakeStepRewardsForStepLevel()

```ts
networkStakeStepRewardsForStepLevel(stepLevel, range): Promisable<bigint>;
```

### Parameters

#### stepLevel

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForStepLevel`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforsteplevel)

  ### <a id="NetworkStakeStepRewardViewer"></a>NetworkStakeStepRewardViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepPoolRewardViewerMethods`](#NetworkStakeStepPoolRewardViewerMethods).[`NetworkStakeStepAddressRewardViewerMethods`](#NetworkStakeStepAddressRewardViewerMethods).[`NetworkStakeStepRewardPositionViewerMethods`](#NetworkStakeStepRewardPositionViewerMethods)

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)
- [`NetworkStakeStepRewardService`](#NetworkStakeStepRewardService)

## Methods

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepAddressRewardViewerMethods`](#NetworkStakeStepAddressRewardViewerMethods).[`networkStakeStepRewardAddressHistory`](NetworkStakeStepAddressRewardViewerMethods.md#networkstakesteprewardaddresshistory)

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepAddressRewardViewerMethods`](#NetworkStakeStepAddressRewardViewerMethods).[`networkStakeStepRewardAddressReward`](NetworkStakeStepAddressRewardViewerMethods.md#networkstakesteprewardaddressreward)

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepAddressRewardViewerMethods`](#NetworkStakeStepAddressRewardViewerMethods).[`networkStakeStepRewardAddressShare`](NetworkStakeStepAddressRewardViewerMethods.md#networkstakesteprewardaddressshare)

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promisable<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepAddressRewardViewerMethods`](#NetworkStakeStepAddressRewardViewerMethods).[`networkStakeStepRewardWeightForAddress`](NetworkStakeStepAddressRewardViewerMethods.md#networkstakesteprewardweightforaddress)

***

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepPoolRewardViewerMethods`](#NetworkStakeStepPoolRewardViewerMethods).[`networkStakeStepRewardPoolRewards`](NetworkStakeStepPoolRewardViewerMethods.md#networkstakesteprewardpoolrewards)

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepPoolRewardViewerMethods`](#NetworkStakeStepPoolRewardViewerMethods).[`networkStakeStepRewardPoolShares`](NetworkStakeStepPoolRewardViewerMethods.md#networkstakesteprewardpoolshares)

***

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardPositionViewerMethods`](#NetworkStakeStepRewardPositionViewerMethods).[`networkStakeStepRewardPositionWeight`](NetworkStakeStepRewardPositionViewerMethods.md#networkstakesteprewardpositionweight)

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardPositionViewerMethods`](#NetworkStakeStepRewardPositionViewerMethods).[`networkStakeStepRewardPotentialPositionLoss`](NetworkStakeStepRewardPositionViewerMethods.md#networkstakesteprewardpotentialpositionloss)

***

### networkStakeStepRewardClaimedByAddress()

```ts
networkStakeStepRewardClaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardForPosition()

```ts
networkStakeStepRewardForPosition(position, range): Promisable<[bigint, bigint]>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

***

### networkStakeStepRewardForStep()

```ts
networkStakeStepRewardForStep(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardForStepForPosition()

```ts
networkStakeStepRewardForStepForPosition(context, position): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

***

### networkStakeStepRewardRandomizer()

```ts
networkStakeStepRewardRandomizer(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardStakerCount()

```ts
networkStakeStepRewardStakerCount(context): Promisable<number>;
```

### Parameters

#### context

### Returns

`Promisable`\<`number`\>

***

### networkStakeStepRewardUnclaimedByAddress()

```ts
networkStakeStepRewardUnclaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardsForPosition()

```ts
networkStakeStepRewardsForPosition(position, range): Promisable<Record<StepIdentityString, [bigint, bigint]>>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, \[`bigint`, `bigint`\]\>\>

***

### networkStakeStepRewardsForRange()

```ts
networkStakeStepRewardsForRange(range): Promisable<bigint>;
```

### Parameters

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

***

### networkStakeStepRewardsForStepLevel()

```ts
networkStakeStepRewardsForStepLevel(stepLevel, range): Promisable<bigint>;
```

### Parameters

#### stepLevel

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

  ### <a id="NetworkStakeStepRewardsByIndexViewerMethodsTemplate"></a>NetworkStakeStepRewardsByIndexViewerMethodsTemplate

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate)\<`TOptions`, `Record`\<`TResultIndex`, `AttoXL1`\>\>

## Extended by

- [`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods)
- [`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods)
- [`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods)

## Type Parameters

### TOptions

`TOptions`

### TResultIndex

`TResultIndex` *extends* [`RecordKeyType`](#../type-aliases/RecordKeyType)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<TResultIndex, AttoXL1>>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`Record`\<`TResultIndex`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`bonus`](NetworkStakeStepRewardsViewerMethodsTemplate.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<TResultIndex, AttoXL1>>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`Record`\<`TResultIndex`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`claimed`](NetworkStakeStepRewardsViewerMethodsTemplate.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<TResultIndex, AttoXL1>>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`Record`\<`TResultIndex`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`earned`](NetworkStakeStepRewardsViewerMethodsTemplate.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<TResultIndex, AttoXL1>>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`Record`\<`TResultIndex`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`total`](NetworkStakeStepRewardsViewerMethodsTemplate.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<TResultIndex, AttoXL1>>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`Record`\<`TResultIndex`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`unclaimed`](NetworkStakeStepRewardsViewerMethodsTemplate.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByPositionViewer"></a>NetworkStakeStepRewardsByPositionViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods).[`bonus`](NetworkStakeStepRewardsByPositionViewerMethods.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods).[`claimed`](NetworkStakeStepRewardsByPositionViewerMethods.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods).[`earned`](NetworkStakeStepRewardsByPositionViewerMethods.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods).[`total`](NetworkStakeStepRewardsByPositionViewerMethods.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByPositionViewerMethods`](#NetworkStakeStepRewardsByPositionViewerMethods).[`unclaimed`](NetworkStakeStepRewardsByPositionViewerMethods.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByPositionViewerMethods"></a>NetworkStakeStepRewardsByPositionViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate)\<[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions), `number`\>

## Extended by

- [`NetworkStakeStepRewardsByPositionViewer`](#NetworkStakeStepRewardsByPositionViewer)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`bonus`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`claimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`earned`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`total`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`unclaimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByPositionViewerOptions"></a>NetworkStakeStepRewardsByPositionViewerOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

## Properties

### range?

```ts
optional range: BlockRange;
```

### Inherited from

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions).[`range`](NetworkStakeStepRewardsRangeOptions.md#range)

***

### positions?

```ts
optional positions: number[];
```

  ### <a id="NetworkStakeStepRewardsByStakerViewer"></a>NetworkStakeStepRewardsByStakerViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods).[`bonus`](NetworkStakeStepRewardsByStakerViewerMethods.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods).[`claimed`](NetworkStakeStepRewardsByStakerViewerMethods.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods).[`earned`](NetworkStakeStepRewardsByStakerViewerMethods.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods).[`total`](NetworkStakeStepRewardsByStakerViewerMethods.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStakerViewerMethods`](#NetworkStakeStepRewardsByStakerViewerMethods).[`unclaimed`](NetworkStakeStepRewardsByStakerViewerMethods.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByStakerViewerMethods"></a>NetworkStakeStepRewardsByStakerViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate)\<[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions), `Address`\>

## Extended by

- [`NetworkStakeStepRewardsByStakerViewer`](#NetworkStakeStepRewardsByStakerViewer)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`bonus`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`claimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`earned`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`total`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`unclaimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByStakerViewerOptions"></a>NetworkStakeStepRewardsByStakerViewerOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

## Properties

### range?

```ts
optional range: BlockRange;
```

### Inherited from

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions).[`range`](NetworkStakeStepRewardsRangeOptions.md#range)

***

### stakers?

```ts
optional stakers: Address[];
```

  ### <a id="NetworkStakeStepRewardsByStepViewer"></a>NetworkStakeStepRewardsByStepViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods).[`bonus`](NetworkStakeStepRewardsByStepViewerMethods.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods).[`claimed`](NetworkStakeStepRewardsByStepViewerMethods.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods).[`earned`](NetworkStakeStepRewardsByStepViewerMethods.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods).[`total`](NetworkStakeStepRewardsByStepViewerMethods.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByStepViewerMethods`](#NetworkStakeStepRewardsByStepViewerMethods).[`unclaimed`](NetworkStakeStepRewardsByStepViewerMethods.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByStepViewerMethods"></a>NetworkStakeStepRewardsByStepViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate)\<[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions), `StepIdentityString`\>

## Extended by

- [`NetworkStakeStepRewardsByStepViewer`](#NetworkStakeStepRewardsByStepViewer)

## Methods

### bonus()

```ts
bonus(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`bonus`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`claimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`earned`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#earned)

***

### total()

```ts
total(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`total`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Inherited from

[`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate).[`unclaimed`](NetworkStakeStepRewardsByIndexViewerMethodsTemplate.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsByStepViewerOptions"></a>NetworkStakeStepRewardsByStepViewerOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

## Properties

### range?

```ts
optional range: BlockRange;
```

### Inherited from

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions).[`range`](NetworkStakeStepRewardsRangeOptions.md#range)

***

### steps?

```ts
optional steps: object[];
```

  ### <a id="NetworkStakeStepRewardsRangeOptions"></a>NetworkStakeStepRewardsRangeOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardsByStepViewerOptions`](#NetworkStakeStepRewardsByStepViewerOptions)
- [`NetworkStakeStepRewardsByStakerViewerOptions`](#NetworkStakeStepRewardsByStakerViewerOptions)
- [`NetworkStakeStepRewardsByPositionViewerOptions`](#NetworkStakeStepRewardsByPositionViewerOptions)

## Properties

### range?

```ts
optional range: BlockRange;
```

  ### <a id="NetworkStakeStepRewardsTotalViewer"></a>NetworkStakeStepRewardsTotalViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods)

## Methods

### bonus()

```ts
bonus(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods).[`bonus`](NetworkStakeStepRewardsTotalViewerMethods.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods).[`claimed`](NetworkStakeStepRewardsTotalViewerMethods.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods).[`earned`](NetworkStakeStepRewardsTotalViewerMethods.md#earned)

***

### total()

```ts
total(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods).[`total`](NetworkStakeStepRewardsTotalViewerMethods.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods).[`unclaimed`](NetworkStakeStepRewardsTotalViewerMethods.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsTotalViewerMethods"></a>NetworkStakeStepRewardsTotalViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate)\<[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions), `AttoXL1`\>

## Extended by

- [`NetworkStakeStepRewardsTotalViewer`](#NetworkStakeStepRewardsTotalViewer)

## Methods

### bonus()

```ts
bonus(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`bonus`](NetworkStakeStepRewardsViewerMethodsTemplate.md#bonus)

***

### claimed()

```ts
claimed(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`claimed`](NetworkStakeStepRewardsViewerMethodsTemplate.md#claimed)

***

### earned()

```ts
earned(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`earned`](NetworkStakeStepRewardsViewerMethodsTemplate.md#earned)

***

### total()

```ts
total(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`total`](NetworkStakeStepRewardsViewerMethodsTemplate.md#total)

***

### unclaimed()

```ts
unclaimed(options?): Promisable<AttoXL1>;
```

### Parameters

#### options?

[`NetworkStakeStepRewardsRangeOptions`](#NetworkStakeStepRewardsRangeOptions)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`NetworkStakeStepRewardsViewerMethodsTemplate`](#NetworkStakeStepRewardsViewerMethodsTemplate).[`unclaimed`](NetworkStakeStepRewardsViewerMethodsTemplate.md#unclaimed)

  ### <a id="NetworkStakeStepRewardsViewer"></a>NetworkStakeStepRewardsViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeStepRewardsViewerMethods`](#NetworkStakeStepRewardsViewerMethods)

## Properties

### position?

```ts
optional position: NetworkStakeStepRewardsByPositionViewer;
```

***

### staker?

```ts
optional staker: NetworkStakeStepRewardsByStakerViewer;
```

***

### step?

```ts
optional step: NetworkStakeStepRewardsByStepViewer;
```

***

### total?

```ts
optional total: NetworkStakeStepRewardsTotalViewer;
```

  ### <a id="NetworkStakeStepRewardsViewerMethods"></a>NetworkStakeStepRewardsViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardsViewer`](#NetworkStakeStepRewardsViewer)

  ### <a id="NetworkStakeStepRewardsViewerMethodsTemplate"></a>NetworkStakeStepRewardsViewerMethodsTemplate

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeStepRewardsByIndexViewerMethodsTemplate`](#NetworkStakeStepRewardsByIndexViewerMethodsTemplate)
- [`NetworkStakeStepRewardsTotalViewerMethods`](#NetworkStakeStepRewardsTotalViewerMethods)

## Type Parameters

### TOptions

`TOptions`

### TResult

`TResult`

## Methods

### bonus()

```ts
bonus(options?): Promisable<TResult>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`TResult`\>

***

### claimed()

```ts
claimed(options?): Promisable<TResult>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`TResult`\>

***

### earned()

```ts
earned(options?): Promisable<TResult>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`TResult`\>

***

### total()

```ts
total(options?): Promisable<TResult>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`TResult`\>

***

### unclaimed()

```ts
unclaimed(options?): Promisable<TResult>;
```

### Parameters

#### options?

`TOptions`

### Returns

`Promisable`\<`TResult`\>

  ### <a id="NetworkStakeViewer"></a>NetworkStakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`NetworkStakeViewerMethods`](#NetworkStakeViewerMethods)

## Properties

### stepRewards?

```ts
optional stepRewards: NetworkStakeStepRewardsViewer;
```

## Methods

### active()

```ts
active(blockNumber?): Promisable<[bigint, number]>;
```

### Parameters

#### blockNumber?

`number`

### Returns

`Promisable`\<\[`bigint`, `number`\]\>

the active stake and the number of active validators [active, block]

### Inherited from

[`NetworkStakeViewerMethods`](#NetworkStakeViewerMethods).[`active`](NetworkStakeViewerMethods.md#active)

  ### <a id="NetworkStakeViewerMethods"></a>NetworkStakeViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`NetworkStakeViewer`](#NetworkStakeViewer)

## Methods

### active()

```ts
active(blockNumber?): Promisable<[bigint, number]>;
```

### Parameters

#### blockNumber?

`number`

### Returns

`Promisable`\<\[`bigint`, `number`\]\>

the active stake and the number of active validators [active, block]

  ### <a id="ObjectInstance"></a>ObjectInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`DataInstance`](#DataInstance)\<`T`\>

## Extended by

- [`PayloadInstance`](#PayloadInstance)

## Type Parameters

### T

`T` *extends* `EmptyObject` = `EmptyObject`

## Properties

### data

```ts
data: T;
```

### Inherited from

[`DataInstance`](#DataInstance).[`data`](DataInstance.md#data)

  ### <a id="PagedPositionsOptions"></a>PagedPositionsOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### cursor?

```ts
optional cursor: PositionId;
```

***

### limit?

```ts
optional limit: number;
```

  ### <a id="PagedStakersOptions"></a>PagedStakersOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### cursor?

```ts
optional cursor: Address;
```

***

### limit?

```ts
optional limit: number;
```

  ### <a id="PayloadInstance"></a>PayloadInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ObjectInstance`](#ObjectInstance)\<`TPayload`\>.[`ValidatableInstance`](#ValidatableInstance)

## Extended by

- [`BoundWitnessInstance`](#BoundWitnessInstance)

## Type Parameters

### TPayload

`TPayload` *extends* `Payload` = `Payload`

## Properties

### data

```ts
data: TPayload;
```

### Inherited from

[`ObjectInstance`](#ObjectInstance).[`data`](ObjectInstance.md#data)

## Methods

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`ValidatableInstance`](#ValidatableInstance).[`validate`](ValidatableInstance.md#validate)

  ### <a id="PendingTransactionsService"></a>PendingTransactionsService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### getPendingTransactions()

```ts
getPendingTransactions(
   head, 
   limit, 
timeout?): Promise<SignedHydratedTransaction[]>;
```

### Parameters

#### head

`Hash`

#### limit

`number`

#### timeout?

`number`

### Returns

`Promise`\<`SignedHydratedTransaction`[]\>

  ### <a id="Permission"></a>Permission

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Modeled after EIP-2255
See - https://eips.ethereum.org/EIPS/eip-2255#specification

## Extended by

- [`InvokerPermission`](#InvokerPermission)

## Properties

### caveats?

```ts
optional caveats: Caveats[];
```

Caveats for the permission, if applicable (i.e. allowed accounts, signing, etc.)

***

### invoker

```ts
invoker: string;
```

Invoker for the given permission (URI, domain, webpage, address, etc.)

***

### parentCapability

```ts
parentCapability: string;
```

Permission identifier (i.e. RPC method, action, etc.)

  ### <a id="PermissionRequest"></a>PermissionRequest

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Modeled after EIP-2255
See - https://eips.ethereum.org/EIPS/eip-2255#specification

NOTE: In order to send multiple permission requests at once, do not send multiple parentCapability keys.
Instead, send multiple PermissionRequest objects in the params array of the rpc call.

## Indexable

```ts
[parentCapability: string]: object
```

  ### <a id="PermissionRequestsHandler"></a>PermissionRequestsHandler

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Handles Permission Requests

## Extended by

- [`XyoPermissions`](#XyoPermissions)

## Methods

### requestPermissions()

```ts
requestPermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)[]

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

***

### revokePermissions()

```ts
revokePermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

  ### <a id="PermissionsGetHandler"></a>PermissionsGetHandler

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Handles Getting Permissions

## Extended by

- [`XyoPermissions`](#XyoPermissions)
- [`PermissionsStore`](#PermissionsStore)

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#InvokerPermission)[]\>

  ### <a id="PermissionsProvider"></a>PermissionsProvider

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Interface for getting, requesting and revoking permissions

See - https://eips.ethereum.org/EIPS/eip-2255

## Extends

- [`XyoPermissions`](#XyoPermissions)

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#InvokerPermission)[]\>

### Inherited from

[`XyoPermissions`](#XyoPermissions).[`getPermissions`](XyoPermissions.md#getpermissions)

***

### requestPermissions()

```ts
requestPermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)[]

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

### Inherited from

[`XyoPermissions`](#XyoPermissions).[`requestPermissions`](XyoPermissions.md#requestpermissions)

***

### revokePermissions()

```ts
revokePermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

### Inherited from

[`XyoPermissions`](#XyoPermissions).[`revokePermissions`](XyoPermissions.md#revokepermissions)

  ### <a id="PermissionsStore"></a>PermissionsStore

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Interface for a permissions store that abstracts away the storage medium.
(i.e. in-memory, browser storage, database, etc.)

## Extends

- [`PermissionsGetHandler`](#PermissionsGetHandler)

## Properties

### invoker

```ts
readonly invoker: string;
```

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#InvokerPermission)[]\>

### Inherited from

[`PermissionsGetHandler`](#PermissionsGetHandler).[`getPermissions`](PermissionsGetHandler.md#getpermissions)

***

### setPermissions()

```ts
setPermissions(permissions): Promise<void>;
```

### Parameters

#### permissions

[`InvokerPermission`](#InvokerPermission)[]

### Returns

`Promise`\<`void`\>

  ### <a id="PositiveBigInt"></a>PositiveBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### positive

```ts
positive: Hex;
```

  ### <a id="RequestedPermission"></a>RequestedPermission

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Modeled after EIP-2255
See - https://eips.ethereum.org/EIPS/eip-2255#specification

## Properties

### date?

```ts
optional date: number;
```

Optional timestamp for when the permission was granted

***

### parentCapability

```ts
parentCapability: string;
```

Permission identifier (i.e. RPC method, action, etc.)

  ### <a id="SignatureInstance"></a>SignatureInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ValidatableInstance`](#ValidatableInstance)

## Properties

### address

```ts
address: Address;
```

***

### hash

```ts
hash: Hash;
```

***

### signature

```ts
signature: Hex;
```

## Methods

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`ValidatableInstance`](#ValidatableInstance).[`validate`](ValidatableInstance.md#validate)

  ### <a id="SignedInstance"></a>SignedInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`HydratedBlockInstance`](#HydratedBlockInstance)
- [`HydratedTransactionInstance`](#HydratedTransactionInstance)

## Properties

### signatureCount

```ts
signatureCount: number;
```

***

### signatures

```ts
signatures: SignatureInstance[];
```

## Methods

### signature()

```ts
signature(index): SignatureInstance | undefined;
```

### Parameters

#### index

`number`

### Returns

[`SignatureInstance`](#SignatureInstance) \| `undefined`

  ### <a id="StakeEvent"></a>StakeEvent

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ExternalEvent`](#ExternalEvent)\<`TName`\>

## Type Parameters

### TName

`TName` *extends* [`StakeEventName`](#../type-aliases/StakeEventName) = [`StakeEventName`](#../type-aliases/StakeEventName)

## Properties

### name

```ts
name: TName;
```

### Inherited from

[`ExternalEvent`](#ExternalEvent).[`name`](ExternalEvent.md#name)

***

### time

```ts
time: number;
```

### Inherited from

[`ExternalEvent`](#ExternalEvent).[`time`](ExternalEvent.md#time)

***

### args

```ts
args: StakeEventArgs;
```

### Overrides

[`ExternalEvent`](#ExternalEvent).[`args`](ExternalEvent.md#args)

  ### <a id="StakeEventArgs"></a>StakeEventArgs

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### amount

```ts
amount: bigint;
```

***

### id

```ts
id: number;
```

***

### staked

```ts
staked: Address;
```

***

### staker

```ts
staker: Address;
```

  ### <a id="StakeEventFilter"></a>StakeEventFilter

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`EventFilter`](#EventFilter)\<`TName`\>

## Type Parameters

### TName

`TName` *extends* [`StakeEventName`](#../type-aliases/StakeEventName) = [`StakeEventName`](#../type-aliases/StakeEventName)

## Properties

### name?

```ts
optional name: TName;
```

### Inherited from

[`EventFilter`](#EventFilter).[`name`](EventFilter.md#name)

***

### time?

```ts
optional time: [number, number];
```

### Inherited from

[`EventFilter`](#EventFilter).[`time`](EventFilter.md#time)

***

### args?

```ts
optional args: Partial<Pick<StakeEventArgs, "id" | "staker" | "staked">>;
```

  ### <a id="StakeEventsViewer"></a>StakeEventsViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### positionCount()

```ts
positionCount(range): Promisable<number>;
```

### Parameters

#### range

\[`number`, `number` \| `"latest"`\]

### Returns

`Promisable`\<`number`\>

***

### stakeEvents()

```ts
stakeEvents<TName>(range, filter?): Promisable<StakeEvent<TName>[]>;
```

### Type Parameters

#### TName

`TName` *extends* `"StakeAdded"` \| `"StakeRemoved"` \| `"StakeWithdrawn"`

### Parameters

#### range

\[`number`, `number` \| `"latest"`\]

#### filter?

[`StakeEventFilter`](#StakeEventFilter)\<`TName`\>

### Returns

`Promisable`\<[`StakeEvent`](#StakeEvent)\<`TName`\>[]\>

  ### <a id="StakeIntentService"></a>StakeIntentService

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### getDeclaredCandidateRanges()

```ts
getDeclaredCandidateRanges(address, intent): Promise<readonly readonly [number, number][]>;
```

Gets the declared ranges for an address based on historical on-chain data

### Parameters

#### address

`Address`

The address to get the declared ranges for

#### intent

`"producer"`

The declared intent to filter for

### Returns

`Promise`\<readonly readonly \[`number`, `number`\][]\>

***

### getDeclaredCandidatesForBlock()

```ts
getDeclaredCandidatesForBlock(block, intent): Promise<Address[]>;
```

Gets the declared candidates for a block based on historical on-chain data

### Parameters

#### block

`number`

The block number to get the declared candidates for

#### intent

`"producer"`

The declared intent to filter for

### Returns

`Promise`\<`Address`[]\>

***

### getRequiredMinimumStakeForIntent()

```ts
getRequiredMinimumStakeForIntent(intent): bigint;
```

Gets the required minimum stake for a given intent

### Parameters

#### intent

`"producer"`

The declared intent to filter for

### Returns

`bigint`

The required minimum stake for the intent

***

### isStakedForBlock()

```ts
isStakedForBlock(
   block, 
   intent, 
address): Promise<boolean>;
```

Checks if the address is staked for a block for a given intent

### Parameters

#### block

`number`

The block number to check

#### intent

`"producer"`

The declared intent to filter for

#### address

`Address`

The address to check

### Returns

`Promise`\<`boolean`\>

  ### <a id="StakeRunner"></a>StakeRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`StakeViewer`](#StakeViewer)

## Properties

### minWithdrawalBlocks

```ts
minWithdrawalBlocks: number;
```

### Inherited from

[`StakeViewer`](#StakeViewer).[`minWithdrawalBlocks`](StakeViewer.md#minwithdrawalblocks)

***

### rewardsContract

```ts
rewardsContract: Address;
```

### Inherited from

[`StakeViewer`](#StakeViewer).[`rewardsContract`](StakeViewer.md#rewardscontract)

***

### stakingTokenAddress

```ts
stakingTokenAddress: Address;
```

### Inherited from

[`StakeViewer`](#StakeViewer).[`stakingTokenAddress`](StakeViewer.md#stakingtokenaddress)

***

### events

```ts
events: StakeEventsViewer;
```

## Methods

### stakeById()

```ts
stakeById(id): Promisable<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`stakeById`](StakeViewer.md#stakebyid)

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promisable<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`stakeByStaker`](StakeViewer.md#stakebystaker)

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promisable<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`stakesByStaked`](StakeViewer.md#stakesbystaked)

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promisable<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`stakesByStaker`](StakeViewer.md#stakesbystaker)

***

### active()

```ts
active(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`active`](StakeViewer.md#active)

***

### activeByAddressStaked()

```ts
activeByAddressStaked(address, time?): Promisable<bigint>;
```

### Parameters

#### address

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`activeByAddressStaked`](StakeViewer.md#activebyaddressstaked)

***

### activeByStaker()

```ts
activeByStaker(address, time?): Promisable<bigint>;
```

### Parameters

#### address

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`activeByStaker`](StakeViewer.md#activebystaker)

***

### pending()

```ts
pending(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`pending`](StakeViewer.md#pending)

***

### pendingByStaker()

```ts
pendingByStaker(staker, time?): Promisable<bigint>;
```

### Parameters

#### staker

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`pendingByStaker`](StakeViewer.md#pendingbystaker)

***

### withdrawn()

```ts
withdrawn(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`withdrawn`](StakeViewer.md#withdrawn)

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker, time?): Promisable<bigint>;
```

### Parameters

#### staker

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeViewer`](#StakeViewer).[`withdrawnByStaker`](StakeViewer.md#withdrawnbystaker)

***

### addStake()

```ts
addStake(staked, amount): Promise<boolean>;
```

### Parameters

#### staked

`string`

#### amount

`bigint`

### Returns

`Promise`\<`boolean`\>

***

### removeStake()

```ts
removeStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

***

### withdrawStake()

```ts
withdrawStake(slot): Promise<boolean>;
```

### Parameters

#### slot

`bigint`

### Returns

`Promise`\<`boolean`\>

  ### <a id="StakeTotalsViewer"></a>StakeTotalsViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods)

## Extended by

- [`ChainStakeViewer`](#ChainStakeViewer)

## Methods

### active()

```ts
active(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`active`](StakeTotalsViewerMethods.md#active)

***

### activeByStaked()

```ts
activeByStaked(staked): Promisable<bigint>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`activeByStaked`](StakeTotalsViewerMethods.md#activebystaked)

***

### activeByStaker()

```ts
activeByStaker(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`activeByStaker`](StakeTotalsViewerMethods.md#activebystaker)

***

### pending()

```ts
pending(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`pending`](StakeTotalsViewerMethods.md#pending)

***

### pendingByStaker()

```ts
pendingByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`pendingByStaker`](StakeTotalsViewerMethods.md#pendingbystaker)

***

### withdrawn()

```ts
withdrawn(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`withdrawn`](StakeTotalsViewerMethods.md#withdrawn)

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StakeTotalsViewerMethods`](#StakeTotalsViewerMethods).[`withdrawnByStaker`](StakeTotalsViewerMethods.md#withdrawnbystaker)

  ### <a id="StakeTotalsViewerMethods"></a>StakeTotalsViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StakeTotalsViewer`](#StakeTotalsViewer)

## Methods

### active()

```ts
active(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

***

### activeByStaked()

```ts
activeByStaked(staked): Promisable<bigint>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<`bigint`\>

***

### activeByStaker()

```ts
activeByStaker(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

***

### pending()

```ts
pending(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

***

### pendingByStaker()

```ts
pendingByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

***

### withdrawn()

```ts
withdrawn(): Promisable<bigint>;
```

### Returns

`Promisable`\<`bigint`\>

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker): Promisable<bigint>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="StakeViewer"></a>StakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`StakeViewerMethods`](#StakeViewerMethods).[`StakeViewerProperties`](#StakeViewerProperties)

## Extended by

- [`StakeRunner`](#StakeRunner)

## Properties

### minWithdrawalBlocks

```ts
minWithdrawalBlocks: number;
```

### Inherited from

[`StakeViewerProperties`](#StakeViewerProperties).[`minWithdrawalBlocks`](StakeViewerProperties.md#minwithdrawalblocks)

***

### rewardsContract

```ts
rewardsContract: Address;
```

### Inherited from

[`StakeViewerProperties`](#StakeViewerProperties).[`rewardsContract`](StakeViewerProperties.md#rewardscontract)

***

### stakingTokenAddress

```ts
stakingTokenAddress: Address;
```

### Inherited from

[`StakeViewerProperties`](#StakeViewerProperties).[`stakingTokenAddress`](StakeViewerProperties.md#stakingtokenaddress)

## Methods

### stakeById()

```ts
stakeById(id): Promisable<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakeById`](StakeViewerMethods.md#stakebyid)

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promisable<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakeByStaker`](StakeViewerMethods.md#stakebystaker)

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promisable<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakesByStaked`](StakeViewerMethods.md#stakesbystaked)

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promisable<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakesByStaker`](StakeViewerMethods.md#stakesbystaker)

***

### active()

```ts
active(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### activeByAddressStaked()

```ts
activeByAddressStaked(address, time?): Promisable<bigint>;
```

### Parameters

#### address

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### activeByStaker()

```ts
activeByStaker(address, time?): Promisable<bigint>;
```

### Parameters

#### address

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### pending()

```ts
pending(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### pendingByStaker()

```ts
pendingByStaker(staker, time?): Promisable<bigint>;
```

### Parameters

#### staker

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### withdrawn()

```ts
withdrawn(time?): Promisable<bigint>;
```

### Parameters

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

***

### withdrawnByStaker()

```ts
withdrawnByStaker(staker, time?): Promisable<bigint>;
```

### Parameters

#### staker

`string`

#### time?

`number`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="StakeViewerMethods"></a>StakeViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)
- [`StakeViewer`](#StakeViewer)

## Methods

### stakeById()

```ts
stakeById(id): Promisable<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promisable<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promisable<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promisable<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

  ### <a id="StakeViewerProperties"></a>StakeViewerProperties

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StakeViewer`](#StakeViewer)

## Properties

### minWithdrawalBlocks

```ts
minWithdrawalBlocks: number;
```

***

### rewardsContract

```ts
rewardsContract: Address;
```

***

### stakingTokenAddress

```ts
stakingTokenAddress: Address;
```

  ### <a id="StakedChainContextRead"></a>StakedChainContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseContext`](#BaseContext).[`ChainContextRead`](#ChainContextRead).[`ChainStakeContextRead`](#ChainStakeContextRead)

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`BaseContext`](#BaseContext).[`caches`](BaseContext.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`BaseContext`](#BaseContext).[`logger`](BaseContext.md#logger)

***

### events

```ts
events: StakeEventsViewer;
```

### Inherited from

[`ChainStakeContextRead`](#ChainStakeContextRead).[`events`](ChainStakeContextRead.md#events)

***

### stake

```ts
stake: StakeViewer;
```

### Inherited from

[`ChainStakeContextRead`](#ChainStakeContextRead).[`stake`](ChainStakeContextRead.md#stake)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`store`](ChainContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`chainId`](ChainContextRead.md#chainid)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainContextRead`](#ChainContextRead).[`head`](ChainContextRead.md#head)

  ### <a id="StakedChainContextWrite"></a>StakedChainContextWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`BaseContext`](#BaseContext).[`ChainContextWrite`](#ChainContextWrite).[`ChainStakeContextWrite`](#ChainStakeContextWrite)

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`BaseContext`](#BaseContext).[`caches`](BaseContext.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`BaseContext`](#BaseContext).[`logger`](BaseContext.md#logger)

***

### stake

```ts
stake: StakeRunner;
```

### Inherited from

[`ChainStakeContextWrite`](#ChainStakeContextWrite).[`stake`](ChainStakeContextWrite.md#stake)

***

### store

```ts
store: ChainStoreWrite;
```

### Inherited from

[`ChainContextWrite`](#ChainContextWrite).[`store`](ChainContextWrite.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainContextWrite`](#ChainContextWrite).[`chainId`](ChainContextWrite.md#chainid)

  ### <a id="StepStakeViewer"></a>StepStakeViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`StepStakeViewerMethods`](#StepStakeViewerMethods)

## Properties

### stepStake()

```ts
stepStake: (step) => Promisable<Record<Address, bigint>>;
```

### Parameters

#### step

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`StepStakeViewerMethods`](#StepStakeViewerMethods).[`stepStake`](StepStakeViewerMethods.md#stepstake)

***

### stepStakeForAddress()

```ts
stepStakeForAddress: (address, step) => Promisable<bigint>;
```

### Parameters

#### address

`Address`

#### step

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StepStakeViewerMethods`](#StepStakeViewerMethods).[`stepStakeForAddress`](StepStakeViewerMethods.md#stepstakeforaddress)

  ### <a id="StepStakeViewerMethods"></a>StepStakeViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StepStakeViewer`](#StepStakeViewer)

## Properties

### stepStake()

```ts
stepStake: (step) => Promisable<Record<Address, bigint>>;
```

### Parameters

#### step

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

***

### stepStakeForAddress()

```ts
stepStakeForAddress: (address, step) => Promisable<bigint>;
```

### Parameters

#### address

`Address`

#### step

### Returns

`Promisable`\<`bigint`\>

  ### <a id="StepStatistics"></a>StepStatistics

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### endTime

```ts
endTime: number;
```

***

### startTime

```ts
startTime: number;
```

  ### <a id="StepSummaryFields"></a>StepSummaryFields

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### hash

```ts
hash: Hash;
```

***

### stepSize

```ts
stepSize: number;
```

  ### <a id="StepViewer"></a>StepViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`StepViewerMethods`](#StepViewerMethods)

## Properties

### rewards?

```ts
optional rewards: NetworkStakeStepRewardsViewer;
```

## Methods

### positionCount()

```ts
positionCount(step): Promisable<number>;
```

### Parameters

#### step

### Returns

`Promisable`\<`number`\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`positionCount`](StepViewerMethods.md#positioncount)

***

### positions()

```ts
positions(step, options?): Promisable<Position[]>;
```

### Parameters

#### step

#### options?

[`PagedPositionsOptions`](#PagedPositionsOptions)

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`positions`](StepViewerMethods.md#positions)

***

### randomizer()

```ts
randomizer(step): Promisable<bigint>;
```

### Parameters

#### step

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`randomizer`](StepViewerMethods.md#randomizer)

***

### stake()

```ts
stake(step): Promisable<bigint>;
```

### Parameters

#### step

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`stake`](StepViewerMethods.md#stake)

***

### stakerCount()

```ts
stakerCount(step): Promisable<number>;
```

### Parameters

#### step

### Returns

`Promisable`\<`number`\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`stakerCount`](StepViewerMethods.md#stakercount)

***

### stakers()

```ts
stakers(step, options?): Promisable<Address[]>;
```

### Parameters

#### step

#### options?

[`PagedStakersOptions`](#PagedStakersOptions)

### Returns

`Promisable`\<`Address`[]\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`stakers`](StepViewerMethods.md#stakers)

***

### weight()

```ts
weight(step, positionId?): Promisable<bigint>;
```

### Parameters

#### step

#### positionId?

`PositionId`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`StepViewerMethods`](#StepViewerMethods).[`weight`](StepViewerMethods.md#weight)

  ### <a id="StepViewerMethods"></a>StepViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`StepViewer`](#StepViewer)

## Methods

### positionCount()

```ts
positionCount(step): Promisable<number>;
```

### Parameters

#### step

### Returns

`Promisable`\<`number`\>

***

### positions()

```ts
positions(step, options?): Promisable<Position[]>;
```

### Parameters

#### step

#### options?

[`PagedPositionsOptions`](#PagedPositionsOptions)

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

***

### randomizer()

```ts
randomizer(step): Promisable<bigint>;
```

### Parameters

#### step

### Returns

`Promisable`\<`bigint`\>

***

### stake()

```ts
stake(step): Promisable<bigint>;
```

### Parameters

#### step

### Returns

`Promisable`\<`bigint`\>

***

### stakerCount()

```ts
stakerCount(step): Promisable<number>;
```

### Parameters

#### step

### Returns

`Promisable`\<`number`\>

***

### stakers()

```ts
stakers(step, options?): Promisable<Address[]>;
```

### Parameters

#### step

#### options?

[`PagedStakersOptions`](#PagedStakersOptions)

### Returns

`Promisable`\<`Address`[]\>

***

### weight()

```ts
weight(step, positionId?): Promisable<bigint>;
```

### Parameters

#### step

#### positionId?

`PositionId`

### Returns

`Promisable`\<`bigint`\>

  ### <a id="SynchronousMap"></a>SynchronousMap

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`SynchronousMapRead`](#SynchronousMapRead)\<`K`, `V`\>.[`SynchronousMapWrite`](#SynchronousMapWrite)\<`K`, `V`\>

## Type Parameters

### K

`K`

### V

`V`

## Methods

### get()

```ts
get(id): V | undefined;
```

### Parameters

#### id

`K`

### Returns

`V` \| `undefined`

### Inherited from

[`SynchronousMapRead`](#SynchronousMapRead).[`get`](SynchronousMapRead.md#get)

***

### getMany()

```ts
getMany(id): V[];
```

### Parameters

#### id

`K`[]

### Returns

`V`[]

### Inherited from

[`SynchronousMapRead`](#SynchronousMapRead).[`getMany`](SynchronousMapRead.md#getmany)

***

### has()

```ts
has(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Inherited from

[`SynchronousMapRead`](#SynchronousMapRead).[`has`](SynchronousMapRead.md#has)

***

### clear()

```ts
clear(): void;
```

### Returns

`void`

### Inherited from

[`SynchronousMapWrite`](#SynchronousMapWrite).[`clear`](SynchronousMapWrite.md#clear)

***

### delete()

```ts
delete(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

### Inherited from

[`SynchronousMapWrite`](#SynchronousMapWrite).[`delete`](SynchronousMapWrite.md#delete)

***

### set()

```ts
set(id, data): void;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`void`

### Inherited from

[`SynchronousMapWrite`](#SynchronousMapWrite).[`set`](SynchronousMapWrite.md#set)

***

### setMany()

```ts
setMany(entries): void;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`void`

### Inherited from

[`SynchronousMapWrite`](#SynchronousMapWrite).[`setMany`](SynchronousMapWrite.md#setmany)

  ### <a id="SynchronousMapRead"></a>SynchronousMapRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`SynchronousMap`](#SynchronousMap)

## Type Parameters

### K

`K`

### V

`V`

## Methods

### get()

```ts
get(id): V | undefined;
```

### Parameters

#### id

`K`

### Returns

`V` \| `undefined`

***

### getMany()

```ts
getMany(id): V[];
```

### Parameters

#### id

`K`[]

### Returns

`V`[]

***

### has()

```ts
has(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

  ### <a id="SynchronousMapWrite"></a>SynchronousMapWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`SynchronousMap`](#SynchronousMap)

## Type Parameters

### K

`K`

### V

`V`

## Methods

### clear()

```ts
clear(): void;
```

### Returns

`void`

***

### delete()

```ts
delete(id): boolean;
```

### Parameters

#### id

`K`

### Returns

`boolean`

***

### set()

```ts
set(id, data): void;
```

### Parameters

#### id

`K`

#### data

`V`

### Returns

`void`

***

### setMany()

```ts
setMany(entries): void;
```

### Parameters

#### entries

\[`K`, `V`\][]

### Returns

`void`

  ### <a id="TimeSyncViewer"></a>TimeSyncViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`TimeSyncViewerMethods`](#TimeSyncViewerMethods)

## Methods

### convertTime()

```ts
convertTime(
   fromDomain, 
   toDomain, 
from): Promisable<number>;
```

Convert time between different domains

### Parameters

#### fromDomain

`TimeDomain`

#### toDomain

`TimeDomain`

#### from

`number`

### Returns

`Promisable`\<`number`\>

### Inherited from

[`TimeSyncViewerMethods`](#TimeSyncViewerMethods).[`convertTime`](TimeSyncViewerMethods.md#converttime)

***

### currentTime()

```ts
currentTime(domain): Promisable<[string, number]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promisable`\<\[`string`, `number`\]\>

### Inherited from

[`TimeSyncViewerMethods`](#TimeSyncViewerMethods).[`currentTime`](TimeSyncViewerMethods.md#currenttime)

***

### currentTimeAndHash()

```ts
currentTimeAndHash(domain): Promisable<[number, string | null]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promisable`\<\[`number`, `string` \| `null`\]\>

### Inherited from

[`TimeSyncViewerMethods`](#TimeSyncViewerMethods).[`currentTimeAndHash`](TimeSyncViewerMethods.md#currenttimeandhash)

***

### currentTimePayload()

```ts
currentTimePayload(): Promisable<{
}>;
```

Create a TimePayload with the current time from all configured domains

### Returns

`Promisable`\<\{
\}\>

### Inherited from

[`TimeSyncViewerMethods`](#TimeSyncViewerMethods).[`currentTimePayload`](TimeSyncViewerMethods.md#currenttimepayload)

  ### <a id="TimeSyncViewerMethods"></a>TimeSyncViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`TimeSyncViewer`](#TimeSyncViewer)

## Methods

### convertTime()

```ts
convertTime(
   fromDomain, 
   toDomain, 
from): Promisable<number>;
```

Convert time between different domains

### Parameters

#### fromDomain

`TimeDomain`

#### toDomain

`TimeDomain`

#### from

`number`

### Returns

`Promisable`\<`number`\>

***

### currentTime()

```ts
currentTime(domain): Promisable<[string, number]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promisable`\<\[`string`, `number`\]\>

***

### currentTimeAndHash()

```ts
currentTimeAndHash(domain): Promisable<[number, string | null]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promisable`\<\[`number`, `string` \| `null`\]\>

***

### currentTimePayload()

```ts
currentTimePayload(): Promisable<{
}>;
```

Create a TimePayload with the current time from all configured domains

### Returns

`Promisable`\<\{
\}\>

  ### <a id="TransactionFeesInstance"></a>TransactionFeesInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ValidatableInstance`](#ValidatableInstance)

## Properties

### base

```ts
base: bigint;
```

***

### gasLimit

```ts
gasLimit: bigint;
```

***

### gasPrice

```ts
gasPrice: bigint;
```

***

### priority

```ts
priority: bigint;
```

## Methods

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

### Inherited from

[`ValidatableInstance`](#ValidatableInstance).[`validate`](ValidatableInstance.md#validate)

  ### <a id="TransactionOptions"></a>TransactionOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### chain?

```ts
optional chain: Hex;
```

***

### exp?

```ts
optional exp: number;
```

***

### fees?

```ts
optional fees: TransactionFeesBigInt;
```

***

### from?

```ts
optional from: Address;
```

***

### nbf?

```ts
optional nbf: number;
```

  ### <a id="TransactionSubmitter"></a>TransactionSubmitter

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Deprecated

use XyoGatewayHelpers instead

## Methods

### ~~submitTransaction()~~

```ts
submitTransaction(
   elevatedPayloads, 
   additionalPayloads, 
options?): Promisable<SignedHydratedTransaction>;
```

### Parameters

#### elevatedPayloads

`AllowedBlockPayload`[]

#### additionalPayloads

`Payload`[]

#### options?

[`TransactionSubmitterOptions`](#TransactionSubmitterOptions)

### Returns

`Promisable`\<`SignedHydratedTransaction`\>

### Deprecated

use runner.broadcastTransaction

  ### <a id="TransactionSubmitterOptions"></a>TransactionSubmitterOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Deprecated

use TransactionOptions instead

## Properties

### ~~chain?~~

```ts
optional chain: Hex;
```

***

### ~~exp?~~

```ts
optional exp: number;
```

***

### ~~fees?~~

```ts
optional fees: TransactionFeesBigInt;
```

***

### ~~from?~~

```ts
optional from: Address;
```

***

### ~~nbf?~~

```ts
optional nbf: number;
```

  ### <a id="TransactionViewerMethods"></a>TransactionViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)

## Methods

### transactionByBlockHashAndIndex()

```ts
transactionByBlockHashAndIndex(blockHash, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockHash

`Hash`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

***

### transactionByBlockNumberAndIndex()

```ts
transactionByBlockNumberAndIndex(blockNumber, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockNumber

`number`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

***

### transactionByHash()

```ts
transactionByHash(transactionHash): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### transactionHash

`Hash`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

  ### <a id="TransferBalanceViewerMethods"></a>TransferBalanceViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoViewerMethods`](#XyoViewerMethods)

## Methods

### transferBalance()

```ts
transferBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`AttoXL1`\>

***

### transferBalanceHistory()

```ts
transferBalanceHistory(address, range?): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### range?

`XL1BlockRange`

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

***

### transferPairBalance()

```ts
transferPairBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<`AttoXL1`\>

***

### transferPairBalanceHistory()

```ts
transferPairBalanceHistory(address): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

  ### <a id="TransferBalancesViewerMethods"></a>TransferBalancesViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### transferBalances()

```ts
transferBalances(address): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>;
```

### Parameters

#### address

`Address`[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `Record`\<`Address`, `AttoXL1`\>\>\>\>

***

### transferBalancesHistories()

```ts
transferBalancesHistories(address): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>;
```

### Parameters

#### address

`Address`[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `Record`\<`Address`, [`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>\>\>\>

***

### transferPairBalances()

```ts
transferPairBalances(address): Promisable<Partial<Record<Address, Record<Address, AttoXL1>>>>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `Record`\<`Address`, `AttoXL1`\>\>\>\>

***

### transferPairBalancesHistories()

```ts
transferPairBalancesHistories(address): Promisable<Partial<Record<Address, Record<Address, TransferBalanceHistoryItem[]>>>>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)[]

### Returns

`Promisable`\<`Partial`\<`Record`\<`Address`, `Record`\<`Address`, [`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>\>\>\>

  ### <a id="TransfersStepSummaryContext"></a>TransfersStepSummaryContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContext`](#../type-aliases/ChainSummaryContext)\<[`TransfersStepSummary`](#../type-aliases/TransfersStepSummary)\>

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

```ts
ChainSummaryContext.caches
```

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

```ts
ChainSummaryContext.logger
```

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

```ts
ChainSummaryContext.store
```

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

```ts
ChainSummaryContext.chainId
```

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

```ts
ChainSummaryContext.stepSemaphores
```

***

### summaryMap

```ts
summaryMap: MapTypeRead<string, TransfersStepSummary> & MapTypeWrite<string, TransfersStepSummary>;
```

### Inherited from

```ts
ChainSummaryContext.summaryMap
```

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

```ts
ChainSummaryContext.windowSize
```

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

```ts
ChainSummaryContext.head
```

  ### <a id="TransfersStepSummaryContextRead"></a>TransfersStepSummaryContextRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`ChainSummaryContextRead`](#ChainSummaryContextRead)\<[`TransfersStepSummary`](#../type-aliases/TransfersStepSummary)\>

## Properties

### caches?

```ts
optional caches: Record<string, MapType<string, string | number | bigint | object>>;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`caches`](ChainSummaryContextRead.md#caches)

***

### logger?

```ts
optional logger: Logger;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`logger`](ChainSummaryContextRead.md#logger)

***

### store

```ts
store: ChainStoreRead;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`store`](ChainSummaryContextRead.md#store)

***

### chainId

```ts
chainId: ChainId;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`chainId`](ChainSummaryContextRead.md#chainid)

***

### stepSemaphores

```ts
stepSemaphores: Semaphore[];
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`stepSemaphores`](ChainSummaryContextRead.md#stepsemaphores)

***

### summaryMap

```ts
summaryMap: MapTypeRead;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`summaryMap`](ChainSummaryContextRead.md#summarymap)

***

### windowSize?

```ts
optional windowSize: number;
```

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`windowSize`](ChainSummaryContextRead.md#windowsize)

## Methods

### head()

```ts
head(): Promisable<[Hash, number]>;
```

### Returns

`Promisable`\<\[`Hash`, `number`\]\>

### Inherited from

[`ChainSummaryContextRead`](#ChainSummaryContextRead).[`head`](ChainSummaryContextRead.md#head)

  ### <a id="ValidatableInstance"></a>ValidatableInstance

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`AddressInstance`](#AddressInstance)
- [`TransactionFeesInstance`](#TransactionFeesInstance)
- [`PayloadInstance`](#PayloadInstance)
- [`SignatureInstance`](#SignatureInstance)

## Methods

### validate()

```ts
validate(): Promisable<Error[]>;
```

### Returns

`Promisable`\<`Error`[]\>

  ### <a id="XyoClient"></a>XyoClient

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### gateways

```ts
gateways: Readonly<Record<GatewayName, XyoGateway>>;
```

***

### permissions

```ts
permissions: XyoPermissions;
```

## Methods

### addGateway()?

```ts
optional addGateway(providerOrConfig): Promise<XyoGateway>;
```

### Parameters

#### providerOrConfig

[`XyoGatewayConfig`](#XyoGatewayConfig) | [`XyoRpcGatewayConfig`](#XyoRpcGatewayConfig) | [`XyoGateway`](#XyoGateway)

### Returns

`Promise`\<[`XyoGateway`](#XyoGateway)\>

***

### removeGateway()?

```ts
optional removeGateway(name): Promise<void>;
```

### Parameters

#### name

`GatewayName`

### Returns

`Promise`\<`void`\>

  ### <a id="XyoConnection"></a>XyoConnection

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### network?

```ts
optional network: XyoNetwork;
```

***

### networkStake?

```ts
optional networkStake: NetworkStakeViewer;
```

***

### runner?

```ts
optional runner: XyoRunner;
```

***

### storage?

```ts
optional storage: 
  | DataLakeViewer
  | DataLakeRunner
  | DataLakeRunner & DataLakeViewer;
```

***

### viewer?

```ts
optional viewer: XyoViewer;
```

  ### <a id="XyoGateway"></a>XyoGateway

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoGatewayRunner`](#XyoGatewayRunner)

## Properties

### connectionInstance

```ts
connectionInstance: XyoConnection;
```

Returns the connection provider for this gateway.

***

### signerInstance

```ts
signerInstance: XyoSigner;
```

Returns the signer for this gateway.

## Methods

### ~~connection()~~

```ts
connection(): Promisable<XyoConnection>;
```

### Returns

`Promisable`\<[`XyoConnection`](#XyoConnection)\>

### Deprecated

use connectionInstance

***

### ~~signer()~~

```ts
signer(): Promisable<XyoSigner>;
```

### Returns

`Promisable`\<[`XyoSigner`](#XyoSigner)\>

### Deprecated

use signerInstance

  ### <a id="XyoGatewayConfig"></a>XyoGatewayConfig

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoRpcGatewayConfig`](#XyoRpcGatewayConfig)

## Properties

### name

```ts
name: GatewayName;
```

  ### <a id="XyoGatewayRunner"></a>XyoGatewayRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`XyoGateway`](#XyoGateway)

## Properties

### connectionInstance

```ts
connectionInstance: XyoConnection;
```

Returns the connection provider for this gateway.

### Inherited from

[`XyoGateway`](#XyoGateway).[`connectionInstance`](XyoGateway.md#connectioninstance)

***

### signerInstance

```ts
signerInstance: XyoSigner;
```

Returns the signer for this gateway.

### Inherited from

[`XyoGateway`](#XyoGateway).[`signerInstance`](XyoGateway.md#signerinstance)

***

### dataLakes

```ts
dataLakes: DataLakeRunner[];
```

## Methods

### ~~connection()~~

```ts
connection(): Promisable<XyoConnection>;
```

### Returns

`Promisable`\<[`XyoConnection`](#XyoConnection)\>

### Deprecated

use connectionInstance

### Inherited from

[`XyoGateway`](#XyoGateway).[`connection`](XyoGateway.md#connection)

***

### ~~signer()~~

```ts
signer(): Promisable<XyoSigner>;
```

### Returns

`Promisable`\<[`XyoSigner`](#XyoSigner)\>

### Deprecated

use signerInstance

### Inherited from

[`XyoGateway`](#XyoGateway).[`signer`](XyoGateway.md#signer)

***

### addPayloadsToChain()

```ts
addPayloadsToChain(
   onChain, 
   offChain, 
options?): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### onChain

`AllowedBlockPayload`[]

#### offChain

`Payload`[]

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

### Inherited from

[`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`addPayloadsToChain`](XyoGatewayRunnerMethods.md#addpayloadstochain)

***

### addTransactionToChain()

```ts
addTransactionToChain(tx): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### tx

`SignedHydratedTransaction` | `UnsignedHydratedTransaction`

### Returns

`Promisable`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

### Inherited from

[`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`addTransactionToChain`](XyoGatewayRunnerMethods.md#addtransactiontochain)

***

### confirmSubmittedTransaction()

```ts
confirmSubmittedTransaction(txHash, options?): Promisable<SignedHydratedTransaction>;
```

### Parameters

#### txHash

`Hash`

#### options?

[`ConfirmSubmittedTransactionOptions`](#../type-aliases/ConfirmSubmittedTransactionOptions)

### Returns

`Promisable`\<`SignedHydratedTransaction`\>

### Inherited from

[`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`confirmSubmittedTransaction`](XyoGatewayRunnerMethods.md#confirmsubmittedtransaction)

***

### send()

```ts
send(
   to, 
   amount, 
options?): Promisable<Hash>;
```

### Parameters

#### to

`Address`

#### amount

`AttoXL1`

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<`Hash`\>

### Inherited from

[`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`send`](XyoGatewayRunnerMethods.md#send)

***

### sendMany()

```ts
sendMany(transfers, options?): Promisable<Hash>;
```

### Parameters

#### transfers

`Record`\<`Address`, `AttoXL1`\>

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<`Hash`\>

### Inherited from

[`XyoGatewayRunnerMethods`](#XyoGatewayRunnerMethods).[`sendMany`](XyoGatewayRunnerMethods.md#sendmany)

***

### addDataLake()

```ts
addDataLake(dataLake): number;
```

### Parameters

#### dataLake

[`DataLakeRunner`](#DataLakeRunner)

### Returns

`number`

***

### removeDataLake()

```ts
removeDataLake(index): void;
```

### Parameters

#### index

`number`

### Returns

`void`

  ### <a id="XyoGatewayRunnerMethods"></a>XyoGatewayRunnerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extended by

- [`XyoGatewayRunner`](#XyoGatewayRunner)

## Methods

### addPayloadsToChain()

```ts
addPayloadsToChain(
   onChain, 
   offChain, 
options?): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### onChain

`AllowedBlockPayload`[]

#### offChain

`Payload`[]

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

***

### addTransactionToChain()

```ts
addTransactionToChain(tx): Promisable<[Hash, SignedHydratedTransactionWithHashMeta]>;
```

### Parameters

#### tx

`SignedHydratedTransaction` | `UnsignedHydratedTransaction`

### Returns

`Promisable`\<\[`Hash`, `SignedHydratedTransactionWithHashMeta`\]\>

***

### confirmSubmittedTransaction()

```ts
confirmSubmittedTransaction(txHash, options?): Promisable<SignedHydratedTransaction>;
```

### Parameters

#### txHash

`Hash`

#### options?

[`ConfirmSubmittedTransactionOptions`](#../type-aliases/ConfirmSubmittedTransactionOptions)

### Returns

`Promisable`\<`SignedHydratedTransaction`\>

***

### send()

```ts
send(
   to, 
   amount, 
options?): Promisable<Hash>;
```

### Parameters

#### to

`Address`

#### amount

`AttoXL1`

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<`Hash`\>

***

### sendMany()

```ts
sendMany(transfers, options?): Promisable<Hash>;
```

### Parameters

#### transfers

`Record`\<`Address`, `AttoXL1`\>

#### options?

[`TransactionOptions`](#TransactionOptions)

### Returns

`Promisable`\<`Hash`\>

  ### <a id="XyoNetwork"></a>XyoNetwork

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### status()

```ts
status(): Promisable<NetworkStatus>;
```

### Returns

`Promisable`\<`NetworkStatus`\>

  ### <a id="XyoPermissions"></a>XyoPermissions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

Interface for getting, requesting and revoking permissions

See - https://eips.ethereum.org/EIPS/eip-2255

## Extends

- [`PermissionsGetHandler`](#PermissionsGetHandler).[`PermissionRequestsHandler`](#PermissionRequestsHandler)

## Extended by

- [`PermissionsProvider`](#PermissionsProvider)

## Methods

### getPermissions()

```ts
getPermissions(): Promise<InvokerPermission[]>;
```

Returns the permissions that are currently granted

Per the spec - "The wallet_getPermissions method is used for getting an array of current permissions
(empty by default). It takes no parameters and returns an array of Permission objects."

See - https://eips.ethereum.org/EIPS/eip-2255#specification

### Returns

`Promise`\<[`InvokerPermission`](#InvokerPermission)[]\>

### Inherited from

[`PermissionsGetHandler`](#PermissionsGetHandler).[`getPermissions`](PermissionsGetHandler.md#getpermissions)

***

### requestPermissions()

```ts
requestPermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)[]

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

### Inherited from

[`PermissionRequestsHandler`](#PermissionRequestsHandler).[`requestPermissions`](PermissionRequestsHandler.md#requestpermissions)

***

### revokePermissions()

```ts
revokePermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

[`PermissionRequest`](#PermissionRequest)

### Returns

`Promise`\<[`RequestedPermission`](#RequestedPermission)[]\>

### Inherited from

[`PermissionRequestsHandler`](#PermissionRequestsHandler).[`revokePermissions`](PermissionRequestsHandler.md#revokepermissions)

  ### <a id="XyoRpcGatewayConfig"></a>XyoRpcGatewayConfig

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`XyoGatewayConfig`](#XyoGatewayConfig)

## Properties

### name

```ts
name: GatewayName;
```

### Inherited from

[`XyoGatewayConfig`](#XyoGatewayConfig).[`name`](XyoGatewayConfig.md#name)

***

### dataLakeEndpoint

```ts
dataLakeEndpoint: string;
```

***

### networkEndpoint

```ts
networkEndpoint: string;
```

  ### <a id="XyoRunner"></a>XyoRunner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### broadcastTransaction()

```ts
broadcastTransaction(transaction): Promisable<Hash>;
```

### Parameters

#### transaction

`SignedHydratedTransaction`

### Returns

`Promisable`\<`Hash`\>

  ### <a id="XyoSigner"></a>XyoSigner

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### address()

```ts
address(): Promisable<Address>;
```

### Returns

`Promisable`\<`Address`\>

***

### signTransaction()

```ts
signTransaction(tx): Promisable<SignedHydratedTransactionWithHashMeta>;
```

### Parameters

#### tx

\[`UnsignedBoundWitness`\<`TransactionBoundWitness`\>, `Payload`[]\]

### Returns

`Promisable`\<`SignedHydratedTransactionWithHashMeta`\>

  ### <a id="XyoSignerDeprecated"></a>XyoSignerDeprecated

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Methods

### ~~createSignedTransaction()~~

```ts
createSignedTransaction(
   chain, 
   elevatedPayloads, 
   additionalPayloads, 
   nbf, 
   exp, 
   fees, 
from?): Promisable<Signed<TransactionBoundWitness>>;
```

### Parameters

#### chain

`ChainId`

#### elevatedPayloads

`AllowedBlockPayload`[]

#### additionalPayloads

`Payload`[]

#### nbf

`number`

#### exp

`number`

#### fees

`TransactionFeesBigInt`

#### from?

`Address`

### Returns

`Promisable`\<`Signed`\<`TransactionBoundWitness`\>\>

### Deprecated

use signTransaction instead

  ### <a id="XyoViewer"></a>XyoViewer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`XyoViewerMethods`](#XyoViewerMethods)

## Properties

### networkStake?

```ts
optional networkStake: NetworkStakeViewer;
```

***

### step?

```ts
optional step: StepViewer;
```

## Methods

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`accountBalance`](XyoViewerMethods.md#accountbalance)

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promisable<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`accountBalanceHistory`](XyoViewerMethods.md#accountbalancehistory)

***

### blockByHash()

```ts
blockByHash(hash): Promisable<HydratedBlock | null>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`blockByHash`](XyoViewerMethods.md#blockbyhash)

***

### blockByNumber()

```ts
blockByNumber(block): Promisable<HydratedBlock | null>;
```

### Parameters

#### block

`XL1BlockNumber`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`blockByNumber`](XyoViewerMethods.md#blockbynumber)

***

### blocksByHash()

```ts
blocksByHash(hash, limit?): Promisable<HydratedBlock[]>;
```

### Parameters

#### hash

`Hash`

#### limit?

`number`

### Returns

`Promisable`\<`HydratedBlock`[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`blocksByHash`](XyoViewerMethods.md#blocksbyhash)

***

### currentBlock()

```ts
currentBlock(): Promisable<HydratedBlock>;
```

### Returns

`Promisable`\<`HydratedBlock`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`currentBlock`](XyoViewerMethods.md#currentblock)

***

### currentBlockHash()

```ts
currentBlockHash(): Promisable<Hash>;
```

### Returns

`Promisable`\<`Hash`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`currentBlockHash`](XyoViewerMethods.md#currentblockhash)

***

### currentBlockNumber()

```ts
currentBlockNumber(): Promisable<XL1BlockNumber>;
```

### Returns

`Promisable`\<`XL1BlockNumber`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`currentBlockNumber`](XyoViewerMethods.md#currentblocknumber)

***

### chainId()

```ts
chainId(): Promisable<ChainId>;
```

### Returns

`Promisable`\<`ChainId`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`chainId`](XyoViewerMethods.md#chainid)

***

### chainIdAtBlock()

```ts
chainIdAtBlock(blockNumber): Promisable<ChainId | undefined>;
```

### Parameters

#### blockNumber

`number`

### Returns

`Promisable`\<`ChainId` \| `undefined`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`chainIdAtBlock`](XyoViewerMethods.md#chainidatblock)

***

### forkHistory()

```ts
forkHistory(): Promisable<ForkHistory>;
```

### Returns

`Promisable`\<[`ForkHistory`](#../type-aliases/ForkHistory)\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`forkHistory`](XyoViewerMethods.md#forkhistory)

***

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardAddressHistory`](XyoViewerMethods.md#networkstakesteprewardaddresshistory)

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardAddressReward`](XyoViewerMethods.md#networkstakesteprewardaddressreward)

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardAddressShare`](XyoViewerMethods.md#networkstakesteprewardaddressshare)

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promisable<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardWeightForAddress`](XyoViewerMethods.md#networkstakesteprewardweightforaddress)

***

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardPoolRewards`](XyoViewerMethods.md#networkstakesteprewardpoolrewards)

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardPoolShares`](XyoViewerMethods.md#networkstakesteprewardpoolshares)

***

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardPositionWeight`](XyoViewerMethods.md#networkstakesteprewardpositionweight)

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardPotentialPositionLoss`](XyoViewerMethods.md#networkstakesteprewardpotentialpositionloss)

***

### networkStakeStepRewardClaimedByAddress()

```ts
networkStakeStepRewardClaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardClaimedByAddress`](XyoViewerMethods.md#networkstakesteprewardclaimedbyaddress)

***

### networkStakeStepRewardForPosition()

```ts
networkStakeStepRewardForPosition(position, range): Promisable<[bigint, bigint]>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardForPosition`](XyoViewerMethods.md#networkstakesteprewardforposition)

***

### networkStakeStepRewardForStep()

```ts
networkStakeStepRewardForStep(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardForStep`](XyoViewerMethods.md#networkstakesteprewardforstep)

***

### networkStakeStepRewardForStepForPosition()

```ts
networkStakeStepRewardForStepForPosition(context, position): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardForStepForPosition`](XyoViewerMethods.md#networkstakesteprewardforstepforposition)

***

### networkStakeStepRewardRandomizer()

```ts
networkStakeStepRewardRandomizer(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardRandomizer`](XyoViewerMethods.md#networkstakesteprewardrandomizer)

***

### networkStakeStepRewardStakerCount()

```ts
networkStakeStepRewardStakerCount(context): Promisable<number>;
```

### Parameters

#### context

### Returns

`Promisable`\<`number`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardStakerCount`](XyoViewerMethods.md#networkstakesteprewardstakercount)

***

### networkStakeStepRewardUnclaimedByAddress()

```ts
networkStakeStepRewardUnclaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardUnclaimedByAddress`](XyoViewerMethods.md#networkstakesteprewardunclaimedbyaddress)

***

### networkStakeStepRewardsForPosition()

```ts
networkStakeStepRewardsForPosition(position, range): Promisable<Record<StepIdentityString, [bigint, bigint]>>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, \[`bigint`, `bigint`\]\>\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardsForPosition`](XyoViewerMethods.md#networkstakesteprewardsforposition)

***

### networkStakeStepRewardsForRange()

```ts
networkStakeStepRewardsForRange(range): Promisable<bigint>;
```

### Parameters

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardsForRange`](XyoViewerMethods.md#networkstakesteprewardsforrange)

***

### networkStakeStepRewardsForStepLevel()

```ts
networkStakeStepRewardsForStepLevel(stepLevel, range): Promisable<bigint>;
```

### Parameters

#### stepLevel

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`networkStakeStepRewardsForStepLevel`](XyoViewerMethods.md#networkstakesteprewardsforsteplevel)

***

### stakeById()

```ts
stakeById(id): Promisable<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`stakeById`](XyoViewerMethods.md#stakebyid)

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promisable<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`stakeByStaker`](XyoViewerMethods.md#stakebystaker)

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promisable<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`stakesByStaked`](XyoViewerMethods.md#stakesbystaked)

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promisable<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`stakesByStaker`](XyoViewerMethods.md#stakesbystaker)

***

### transactionByBlockHashAndIndex()

```ts
transactionByBlockHashAndIndex(blockHash, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockHash

`Hash`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transactionByBlockHashAndIndex`](XyoViewerMethods.md#transactionbyblockhashandindex)

***

### transactionByBlockNumberAndIndex()

```ts
transactionByBlockNumberAndIndex(blockNumber, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockNumber

`number`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transactionByBlockNumberAndIndex`](XyoViewerMethods.md#transactionbyblocknumberandindex)

***

### transactionByHash()

```ts
transactionByHash(transactionHash): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### transactionHash

`Hash`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transactionByHash`](XyoViewerMethods.md#transactionbyhash)

***

### transferBalance()

```ts
transferBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transferBalance`](XyoViewerMethods.md#transferbalance)

***

### transferBalanceHistory()

```ts
transferBalanceHistory(address, range?): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### range?

`XL1BlockRange`

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transferBalanceHistory`](XyoViewerMethods.md#transferbalancehistory)

***

### transferPairBalance()

```ts
transferPairBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transferPairBalance`](XyoViewerMethods.md#transferpairbalance)

***

### transferPairBalanceHistory()

```ts
transferPairBalanceHistory(address): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

### Inherited from

[`XyoViewerMethods`](#XyoViewerMethods).[`transferPairBalanceHistory`](XyoViewerMethods.md#transferpairbalancehistory)

  ### <a id="XyoViewerMethods"></a>XyoViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Extends

- [`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`TransferBalanceViewerMethods`](#TransferBalanceViewerMethods).[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`ChainViewerMethods`](#ChainViewerMethods).[`BlockViewierMethods`](#BlockViewierMethods).[`TransactionViewerMethods`](#TransactionViewerMethods).[`StakeViewerMethods`](#StakeViewerMethods).[`ForkViewerMethods`](#ForkViewerMethods)

## Extended by

- [`XyoViewer`](#XyoViewer)

## Methods

### accountBalance()

```ts
accountBalance(address, headOrRange?): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalance`](AccountBalanceViewerMethods.md#accountbalance)

***

### accountBalanceHistory()

```ts
accountBalanceHistory(address, headOrRange?): Promisable<AccountBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### headOrRange?

`Hash` | `XL1BlockRange`

### Returns

`Promisable`\<[`AccountBalanceHistoryItem`](#../type-aliases/AccountBalanceHistoryItem)[]\>

### Inherited from

[`AccountBalanceViewerMethods`](#AccountBalanceViewerMethods).[`accountBalanceHistory`](AccountBalanceViewerMethods.md#accountbalancehistory)

***

### blockByHash()

```ts
blockByHash(hash): Promisable<HydratedBlock | null>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blockByHash`](BlockViewierMethods.md#blockbyhash)

***

### blockByNumber()

```ts
blockByNumber(block): Promisable<HydratedBlock | null>;
```

### Parameters

#### block

`XL1BlockNumber`

### Returns

`Promisable`\<`HydratedBlock` \| `null`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blockByNumber`](BlockViewierMethods.md#blockbynumber)

***

### blocksByHash()

```ts
blocksByHash(hash, limit?): Promisable<HydratedBlock[]>;
```

### Parameters

#### hash

`Hash`

#### limit?

`number`

### Returns

`Promisable`\<`HydratedBlock`[]\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`blocksByHash`](BlockViewierMethods.md#blocksbyhash)

***

### currentBlock()

```ts
currentBlock(): Promisable<HydratedBlock>;
```

### Returns

`Promisable`\<`HydratedBlock`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlock`](BlockViewierMethods.md#currentblock)

***

### currentBlockHash()

```ts
currentBlockHash(): Promisable<Hash>;
```

### Returns

`Promisable`\<`Hash`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlockHash`](BlockViewierMethods.md#currentblockhash)

***

### currentBlockNumber()

```ts
currentBlockNumber(): Promisable<XL1BlockNumber>;
```

### Returns

`Promisable`\<`XL1BlockNumber`\>

### Inherited from

[`BlockViewierMethods`](#BlockViewierMethods).[`currentBlockNumber`](BlockViewierMethods.md#currentblocknumber)

***

### chainId()

```ts
chainId(): Promisable<ChainId>;
```

### Returns

`Promisable`\<`ChainId`\>

### Inherited from

[`ChainViewerMethods`](#ChainViewerMethods).[`chainId`](ChainViewerMethods.md#chainid)

***

### chainIdAtBlock()

```ts
chainIdAtBlock(blockNumber): Promisable<ChainId | undefined>;
```

### Parameters

#### blockNumber

`number`

### Returns

`Promisable`\<`ChainId` \| `undefined`\>

### Inherited from

[`ForkViewerMethods`](#ForkViewerMethods).[`chainIdAtBlock`](ForkViewerMethods.md#chainidatblock)

***

### forkHistory()

```ts
forkHistory(): Promisable<ForkHistory>;
```

### Returns

`Promisable`\<[`ForkHistory`](#../type-aliases/ForkHistory)\>

### Inherited from

[`ForkViewerMethods`](#ForkViewerMethods).[`forkHistory`](ForkViewerMethods.md#forkhistory)

***

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressHistory`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddresshistory)

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressReward`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddressreward)

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardAddressShare`](NetworkStakeStepRewardViewer.md#networkstakesteprewardaddressshare)

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promisable<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardWeightForAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardweightforaddress)

***

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPoolRewards`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpoolrewards)

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promisable<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promisable`\<`Record`\<`Address`, `bigint`\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPoolShares`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpoolshares)

***

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPositionWeight`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpositionweight)

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promisable<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardPotentialPositionLoss`](NetworkStakeStepRewardViewer.md#networkstakesteprewardpotentialpositionloss)

***

### networkStakeStepRewardClaimedByAddress()

```ts
networkStakeStepRewardClaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardClaimedByAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardclaimedbyaddress)

***

### networkStakeStepRewardForPosition()

```ts
networkStakeStepRewardForPosition(position, range): Promisable<[bigint, bigint]>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforposition)

***

### networkStakeStepRewardForStep()

```ts
networkStakeStepRewardForStep(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForStep`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforstep)

***

### networkStakeStepRewardForStepForPosition()

```ts
networkStakeStepRewardForStepForPosition(context, position): Promisable<[bigint, bigint]>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promisable`\<\[`bigint`, `bigint`\]\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardForStepForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardforstepforposition)

***

### networkStakeStepRewardRandomizer()

```ts
networkStakeStepRewardRandomizer(context): Promisable<bigint>;
```

### Parameters

#### context

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardRandomizer`](NetworkStakeStepRewardViewer.md#networkstakesteprewardrandomizer)

***

### networkStakeStepRewardStakerCount()

```ts
networkStakeStepRewardStakerCount(context): Promisable<number>;
```

### Parameters

#### context

### Returns

`Promisable`\<`number`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardStakerCount`](NetworkStakeStepRewardViewer.md#networkstakesteprewardstakercount)

***

### networkStakeStepRewardUnclaimedByAddress()

```ts
networkStakeStepRewardUnclaimedByAddress(address): Promisable<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardUnclaimedByAddress`](NetworkStakeStepRewardViewer.md#networkstakesteprewardunclaimedbyaddress)

***

### networkStakeStepRewardsForPosition()

```ts
networkStakeStepRewardsForPosition(position, range): Promisable<Record<StepIdentityString, [bigint, bigint]>>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, \[`bigint`, `bigint`\]\>\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForPosition`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforposition)

***

### networkStakeStepRewardsForRange()

```ts
networkStakeStepRewardsForRange(range): Promisable<bigint>;
```

### Parameters

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForRange`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforrange)

***

### networkStakeStepRewardsForStepLevel()

```ts
networkStakeStepRewardsForStepLevel(stepLevel, range): Promisable<bigint>;
```

### Parameters

#### stepLevel

`number`

#### range

\[`number`, `number`\]

### Returns

`Promisable`\<`bigint`\>

### Inherited from

[`NetworkStakeStepRewardViewer`](#NetworkStakeStepRewardViewer).[`networkStakeStepRewardsForStepLevel`](NetworkStakeStepRewardViewer.md#networkstakesteprewardsforsteplevel)

***

### stakeById()

```ts
stakeById(id): Promisable<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakeById`](StakeViewerMethods.md#stakebyid)

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promisable<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakeByStaker`](StakeViewerMethods.md#stakebystaker)

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promisable<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakesByStaked`](StakeViewerMethods.md#stakesbystaked)

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promisable<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promisable`\<[`Position`](#../type-aliases/Position)[]\>

### Inherited from

[`StakeViewerMethods`](#StakeViewerMethods).[`stakesByStaker`](StakeViewerMethods.md#stakesbystaker)

***

### transactionByBlockHashAndIndex()

```ts
transactionByBlockHashAndIndex(blockHash, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockHash

`Hash`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`TransactionViewerMethods`](#TransactionViewerMethods).[`transactionByBlockHashAndIndex`](TransactionViewerMethods.md#transactionbyblockhashandindex)

***

### transactionByBlockNumberAndIndex()

```ts
transactionByBlockNumberAndIndex(blockNumber, transactionIndex): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### blockNumber

`number`

#### transactionIndex

`number`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`TransactionViewerMethods`](#TransactionViewerMethods).[`transactionByBlockNumberAndIndex`](TransactionViewerMethods.md#transactionbyblocknumberandindex)

***

### transactionByHash()

```ts
transactionByHash(transactionHash): Promisable<SignedHydratedTransaction | null>;
```

### Parameters

#### transactionHash

`Hash`

### Returns

`Promisable`\<`SignedHydratedTransaction` \| `null`\>

### Inherited from

[`TransactionViewerMethods`](#TransactionViewerMethods).[`transactionByHash`](TransactionViewerMethods.md#transactionbyhash)

***

### transferBalance()

```ts
transferBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

`Address`

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`TransferBalanceViewerMethods`](#TransferBalanceViewerMethods).[`transferBalance`](TransferBalanceViewerMethods.md#transferbalance)

***

### transferBalanceHistory()

```ts
transferBalanceHistory(address, range?): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

`Address`

#### range?

`XL1BlockRange`

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

### Inherited from

[`TransferBalanceViewerMethods`](#TransferBalanceViewerMethods).[`transferBalanceHistory`](TransferBalanceViewerMethods.md#transferbalancehistory)

***

### transferPairBalance()

```ts
transferPairBalance(address): Promisable<AttoXL1>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<`AttoXL1`\>

### Inherited from

[`TransferBalanceViewerMethods`](#TransferBalanceViewerMethods).[`transferPairBalance`](TransferBalanceViewerMethods.md#transferpairbalance)

***

### transferPairBalanceHistory()

```ts
transferPairBalanceHistory(address): Promisable<TransferBalanceHistoryItem[]>;
```

### Parameters

#### address

[`TransferPair`](#../type-aliases/TransferPair)

### Returns

`Promisable`\<[`TransferBalanceHistoryItem`](#../type-aliases/TransferBalanceHistoryItem)[]\>

### Inherited from

[`TransferBalanceViewerMethods`](#TransferBalanceViewerMethods).[`transferPairBalanceHistory`](TransferBalanceViewerMethods.md#transferpairbalancehistory)

  ### <a id="XyoWallet"></a>XyoWallet

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Deprecated

- use XyoClient instead

## Methods

### ~~accounts()~~

```ts
accounts(): Promisable<Address[]>;
```

### Returns

`Promisable`\<`Address`[]\>

***

### ~~addChain()~~

```ts
addChain(chain, name?): Promisable<object>;
```

### Parameters

#### chain

`ChainId`

#### name?

`string`

### Returns

`Promisable`\<`object`\>

***

### ~~chain()~~

```ts
chain(): Promisable<ChainId>;
```

### Returns

`Promisable`\<`ChainId`\>

***

### ~~chains()~~

```ts
chains(): Promisable<object>;
```

### Returns

`Promisable`\<`object`\>

***

### ~~permissions()~~

```ts
permissions(): Promisable<Record<string, object>>;
```

### Returns

`Promisable`\<`Record`\<`string`, `object`\>\>

***

### ~~requestPermissions()~~

```ts
requestPermissions(permissions): Promisable<object>;
```

### Parameters

#### permissions

`object`

### Returns

`Promisable`\<`object`\>

***

### ~~revokePermissions()~~

```ts
revokePermissions(permissions): Promisable<object>;
```

### Parameters

#### permissions

`object`

### Returns

`Promisable`\<`object`\>

***

### ~~switchChain()~~

```ts
switchChain(chain): Promisable<void>;
```

### Parameters

#### chain

`ChainId`

### Returns

`Promisable`\<`void`\>

  ### <a id="withContextCacheResponseOptions"></a>withContextCacheResponseOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

## Properties

### max?

```ts
optional max: number;
```

***

### timeBudgetMs?

```ts
optional timeBudgetMs: number;
```

### type-aliases

  ### <a id="AccountBalanceHistoryItem"></a>AccountBalanceHistoryItem

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type AccountBalanceHistoryItem = [WithStorageMeta<Signed<BlockBoundWitness>>, WithStorageMeta<Signed<TransactionBoundWitness>> | null, WithStorageMeta<Transfer>];
```

  ### <a id="AddressPairPayload"></a>AddressPairPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type AddressPairPayload = Payload<AddressFields, AddressPairSchema>;
```

  ### <a id="AddressPairSchema"></a>AddressPairSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type AddressPairSchema = typeof AddressPairSchema;
```

  ### <a id="AsynchronousMapType"></a>AsynchronousMapType

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type AsynchronousMapType<TId, TData> = AsynchronousMapRead<TId, TData> & AsynchronousMapWrite<TId, TData>;
```

## Type Parameters

### TId

`TId`

### TData

`TData`

  ### <a id="BalancesStepSummary"></a>BalancesStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type BalancesStepSummary = StepSummary<{
  balances: Record<Address, SignedBigInt>;
}, BalancesStepSummarySchema>;
```

  ### <a id="BalancesStepSummarySchema"></a>BalancesStepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type BalancesStepSummarySchema = typeof BalancesStepSummarySchema;
```

  ### <a id="BlockValidatorFunction"></a>BlockValidatorFunction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type BlockValidatorFunction = (block, chainId?) => Promisable<BlockValidationError[]>;
```

## Parameters

### block

`BlockBoundWitness`

### chainId?

`ChainId`

## Returns

`Promisable`\<[`BlockValidationError`](#../classes/BlockValidationError)[]\>

  ### <a id="CaveatTypes"></a>CaveatTypes

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type CaveatTypes = 
  | "chain"
  | "expiration"
  | "filteredResponse"
  | "rateLimit"
  | "restrictReturnedAccounts";
```

  ### <a id="ChainContext"></a>ChainContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainContext = ChainIdentity & ChainContextRead & ChainContextWrite & ChainStoreContext;
```

  ### <a id="ChainIndexingServiceState"></a>ChainIndexingServiceState

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainIndexingServiceState<T> = Payload<ChainIndexingServiceStateFields<T>, ChainIndexingServiceStateSchema>;
```

The result of a ChainIndexingServiceState

## Type Parameters

### T

`T` *extends* `JsonValue` = `JsonValue`

  ### <a id="ChainIndexingServiceStateSchema"></a>ChainIndexingServiceStateSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainIndexingServiceStateSchema = typeof ChainIndexingServiceStateSchema;
```

  ### <a id="ChainStakeContext"></a>ChainStakeContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainStakeContext = ChainStakeContextRead & ChainStakeContextWrite;
```

  ### <a id="ChainStateContext"></a>ChainStateContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainStateContext = ChainStateContextRead & ChainStateContextWrite;
```

  ### <a id="ChainStore"></a>ChainStore

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainStore = ChainStoreRead & ChainStoreWrite;
```

  ### <a id="ChainStoreContext"></a>ChainStoreContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainStoreContext = ChainStoreContextRead & ChainStoreContextWrite;
```

  ### <a id="ChainSummaryContext"></a>ChainSummaryContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ChainSummaryContext<T> = ChainSummaryContextRead<T> & ChainSummaryContextWrite<T>;
```

## Type Parameters

### T

`T` *extends* `Payload`

  ### <a id="Config"></a>Config

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type Config = z.infer<typeof ConfigZod>;
```

  ### <a id="ConfirmSubmittedTransactionOptions"></a>ConfirmSubmittedTransactionOptions

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ConfirmSubmittedTransactionOptions = object;
```

## Properties

### attempts?

```ts
optional attempts: number;
```

Number of attempts to confirm the transaction.
Defaults to 20.

***

### delay?

```ts
optional delay: number;
```

Delay in milliseconds between confirmation attempts.
Defaults to 1000 (1 second).

***

### logger?

```ts
optional logger: Logger;
```

Optional logger instance for logging progress.

  ### <a id="DataLakeData"></a>DataLakeData

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type DataLakeData = Payload | ArrayBuffer;
```

  ### <a id="DataLakeRunnerMethods"></a>DataLakeRunnerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type DataLakeRunnerMethods = Pick<MapType<Hash, DataLakeData>, "set" | "delete" | "clear"> & object;
```

## Type Declaration

### setMany()

```ts
setMany(entries): Promise<void>;
```

### Parameters

#### entries

\[`Hash`, [`DataLakeData`](#DataLakeData)\][]

### Returns

`Promise`\<`void`\>

  ### <a id="DataLakeViewerMethods"></a>DataLakeViewerMethods

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type DataLakeViewerMethods = Pick<MapType<Hash, DataLakeData>, "get" | "getMany" | "has">;
```

  ### <a id="EIP712DataPayload"></a>EIP712DataPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712DataPayload = Payload<EIP712DataPayloadFields, EIP712DataPayloadSchema>;
```

  ### <a id="EIP712DataPayloadFields"></a>EIP712DataPayloadFields

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712DataPayloadFields = z.infer<typeof EIP712DataPayloadFieldsZod>;
```

  ### <a id="EIP712DataPayloadSchema"></a>EIP712DataPayloadSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712DataPayloadSchema = typeof EIP712DataPayloadSchema;
```

  ### <a id="EIP712SignaturePayload"></a>EIP712SignaturePayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712SignaturePayload = Payload<EIP712SignaturePayloadFields, EIP712SignaturePayloadSchema>;
```

  ### <a id="EIP712SignaturePayloadFields"></a>EIP712SignaturePayloadFields

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712SignaturePayloadFields = z.infer<typeof EIP712SignaturePayloadFieldsZod>;
```

  ### <a id="EIP712SignaturePayloadSchema"></a>EIP712SignaturePayloadSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type EIP712SignaturePayloadSchema = typeof EIP712SignaturePayloadSchema;
```

  ### <a id="ForkHistory"></a>ForkHistory

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ForkHistory = Record<number, ChainId>;
```

  ### <a id="HeadEventArgs"></a>HeadEventArgs

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type HeadEventArgs = object;
```

## Properties

### blocks

```ts
blocks: [BlockBoundWitness];
```

  ### <a id="HydratedBlockStateValidationFunction"></a>HydratedBlockStateValidationFunction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type HydratedBlockStateValidationFunction = (hydratedBlock, chainId, services) => Promisable<HydratedBlockStateValidationError[]>;
```

A function that validates a hydrated block against chain state.

## Parameters

### hydratedBlock

`HydratedBlock`

The hydrated block to validate.

### chainId

`ChainId`

The chain ID to use for validation.

### services

### accountBalance

[`AccountBalanceService`](#../interfaces/AccountBalanceService)

## Returns

`Promisable`\<[`HydratedBlockStateValidationError`](#../classes/HydratedBlockStateValidationError)[]\>

An array of errors if the block is invalid, or an empty array if it is valid.

  ### <a id="HydratedBlockValidationFunction"></a>HydratedBlockValidationFunction

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type HydratedBlockValidationFunction = (hydratedBlock, chainId?) => Promisable<HydratedBlockValidationError[]>;
```

A function that validates a hydrated block.

## Parameters

### hydratedBlock

`HydratedBlock`

The hydrated block to validate.

### chainId?

`ChainId`

The chain ID to use for validation.

## Returns

`Promisable`\<[`HydratedBlockValidationError`](#../classes/HydratedBlockValidationError)[]\>

An array of errors if the block is invalid, or an empty array if it is valid.

  ### <a id="Invoker"></a>Invoker

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type Invoker = string;
```

  ### <a id="MapType"></a>MapType

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type MapType<TId, TData> = 
  | AsynchronousMapType<TId, TData>
| SynchronousMapType<TId, TData>;
```

## Type Parameters

### TId

`TId`

### TData

`TData`

  ### <a id="MapTypeRead"></a>MapTypeRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type MapTypeRead<TId, TData> = 
  | SynchronousMapRead<TId, TData>
| AsynchronousMapRead<TId, TData>;
```

## Type Parameters

### TId

`TId`

### TData

`TData`

  ### <a id="MapTypeWrite"></a>MapTypeWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type MapTypeWrite<TId, TData> = 
  | SynchronousMapWrite<TId, TData>
| AsynchronousMapWrite<TId, TData>;
```

## Type Parameters

### TId

`TId`

### TData

`TData`

  ### <a id="MnemonicString"></a>MnemonicString

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type MnemonicString = z.infer<typeof MnemonicStringZod>;
```

  ### <a id="NextBlockProducer"></a>NextBlockProducer

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type NextBlockProducer = IterableRepository<BlockBoundWitness, HydratedBlock | undefined>;
```

  ### <a id="ParentCapability"></a>ParentCapability

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type ParentCapability = string;
```

  ### <a id="PayloadMap"></a>PayloadMap

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type PayloadMap<T> = MapType<Hash, T>;
```

## Type Parameters

### T

`T` *extends* `Payload` = `Payload`

  ### <a id="PayloadMapRead"></a>PayloadMapRead

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type PayloadMapRead<T> = MapTypeRead<Hash, T>;
```

## Type Parameters

### T

`T` *extends* `Payload` = `Payload`

  ### <a id="PayloadMapWrite"></a>PayloadMapWrite

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type PayloadMapWrite<T> = MapTypeWrite<Hash, T>;
```

## Type Parameters

### T

`T` *extends* `Payload` = `Payload`

  ### <a id="Position"></a>Position

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type Position = object;
```

## Properties

### addBlock

```ts
addBlock: number;
```

***

### amount

```ts
amount: bigint;
```

***

### id

```ts
id: PositionId;
```

***

### removeBlock

```ts
removeBlock: number;
```

***

### staked

```ts
staked: Address;
```

***

### staker

```ts
staker: Address;
```

***

### withdrawBlock

```ts
withdrawBlock: number;
```

  ### <a id="RecordKeyType"></a>RecordKeyType

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type RecordKeyType<T> = T extends keyof any ? T : never;
```

## Type Parameters

### T

`T` = keyof `any`

  ### <a id="SignedBigInt"></a>SignedBigInt

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type SignedBigInt = 
  | NegativeBigInt
  | PositiveBigInt;
```

  ### <a id="Stake"></a>Stake

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type Stake = Position;
```

## Deprecated

- use Position instead

  ### <a id="StakeEventFilterArgs"></a>StakeEventFilterArgs

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type StakeEventFilterArgs = Partial<Pick<StakeEventArgs, "staker" | "staked" | "id">>;
```

  ### <a id="StakeEventName"></a>StakeEventName

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type StakeEventName = typeof StakeEventNames[number];
```

  ### <a id="StakedChainContext"></a>StakedChainContext

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type StakedChainContext = ChainContext & ChainStakeContext & ChainStakeContextRead & ChainStakeContextWrite;
```

  ### <a id="StepSummary"></a>StepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type StepSummary<TAdditionalFields, TSchema> = Payload<TAdditionalFields extends void ? StepSummaryFields : TAdditionalFields & StepSummaryFields, TSchema extends void ? StepSummarySchema : TSchema>;
```

## Type Parameters

### TAdditionalFields

`TAdditionalFields` *extends* `EmptyObject` \| `void` = `void`

### TSchema

`TSchema` *extends* `Schema` \| `void` = `void`

  ### <a id="StepSummarySchema"></a>StepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type StepSummarySchema = typeof StepSummarySchema;
```

  ### <a id="SynchronousMapType"></a>SynchronousMapType

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type SynchronousMapType<TId, TData> = SynchronousMapRead<TId, TData> & SynchronousMapWrite<TId, TData>;
```

## Type Parameters

### TId

`TId`

### TData

`TData`

  ### <a id="TransferBalanceHistoryItem"></a>TransferBalanceHistoryItem

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TransferBalanceHistoryItem = [Signed<BlockBoundWitness>, Signed<TransactionBoundWitness> | null, Transfer];
```

  ### <a id="TransferPair"></a>TransferPair

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TransferPair = [Address, Address];
```

  ### <a id="TransfersStepSummary"></a>TransfersStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TransfersStepSummary = StepSummary<{
  transfers: Record<Address, Record<Address, SignedBigInt>>;
}, TransfersStepSummarySchema>;
```

  ### <a id="TransfersStepSummarySchema"></a>TransfersStepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TransfersStepSummarySchema = typeof TransfersStepSummarySchema;
```

  ### <a id="TypedDataDomain"></a>TypedDataDomain

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TypedDataDomain = z.infer<typeof TypedDataDomainZod>;
```

  ### <a id="TypedDataField"></a>TypedDataField

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TypedDataField = z.infer<typeof TypedDataFieldZod>;
```

  ### <a id="TypedDataTypes"></a>TypedDataTypes

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TypedDataTypes = z.infer<typeof TypedDataTypesZod>;
```

  ### <a id="TypedDataValues"></a>TypedDataValues

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type TypedDataValues = z.infer<typeof TypedDataValueZod>;
```

  ### <a id="UsageMeta"></a>UsageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
type UsageMeta = z.infer<typeof UsageMetaSchema>;
```

### variables

  ### <a id="ACCOUNT_TYPE"></a>ACCOUNT_TYPE

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const ACCOUNT_TYPE: object;
```

## Type Declaration

### GANACHE

```ts
readonly GANACHE: "0'" = '0\'';
```

### XYO

```ts
readonly XYO: "0'" = '0\'';
```

  ### <a id="ADDRESS_INDEX"></a>ADDRESS_INDEX

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const ADDRESS_INDEX: object;
```

## Type Declaration

### META\_MASK

```ts
readonly META_MASK: "0" = '0';
```

### XYO

```ts
readonly XYO: "0" = '0';
```

  ### <a id="AddressPairSchema"></a>AddressPairSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const AddressPairSchema: "network.xyo.address.pair";
```

  ### <a id="BalancesStepSummarySchema"></a>BalancesStepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const BalancesStepSummarySchema: Schema = 'network.xyo.step.summary.balances';
```

  ### <a id="CHANGE_ADDRESS"></a>CHANGE_ADDRESS

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const CHANGE_ADDRESS: object;
```

## Type Declaration

### META\_MASK

```ts
readonly META_MASK: "0" = '0';
```

### XYO

```ts
readonly XYO: "0" = '0';
```

  ### <a id="COIN_TYPES"></a>COIN_TYPES

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const COIN_TYPES: object;
```

## Type Declaration

### Ethereum

```ts
readonly Ethereum: "60'" = '60\'';
```

  ### <a id="ChainIndexingServiceStateSchema"></a>ChainIndexingServiceStateSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const ChainIndexingServiceStateSchema: "network.xyo.chain.indexing.service.state";
```

  ### <a id="ConfigZod"></a>ConfigZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const ConfigZod: ZodObject<{
  api: ZodDefault<ZodObject<{
     host: ZodDefault<ZodString>;
     initRewardsCache: ZodDefault<ZodPipe<ZodUnion<readonly [ZodNumber, ZodString]>, ZodTransform<boolean, string | number>>>;
     mnemonic: ZodOptional<ZodPipe<ZodString, ZodTransform<string, string>>>;
     port: ZodDefault<ZodCoercedNumber<unknown>>;
  }, $strip>>;
  app: ZodDefault<ZodObject<{
     port: ZodDefault<ZodCoercedNumber<unknown>>;
  }, $strip>>;
  bridge: ZodDefault<ZodObject<{
     host: ZodDefault<ZodString>;
     mnemonic: ZodOptional<ZodPipe<ZodString, ZodTransform<string, string>>>;
     port: ZodDefault<ZodCoercedNumber<unknown>>;
  }, $strip>>;
  chain: ZodDefault<ZodObject<{
     id: ZodOptional<ZodString>;
  }, $strip>>;
  evm: ZodDefault<ZodObject<{
     chainId: ZodOptional<ZodString>;
     infura: ZodOptional<ZodObject<{
        projectId: ZodOptional<ZodString>;
        projectSecret: ZodOptional<ZodString>;
     }, $strip>>;
     jsonRpc: ZodOptional<ZodObject<{
        url: ZodOptional<ZodURL>;
     }, $strip>>;
  }, $strip>>;
  mempool: ZodDefault<ZodObject<{
     enabled: ZodPipe<ZodDefault<ZodString>, ZodTransform<boolean, string>>;
     host: ZodDefault<ZodString>;
     mnemonic: ZodOptional<ZodPipe<ZodString, ZodTransform<string, string>>>;
     port: ZodDefault<ZodCoercedNumber<unknown>>;
  }, $strip>>;
  producer: ZodDefault<ZodObject<{
     allowlist: ZodPipe<ZodTransform<unknown, unknown>, ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>>>;
     disableIntentRedeclaration: ZodOptional<ZodBoolean>;
     healthCheckPort: ZodOptional<ZodCoercedNumber<unknown>>;
     heartbeatInterval: ZodDefault<ZodCoercedNumber<unknown>>;
     minStake: ZodDefault<ZodCoercedNumber<unknown>>;
     mnemonic: ZodOptional<ZodPipe<ZodString, ZodTransform<string, string>>>;
     port: ZodDefault<ZodCoercedNumber<unknown>>;
     rewardAddress: ZodOptional<ZodString>;
  }, $strip>>;
  rewardRedemptionApi: ZodDefault<ZodObject<{
     chainRpcApiUrl: ZodDefault<ZodString>;
     host: ZodDefault<ZodString>;
     mnemonic: ZodOptional<ZodPipe<ZodString, ZodTransform<string, string>>>;
     port: ZodDefault<ZodCoercedNumber<unknown>>;
  }, $strip>>;
  storage: ZodDefault<ZodObject<{
     mongo: ZodOptional<ZodObject<{
        connectionString: ZodOptional<ZodString>;
        database: ZodOptional<ZodString>;
        domain: ZodOptional<ZodString>;
        password: ZodOptional<ZodString>;
        username: ZodOptional<ZodString>;
     }, $strip>>;
     root: ZodOptional<ZodString>;
  }, $strip>>;
  telemetry: ZodDefault<ZodObject<{
     otel: ZodOptional<ZodObject<{
        otlpEndpoint: ZodOptional<ZodURL>;
     }, $strip>>;
  }, $strip>>;
  validation: ZodDefault<ZodObject<{
     allowedRewardRedeemers: ZodPipe<ZodTransform<unknown, unknown>, ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>>>;
     allowedRewardEscrowAccountSigners: ZodPipe<ZodTransform<unknown, unknown>, ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>>>;
  }, $strip>>;
  logLevel: ZodDefault<ZodEnum<{
     error: "error";
     warn: "warn";
     info: "info";
     log: "log";
     debug: "debug";
     trace: "trace";
  }>>;
  silent: ZodDefault<ZodBoolean>;
}, $strip>;
```

  ### <a id="DEFAULT_WALLET_PATH"></a>DEFAULT_WALLET_PATH

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const DEFAULT_WALLET_PATH: string;
```

  ### <a id="EIP712DataPayloadFieldsZod"></a>EIP712DataPayloadFieldsZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const EIP712DataPayloadFieldsZod: ZodObject<{
  domain: ZodObject<{
     name: ZodOptional<ZodNullable<ZodString>>;
     version: ZodOptional<ZodNullable<ZodString>>;
     chainId: ZodOptional<ZodNullable<ZodUnion<readonly [ZodString, ZodNumber, ZodBigInt]>>>;
     verifyingContract: ZodOptional<ZodNullable<ZodString>>;
     salt: ZodOptional<ZodNullable<ZodUnion<readonly [ZodString, ZodCustom<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>]>>>;
  }, $strip>;
  types: ZodRecord<ZodString, ZodArray<ZodObject<{
     name: ZodString;
     type: ZodString;
  }, $strip>>>;
  values: ZodRecord<ZodString, ZodAny>;
}, $strip>;
```

  ### <a id="EIP712DataPayloadSchema"></a>EIP712DataPayloadSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const EIP712DataPayloadSchema: "network.xyo.chains.ethereum.eip712.data";
```

  ### <a id="EIP712SignaturePayloadFieldsZod"></a>EIP712SignaturePayloadFieldsZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const EIP712SignaturePayloadFieldsZod: ZodObject<{
  address: ZodString;
  hash: ZodPipe<ZodString, ZodTransform<Hash, string>>;
  signature: ZodString;
}, $strip>;
```

  ### <a id="EIP712SignaturePayloadSchema"></a>EIP712SignaturePayloadSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const EIP712SignaturePayloadSchema: "network.xyo.chains.ethereum.eip712.signature";
```

  ### <a id="GlobalMetaSchema"></a>GlobalMetaSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const GlobalMetaSchema: ZodObject<{
  id: ZodOptional<ZodString>;
  title: ZodOptional<ZodString>;
  description: ZodOptional<ZodString>;
  deprecated: ZodOptional<ZodBoolean>;
}, $catchall<ZodUnknown>>;
```

  ### <a id="JSONSchemaMetaSchema"></a>JSONSchemaMetaSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const JSONSchemaMetaSchema: ZodObject<{
  id: ZodOptional<ZodString>;
  title: ZodOptional<ZodString>;
  description: ZodOptional<ZodString>;
  deprecated: ZodOptional<ZodBoolean>;
}, $catchall<ZodUnknown>>;
```

  ### <a id="MnemonicStringZod"></a>MnemonicStringZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const MnemonicStringZod: ZodPipe<ZodString, ZodTransform<string, string>>;
```

Validates a single string containing a BIP-39 mnemonic.

• Trims leading/trailing whitespace.
• Collapses any run of whitespace (spaces, tabs, new-lines) to a single space.
• Splits on spaces → array of words.
• Checks that the word-count is 12, 15, 18, 21, or 24.

  ### <a id="RewardMultipliers"></a>RewardMultipliers

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const RewardMultipliers: XL1RangeMultipliers;
```

  ### <a id="StakeEventNames"></a>StakeEventNames

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const StakeEventNames: readonly ["StakeAdded", "StakeRemoved", "StakeWithdrawn"];
```

  ### <a id="StepSummarySchema"></a>StepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const StepSummarySchema: Schema = 'network.xyo.step.summary';
```

  ### <a id="TODO"></a>TODO

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TODO: true = true;
```

  ### <a id="TransfersStepSummarySchema"></a>TransfersStepSummarySchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TransfersStepSummarySchema: Schema = 'network.xyo.step.summary.transfer';
```

  ### <a id="TypedDataDomainZod"></a>TypedDataDomainZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TypedDataDomainZod: ZodObject<{
  name: ZodOptional<ZodNullable<ZodString>>;
  version: ZodOptional<ZodNullable<ZodString>>;
  chainId: ZodOptional<ZodNullable<ZodUnion<readonly [ZodString, ZodNumber, ZodBigInt]>>>;
  verifyingContract: ZodOptional<ZodNullable<ZodString>>;
  salt: ZodOptional<ZodNullable<ZodUnion<readonly [ZodString, ZodCustom<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>]>>>;
}, $strip>;
```

Typed Data Types
Re-exposing the types from ethers for convenience and to ensure
we can fix in one place if they change

  ### <a id="TypedDataFieldZod"></a>TypedDataFieldZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TypedDataFieldZod: ZodObject<{
  name: ZodString;
  type: ZodString;
}, $strip>;
```

  ### <a id="TypedDataTypesZod"></a>TypedDataTypesZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TypedDataTypesZod: ZodRecord<ZodString, ZodArray<ZodObject<{
  name: ZodString;
  type: ZodString;
}, $strip>>>;
```

  ### <a id="TypedDataValueZod"></a>TypedDataValueZod

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const TypedDataValueZod: ZodRecord<ZodString, ZodAny>;
```

  ### <a id="UsageMetaSchema"></a>UsageMetaSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const UsageMetaSchema: ZodObject<{
  id: ZodOptional<ZodString>;
  deprecated: ZodOptional<ZodBoolean>;
  choices: ZodOptional<ZodReadonly<ZodArray<ZodUnion<readonly [ZodString, ZodNumber, ZodLiteral<true>, ZodUndefined]>>>>;
  default: ZodOptional<ZodUnknown>;
  description: ZodString;
  group: ZodOptional<ZodString>;
  hidden: ZodOptional<ZodBoolean>;
  title: ZodString;
  type: ZodUnion<readonly [ZodLiteral<"array">, ZodLiteral<"count">, ZodLiteral<"boolean">, ZodLiteral<"number">, ZodLiteral<"string">]>;
}, $catchall<ZodUnknown>>;
```

  ### <a id="WALLET_COMPLIANCE"></a>WALLET_COMPLIANCE

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const WALLET_COMPLIANCE: "44'";
```

  ### <a id="XL1_NETWORK_STAKING_GENESIS_PERIOD_END_EPOCH"></a>XL1_NETWORK_STAKING_GENESIS_PERIOD_END_EPOCH

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const XL1_NETWORK_STAKING_GENESIS_PERIOD_END_EPOCH: 1760572800;
```

  ### <a id="XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK"></a>XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const XL1_NETWORK_STAKING_GENESIS_PERIOD_END_XL1_BLOCK: 107496;
```

  ### <a id="XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_BONUS_REWARDS"></a>XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_BONUS_REWARDS

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_BONUS_REWARDS: AttoXL1;
```

  ### <a id="XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_EARNED_REWARDS"></a>XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_EARNED_REWARDS

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_EARNED_REWARDS: AttoXL1;
```

  ### <a id="XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_REWARDS"></a>XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_REWARDS

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const XL1_NETWORK_STAKING_GENESIS_PERIOD_TOTAL_REWARDS: bigint;
```

  ### <a id="Xl1CommonConfigSchema"></a>Xl1CommonConfigSchema

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const Xl1CommonConfigSchema: ZodObject<{
  logLevel: ZodDefault<ZodEnum<{
     error: "error";
     warn: "warn";
     info: "info";
     log: "log";
     debug: "debug";
     trace: "trace";
  }>>;
  silent: ZodDefault<ZodBoolean>;
}, $strip>;
```

  ### <a id="asAddressPairPayload"></a>asAddressPairPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asAddressPairPayload: AsTypeFunction<AddressPairPayload>;
```

  ### <a id="asBalancesStepSummary"></a>asBalancesStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asBalancesStepSummary: AsTypeFunction<BalancesStepSummary>;
```

  ### <a id="asBalancesStepSummaryWithStorageMeta"></a>asBalancesStepSummaryWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asBalancesStepSummaryWithStorageMeta: AsTypeFunction<WithStorageMeta<BalancesStepSummary>>;
```

  ### <a id="asChainIndexingServiceState"></a>asChainIndexingServiceState

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asChainIndexingServiceState: AsTypeFunction<ChainIndexingServiceState<JsonValue>>;
```

  ### <a id="asChainIndexingServiceStateWithStorageMeta"></a>asChainIndexingServiceStateWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asChainIndexingServiceStateWithStorageMeta: AsTypeFunction<WithStorageMeta<ChainIndexingServiceState<JsonValue>>>;
```

  ### <a id="asEIP712DataPayload"></a>asEIP712DataPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asEIP712DataPayload: AsTypeFunction<EIP712DataPayload>;
```

  ### <a id="asEIP712SignaturePayload"></a>asEIP712SignaturePayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asEIP712SignaturePayload: AsTypeFunction<EIP712SignaturePayload>;
```

  ### <a id="asOptionalAddressPairPayload"></a>asOptionalAddressPairPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asOptionalAddressPairPayload: (value) => 
  | AddressPairPayload
  | undefined;
```

## Parameters

### value

`AnyNonPromise`

## Returns

  \| [`AddressPairPayload`](#../type-aliases/AddressPairPayload)
  \| `undefined`

  ### <a id="asTransfersStepSummary"></a>asTransfersStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asTransfersStepSummary: AsTypeFunction<TransfersStepSummary>;
```

  ### <a id="asTransfersStepSummaryWithStorageMeta"></a>asTransfersStepSummaryWithStorageMeta

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const asTransfersStepSummaryWithStorageMeta: AsTypeFunction<WithStorageMeta<TransfersStepSummary>>;
```

  ### <a id="isAddressPairPayload"></a>isAddressPairPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const isAddressPairPayload: (x?) => x is AddressPairPayload;
```

Identity function for determining if an object is an AddressPairPayload

## Parameters

### x?

`unknown`

## Returns

`x is AddressPairPayload`

  ### <a id="isBalancesStepSummary"></a>isBalancesStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const isBalancesStepSummary: (x?) => x is BalancesStepSummary;
```

Identity function for determining if an object is an BalancesStepSummary

## Parameters

### x?

`unknown`

## Returns

`x is BalancesStepSummary`

  ### <a id="isEIP712DataPayload"></a>isEIP712DataPayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const isEIP712DataPayload: (x?) => x is EIP712DataPayload;
```

## Parameters

### x?

`unknown`

## Returns

`x is EIP712DataPayload`

  ### <a id="isEIP712SignaturePayload"></a>isEIP712SignaturePayload

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const isEIP712SignaturePayload: (x?) => x is EIP712SignaturePayload;
```

## Parameters

### x?

`unknown`

## Returns

`x is EIP712SignaturePayload`

  ### <a id="isTransfersStepSummary"></a>isTransfersStepSummary

[**@xyo-network/xl1-protocol-sdk**](#../README)

***

```ts
const isTransfersStepSummary: (x?) => x is TransfersStepSummary;
```

Identity function for determining if an object is an TransfersStepSummary

## Parameters

### x?

`unknown`

## Returns

`x is TransfersStepSummary`


## Maintainers

-   [Arie Trouw](https://github.com/arietrouw) ([arietrouw.com](https://arietrouw.com))
-   [Matt Jones](https://github.com/jonesmac)
-   [Joel Carter](https://github.com/JoelBCarter)
-   [Jordan Trouw](https://github.com/jordantrouw)

## License

> See the [LICENSE](LICENSE) file for license details

## Credits

[Made with 🔥 and ❄️ by XYO](https://xyo.network)

[logo]: https://cdn.xy.company/img/brand/XYO_full_colored.png

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/xl1-protocol-sdk.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/xl1-protocol-sdk

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/xl1-protocol-sdk
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/xl1-protocol-sdk

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/xl1-protocol-sdk/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/xl1-protocol-sdk

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/xl1-protocol-sdk
[socket-link]: https://socket.dev/npm/package/@xyo-network/xl1-protocol-sdk