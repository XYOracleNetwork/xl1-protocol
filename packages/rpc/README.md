# @xyo-network/xl1-rpc

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One API



## Reference

**@xyo-network/xl1-rpc**

***

## Modules

- [index-node](#index-node/README)
- [index](#index/README)

### index

### index-node

  ### classes

    ### <a id="HttpRpcTransport"></a>HttpRpcTransport

[**@xyo-network/xl1-rpc**](#../../README)

***

## Type Parameters

### T

`T` *extends* [`RpcSchemaMap`](#../type-aliases/RpcSchemaMap) = [`RpcSchemaMap`](#../type-aliases/RpcSchemaMap)

## Implements

- [`RpcTransport`](#../interfaces/RpcTransport)\<`T`\>

## Constructors

### Constructor

```ts
new HttpRpcTransport<T>(rpcUrl, schemas): HttpRpcTransport<T>;
```

### Parameters

#### rpcUrl

`string`

#### schemas

`T`

### Returns

`HttpRpcTransport`\<`T`\>

## Properties

### \_rpcUrl

```ts
protected readonly _rpcUrl: string;
```

***

### \_schemas

```ts
protected readonly _schemas: T;
```

## Methods

### sendRequest()

```ts
sendRequest<TMethod>(method, params?): Promise<output<T[TMethod]["result"]["from"]>>;
```

### Type Parameters

#### TMethod

`TMethod` *extends* `string` \| `number` \| `symbol`

### Parameters

#### method

`TMethod`

#### params?

`input`\<`T`\[`TMethod`\]\[`"params"`\]\[`"to"`\]\>

### Returns

`Promise`\<`output`\<`T`\[`TMethod`\]\[`"result"`\]\[`"from"`\]\>\>

### Implementation of

[`RpcTransport`](#../interfaces/RpcTransport).[`sendRequest`](../interfaces/RpcTransport.md#sendrequest)

    ### <a id="HttpRpcXyoConnection"></a>HttpRpcXyoConnection

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`XyoBaseConnection`](#XyoBaseConnection)

## Constructors

### Constructor

```ts
new HttpRpcXyoConnection(params): HttpRpcXyoConnection;
```

### Parameters

#### params

[`RpcXyoProviderParams`](#../interfaces/RpcXyoProviderParams)

### Returns

`HttpRpcXyoConnection`

### Overrides

[`XyoBaseConnection`](#XyoBaseConnection).[`constructor`](XyoBaseConnection.md#constructor)

## Accessors

### network

### Get Signature

```ts
get network(): XyoNetwork | undefined;
```

#### Returns

`XyoNetwork` \| `undefined`

### Inherited from

[`XyoBaseConnection`](#XyoBaseConnection).[`network`](XyoBaseConnection.md#network)

***

### runner

### Get Signature

```ts
get runner(): XyoRunner | undefined;
```

#### Returns

`XyoRunner` \| `undefined`

### Inherited from

[`XyoBaseConnection`](#XyoBaseConnection).[`runner`](XyoBaseConnection.md#runner)

***

### storage

### Get Signature

```ts
get storage(): 
  | DataLakeViewer
  | DataLakeRunner
  | DataLakeRunner & DataLakeViewer
  | undefined;
```

#### Returns

  \| `DataLakeViewer`
  \| `DataLakeRunner`
  \| `DataLakeRunner` & `DataLakeViewer`
  \| `undefined`

### Inherited from

[`XyoBaseConnection`](#XyoBaseConnection).[`storage`](XyoBaseConnection.md#storage)

***

### viewer

### Get Signature

```ts
get viewer(): XyoViewer | undefined;
```

#### Returns

`XyoViewer` \| `undefined`

### Inherited from

[`XyoBaseConnection`](#XyoBaseConnection).[`viewer`](XyoBaseConnection.md#viewer)

    ### <a id="JsonRpcDataLakeViewer"></a>JsonRpcDataLakeViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods)

## Implements

- `DataLakeViewer`

## Constructors

### Constructor

```ts
new JsonRpcDataLakeViewer(transport): JsonRpcDataLakeViewer;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `dataLakeViewer_get`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodCustom`\<`ArrayBuffer`, `ArrayBuffer`\>, `ZodTransform`\<`string`, `ArrayBuffer`\>\>\]\>\>;
        `from`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`ArrayBuffer` \| `SharedArrayBuffer`, `string`\>\>\]\>\>;
     \};
  \};
  `dataLakeViewer_getMany`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodCustom`\<`ArrayBuffer`, `ArrayBuffer`\>, `ZodTransform`\<`string`, `ArrayBuffer`\>\>\]\>\>;
        `from`: `ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`ArrayBuffer` \| `SharedArrayBuffer`, `string`\>\>\]\>\>;
     \};
  \};
  `dataLakeViewer_has`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodBoolean`;
        `from`: `ZodBoolean`;
     \};
  \};
\}\>

### Returns

`JsonRpcDataLakeViewer`

### Overrides

[`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods).[`constructor`](JsonRpcDataLakeViewerMethods.md#constructor)

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  dataLakeViewer_get: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodOptional<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
        from: ZodOptional<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
     };
  };
  dataLakeViewer_getMany: {
     params: {
        to: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
        from: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
     };
     result: {
        to: ZodArray<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
        from: ZodArray<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
     };
  };
  dataLakeViewer_has: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodBoolean;
        from: ZodBoolean;
     };
  };
}>;
```

### Inherited from

[`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods).[`transport`](JsonRpcDataLakeViewerMethods.md#transport)

## Methods

### get()

```ts
get(_id): Promise<Payload | ArrayBuffer | undefined>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<`Payload` \| `ArrayBuffer` \| `undefined`\>

### Implementation of

```ts
DataLakeViewer.get
```

### Inherited from

[`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods).[`get`](JsonRpcDataLakeViewerMethods.md#get)

***

### getMany()

```ts
getMany(_id): Promise<(Payload | ArrayBuffer)[]>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<(`Payload` \| `ArrayBuffer`)[]\>

### Implementation of

```ts
DataLakeViewer.getMany
```

### Inherited from

[`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods).[`getMany`](JsonRpcDataLakeViewerMethods.md#getmany)

***

### has()

```ts
has(_id): Promise<boolean>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<`boolean`\>

### Implementation of

```ts
DataLakeViewer.has
```

### Inherited from

[`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods).[`has`](JsonRpcDataLakeViewerMethods.md#has)

    ### <a id="JsonRpcDataLakeViewerMethods"></a>JsonRpcDataLakeViewerMethods

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcViewer`](#JsonRpcViewer)\<*typeof* [`DataLakeViewerRpcSchemas`](#../variables/DataLakeViewerRpcSchemas)\>

## Extended by

- [`JsonRpcDataLakeViewer`](#JsonRpcDataLakeViewer)

## Implements

- `DataLakeViewerMethods`

## Constructors

### Constructor

```ts
new JsonRpcDataLakeViewerMethods(transport): JsonRpcDataLakeViewerMethods;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `dataLakeViewer_get`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodCustom`\<`ArrayBuffer`, `ArrayBuffer`\>, `ZodTransform`\<`string`, `ArrayBuffer`\>\>\]\>\>;
        `from`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`ArrayBuffer` \| `SharedArrayBuffer`, `string`\>\>\]\>\>;
     \};
  \};
  `dataLakeViewer_getMany`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodCustom`\<`ArrayBuffer`, `ArrayBuffer`\>, `ZodTransform`\<`string`, `ArrayBuffer`\>\>\]\>\>;
        `from`: `ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`ArrayBuffer` \| `SharedArrayBuffer`, `string`\>\>\]\>\>;
     \};
  \};
  `dataLakeViewer_has`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodBoolean`;
        `from`: `ZodBoolean`;
     \};
  \};
\}\>

### Returns

`JsonRpcDataLakeViewerMethods`

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`constructor`](JsonRpcViewer.md#constructor)

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  dataLakeViewer_get: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodOptional<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
        from: ZodOptional<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
     };
  };
  dataLakeViewer_getMany: {
     params: {
        to: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
        from: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
     };
     result: {
        to: ZodArray<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
        from: ZodArray<ZodUnion<readonly [ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
     };
  };
  dataLakeViewer_has: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodBoolean;
        from: ZodBoolean;
     };
  };
}>;
```

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`transport`](JsonRpcViewer.md#transport)

## Methods

### get()

```ts
get(_id): Promise<Payload | ArrayBuffer | undefined>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<`Payload` \| `ArrayBuffer` \| `undefined`\>

### Implementation of

```ts
DataLakeViewerMethods.get
```

***

### getMany()

```ts
getMany(_id): Promise<(Payload | ArrayBuffer)[]>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<(`Payload` \| `ArrayBuffer`)[]\>

### Implementation of

```ts
DataLakeViewerMethods.getMany
```

***

### has()

```ts
has(_id): Promise<boolean>;
```

### Parameters

#### \_id

`unknown`

### Returns

`Promise`\<`boolean`\>

### Implementation of

```ts
DataLakeViewerMethods.has
```

    ### <a id="JsonRpcNetworkStakeViewer"></a>JsonRpcNetworkStakeViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcNetworkStakeViewerMethods`](#JsonRpcNetworkStakeViewerMethods)

## Implements

- `NetworkStakeViewer`

## Constructors

### Constructor

```ts
new JsonRpcNetworkStakeViewer(transport): JsonRpcNetworkStakeViewer;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `networkStakeViewer_active`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodOptional`\<`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodOptional`\<`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodNumber`\], `null`\>;
     \};
  \};
\}\>

### Returns

`JsonRpcNetworkStakeViewer`

### Overrides

[`JsonRpcNetworkStakeViewerMethods`](#JsonRpcNetworkStakeViewerMethods).[`constructor`](JsonRpcNetworkStakeViewerMethods.md#constructor)

## Properties

### \_stepRewards

```ts
protected _stepRewards: NetworkStakeStepRewardsViewer;
```

***

### transport

```ts
protected readonly transport: RpcTransport<{
  networkStakeViewer_active: {
     params: {
        from: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
        to: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
     };
     result: {
        from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodNumber], null>;
        to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodNumber], null>;
     };
  };
}>;
```

### Inherited from

[`JsonRpcNetworkStakeViewerMethods`](#JsonRpcNetworkStakeViewerMethods).[`transport`](JsonRpcNetworkStakeViewerMethods.md#transport)

## Accessors

### stepRewards

### Get Signature

```ts
get stepRewards(): NetworkStakeStepRewardsViewer;
```

#### Returns

`NetworkStakeStepRewardsViewer`

### Implementation of

```ts
NetworkStakeViewer.stepRewards
```

## Methods

### active()

```ts
active(blockNumber?): Promise<[bigint, number]>;
```

### Parameters

#### blockNumber?

`number`

### Returns

`Promise`\<\[`bigint`, `number`\]\>

the active stake and the number of active validators [active, block]

### Implementation of

```ts
NetworkStakeViewer.active
```

### Inherited from

[`JsonRpcNetworkStakeViewerMethods`](#JsonRpcNetworkStakeViewerMethods).[`active`](JsonRpcNetworkStakeViewerMethods.md#active)

    ### <a id="JsonRpcNetworkStakeViewerMethods"></a>JsonRpcNetworkStakeViewerMethods

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcViewer`](#JsonRpcViewer)\<*typeof* [`NetworkStakeViewerRpcSchemas`](#../variables/NetworkStakeViewerRpcSchemas)\>

## Extended by

- [`JsonRpcNetworkStakeViewer`](#JsonRpcNetworkStakeViewer)

## Implements

- `NetworkStakeViewerMethods`

## Constructors

### Constructor

```ts
new JsonRpcNetworkStakeViewerMethods(transport): JsonRpcNetworkStakeViewerMethods;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `networkStakeViewer_active`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodOptional`\<`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodOptional`\<`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodNumber`\], `null`\>;
     \};
  \};
\}\>

### Returns

`JsonRpcNetworkStakeViewerMethods`

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`constructor`](JsonRpcViewer.md#constructor)

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  networkStakeViewer_active: {
     params: {
        from: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
        to: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
     };
     result: {
        from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodNumber], null>;
        to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodNumber], null>;
     };
  };
}>;
```

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`transport`](JsonRpcViewer.md#transport)

## Methods

### active()

```ts
active(blockNumber?): Promise<[bigint, number]>;
```

### Parameters

#### blockNumber?

`number`

### Returns

`Promise`\<\[`bigint`, `number`\]\>

the active stake and the number of active validators [active, block]

### Implementation of

```ts
NetworkStakeViewerMethods.active
```

    ### <a id="JsonRpcNetworkStakingStepRewardsViewer"></a>JsonRpcNetworkStakingStepRewardsViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcNetworkStakingStepRewardsViewerMethods`](#JsonRpcNetworkStakingStepRewardsViewerMethods)

## Implements

- `NetworkStakeStepRewardsViewerMethods`

## Constructors

### Constructor

```ts
new JsonRpcNetworkStakingStepRewardsViewer(transport, providers?): JsonRpcNetworkStakingStepRewardsViewer;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
\}\>

#### providers?

[`JsonRpcNetworkStakingStepRewardsViewerProviders`](#../interfaces/JsonRpcNetworkStakingStepRewardsViewerProviders)

### Returns

`JsonRpcNetworkStakingStepRewardsViewer`

### Overrides

[`JsonRpcNetworkStakingStepRewardsViewerMethods`](#JsonRpcNetworkStakingStepRewardsViewerMethods).[`constructor`](JsonRpcNetworkStakingStepRewardsViewerMethods.md#constructor)

## Properties

### providers

```ts
protected providers: JsonRpcNetworkStakingStepRewardsViewerProviders;
```

***

### transport

```ts
protected readonly transport: RpcTransport<{
}>;
```

### Inherited from

[`JsonRpcNetworkStakingStepRewardsViewerMethods`](#JsonRpcNetworkStakingStepRewardsViewerMethods).[`transport`](JsonRpcNetworkStakingStepRewardsViewerMethods.md#transport)

## Accessors

### position

### Get Signature

```ts
get position(): NetworkStakeStepRewardsByPositionViewer | undefined;
```

#### Returns

`NetworkStakeStepRewardsByPositionViewer` \| `undefined`

***

### staker

### Get Signature

```ts
get staker(): NetworkStakeStepRewardsByStakerViewer | undefined;
```

#### Returns

`NetworkStakeStepRewardsByStakerViewer` \| `undefined`

***

### step

### Get Signature

```ts
get step(): NetworkStakeStepRewardsByStepViewer | undefined;
```

#### Returns

`NetworkStakeStepRewardsByStepViewer` \| `undefined`

***

### total

### Get Signature

```ts
get total(): NetworkStakeStepRewardsTotalViewer | undefined;
```

#### Returns

`NetworkStakeStepRewardsTotalViewer` \| `undefined`

    ### <a id="JsonRpcNetworkStakingStepRewardsViewerMethods"></a>JsonRpcNetworkStakingStepRewardsViewerMethods

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcViewer`](#JsonRpcViewer)\<*typeof* [`NetworkStakingStepRewardsViewerRpcSchemas`](#../variables/NetworkStakingStepRewardsViewerRpcSchemas)\>

## Extended by

- [`JsonRpcNetworkStakingStepRewardsViewer`](#JsonRpcNetworkStakingStepRewardsViewer)

## Implements

- `NetworkStakeStepRewardsViewerMethods`

## Constructors

### Constructor

```ts
new JsonRpcNetworkStakingStepRewardsViewerMethods(transport): JsonRpcNetworkStakingStepRewardsViewerMethods;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
\}\>

### Returns

`JsonRpcNetworkStakingStepRewardsViewerMethods`

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`constructor`](JsonRpcViewer.md#constructor)

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
}>;
```

### Inherited from

[`JsonRpcViewer`](#JsonRpcViewer).[`transport`](JsonRpcViewer.md#transport)

    ### <a id="JsonRpcTimeSyncViewer"></a>JsonRpcTimeSyncViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extends

- [`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods)

## Implements

- `TimeSyncViewer`

## Constructors

### Constructor

```ts
new JsonRpcTimeSyncViewer(transport): JsonRpcTimeSyncViewer;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `timeSyncViewer_convertTime`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodNumber`;
        `to`: `ZodNumber`;
     \};
  \};
  `timeSyncViewer_currentTime`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
     \};
  \};
  `timeSyncViewer_currentTimeAndHash`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodNullable`\<`ZodString`\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodNullable`\<`ZodString`\>\], `null`\>;
     \};
  \};
  `timeSyncViewer_currentTimePayload`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[\], `null`\>;
        `to`: `ZodTuple`\<\[\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodObject`\<\{
        \}, `$strip`\>;
        `to`: `ZodObject`\<\{
        \}, `$strip`\>;
     \};
  \};
\}\>

### Returns

`JsonRpcTimeSyncViewer`

### Overrides

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`constructor`](JsonRpcTimeSyncViewerMethods.md#constructor)

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  timeSyncViewer_convertTime: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
     };
     result: {
        from: ZodNumber;
        to: ZodNumber;
     };
  };
  timeSyncViewer_currentTime: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
     };
     result: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
     };
  };
  timeSyncViewer_currentTimeAndHash: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
     };
     result: {
        from: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
        to: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
     };
  };
  timeSyncViewer_currentTimePayload: {
     params: {
        from: ZodTuple<[], null>;
        to: ZodTuple<[], null>;
     };
     result: {
        from: ZodObject<{
        }, $strip>;
        to: ZodObject<{
        }, $strip>;
     };
  };
}>;
```

### Inherited from

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`transport`](JsonRpcTimeSyncViewerMethods.md#transport)

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

```ts
TimeSyncViewer.convertTime
```

### Inherited from

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`convertTime`](JsonRpcTimeSyncViewerMethods.md#converttime)

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

```ts
TimeSyncViewer.currentTime
```

### Inherited from

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`currentTime`](JsonRpcTimeSyncViewerMethods.md#currenttime)

***

### currentTimeAndHash()

```ts
currentTimeAndHash(domain): Promise<[number, string | null]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promise`\<\[`number`, `string` \| `null`\]\>

### Implementation of

```ts
TimeSyncViewer.currentTimeAndHash
```

### Inherited from

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`currentTimeAndHash`](JsonRpcTimeSyncViewerMethods.md#currenttimeandhash)

***

### currentTimePayload()

```ts
currentTimePayload(): Promise<{
}>;
```

Create a TimePayload with the current time from all configured domains

### Returns

`Promise`\<\{
\}\>

### Implementation of

```ts
TimeSyncViewer.currentTimePayload
```

### Inherited from

[`JsonRpcTimeSyncViewerMethods`](#JsonRpcTimeSyncViewerMethods).[`currentTimePayload`](JsonRpcTimeSyncViewerMethods.md#currenttimepayload)

    ### <a id="JsonRpcTimeSyncViewerMethods"></a>JsonRpcTimeSyncViewerMethods

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extended by

- [`JsonRpcTimeSyncViewer`](#JsonRpcTimeSyncViewer)

## Implements

- `TimeSyncViewerMethods`

## Constructors

### Constructor

```ts
new JsonRpcTimeSyncViewerMethods(transport): JsonRpcTimeSyncViewerMethods;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `timeSyncViewer_convertTime`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodNumber`;
        `to`: `ZodNumber`;
     \};
  \};
  `timeSyncViewer_currentTime`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>, `ZodNumber`\], `null`\>;
     \};
  \};
  `timeSyncViewer_currentTimeAndHash`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodUnion`\<readonly \[`ZodLiteral`\<`"xl1"`\>, `ZodLiteral`\<`"epoch"`\>, `ZodLiteral`\<`"ethereum"`\>\]\>\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodNullable`\<`ZodString`\>\], `null`\>;
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodNullable`\<`ZodString`\>\], `null`\>;
     \};
  \};
  `timeSyncViewer_currentTimePayload`: \{
     `params`: \{
        `from`: `ZodTuple`\<\[\], `null`\>;
        `to`: `ZodTuple`\<\[\], `null`\>;
     \};
     `result`: \{
        `from`: `ZodObject`\<\{
        \}, `$strip`\>;
        `to`: `ZodObject`\<\{
        \}, `$strip`\>;
     \};
  \};
\}\>

### Returns

`JsonRpcTimeSyncViewerMethods`

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  timeSyncViewer_convertTime: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
     };
     result: {
        from: ZodNumber;
        to: ZodNumber;
     };
  };
  timeSyncViewer_currentTime: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
     };
     result: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
     };
  };
  timeSyncViewer_currentTimeAndHash: {
     params: {
        from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
        to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
     };
     result: {
        from: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
        to: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
     };
  };
  timeSyncViewer_currentTimePayload: {
     params: {
        from: ZodTuple<[], null>;
        to: ZodTuple<[], null>;
     };
     result: {
        from: ZodObject<{
        }, $strip>;
        to: ZodObject<{
        }, $strip>;
     };
  };
}>;
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

```ts
TimeSyncViewerMethods.convertTime
```

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

```ts
TimeSyncViewerMethods.currentTime
```

***

### currentTimeAndHash()

```ts
currentTimeAndHash(domain): Promise<[number, string | null]>;
```

Get the current time for a given domain

### Parameters

#### domain

`TimeDomain`

### Returns

`Promise`\<\[`number`, `string` \| `null`\]\>

### Implementation of

```ts
TimeSyncViewerMethods.currentTimeAndHash
```

***

### currentTimePayload()

```ts
currentTimePayload(): Promise<{
}>;
```

Create a TimePayload with the current time from all configured domains

### Returns

`Promise`\<\{
\}\>

### Implementation of

```ts
TimeSyncViewerMethods.currentTimePayload
```

    ### <a id="JsonRpcViewer"></a>JsonRpcViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extended by

- [`JsonRpcDataLakeViewerMethods`](#JsonRpcDataLakeViewerMethods)
- [`JsonRpcNetworkStakeViewerMethods`](#JsonRpcNetworkStakeViewerMethods)
- [`JsonRpcNetworkStakingStepRewardsViewerMethods`](#JsonRpcNetworkStakingStepRewardsViewerMethods)

## Type Parameters

### TSchemas

`TSchemas` *extends* [`RpcSchemaMap`](#../type-aliases/RpcSchemaMap)

## Constructors

### Constructor

```ts
new JsonRpcViewer<TSchemas>(transport): JsonRpcViewer<TSchemas>;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<`TSchemas`\>

### Returns

`JsonRpcViewer`\<`TSchemas`\>

## Properties

### transport

```ts
protected readonly transport: RpcTransport<TSchemas>;
```

    ### <a id="JsonRpcXyoRunner"></a>JsonRpcXyoRunner

[**@xyo-network/xl1-rpc**](#../../README)

***

## Implements

- `XyoRunner`

## Constructors

### Constructor

```ts
new JsonRpcXyoRunner(transport): JsonRpcXyoRunner;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `xyoRunner_broadcastTransaction`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodTransform`\<`string`, `Hash`\>\>;
        `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>;
     \};
  \};
\}\>

### Returns

`JsonRpcXyoRunner`

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  xyoRunner_broadcastTransaction: {
     params: {
        to: ZodTuple<[ZodTuple<[ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>], null>;
        from: ZodTuple<[ZodTuple<[ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>], null>;
     };
     result: {
        to: ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>>;
        from: ZodPipe<ZodString, ZodTransform<Hash, string>>;
     };
  };
}>;
```

## Methods

### broadcastTransaction()

```ts
broadcastTransaction(transaction): Promise<Hash>;
```

### Parameters

#### transaction

`SignedHydratedTransaction`

### Returns

`Promise`\<`Hash`\>

### Implementation of

```ts
XyoRunner.broadcastTransaction
```

    ### <a id="JsonRpcXyoViewer"></a>JsonRpcXyoViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

## Implements

- `XyoViewer`

## Constructors

### Constructor

```ts
new JsonRpcXyoViewer(transport, providers?): JsonRpcXyoViewer;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `xyoViewer_networkStakeStepRewardClaimedByAddress`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardAddressReward`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\>;
        `from`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardAddressHistory`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\>;
        `from`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardAddressShare`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardWeightForAddress`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardUnclaimedByAddress`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardPoolRewards`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\>;
        `from`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardPositionWeight`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardPotentialPositionLoss`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardForStep`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardRandomizer`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardStakerCount`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodNumber`;
        `from`: `ZodNumber`;
     \};
  \};
  `xyoViewer_networkStakeStepRewardPoolShares`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\>;
        `from`: `ZodRecord`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardForStepForPosition`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
        \}, `$strip`\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardForPosition`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardsForRange`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardsForStepLevel`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_networkStakeStepRewardsForPosition`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodString`, `ZodTuple`\<\[`ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>, `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>\], `null`\>\>;
        `from`: `ZodRecord`\<`ZodString`, `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>, `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_accountBalance`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_accountBalanceHistory`: \{
     `params`: \{
        `to`: `ZodUnion`\<readonly \[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>, `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodUnion`\<readonly \[`ZodTuple`\<..., ...\>, `ZodPipe`\<..., ...\>\]\>\], `null`\>\]\>;
        `from`: `ZodUnion`\<readonly \[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>, `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodUnion`\<readonly \[`ZodTuple`\<..., ...\>, `ZodPipe`\<..., ...\>\]\>\], `null`\>\]\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
        `from`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_transferPairBalance`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_transferPairBalanceHistory`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
        `from`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_transferBalance`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodBigInt`, `ZodTransform`\<`Hex`, `bigint`\>\>;
        `from`: `ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>, `ZodTransform`\<`bigint`, `Hex`\>\>;
     \};
  \};
  `xyoViewer_transferBalanceHistory`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodOptional`\<`ZodTuple`\<\[`ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>, `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>\], `null`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodOptional`\<`ZodTuple`\<\[`ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>, `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>\], `null`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
        `from`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodNullable`\<`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>\>, `ZodObject`\<\{
        \}, `$strip`\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_blockByHash`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodTransform`\<`string`, `Hash`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_blockByNumber`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_blocksByHash`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodOptional`\<`ZodNumber`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodOptional`\<`ZodNumber`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
        `from`: `ZodArray`\<`ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<..., ...\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<...\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_chainId`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
        `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
     \};
  \};
  `xyoViewer_chainIdAtBlock`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
        `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
     \};
  \};
  `xyoViewer_currentBlock`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodObject`\<\{
           `block`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `previous`: `ZodNullable`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `protocol`: `ZodNumber`;
           `step_hashes`: `ZodOptional`\<`ZodArray`\<`ZodPipe`\<..., ...\>\>\>;
           `$epoch`: `ZodNumber`;
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
     \};
  \};
  `xyoViewer_currentBlockHash`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>;
        `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>;
     \};
  \};
  `xyoViewer_currentBlockNumber`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
        `from`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`XL1BlockNumber`, `number`\>\>;
     \};
  \};
  `xyoViewer_forkHistory`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodRecord`\<`ZodNumber`, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\>;
        `from`: `ZodRecord`\<`ZodNumber`, `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\>;
     \};
  \};
  `xyoViewer_stakeByStaker`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodObject`\<\{
           `amount`: `ZodBigInt`;
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `Hex`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `amount`: `bigint`;
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
        \}\>\>;
        `from`: `ZodPipe`\<`ZodObject`\<\{
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
           `amount`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `AttoXL1`;
           `id`: `PositionId`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
           `amount`: `Hex`;
        \}\>\>;
     \};
  \};
  `xyoViewer_stakeById`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodObject`\<\{
           `amount`: `ZodBigInt`;
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `Hex`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `amount`: `bigint`;
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
        \}\>\>;
        `from`: `ZodPipe`\<`ZodObject`\<\{
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
           `amount`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `AttoXL1`;
           `id`: `PositionId`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
           `amount`: `Hex`;
        \}\>\>;
     \};
  \};
  `xyoViewer_stakesByStaker`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodPipe`\<`ZodObject`\<\{
           `amount`: `ZodBigInt`;
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `Hex`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `amount`: `bigint`;
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
        \}\>\>\>;
        `from`: `ZodArray`\<`ZodPipe`\<`ZodObject`\<\{
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
           `amount`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `AttoXL1`;
           `id`: `PositionId`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
           `amount`: `Hex`;
        \}\>\>\>;
     \};
  \};
  `xyoViewer_stakesByStaked`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodPipe`\<`ZodObject`\<\{
           `amount`: `ZodBigInt`;
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `Hex`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `amount`: `bigint`;
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
        \}\>\>\>;
        `from`: `ZodArray`\<`ZodPipe`\<`ZodObject`\<\{
           `addBlock`: `ZodNumber`;
           `id`: `ZodNumber`;
           `removeBlock`: `ZodNumber`;
           `staked`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `staker`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
           `withdrawBlock`: `ZodNumber`;
           `amount`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Hex`, `string`\>\>;
         \}, `$strip`\>, `ZodTransform`\<\{
           `addBlock`: `number`;
           `amount`: `AttoXL1`;
           `id`: `PositionId`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
         \}, \{
           `addBlock`: `number`;
           `id`: `number`;
           `removeBlock`: `number`;
           `staked`: `Address`;
           `staker`: `Address`;
           `withdrawBlock`: `number`;
           `amount`: `Hex`;
        \}\>\>\>;
     \};
  \};
  `xyoViewer_transactionByBlockHashAndIndex`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
        `from`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_transactionByBlockNumberAndIndex`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodNumber`, `ZodNumber`\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
        `from`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
     \};
  \};
  `xyoViewer_transactionByHash`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodPipe`\<`ZodString`, `ZodTransform`\<`Hash`, `string`\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
        `from`: `ZodNullable`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\>;
     \};
  \};
\}\>

#### providers?

[`JsonRpcXyoViewerProviders`](#../interfaces/JsonRpcXyoViewerProviders)

### Returns

`JsonRpcXyoViewer`

## Properties

### providers?

```ts
protected readonly optional providers: JsonRpcXyoViewerProviders;
```

***

### transport

```ts
protected readonly transport: RpcTransport<{
  xyoViewer_networkStakeStepRewardClaimedByAddress: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardAddressReward: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
        from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
     };
  };
  xyoViewer_networkStakeStepRewardAddressHistory: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
        from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
     };
  };
  xyoViewer_networkStakeStepRewardAddressShare: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
        from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
     };
  };
  xyoViewer_networkStakeStepRewardWeightForAddress: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardUnclaimedByAddress: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardPoolRewards: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>], null>;
     };
     result: {
        to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
        from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
     };
  };
  xyoViewer_networkStakeStepRewardPositionWeight: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardPotentialPositionLoss: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardForStep: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardRandomizer: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardStakerCount: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>], null>;
     };
     result: {
        to: ZodNumber;
        from: ZodNumber;
     };
  };
  xyoViewer_networkStakeStepRewardPoolShares: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>], null>;
     };
     result: {
        to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
        from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
     };
  };
  xyoViewer_networkStakeStepRewardForStepForPosition: {
     params: {
        to: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
        from: ZodTuple<[ZodObject<{
        }, $strip>, ZodNumber], null>;
     };
     result: {
        to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
        from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
     };
  };
  xyoViewer_networkStakeStepRewardForPosition: {
     params: {
        to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
        from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
     };
     result: {
        to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
        from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
     };
  };
  xyoViewer_networkStakeStepRewardsForRange: {
     params: {
        to: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
        from: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardsForStepLevel: {
     params: {
        to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
        from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_networkStakeStepRewardsForPosition: {
     params: {
        to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
        from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
     };
     result: {
        to: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>>;
        from: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>>;
     };
  };
  xyoViewer_accountBalance: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_accountBalanceHistory: {
     params: {
        to: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<..., ...>, ZodPipe<..., ...>]>], null>]>;
        from: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<..., ...>, ZodPipe<..., ...>]>], null>]>;
     };
     result: {
        to: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
        from: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
     };
  };
  xyoViewer_transferPairBalance: {
     params: {
        to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
        from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_transferPairBalanceHistory: {
     params: {
        to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
        from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
     };
     result: {
        to: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
        from: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
     };
  };
  xyoViewer_transferBalance: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>;
        from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>;
     };
  };
  xyoViewer_transferBalanceHistory: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<..., ...>>, ZodPipe<ZodNumber, ZodTransform<..., ...>>], null>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<..., ...>>, ZodPipe<ZodNumber, ZodTransform<..., ...>>], null>>], null>;
     };
     result: {
        to: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
        from: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodNullable<ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>>, ZodObject<{
        }, $strip>], null>>;
     };
  };
  xyoViewer_blockByHash: {
     params: {
        to: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
        from: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
     };
  };
  xyoViewer_blockByNumber: {
     params: {
        to: ZodTuple<[ZodNumber], null>;
        from: ZodTuple<[ZodNumber], null>;
     };
     result: {
        to: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
        from: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
     };
  };
  xyoViewer_blocksByHash: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
     };
     result: {
        to: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
        from: ZodArray<ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           previous: ZodNullable<ZodPipe<..., ...>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<...>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
     };
  };
  xyoViewer_chainId: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodPipe<ZodString, ZodTransform<Address, string>>;
        from: ZodPipe<ZodString, ZodTransform<Address, string>>;
     };
  };
  xyoViewer_chainIdAtBlock: {
     params: {
        to: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
        from: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
     };
     result: {
        to: ZodPipe<ZodString, ZodTransform<Address, string>>;
        from: ZodPipe<ZodString, ZodTransform<Address, string>>;
     };
  };
  xyoViewer_currentBlock: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
        from: ZodTuple<[ZodObject<{
           block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           protocol: ZodNumber;
           step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
           $epoch: ZodNumber;
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
     };
  };
  xyoViewer_currentBlockHash: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodPipe<ZodString, ZodTransform<Hash, string>>;
        from: ZodPipe<ZodString, ZodTransform<Hash, string>>;
     };
  };
  xyoViewer_currentBlockNumber: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
        from: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
     };
  };
  xyoViewer_forkHistory: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
        from: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
     };
  };
  xyoViewer_stakeByStaker: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
     };
     result: {
        to: ZodPipe<ZodObject<{
           amount: ZodBigInt;
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: Hex;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           amount: bigint;
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
        }>>;
        from: ZodPipe<ZodObject<{
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
           amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: AttoXL1;
           id: PositionId;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
           amount: Hex;
        }>>;
     };
  };
  xyoViewer_stakeById: {
     params: {
        to: ZodTuple<[ZodNumber], null>;
        from: ZodTuple<[ZodNumber], null>;
     };
     result: {
        to: ZodPipe<ZodObject<{
           amount: ZodBigInt;
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: Hex;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           amount: bigint;
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
        }>>;
        from: ZodPipe<ZodObject<{
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
           amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: AttoXL1;
           id: PositionId;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
           amount: Hex;
        }>>;
     };
  };
  xyoViewer_stakesByStaker: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodArray<ZodPipe<ZodObject<{
           amount: ZodBigInt;
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: Hex;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           amount: bigint;
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
        }>>>;
        from: ZodArray<ZodPipe<ZodObject<{
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
           amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: AttoXL1;
           id: PositionId;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
           amount: Hex;
        }>>>;
     };
  };
  xyoViewer_stakesByStaked: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
     };
     result: {
        to: ZodArray<ZodPipe<ZodObject<{
           amount: ZodBigInt;
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: Hex;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           amount: bigint;
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
        }>>>;
        from: ZodArray<ZodPipe<ZodObject<{
           addBlock: ZodNumber;
           id: ZodNumber;
           removeBlock: ZodNumber;
           staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
           staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
           withdrawBlock: ZodNumber;
           amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
         }, $strip>, ZodTransform<{
           addBlock: number;
           amount: AttoXL1;
           id: PositionId;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
         }, {
           addBlock: number;
           id: number;
           removeBlock: number;
           staked: Address;
           staker: Address;
           withdrawBlock: number;
           amount: Hex;
        }>>>;
     };
  };
  xyoViewer_transactionByBlockHashAndIndex: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
     };
     result: {
        to: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
        from: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
     };
  };
  xyoViewer_transactionByBlockNumberAndIndex: {
     params: {
        to: ZodTuple<[ZodNumber, ZodNumber], null>;
        from: ZodTuple<[ZodNumber, ZodNumber], null>;
     };
     result: {
        to: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
        from: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
     };
  };
  xyoViewer_transactionByHash: {
     params: {
        to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
        from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
     };
     result: {
        to: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
        from: ZodNullable<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>>;
     };
  };
}>;
```

## Accessors

### networkStakeViewer

### Get Signature

```ts
get networkStakeViewer(): NetworkStakeViewer | undefined;
```

#### Returns

`NetworkStakeViewer` \| `undefined`

## Methods

### accountBalance()

```ts
accountBalance(address): Promise<AttoXL1>;
```

### Parameters

#### address

`Address`

### Returns

`Promise`\<`AttoXL1`\>

### Implementation of

```ts
XyoViewer.accountBalance
```

***

### accountBalanceHistory()

### Call Signature

```ts
accountBalanceHistory(address): Promise<AccountBalanceHistoryItem[]>;
```

#### Parameters

##### address

`Address`

#### Returns

`Promise`\<`AccountBalanceHistoryItem`[]\>

#### Implementation of

```ts
XyoViewer.accountBalanceHistory
```

### Call Signature

```ts
accountBalanceHistory(address, head): Promise<AccountBalanceHistoryItem[]>;
```

#### Parameters

##### address

`Address`

##### head

`Hash`

#### Returns

`Promise`\<`AccountBalanceHistoryItem`[]\>

#### Implementation of

```ts
XyoViewer.accountBalanceHistory
```

### Call Signature

```ts
accountBalanceHistory(address, range): Promise<AccountBalanceHistoryItem[]>;
```

#### Parameters

##### address

`Address`

##### range

`BlockRange`

#### Returns

`Promise`\<`AccountBalanceHistoryItem`[]\>

#### Implementation of

```ts
XyoViewer.accountBalanceHistory
```

***

### blockByHash()

```ts
blockByHash(hash): Promise<HydratedBlock | null>;
```

### Parameters

#### hash

`Hash`

### Returns

`Promise`\<`HydratedBlock` \| `null`\>

### Implementation of

```ts
XyoViewer.blockByHash
```

***

### blockByNumber()

```ts
blockByNumber(blockNumber): Promise<HydratedBlock | null>;
```

### Parameters

#### blockNumber

`number`

### Returns

`Promise`\<`HydratedBlock` \| `null`\>

### Implementation of

```ts
XyoViewer.blockByNumber
```

***

### blocksByHash()

```ts
blocksByHash(hash, limit?): Promise<HydratedBlock[]>;
```

### Parameters

#### hash

`Hash`

#### limit?

`number`

### Returns

`Promise`\<`HydratedBlock`[]\>

### Implementation of

```ts
XyoViewer.blocksByHash
```

***

### chainId()

```ts
chainId(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

### Implementation of

```ts
XyoViewer.chainId
```

***

### chainIdAtBlock()

```ts
chainIdAtBlock(blockNumber): Promise<ChainId | undefined>;
```

### Parameters

#### blockNumber

`number`

### Returns

`Promise`\<`ChainId` \| `undefined`\>

### Implementation of

```ts
XyoViewer.chainIdAtBlock
```

***

### currentBlock()

```ts
currentBlock(): Promise<HydratedBlock>;
```

### Returns

`Promise`\<`HydratedBlock`\>

### Implementation of

```ts
XyoViewer.currentBlock
```

***

### currentBlockHash()

```ts
currentBlockHash(): Promise<Hash>;
```

### Returns

`Promise`\<`Hash`\>

### Implementation of

```ts
XyoViewer.currentBlockHash
```

***

### currentBlockNumber()

```ts
currentBlockNumber(): Promise<XL1BlockNumber>;
```

### Returns

`Promise`\<`XL1BlockNumber`\>

### Implementation of

```ts
XyoViewer.currentBlockNumber
```

***

### forkHistory()

```ts
forkHistory(): Promise<ForkHistory>;
```

### Returns

`Promise`\<`ForkHistory`\>

### Implementation of

```ts
XyoViewer.forkHistory
```

***

### networkStakeStepRewardAddressHistory()

```ts
networkStakeStepRewardAddressHistory(address): Promise<Record<Address, bigint>>;
```

### Parameters

#### address

`Address`

### Returns

`Promise`\<`Record`\<`Address`, `bigint`\>\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardAddressHistory
```

***

### networkStakeStepRewardAddressReward()

```ts
networkStakeStepRewardAddressReward(context, address): Promise<Record<Address, bigint>>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promise`\<`Record`\<`Address`, `bigint`\>\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardAddressReward
```

***

### networkStakeStepRewardAddressShare()

```ts
networkStakeStepRewardAddressShare(context, address): Promise<[bigint, bigint]>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promise`\<\[`bigint`, `bigint`\]\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardAddressShare
```

***

### networkStakeStepRewardClaimedByAddress()

```ts
networkStakeStepRewardClaimedByAddress(address): Promise<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardClaimedByAddress
```

***

### networkStakeStepRewardForPosition()

```ts
networkStakeStepRewardForPosition(position, range): Promise<[bigint, bigint]>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promise`\<\[`bigint`, `bigint`\]\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardForPosition
```

***

### networkStakeStepRewardForStep()

```ts
networkStakeStepRewardForStep(context): Promise<bigint>;
```

### Parameters

#### context

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardForStep
```

***

### networkStakeStepRewardForStepForPosition()

```ts
networkStakeStepRewardForStepForPosition(context, position): Promise<[bigint, bigint]>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promise`\<\[`bigint`, `bigint`\]\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardForStepForPosition
```

***

### networkStakeStepRewardPoolRewards()

```ts
networkStakeStepRewardPoolRewards(context): Promise<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promise`\<`Record`\<`Address`, `bigint`\>\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardPoolRewards
```

***

### networkStakeStepRewardPoolShares()

```ts
networkStakeStepRewardPoolShares(context): Promise<Record<Address, bigint>>;
```

### Parameters

#### context

### Returns

`Promise`\<`Record`\<`Address`, `bigint`\>\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardPoolShares
```

***

### networkStakeStepRewardPositionWeight()

```ts
networkStakeStepRewardPositionWeight(context, position): Promise<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardPositionWeight
```

***

### networkStakeStepRewardPotentialPositionLoss()

```ts
networkStakeStepRewardPotentialPositionLoss(context, position): Promise<bigint>;
```

### Parameters

#### context

#### position

`number`

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardPotentialPositionLoss
```

***

### networkStakeStepRewardRandomizer()

```ts
networkStakeStepRewardRandomizer(context): Promise<bigint>;
```

### Parameters

#### context

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardRandomizer
```

***

### networkStakeStepRewardStakerCount()

```ts
networkStakeStepRewardStakerCount(context): Promise<number>;
```

### Parameters

#### context

### Returns

`Promise`\<`number`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardStakerCount
```

***

### networkStakeStepRewardUnclaimedByAddress()

```ts
networkStakeStepRewardUnclaimedByAddress(address): Promise<bigint>;
```

### Parameters

#### address

`Address`

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardUnclaimedByAddress
```

***

### networkStakeStepRewardWeightForAddress()

```ts
networkStakeStepRewardWeightForAddress(context, address): Promise<bigint>;
```

### Parameters

#### context

#### address

`Address`

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardWeightForAddress
```

***

### networkStakeStepRewardsForPosition()

```ts
networkStakeStepRewardsForPosition(position, range): Promise<Record<StepIdentityString, [bigint, bigint]>>;
```

### Parameters

#### position

`number`

#### range

\[`number`, `number`\]

### Returns

`Promise`\<`Record`\<`StepIdentityString`, \[`bigint`, `bigint`\]\>\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardsForPosition
```

***

### networkStakeStepRewardsForRange()

```ts
networkStakeStepRewardsForRange(range): Promise<bigint>;
```

### Parameters

#### range

\[`number`, `number`\]

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardsForRange
```

***

### networkStakeStepRewardsForStepLevel()

```ts
networkStakeStepRewardsForStepLevel(stepLevel, range): Promise<bigint>;
```

### Parameters

#### stepLevel

`number`

#### range

\[`number`, `number`\]

### Returns

`Promise`\<`bigint`\>

### Implementation of

```ts
XyoViewer.networkStakeStepRewardsForStepLevel
```

***

### stakeById()

```ts
stakeById(id): Promise<Position>;
```

### Parameters

#### id

`number`

### Returns

`Promise`\<`Position`\>

### Implementation of

```ts
XyoViewer.stakeById
```

***

### stakeByStaker()

```ts
stakeByStaker(staker, slot): Promise<Position>;
```

### Parameters

#### staker

`Address`

#### slot

`number`

### Returns

`Promise`\<`Position`\>

### Implementation of

```ts
XyoViewer.stakeByStaker
```

***

### stakesByStaked()

```ts
stakesByStaked(staked): Promise<Position[]>;
```

### Parameters

#### staked

`Address`

### Returns

`Promise`\<`Position`[]\>

### Implementation of

```ts
XyoViewer.stakesByStaked
```

***

### stakesByStaker()

```ts
stakesByStaker(staker): Promise<Position[]>;
```

### Parameters

#### staker

`Address`

### Returns

`Promise`\<`Position`[]\>

### Implementation of

```ts
XyoViewer.stakesByStaker
```

***

### transactionByBlockHashAndIndex()

```ts
transactionByBlockHashAndIndex(blockHash, transactionIndex): Promise<SignedHydratedTransaction | null>;
```

### Parameters

#### blockHash

`Hash`

#### transactionIndex

`number`

### Returns

`Promise`\<`SignedHydratedTransaction` \| `null`\>

### Implementation of

```ts
XyoViewer.transactionByBlockHashAndIndex
```

***

### transactionByBlockNumberAndIndex()

```ts
transactionByBlockNumberAndIndex(blockNumber, transactionIndex): Promise<SignedHydratedTransaction | null>;
```

### Parameters

#### blockNumber

`number`

#### transactionIndex

`number`

### Returns

`Promise`\<`SignedHydratedTransaction` \| `null`\>

### Implementation of

```ts
XyoViewer.transactionByBlockNumberAndIndex
```

***

### transactionByHash()

```ts
transactionByHash(transactionHash): Promise<SignedHydratedTransaction | null>;
```

### Parameters

#### transactionHash

`Hash`

### Returns

`Promise`\<`SignedHydratedTransaction` \| `null`\>

### Implementation of

```ts
XyoViewer.transactionByHash
```

***

### transferBalance()

```ts
transferBalance(address): Promise<AttoXL1>;
```

### Parameters

#### address

`Address`

### Returns

`Promise`\<`AttoXL1`\>

### Implementation of

```ts
XyoViewer.transferBalance
```

***

### transferBalanceHistory()

```ts
transferBalanceHistory(_address, _range?): Promise<TransferBalanceHistoryItem[]>;
```

### Parameters

#### \_address

`Address`

#### \_range?

`XL1BlockRange`

### Returns

`Promise`\<`TransferBalanceHistoryItem`[]\>

### Implementation of

```ts
XyoViewer.transferBalanceHistory
```

***

### transferPairBalance()

```ts
transferPairBalance(pair): Promise<AttoXL1>;
```

### Parameters

#### pair

`TransferPair`

### Returns

`Promise`\<`AttoXL1`\>

### Implementation of

```ts
XyoViewer.transferPairBalance
```

***

### transferPairBalanceHistory()

```ts
transferPairBalanceHistory(_pair): Promise<TransferBalanceHistoryItem[]>;
```

### Parameters

#### \_pair

`TransferPair`

### Returns

`Promise`\<`TransferBalanceHistoryItem`[]\>

### Implementation of

```ts
XyoViewer.transferPairBalanceHistory
```

    ### <a id="MemoryRpcTransport"></a>MemoryRpcTransport

[**@xyo-network/xl1-rpc**](#../../README)

***

## Type Parameters

### T

`T` *extends* [`RpcSchemaMap`](#../type-aliases/RpcSchemaMap)

## Implements

- [`RpcTransport`](#../interfaces/RpcTransport)\<`T`\>

## Constructors

### Constructor

```ts
new MemoryRpcTransport<T>(rpcEngine, schemas): MemoryRpcTransport<T>;
```

### Parameters

#### rpcEngine

`JsonRpcEngine`

#### schemas

`T`

### Returns

`MemoryRpcTransport`\<`T`\>

## Properties

### \_rpcEngine

```ts
protected readonly _rpcEngine: JsonRpcEngine;
```

***

### \_schemas

```ts
protected readonly _schemas: T;
```

***

### requestSchemas

```ts
protected readonly requestSchemas: Record<keyof T, ZodObject<Readonly<{
[k: string]: $ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>;
}>, $strip>>;
```

***

### responseSchemas

```ts
protected readonly responseSchemas: Record<keyof T, ZodObject<Readonly<{
[k: string]: $ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>;
}>, $strip>>;
```

## Methods

### sendRequest()

```ts
sendRequest<TMethod>(method, params?): Promise<output<T[TMethod]["result"]["from"]>>;
```

### Type Parameters

#### TMethod

`TMethod` *extends* `string` \| `number` \| `symbol`

### Parameters

#### method

`TMethod`

#### params?

`input`\<`T`\[`TMethod`\]\[`"params"`\]\[`"to"`\]\>

### Returns

`Promise`\<`output`\<`T`\[`TMethod`\]\[`"result"`\]\[`"from"`\]\>\>

### Implementation of

[`RpcTransport`](#../interfaces/RpcTransport).[`sendRequest`](../interfaces/RpcTransport.md#sendrequest)

    ### <a id="NodeXyoRunner"></a>NodeXyoRunner

[**@xyo-network/xl1-rpc**](#../../README)

***

## Implements

- `XyoRunner`

## Constructors

### Constructor

```ts
new NodeXyoRunner(node): NodeXyoRunner;
```

### Parameters

#### node

`NodeInstance`

### Returns

`NodeXyoRunner`

## Properties

### node

```ts
protected readonly node: NodeInstance;
```

***

### pendingArchivistPath

```ts
protected readonly pendingArchivistPath: ModuleIdentifier = 'XYOChain:Pending:PendingTransactions';
```

## Methods

### broadcastTransaction()

```ts
broadcastTransaction(transaction): Promise<Hash>;
```

### Parameters

#### transaction

`SignedHydratedTransaction`

### Returns

`Promise`\<`Hash`\>

### Implementation of

```ts
XyoRunner.broadcastTransaction
```

***

### getArchivist()

```ts
protected getArchivist(identifier): Promise<ArchivistInstance<ArchivistParams<AnyConfigSchema<ArchivistConfig<void, void>>>, ArchivistModuleEventData, Payload<void, void>>>;
```

### Parameters

#### identifier

`ModuleIdentifier`

### Returns

`Promise`\<`ArchivistInstance`\<`ArchivistParams`\<`AnyConfigSchema`\<`ArchivistConfig`\<`void`, `void`\>\>\>, `ArchivistModuleEventData`, `Payload`\<`void`, `void`\>\>\>

***

### getPendingArchivist()

```ts
protected getPendingArchivist(): Promise<ArchivistInstance<ArchivistParams<AnyConfigSchema<ArchivistConfig>>, ArchivistModuleEventData, Payload>>;
```

### Returns

`Promise`\<`ArchivistInstance`\<`ArchivistParams`\<`AnyConfigSchema`\<`ArchivistConfig`\>\>, `ArchivistModuleEventData`, `Payload`\>\>

    ### <a id="RpcXyoPermissions"></a>RpcXyoPermissions

[**@xyo-network/xl1-rpc**](#../../README)

***

## Implements

- `XyoPermissions`

## Constructors

### Constructor

```ts
new RpcXyoPermissions(transport): RpcXyoPermissions;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `xyoPermissions_getPermissions`: \{
     `params`: \{
        `to`: `ZodArray`\<`ZodAny`\>;
        `from`: `ZodArray`\<`ZodAny`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `caveats`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{
              `type`: ...;
              `value`: ...;
           \}, `$strip`\>\>\>;
           `invoker`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
        `from`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `caveats`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{
              `type`: ...;
              `value`: ...;
           \}, `$strip`\>\>\>;
           `invoker`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
     \};
  \};
  `xyoPermissions_requestPermissions`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodRecord`\<`ZodString`, `ZodAny`\>\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodRecord`\<`ZodString`, `ZodAny`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
        `from`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
     \};
  \};
  `xyoPermissions_revokePermissions`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodRecord`\<`ZodString`, `ZodAny`\>\>\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodArray`\<`ZodRecord`\<`ZodString`, `ZodRecord`\<`ZodString`, `ZodAny`\>\>\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
        `from`: `ZodArray`\<`ZodObject`\<\{
           `parentCapability`: `ZodString`;
           `date`: `ZodOptional`\<`ZodNumber`\>;
        \}, `$strip`\>\>;
     \};
  \};
\}\>

### Returns

`RpcXyoPermissions`

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  xyoPermissions_getPermissions: {
     params: {
        to: ZodArray<ZodAny>;
        from: ZodArray<ZodAny>;
     };
     result: {
        to: ZodArray<ZodObject<{
           parentCapability: ZodString;
           caveats: ZodOptional<ZodArray<ZodObject<{
              type: ...;
              value: ...;
           }, $strip>>>;
           invoker: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
        from: ZodArray<ZodObject<{
           parentCapability: ZodString;
           caveats: ZodOptional<ZodArray<ZodObject<{
              type: ...;
              value: ...;
           }, $strip>>>;
           invoker: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
     };
  };
  xyoPermissions_requestPermissions: {
     params: {
        to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
        from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
     };
     result: {
        to: ZodArray<ZodObject<{
           parentCapability: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
        from: ZodArray<ZodObject<{
           parentCapability: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
     };
  };
  xyoPermissions_revokePermissions: {
     params: {
        to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
        from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
     };
     result: {
        to: ZodArray<ZodObject<{
           parentCapability: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
        from: ZodArray<ZodObject<{
           parentCapability: ZodString;
           date: ZodOptional<ZodNumber>;
        }, $strip>>;
     };
  };
}>;
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

`Promise`\<`InvokerPermission`[]\>

### Implementation of

```ts
XyoPermissions.getPermissions
```

***

### requestPermissions()

```ts
requestPermissions(permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### permissions

`PermissionRequest`[]

### Returns

`Promise`\<`RequestedPermission`[]\>

### Implementation of

```ts
XyoPermissions.requestPermissions
```

***

### revokePermissions()

```ts
revokePermissions(_permissions): Promise<RequestedPermission[]>;
```

### Parameters

#### \_permissions

`PermissionRequest`

### Returns

`Promise`\<`RequestedPermission`[]\>

### Implementation of

```ts
XyoPermissions.revokePermissions
```

    ### <a id="RpcXyoSigner"></a>RpcXyoSigner

[**@xyo-network/xl1-rpc**](#../../README)

***

## Implements

- `XyoSigner`

## Constructors

### Constructor

```ts
new RpcXyoSigner(transport): RpcXyoSigner;
```

### Parameters

#### transport

[`RpcTransport`](#../interfaces/RpcTransport)\<\{
  `xyoSigner_address`: \{
     `params`: \{
        `to`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
        `from`: `ZodOptional`\<`ZodArray`\<`ZodAny`\>\>;
     \};
     `result`: \{
        `to`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
        `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`Address`, `string`\>\>;
     \};
  \};
  `xyoSigner_signTransaction`: \{
     `params`: \{
        `to`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\], `null`\>;
        `from`: `ZodTuple`\<\[`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<...\>;
           `payload_hashes`: `ZodArray`\<...\>;
           `payload_schemas`: `ZodArray`\<...\>;
           `previous_hashes`: `ZodArray`\<...\>;
           `$destination`: `ZodOptional`\<...\>;
           `$sourceQuery`: `ZodOptional`\<...\>;
           `$signatures`: `ZodArray`\<...\>;
           `schema`: `ZodLiteral`\<...\>;
           `nbf`: `ZodPipe`\<..., ...\>;
           `exp`: `ZodPipe`\<..., ...\>;
           `script`: `ZodOptional`\<...\>;
           `fees`: `ZodObject`\<..., ...\>;
           `chain`: `ZodPipe`\<..., ...\>;
           `from`: `ZodPipe`\<..., ...\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>\], `null`\>;
     \};
     `result`: \{
        `to`: `ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<`ZodPipe`\<..., ...\>\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<readonly \[..., ...\]\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<`BlockNumber`, `number`\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<`ZodArray`\<...\>\>\>;
           `fees`: `ZodObject`\<\{
              `base`: `ZodPipe`\<..., ...\>;
              `gasLimit`: `ZodPipe`\<..., ...\>;
              `gasPrice`: `ZodPipe`\<..., ...\>;
              `priority`: `ZodPipe`\<..., ...\>;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`ChainId`, `string`\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
        \}, `$strict`\>\>\], `null`\>;
        `from`: `ZodPipe`\<`ZodTuple`\<\[`ZodObject`\<\{
           `addresses`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_hashes`: `ZodArray`\<`ZodPipe`\<..., ...\>\>;
           `payload_schemas`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `previous_hashes`: `ZodArray`\<`ZodNullable`\<...\>\>;
           `$destination`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$sourceQuery`: `ZodOptional`\<`ZodPipe`\<..., ...\>\>;
           `$signatures`: `ZodArray`\<`ZodUnion`\<...\>\>;
           `schema`: `ZodLiteral`\<`"network.xyo.boundwitness"`\>;
           `nbf`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `exp`: `ZodPipe`\<`ZodNumber`, `ZodTransform`\<..., ...\>\>;
           `script`: `ZodOptional`\<`ZodOptional`\<...\>\>;
           `fees`: `ZodObject`\<\{
              `base`: ...;
              `gasLimit`: ...;
              `gasPrice`: ...;
              `priority`: ...;
           \}, `$strip`\>;
           `chain`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
           `from`: `ZodPipe`\<`ZodString`, `ZodTransform`\<..., ...\>\>;
         \}, `$strip`\>, `ZodArray`\<`ZodObject`\<\{
         \}, `$strict`\>\>\], `null`\>, `ZodTransform`\<`HydratedTransactionWithStorageMeta`\<`TransactionBoundWitness`, `Payload`\>, \[\{
           `addresses`: `Address`[];
           `payload_hashes`: `Hash`[];
           `payload_schemas`: (`string` \| ... & ...)[];
           `previous_hashes`: (`Hash` \| `null`)[];
           `$destination?`: `Address`;
           `$sourceQuery?`: `Hash`;
           `$signatures`: (`Hex` \| `null`)[];
           `schema`: `"network.xyo.boundwitness"`;
           `nbf`: `BlockNumber`;
           `exp`: `BlockNumber`;
           `script?`: `string`[];
           `fees`: \{
              `base`: `Hex`;
              `gasLimit`: `Hex`;
              `gasPrice`: `Hex`;
              `priority`: `Hex`;
           \};
           `chain`: `ChainId`;
           `from`: `ChainId`;
        \}, `object`[]\]\>\>;
     \};
  \};
\}\>

### Returns

`RpcXyoSigner`

## Properties

### transport

```ts
protected readonly transport: RpcTransport<{
  xyoSigner_address: {
     params: {
        to: ZodOptional<ZodArray<ZodAny>>;
        from: ZodOptional<ZodArray<ZodAny>>;
     };
     result: {
        to: ZodPipe<ZodString, ZodTransform<Address, string>>;
        from: ZodPipe<ZodString, ZodTransform<Address, string>>;
     };
  };
  xyoSigner_signTransaction: {
     params: {
        to: ZodTuple<[ZodTuple<[ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>], null>;
        from: ZodTuple<[ZodTuple<[ZodObject<{
           addresses: ZodArray<...>;
           payload_hashes: ZodArray<...>;
           payload_schemas: ZodArray<...>;
           previous_hashes: ZodArray<...>;
           $destination: ZodOptional<...>;
           $sourceQuery: ZodOptional<...>;
           $signatures: ZodArray<...>;
           schema: ZodLiteral<...>;
           nbf: ZodPipe<..., ...>;
           exp: ZodPipe<..., ...>;
           script: ZodOptional<...>;
           fees: ZodObject<..., ...>;
           chain: ZodPipe<..., ...>;
           from: ZodPipe<..., ...>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>], null>;
     };
     result: {
        to: ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
           previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
           $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
           $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
           exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
           script: ZodOptional<ZodOptional<ZodArray<...>>>;
           fees: ZodObject<{
              base: ZodPipe<..., ...>;
              gasLimit: ZodPipe<..., ...>;
              gasPrice: ZodPipe<..., ...>;
              priority: ZodPipe<..., ...>;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
           from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
         }, $strip>, ZodArray<ZodObject<{
        }, $strict>>], null>;
        from: ZodPipe<ZodTuple<[ZodObject<{
           addresses: ZodArray<ZodPipe<..., ...>>;
           payload_hashes: ZodArray<ZodPipe<..., ...>>;
           payload_schemas: ZodArray<ZodUnion<...>>;
           previous_hashes: ZodArray<ZodNullable<...>>;
           $destination: ZodOptional<ZodPipe<..., ...>>;
           $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
           $signatures: ZodArray<ZodUnion<...>>;
           schema: ZodLiteral<"network.xyo.boundwitness">;
           nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
           script: ZodOptional<ZodOptional<...>>;
           fees: ZodObject<{
              base: ...;
              gasLimit: ...;
              gasPrice: ...;
              priority: ...;
           }, $strip>;
           chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
           from: ZodPipe<ZodString, ZodTransform<..., ...>>;
         }, $strip>, ZodArray<ZodObject<{
         }, $strict>>], null>, ZodTransform<HydratedTransactionWithStorageMeta<TransactionBoundWitness, Payload>, [{
           addresses: Address[];
           payload_hashes: Hash[];
           payload_schemas: (string | ... & ...)[];
           previous_hashes: (Hash | null)[];
           $destination?: Address;
           $sourceQuery?: Hash;
           $signatures: (Hex | null)[];
           schema: "network.xyo.boundwitness";
           nbf: BlockNumber;
           exp: BlockNumber;
           script?: string[];
           fees: {
              base: Hex;
              gasLimit: Hex;
              gasPrice: Hex;
              priority: Hex;
           };
           chain: ChainId;
           from: ChainId;
        }, object[]]>>;
     };
  };
}>;
```

## Methods

### address()

```ts
address(): Promise<Address>;
```

### Returns

`Promise`\<`Address`\>

### Implementation of

```ts
XyoSigner.address
```

***

### signTransaction()

```ts
signTransaction(tx): Promise<SignedHydratedTransactionWithHashMeta>;
```

### Parameters

#### tx

`UnsignedHydratedTransaction`

### Returns

`Promise`\<`SignedHydratedTransactionWithHashMeta`\>

### Implementation of

```ts
XyoSigner.signTransaction
```

    ### <a id="XyoBaseConnection"></a>XyoBaseConnection

[**@xyo-network/xl1-rpc**](#../../README)

***

## Extended by

- [`HttpRpcXyoConnection`](#HttpRpcXyoConnection)

## Implements

- `XyoConnection`

## Constructors

### Constructor

```ts
new XyoBaseConnection(params?): XyoBaseConnection;
```

### Parameters

#### params?

##### network?

`XyoNetwork`

##### runner?

`XyoRunner`

##### storage?

`DataLakeViewer` \| `DataLakeRunner` \| `DataLakeRunner` & `DataLakeViewer`

##### viewer?

`XyoViewer`

### Returns

`XyoBaseConnection`

## Accessors

### network

### Get Signature

```ts
get network(): XyoNetwork | undefined;
```

#### Returns

`XyoNetwork` \| `undefined`

### Implementation of

```ts
XyoConnection.network
```

***

### runner

### Get Signature

```ts
get runner(): XyoRunner | undefined;
```

#### Returns

`XyoRunner` \| `undefined`

### Implementation of

```ts
XyoConnection.runner
```

***

### storage

### Get Signature

```ts
get storage(): 
  | DataLakeViewer
  | DataLakeRunner
  | DataLakeRunner & DataLakeViewer
  | undefined;
```

#### Returns

  \| `DataLakeViewer`
  \| `DataLakeRunner`
  \| `DataLakeRunner` & `DataLakeViewer`
  \| `undefined`

### Implementation of

```ts
XyoConnection.storage
```

***

### viewer

### Get Signature

```ts
get viewer(): XyoViewer | undefined;
```

#### Returns

`XyoViewer` \| `undefined`

### Implementation of

```ts
XyoConnection.viewer
```

  ### functions

    ### <a id="createRequestSchema"></a>createRequestSchema

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function createRequestSchema<TParams, TMethodName>(methodName, paramsSchema): ZodObject<{
  id: ZodUnion<readonly [ZodString, ZodNumber]>;
  jsonrpc: ZodLiteral<"2.0">;
  method: ZodLiteral<TMethodName>;
  params: ZodUndefined | TParams;
}, $strip>;
```

## Type Parameters

### TParams

`TParams` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

### TMethodName

`TMethodName` *extends* `string` = `string`

## Parameters

### methodName

`TMethodName`

### paramsSchema

`ZodUndefined` | `TParams`

## Returns

`ZodObject`\<\{
  `id`: `ZodUnion`\<readonly \[`ZodString`, `ZodNumber`\]\>;
  `jsonrpc`: `ZodLiteral`\<`"2.0"`\>;
  `method`: `ZodLiteral`\<`TMethodName`\>;
  `params`: `ZodUndefined` \| `TParams`;
\}, `$strip`\>

    ### <a id="createResponseSchema"></a>createResponseSchema

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function createResponseSchema<TParams>(resultSchema): ZodObject<{
  id: ZodUnion<readonly [ZodString, ZodNumber]>;
  jsonrpc: ZodLiteral<"2.0">;
  result: ZodUndefined | TParams;
}, $strip>;
```

## Type Parameters

### TParams

`TParams` *extends* `ZodType`\<`unknown`, `unknown`, `$ZodTypeInternals`\<`unknown`, `unknown`\>\>

## Parameters

### resultSchema

`ZodUndefined` | `TParams`

## Returns

`ZodObject`\<\{
  `id`: `ZodUnion`\<readonly \[`ZodString`, `ZodNumber`\]\>;
  `jsonrpc`: `ZodLiteral`\<`"2.0"`\>;
  `result`: `ZodUndefined` \| `TParams`;
\}, `$strip`\>

    ### <a id="rpcEngineFromConnection"></a>rpcEngineFromConnection

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcEngineFromConnection(connection, networkStakeViewer?): JsonRpcEngine;
```

## Parameters

### connection

`XyoConnection`

### networkStakeViewer?

`NetworkStakeViewer`

## Returns

`JsonRpcEngine`

    ### <a id="rpcMethodHandlersFromConnection"></a>rpcMethodHandlersFromConnection

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromConnection(connection, networkStakeViewer?): XyoProviderRpcMethodHandlers;
```

## Parameters

### connection

`XyoConnection`

### networkStakeViewer?

`NetworkStakeViewer`

## Returns

[`XyoProviderRpcMethodHandlers`](#../type-aliases/XyoProviderRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer"></a>rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromNetworkStakingStepRewardsByPositionViewer(viewer): NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers;
```

## Parameters

### viewer

`NetworkStakeStepRewardsByPositionViewerMethods`

## Returns

[`NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers`](#../type-aliases/NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromNetworkStakingViewer"></a>rpcMethodHandlersFromNetworkStakingViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromNetworkStakingViewer(viewer): NetworkStakeViewerRpcMethodHandlers;
```

## Parameters

### viewer

`NetworkStakeViewerMethods`

## Returns

[`NetworkStakeViewerRpcMethodHandlers`](#../type-aliases/NetworkStakeViewerRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromPermissions"></a>rpcMethodHandlersFromPermissions

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromPermissions(permissions): XyoPermissionsRpcMethodHandlers;
```

## Parameters

### permissions

`XyoPermissions`

## Returns

[`XyoPermissionsRpcMethodHandlers`](#../type-aliases/XyoPermissionsRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromRunner"></a>rpcMethodHandlersFromRunner

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromRunner(runner): XyoRunnerRpcMethodHandlers;
```

## Parameters

### runner

`XyoRunner`

## Returns

[`XyoRunnerRpcMethodHandlers`](#../type-aliases/XyoRunnerRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromSigner"></a>rpcMethodHandlersFromSigner

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromSigner(signer): XyoSignerRpcMethodHandlers;
```

## Parameters

### signer

`XyoSigner`

## Returns

[`XyoSignerRpcMethodHandlers`](#../type-aliases/XyoSignerRpcMethodHandlers)

    ### <a id="rpcMethodHandlersFromViewer"></a>rpcMethodHandlersFromViewer

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
function rpcMethodHandlersFromViewer(viewer): XyoViewerRpcMethodHandlers;
```

## Parameters

### viewer

`XyoViewer`

## Returns

[`XyoViewerRpcMethodHandlers`](#../type-aliases/XyoViewerRpcMethodHandlers)

  ### interfaces

    ### <a id="JsonRpcNetworkStakingStepRewardsViewerProviders"></a>JsonRpcNetworkStakingStepRewardsViewerProviders

[**@xyo-network/xl1-rpc**](#../../README)

***

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

    ### <a id="JsonRpcXyoViewerProviders"></a>JsonRpcXyoViewerProviders

[**@xyo-network/xl1-rpc**](#../../README)

***

## Properties

### networkStakeViewer?

```ts
optional networkStakeViewer: NetworkStakeViewer;
```

    ### <a id="RpcTransport"></a>RpcTransport

[**@xyo-network/xl1-rpc**](#../../README)

***

## Type Parameters

### TSchemas

`TSchemas` *extends* [`RpcSchemaMap`](#../type-aliases/RpcSchemaMap)

## Methods

### sendRequest()

```ts
sendRequest<TMethod>(method, params?): Promise<output<TSchemas[TMethod]["result"]["from"]>>;
```

### Type Parameters

#### TMethod

`TMethod` *extends* `string` \| `number` \| `symbol`

### Parameters

#### method

`TMethod`

#### params?

`input`\<`TSchemas`\[`TMethod`\]\[`"params"`\]\[`"to"`\]\>

### Returns

`Promise`\<`output`\<`TSchemas`\[`TMethod`\]\[`"result"`\]\[`"from"`\]\>\>

    ### <a id="RpcXyoProviderParams"></a>RpcXyoProviderParams

[**@xyo-network/xl1-rpc**](#../../README)

***

## Properties

### endpoint

```ts
endpoint: string;
```

***

### storage?

```ts
optional storage: DataLakeViewer | DataLakeRunner | DataLakeViewer & DataLakeRunner;
```

  ### type-aliases

    ### <a id="AnyBoundWitness"></a>AnyBoundWitness

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type AnyBoundWitness = z.infer<typeof AnyBoundWitnessZod>;
```

    ### <a id="AnyUnsignedBoundWitness"></a>AnyUnsignedBoundWitness

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type AnyUnsignedBoundWitness = z.infer<typeof AnyUnsignedBoundWitnessZod>;
```

    ### <a id="BoundWitness"></a>BoundWitness

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type BoundWitness = z.infer<typeof BoundWitnessZod>;
```

    ### <a id="DataLakeViewerMethodName"></a>DataLakeViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type DataLakeViewerMethodName = MethodName<DataLakeViewerMethods>;
```

    ### <a id="DataLakeViewerRpcMethodHandlers"></a>DataLakeViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type DataLakeViewerRpcMethodHandlers = { [K in DataLakeViewerMethodName as DataLakeViewerRpcMethodName]: (params: Parameters<DataLakeViewerMethods[K]>) => ReturnType<DataLakeViewerMethods[K]> };
```

    ### <a id="DataLakeViewerRpcMethodName"></a>DataLakeViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type DataLakeViewerRpcMethodName = RpcMethodName<DataLakeViewerRpcNamespace, DataLakeViewerMethodName>;
```

    ### <a id="DataLakeViewerRpcNamespace"></a>DataLakeViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type DataLakeViewerRpcNamespace = typeof DataLakeViewerRpcNamespace;
```

    ### <a id="JsonObject"></a>JsonObject

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type JsonObject = z.infer<typeof JsonObjectZod>;
```

    ### <a id="JsonValue"></a>JsonValue

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type JsonValue = z.infer<typeof JsonValueZod>;
```

    ### <a id="MethodName"></a>MethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type MethodName<TObject> = keyof TObject;
```

## Type Parameters

### TObject

`TObject` *extends* `object`

    ### <a id="NetworkStakeViewerMethodName"></a>NetworkStakeViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakeViewerMethodName = MethodName<NetworkStakeViewerMethods>;
```

    ### <a id="NetworkStakeViewerRpcMethodHandlers"></a>NetworkStakeViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakeViewerRpcMethodHandlers = { [K in NetworkStakeViewerMethodName as NetworkStakeViewerRpcMethodName]: (params: Parameters<NetworkStakeViewerMethods[K]>) => ReturnType<NetworkStakeViewerMethods[K]> };
```

    ### <a id="NetworkStakeViewerRpcMethodName"></a>NetworkStakeViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakeViewerRpcMethodName = RpcMethodName<NetworkStakeViewerRpcNamespace, NetworkStakeViewerMethodName>;
```

    ### <a id="NetworkStakeViewerRpcNamespace"></a>NetworkStakeViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakeViewerRpcNamespace = typeof NetworkStakeViewerRpcNamespace;
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerMethodName"></a>NetworkStakingStepRewardsByPositionViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByPositionViewerMethodName = MethodName<NetworkStakeStepRewardsByPositionViewerMethods>;
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers"></a>NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByPositionViewerRpcMethodHandlers = { [K in NetworkStakingStepRewardsByPositionViewerMethodName as NetworkStakingStepRewardsByPositionViewerRpcMethodName]: (params: Parameters<NetworkStakeStepRewardsByPositionViewerMethods[K]>) => ReturnType<NetworkStakeStepRewardsByPositionViewerMethods[K]> };
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerRpcMethodName"></a>NetworkStakingStepRewardsByPositionViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByPositionViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByPositionViewerRpcNamespace, NetworkStakingStepRewardsByPositionViewerMethodName>;
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerRpcNamespace"></a>NetworkStakingStepRewardsByPositionViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByPositionViewerRpcNamespace = typeof NetworkStakingStepRewardsByPositionViewerRpcNamespace;
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerMethodName"></a>NetworkStakingStepRewardsByStakerViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStakerViewerMethodName = MethodName<NetworkStakeStepRewardsByStakerViewerMethods>;
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerRpcMethodHandlers"></a>NetworkStakingStepRewardsByStakerViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStakerViewerRpcMethodHandlers = { [K in NetworkStakingStepRewardsByStakerViewerMethodName as NetworkStakingStepRewardsByStakerViewerRpcMethodName]: (params: Parameters<NetworkStakeStepRewardsByStakerViewerMethods[K]>) => ReturnType<NetworkStakeStepRewardsByStakerViewerMethods[K]> };
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerRpcMethodName"></a>NetworkStakingStepRewardsByStakerViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStakerViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByStakerViewerRpcNamespace, NetworkStakingStepRewardsByStakerViewerMethodName>;
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerRpcNamespace"></a>NetworkStakingStepRewardsByStakerViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStakerViewerRpcNamespace = typeof NetworkStakingStepRewardsByStakerViewerRpcNamespace;
```

    ### <a id="NetworkStakingStepRewardsByStepViewerMethodName"></a>NetworkStakingStepRewardsByStepViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStepViewerMethodName = MethodName<NetworkStakeStepRewardsByStepViewerMethods>;
```

    ### <a id="NetworkStakingStepRewardsByStepViewerRpcMethodHandlers"></a>NetworkStakingStepRewardsByStepViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStepViewerRpcMethodHandlers = { [K in NetworkStakingStepRewardsByStepViewerMethodName as NetworkStakingStepRewardsByStepViewerRpcMethodName]: (params: Parameters<NetworkStakeStepRewardsByStepViewerMethods[K]>) => ReturnType<NetworkStakeStepRewardsByStepViewerMethods[K]> };
```

    ### <a id="NetworkStakingStepRewardsByStepViewerRpcMethodName"></a>NetworkStakingStepRewardsByStepViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStepViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsByStepViewerRpcNamespace, NetworkStakingStepRewardsByStepViewerMethodName>;
```

    ### <a id="NetworkStakingStepRewardsByStepViewerRpcNamespace"></a>NetworkStakingStepRewardsByStepViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsByStepViewerRpcNamespace = typeof NetworkStakingStepRewardsByStepViewerRpcNamespace;
```

    ### <a id="NetworkStakingStepRewardsTotalViewerMethodName"></a>NetworkStakingStepRewardsTotalViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsTotalViewerMethodName = MethodName<NetworkStakeStepRewardsTotalViewerMethods>;
```

    ### <a id="NetworkStakingStepRewardsTotalViewerRpcMethodHandlers"></a>NetworkStakingStepRewardsTotalViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsTotalViewerRpcMethodHandlers = { [K in NetworkStakingStepRewardsTotalViewerMethodName as NetworkStakingStepRewardsTotalViewerRpcMethodName]: (params: Parameters<NetworkStakeStepRewardsTotalViewerMethods[K]>) => ReturnType<NetworkStakeStepRewardsTotalViewerMethods[K]> };
```

    ### <a id="NetworkStakingStepRewardsTotalViewerRpcMethodName"></a>NetworkStakingStepRewardsTotalViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsTotalViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsTotalViewerRpcNamespace, NetworkStakingStepRewardsTotalViewerMethodName>;
```

    ### <a id="NetworkStakingStepRewardsTotalViewerRpcNamespace"></a>NetworkStakingStepRewardsTotalViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsTotalViewerRpcNamespace = typeof NetworkStakingStepRewardsTotalViewerRpcNamespace;
```

    ### <a id="NetworkStakingStepRewardsViewerMethodName"></a>NetworkStakingStepRewardsViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsViewerMethodName = MethodName<NetworkStakeStepRewardsViewerMethods>;
```

    ### <a id="NetworkStakingStepRewardsViewerRpcMethodHandlers"></a>NetworkStakingStepRewardsViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsViewerRpcMethodHandlers = { [K in NetworkStakingStepRewardsViewerMethodName]: (params: Parameters<NetworkStakeStepRewardsViewerMethods[K]>) => ReturnType<NetworkStakeStepRewardsViewerMethods[K]> };
```

    ### <a id="NetworkStakingStepRewardsViewerRpcMethodName"></a>NetworkStakingStepRewardsViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsViewerRpcMethodName = RpcMethodName<NetworkStakingStepRewardsViewerRpcNamespace, NetworkStakingStepRewardsViewerMethodName>;
```

    ### <a id="NetworkStakingStepRewardsViewerRpcNamespace"></a>NetworkStakingStepRewardsViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type NetworkStakingStepRewardsViewerRpcNamespace = typeof NetworkStakingStepRewardsViewerRpcNamespace;
```

    ### <a id="RequestResponseSchemas"></a>RequestResponseSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type RequestResponseSchemas = object;
```

## Properties

### params

```ts
params: SerializationTransform;
```

Schema for validating (and optionally transforming) the RPC request

***

### result

```ts
result: SerializationTransform;
```

Schema for validating (and optionally transforming) the result property of the RPC response

    ### <a id="RpcMethodName"></a>RpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type RpcMethodName<TRpcNameSpace, TMethodName> = `${TRpcNameSpace}_${TMethodName}`;
```

## Type Parameters

### TRpcNameSpace

`TRpcNameSpace` *extends* `string`

### TMethodName

`TMethodName` *extends* `string`

    ### <a id="RpcSchemaMap"></a>RpcSchemaMap

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type RpcSchemaMap<TMethod> = Record<TMethod, RequestResponseSchemas>;
```

## Type Parameters

### TMethod

`TMethod` *extends* `string` = `string`

    ### <a id="StringKeyObject"></a>StringKeyObject

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type StringKeyObject = object;
```

## Index Signature

```ts
[key: string]: unknown
```

    ### <a id="TimeSyncViewerMethodName"></a>TimeSyncViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TimeSyncViewerMethodName = MethodName<TimeSyncViewerMethods>;
```

    ### <a id="TimeSyncViewerRpcMethodHandlers"></a>TimeSyncViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TimeSyncViewerRpcMethodHandlers = { [K in TimeSyncViewerMethodName as TimeSyncViewerRpcMethodName]: (params: Parameters<TimeSyncViewerMethods[K]>) => ReturnType<TimeSyncViewerMethods[K]> };
```

    ### <a id="TimeSyncViewerRpcMethodName"></a>TimeSyncViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TimeSyncViewerRpcMethodName = RpcMethodName<TimeSyncViewerRpcNamespace, TimeSyncViewerMethodName>;
```

    ### <a id="TimeSyncViewerRpcNamespace"></a>TimeSyncViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TimeSyncViewerRpcNamespace = typeof TimeSyncViewerRpcNamespace;
```

    ### <a id="TransactionFeesBigIntToJsonZodType"></a>TransactionFeesBigIntToJsonZodType

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TransactionFeesBigIntToJsonZodType = z.infer<typeof TransactionFeesBigIntToJsonZod>;
```

    ### <a id="TransactionFeesBigIntZodType"></a>TransactionFeesBigIntZodType

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TransactionFeesBigIntZodType = z.infer<typeof TransactionFeesBigIntZod>;
```

    ### <a id="TransactionFeesHexZodType"></a>TransactionFeesHexZodType

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TransactionFeesHexZodType = z.infer<typeof TransactionFeesHexZod>;
```

    ### <a id="TransactionFeesJsonToBigIntZodType"></a>TransactionFeesJsonToBigIntZodType

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type TransactionFeesJsonToBigIntZodType = z.infer<typeof TransactionFeesJsonToBigIntZod>;
```

    ### <a id="UnsignedBoundWitness"></a>UnsignedBoundWitness

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type UnsignedBoundWitness = z.infer<typeof UnsignedBoundWitnessZod>;
```

    ### <a id="XyoPermissionMethodName"></a>XyoPermissionMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoPermissionMethodName = keyof XyoPermissions;
```

    ### <a id="XyoPermissionsRpcMethodHandlers"></a>XyoPermissionsRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoPermissionsRpcMethodHandlers = { [K in XyoPermissionMethodName as `xyoPermissions_${K}`]: (params: Parameters<XyoPermissions[K]>) => ReturnType<XyoPermissions[K]> };
```

    ### <a id="XyoPermissionsRpcMethodName"></a>XyoPermissionsRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoPermissionsRpcMethodName = `xyoPermissions_${XyoPermissionMethodName}`;
```

    ### <a id="XyoProviderRpcMethodHandlers"></a>XyoProviderRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoProviderRpcMethodHandlers = Partial<XyoRunnerRpcMethodHandlers> & Partial<XyoViewerRpcMethodHandlers>;
```

    ### <a id="XyoRunnerMethodName"></a>XyoRunnerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoRunnerMethodName = keyof XyoRunner;
```

    ### <a id="XyoRunnerRpcMethodHandlers"></a>XyoRunnerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoRunnerRpcMethodHandlers = { [K in XyoRunnerMethodName as `xyoRunner_${K}`]: (params: Parameters<XyoRunner[K]>) => ReturnType<XyoRunner[K]> };
```

    ### <a id="XyoRunnerRpcMethodName"></a>XyoRunnerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoRunnerRpcMethodName = `xyoRunner_${XyoRunnerMethodName}`;
```

    ### <a id="XyoSignerMethodName"></a>XyoSignerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoSignerMethodName = keyof XyoSigner;
```

    ### <a id="XyoSignerRpcMethodHandlers"></a>XyoSignerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoSignerRpcMethodHandlers = { [K in XyoSignerMethodName as `xyoSigner_${K}`]: (params: Parameters<XyoSigner[K]>) => ReturnType<XyoSigner[K]> };
```

    ### <a id="XyoSignerRpcMethodName"></a>XyoSignerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoSignerRpcMethodName = `xyoSigner_${XyoSignerMethodName}`;
```

    ### <a id="XyoViewerMethodName"></a>XyoViewerMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoViewerMethodName = keyof XyoViewerMethods;
```

    ### <a id="XyoViewerRpcMethodHandlers"></a>XyoViewerRpcMethodHandlers

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoViewerRpcMethodHandlers = { [K in XyoViewerMethodName as `xyoViewer_${K}`]: (params: Parameters<XyoViewerMethods[K]>) => ReturnType<XyoViewerMethods[K]> };
```

    ### <a id="XyoViewerRpcMethodName"></a>XyoViewerRpcMethodName

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
type XyoViewerRpcMethodName = `xyoViewer_${XyoViewerMethodName}`;
```

  ### variables

    ### <a id="AllRpcSchemas"></a>AllRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AllRpcSchemas: object;
```

## Type Declaration

### networkStakeViewer\_active

```ts
networkStakeViewer_active: object;
```

### networkStakeViewer\_active.params

```ts
params: object;
```

### networkStakeViewer\_active.params.from

```ts
from: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
```

### networkStakeViewer\_active.params.to

```ts
to: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
```

### networkStakeViewer\_active.result

```ts
result: object;
```

### networkStakeViewer\_active.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodNumber], null>;
```

### networkStakeViewer\_active.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodNumber], null>;
```

### xyoPermissions\_getPermissions

```ts
xyoPermissions_getPermissions: object;
```

### xyoPermissions\_getPermissions.params

```ts
params: object;
```

### xyoPermissions\_getPermissions.params.to

```ts
to: ZodArray<ZodAny>;
```

### xyoPermissions\_getPermissions.params.from

```ts
from: ZodArray<ZodAny>;
```

### xyoPermissions\_getPermissions.result

```ts
result: object;
```

### xyoPermissions\_getPermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<...>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_getPermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<...>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_requestPermissions

```ts
xyoPermissions_requestPermissions: object;
```

### xyoPermissions\_requestPermissions.params

```ts
params: object;
```

### xyoPermissions\_requestPermissions.params.to

```ts
to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_requestPermissions.params.from

```ts
from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_requestPermissions.result

```ts
result: object;
```

### xyoPermissions\_requestPermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_requestPermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_revokePermissions

```ts
xyoPermissions_revokePermissions: object;
```

### xyoPermissions\_revokePermissions.params

```ts
params: object;
```

### xyoPermissions\_revokePermissions.params.to

```ts
to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_revokePermissions.params.from

```ts
from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_revokePermissions.result

```ts
result: object;
```

### xyoPermissions\_revokePermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_revokePermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoRunner\_broadcastTransaction

```ts
xyoRunner_broadcastTransaction: object;
```

### xyoRunner\_broadcastTransaction.params

```ts
params: object;
```

### xyoRunner\_broadcastTransaction.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodOptional<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoRunner\_broadcastTransaction.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodOptional<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoRunner\_broadcastTransaction.result

```ts
result: object;
```

### xyoRunner\_broadcastTransaction.result.to

```ts
to: ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>> = HashToJsonZod;
```

### xyoRunner\_broadcastTransaction.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Hash, string>> = JsonToHashZod;
```

### xyoSigner\_address

```ts
xyoSigner_address: object;
```

### xyoSigner\_address.params

```ts
readonly params: object;
```

### xyoSigner\_address.params.to

```ts
readonly to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoSigner\_address.params.from

```ts
readonly from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoSigner\_address.result

```ts
readonly result: object;
```

### xyoSigner\_address.result.to

```ts
readonly to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoSigner\_address.result.from

```ts
readonly from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoSigner\_signTransaction

```ts
xyoSigner_signTransaction: object;
```

### xyoSigner\_signTransaction.params

```ts
readonly params: object;
```

### xyoSigner\_signTransaction.params.to

```ts
readonly to: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoSigner\_signTransaction.params.from

```ts
readonly from: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoSigner\_signTransaction.result

```ts
readonly result: object;
```

### xyoSigner\_signTransaction.result.to

```ts
readonly to: ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<..., ...>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<..., ...>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<..., ...>>;
     priority: ZodPipe<ZodString, ZodTransform<..., ...>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedTransactionZod;
```

### xyoSigner\_signTransaction.result.from

```ts
readonly from: ZodPipe<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>, ZodTransform<HydratedTransactionWithStorageMeta<TransactionBoundWitness, Payload>, [{
  addresses: Address[];
  payload_hashes: Hash[];
  payload_schemas: (string | string & object)[];
  previous_hashes: (Hash | null)[];
  $destination?: Address;
  $sourceQuery?: Hash;
  $signatures: (Hex | null)[];
  schema: "network.xyo.boundwitness";
  nbf: BlockNumber;
  exp: BlockNumber;
  script?: string[];
  fees: {
     base: Hex;
     gasLimit: Hex;
     gasPrice: Hex;
     priority: Hex;
  };
  chain: ChainId;
  from: ChainId;
}, object[]]>>;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress

```ts
xyoViewer_networkStakeStepRewardClaimedByAddress: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardAddressReward

```ts
xyoViewer_networkStakeStepRewardAddressReward: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory

```ts
xyoViewer_networkStakeStepRewardAddressHistory: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardAddressShare

```ts
xyoViewer_networkStakeStepRewardAddressShare: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress

```ts
xyoViewer_networkStakeStepRewardWeightForAddress: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress

```ts
xyoViewer_networkStakeStepRewardUnclaimedByAddress: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardPoolRewards

```ts
xyoViewer_networkStakeStepRewardPoolRewards: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight

```ts
xyoViewer_networkStakeStepRewardPositionWeight: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss

```ts
xyoViewer_networkStakeStepRewardPotentialPositionLoss: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardForStep

```ts
xyoViewer_networkStakeStepRewardForStep: object;
```

### xyoViewer\_networkStakeStepRewardForStep.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForStep.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardForStep.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardForStep.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForStep.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardForStep.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardRandomizer

```ts
xyoViewer_networkStakeStepRewardRandomizer: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardStakerCount

```ts
xyoViewer_networkStakeStepRewardStakerCount: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result.to

```ts
to: ZodNumber;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result.from

```ts
from: ZodNumber;
```

### xyoViewer\_networkStakeStepRewardPoolShares

```ts
xyoViewer_networkStakeStepRewardPoolShares: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition

```ts
xyoViewer_networkStakeStepRewardForStepForPosition: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition

```ts
xyoViewer_networkStakeStepRewardForPosition: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange

```ts
xyoViewer_networkStakeStepRewardsForRange: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardsForRange.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel

```ts
xyoViewer_networkStakeStepRewardsForStepLevel: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardsForPosition

```ts
xyoViewer_networkStakeStepRewardsForPosition: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result.to

```ts
to: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result.from

```ts
from: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>>;
```

### xyoViewer\_accountBalance

```ts
xyoViewer_accountBalance: object;
```

### xyoViewer\_accountBalance.params

```ts
params: object;
```

### xyoViewer\_accountBalance.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_accountBalance.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_accountBalance.result

```ts
result: object;
```

### xyoViewer\_accountBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_accountBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_accountBalanceHistory

```ts
xyoViewer_accountBalanceHistory: object;
```

### xyoViewer\_accountBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_accountBalanceHistory.params.to

```ts
to: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<[..., ...], null>, ZodPipe<ZodString, ZodTransform<..., ...>>]>], null>]>;
```

### xyoViewer\_accountBalanceHistory.params.from

```ts
from: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<[..., ...], null>, ZodPipe<ZodString, ZodTransform<..., ...>>]>], null>]>;
```

### xyoViewer\_accountBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_accountBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_accountBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferPairBalance

```ts
xyoViewer_transferPairBalance: object;
```

### xyoViewer\_transferPairBalance.params

```ts
params: object;
```

### xyoViewer\_transferPairBalance.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalance.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalance.result

```ts
result: object;
```

### xyoViewer\_transferPairBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_transferPairBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_transferPairBalanceHistory

```ts
xyoViewer_transferPairBalanceHistory: object;
```

### xyoViewer\_transferPairBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_transferPairBalanceHistory.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalanceHistory.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_transferPairBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferPairBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferBalance

```ts
xyoViewer_transferBalance: object;
```

### xyoViewer\_transferBalance.params

```ts
params: object;
```

### xyoViewer\_transferBalance.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_transferBalance.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_transferBalance.result

```ts
result: object;
```

### xyoViewer\_transferBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_transferBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_transferBalanceHistory

```ts
xyoViewer_transferBalanceHistory: object;
```

### xyoViewer\_transferBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_transferBalanceHistory.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>, ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>>], null>;
```

### xyoViewer\_transferBalanceHistory.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>, ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>>], null>;
```

### xyoViewer\_transferBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_transferBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_blockByHash

```ts
xyoViewer_blockByHash: object;
```

### xyoViewer\_blockByHash.params

```ts
params: object;
```

### xyoViewer\_blockByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>>], null>;
```

### xyoViewer\_blockByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_blockByHash.result

```ts
result: object;
```

### xyoViewer\_blockByHash.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByHash.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByNumber

```ts
xyoViewer_blockByNumber: object;
```

### xyoViewer\_blockByNumber.params

```ts
params: object;
```

### xyoViewer\_blockByNumber.params.to

```ts
to: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_blockByNumber.params.from

```ts
from: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_blockByNumber.result

```ts
result: object;
```

### xyoViewer\_blockByNumber.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByNumber.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blocksByHash

```ts
xyoViewer_blocksByHash: object;
```

### xyoViewer\_blocksByHash.params

```ts
params: object;
```

### xyoViewer\_blocksByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
```

### xyoViewer\_blocksByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
```

### xyoViewer\_blocksByHash.result

```ts
result: object;
```

### xyoViewer\_blocksByHash.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_blocksByHash.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_chainId

```ts
xyoViewer_chainId: object;
```

### xyoViewer\_chainId.params

```ts
params: object;
```

### xyoViewer\_chainId.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_chainId.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_chainId.result

```ts
result: object;
```

### xyoViewer\_chainId.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainId.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainIdAtBlock

```ts
xyoViewer_chainIdAtBlock: object;
```

### xyoViewer\_chainIdAtBlock.params

```ts
params: object;
```

### xyoViewer\_chainIdAtBlock.params.to

```ts
to: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
```

### xyoViewer\_chainIdAtBlock.params.from

```ts
from: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
```

### xyoViewer\_chainIdAtBlock.result

```ts
result: object;
```

### xyoViewer\_chainIdAtBlock.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainIdAtBlock.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_currentBlock

```ts
xyoViewer_currentBlock: object;
```

### xyoViewer\_currentBlock.params

```ts
params: object;
```

### xyoViewer\_currentBlock.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlock.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlock.result

```ts
result: object;
```

### xyoViewer\_currentBlock.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_currentBlock.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_currentBlockHash

```ts
xyoViewer_currentBlockHash: object;
```

### xyoViewer\_currentBlockHash.params

```ts
params: object;
```

### xyoViewer\_currentBlockHash.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockHash.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockHash.result

```ts
result: object;
```

### xyoViewer\_currentBlockHash.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Hash, string>> = HashZod;
```

### xyoViewer\_currentBlockHash.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Hash, string>> = HashZod;
```

### xyoViewer\_currentBlockNumber

```ts
xyoViewer_currentBlockNumber: object;
```

### xyoViewer\_currentBlockNumber.params

```ts
params: object;
```

### xyoViewer\_currentBlockNumber.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockNumber.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockNumber.result

```ts
result: object;
```

### xyoViewer\_currentBlockNumber.result.to

```ts
to: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>> = XL1BlockNumberZod;
```

### xyoViewer\_currentBlockNumber.result.from

```ts
from: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>> = XL1BlockNumberZod;
```

### xyoViewer\_forkHistory

```ts
xyoViewer_forkHistory: object;
```

### xyoViewer\_forkHistory.params

```ts
params: object;
```

### xyoViewer\_forkHistory.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_forkHistory.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_forkHistory.result

```ts
result: object;
```

### xyoViewer\_forkHistory.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
```

### xyoViewer\_forkHistory.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
```

### xyoViewer\_stakeByStaker

```ts
xyoViewer_stakeByStaker: object;
```

### xyoViewer\_stakeByStaker.params

```ts
params: object;
```

### xyoViewer\_stakeByStaker.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
```

### xyoViewer\_stakeByStaker.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
```

### xyoViewer\_stakeByStaker.result

```ts
result: object;
```

### xyoViewer\_stakeByStaker.result.to

```ts
to: ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>> = StakeToJsonZod;
```

### xyoViewer\_stakeByStaker.result.from

```ts
from: ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>> = JsonToStakeZod;
```

### xyoViewer\_stakeById

```ts
xyoViewer_stakeById: object;
```

### xyoViewer\_stakeById.params

```ts
params: object;
```

### xyoViewer\_stakeById.params.to

```ts
to: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_stakeById.params.from

```ts
from: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_stakeById.result

```ts
result: object;
```

### xyoViewer\_stakeById.result.to

```ts
to: ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>> = StakeToJsonZod;
```

### xyoViewer\_stakeById.result.from

```ts
from: ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>> = JsonToStakeZod;
```

### xyoViewer\_stakesByStaker

```ts
xyoViewer_stakesByStaker: object;
```

### xyoViewer\_stakesByStaker.params

```ts
params: object;
```

### xyoViewer\_stakesByStaker.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaker.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaker.result

```ts
result: object;
```

### xyoViewer\_stakesByStaker.result.to

```ts
to: ZodArray<ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>>>;
```

### xyoViewer\_stakesByStaker.result.from

```ts
from: ZodArray<ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>>>;
```

### xyoViewer\_stakesByStaked

```ts
xyoViewer_stakesByStaked: object;
```

### xyoViewer\_stakesByStaked.params

```ts
params: object;
```

### xyoViewer\_stakesByStaked.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaked.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaked.result

```ts
result: object;
```

### xyoViewer\_stakesByStaked.result.to

```ts
to: ZodArray<ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>>>;
```

### xyoViewer\_stakesByStaked.result.from

```ts
from: ZodArray<ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>>>;
```

### xyoViewer\_transactionByBlockHashAndIndex

```ts
xyoViewer_transactionByBlockHashAndIndex: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.params

```ts
params: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockHashAndIndex.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockHashAndIndex.result

```ts
result: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockHashAndIndex.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockNumberAndIndex

```ts
xyoViewer_transactionByBlockNumberAndIndex: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params

```ts
params: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params.to

```ts
to: ZodTuple<[ZodNumber, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params.from

```ts
from: ZodTuple<[ZodNumber, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result

```ts
result: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByHash

```ts
xyoViewer_transactionByHash: object;
```

### xyoViewer\_transactionByHash.params

```ts
params: object;
```

### xyoViewer\_transactionByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_transactionByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_transactionByHash.result

```ts
result: object;
```

### xyoViewer\_transactionByHash.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByHash.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

    ### <a id="AnyBoundWitnessZod"></a>AnyBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AnyBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $catchall<ZodAny>>;
```

    ### <a id="AnySignedBoundWitnessWithStorageMetaZod"></a>AnySignedBoundWitnessWithStorageMetaZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AnySignedBoundWitnessWithStorageMetaZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $catchall<ZodAny>>;
```

    ### <a id="AnySignedBoundWitnessZod"></a>AnySignedBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AnySignedBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $catchall<ZodAny>>;
```

    ### <a id="AnyUnsignedBoundWitnessZod"></a>AnyUnsignedBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AnyUnsignedBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $catchall<ZodAny>>;
```

    ### <a id="ArrayBufferToJsonZod"></a>ArrayBufferToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const ArrayBufferToJsonZod: ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>;
```

    ### <a id="AttoToJsonZod"></a>AttoToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AttoToJsonZod: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

    ### <a id="AttoZod"></a>AttoZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const AttoZod: ZodBigInt;
```

    ### <a id="BlockBoundWitnessZod"></a>BlockBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BlockBoundWitnessZod: ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="BlockDurationZod"></a>BlockDurationZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BlockDurationZod: ZodObject<{
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
}, $strip>;
```

    ### <a id="BlockEndZod"></a>BlockEndZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BlockEndZod: ZodObject<{
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
}, $strip>;
```

    ### <a id="BlockScriptsZod"></a>BlockScriptsZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BlockScriptsZod: ZodObject<{
  script: ZodOptional<ZodArray<ZodString>>;
}, $strip>;
```

    ### <a id="BlockStartZod"></a>BlockStartZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BlockStartZod: ZodObject<{
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
}, $strip>;
```

    ### <a id="BoundWitnessZod"></a>BoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const BoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="CaveatTypesZod"></a>CaveatTypesZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const CaveatTypesZod: ZodEnum<{
  chain: "chain";
  expiration: "expiration";
  filteredResponse: "filteredResponse";
  rateLimit: "rateLimit";
  restrictReturnedAccounts: "restrictReturnedAccounts";
}>;
```

    ### <a id="CaveatsZod"></a>CaveatsZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const CaveatsZod: ZodObject<{
  type: ZodEnum<{
     chain: "chain";
     expiration: "expiration";
     filteredResponse: "filteredResponse";
     rateLimit: "rateLimit";
     restrictReturnedAccounts: "restrictReturnedAccounts";
  }>;
  value: ZodJSONSchema;
}, $strip>;
```

    ### <a id="ChainZod"></a>ChainZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const ChainZod: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
```

    ### <a id="DataLakeViewerRpcNamespace"></a>DataLakeViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const DataLakeViewerRpcNamespace: "dataLakeViewer";
```

    ### <a id="DataLakeViewerRpcSchemas"></a>DataLakeViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const DataLakeViewerRpcSchemas: object;
```

## Type Declaration

### dataLakeViewer\_get

```ts
dataLakeViewer_get: object;
```

### dataLakeViewer\_get.params

```ts
params: object;
```

### dataLakeViewer\_get.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### dataLakeViewer\_get.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### dataLakeViewer\_get.result

```ts
result: object;
```

### dataLakeViewer\_get.result.to

```ts
to: ZodOptional<ZodUnion<readonly [ZodObject<{
}, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
```

### dataLakeViewer\_get.result.from

```ts
from: ZodOptional<ZodUnion<readonly [ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
```

### dataLakeViewer\_getMany

```ts
dataLakeViewer_getMany: object;
```

### dataLakeViewer\_getMany.params

```ts
params: object;
```

### dataLakeViewer\_getMany.params.to

```ts
to: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
```

### dataLakeViewer\_getMany.params.from

```ts
from: ZodTuple<[ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>], null>;
```

### dataLakeViewer\_getMany.result

```ts
result: object;
```

### dataLakeViewer\_getMany.result.to

```ts
to: ZodArray<ZodUnion<readonly [ZodObject<{
}, $strip>, ZodPipe<ZodCustom<ArrayBuffer, ArrayBuffer>, ZodTransform<string, ArrayBuffer>>]>>;
```

### dataLakeViewer\_getMany.result.from

```ts
from: ZodArray<ZodUnion<readonly [ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>]>>;
```

### dataLakeViewer\_has

```ts
dataLakeViewer_has: object;
```

### dataLakeViewer\_has.params

```ts
params: object;
```

### dataLakeViewer\_has.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### dataLakeViewer\_has.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### dataLakeViewer\_has.result

```ts
result: object;
```

### dataLakeViewer\_has.result.to

```ts
to: ZodBoolean;
```

### dataLakeViewer\_has.result.from

```ts
from: ZodBoolean;
```

    ### <a id="HydratedBlockWithStorageMetaZod"></a>HydratedBlockWithStorageMetaZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const HydratedBlockWithStorageMetaZod: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strip>>], null>;
```

    ### <a id="HydratedBlockZod"></a>HydratedBlockZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const HydratedBlockZod: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="HydratedTransactionZod"></a>HydratedTransactionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const HydratedTransactionZod: ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodArray<ZodString>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="InvokerPermissionZod"></a>InvokerPermissionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const InvokerPermissionZod: ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<{
        chain: "chain";
        expiration: "expiration";
        filteredResponse: "filteredResponse";
        rateLimit: "rateLimit";
        restrictReturnedAccounts: "restrictReturnedAccounts";
     }>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>;
```

    ### <a id="JsonObjectZod"></a>JsonObjectZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonObjectZod: ZodRecord<ZodString, ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>>;
```

    ### <a id="JsonRpcErrorCodes"></a>JsonRpcErrorCodes

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonRpcErrorCodes: Record<string, {
  code: number;
  message: string;
}>;
```

    ### <a id="JsonToArrayBufferZod"></a>JsonToArrayBufferZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonToArrayBufferZod: ZodPipe<ZodString, ZodTransform<ArrayBuffer | SharedArrayBuffer, string>>;
```

    ### <a id="JsonToAttoZod"></a>JsonToAttoZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonToAttoZod: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

    ### <a id="JsonToSignedHydratedTransactionZod"></a>JsonToSignedHydratedTransactionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonToSignedHydratedTransactionZod: ZodPipe<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<... & ..., string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>, ZodTransform<(
  | SignedHydratedTransaction<TransactionBoundWitness, Payload>
  | (Payload | undefined)[]
  | undefined)[], [{
  addresses: Address[];
  payload_hashes: Hash[];
  payload_schemas: (string | string & object)[];
  previous_hashes: (Hash | null)[];
  $destination?: Address;
  $sourceQuery?: Hash;
  $signatures: (Hex | null)[];
  schema: "network.xyo.boundwitness";
  nbf: BlockNumber;
  exp: BlockNumber;
  script?: string[];
  fees: {
     base: Hex;
     gasLimit: Hex;
     gasPrice: Hex;
     priority: Hex;
  };
  chain: ChainId;
  from: ChainId;
}, object[]]>>;
```

    ### <a id="JsonToStakeZod"></a>JsonToStakeZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const JsonToStakeZod: ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>>;
```

    ### <a id="LocalSequenceFromStringZod"></a>LocalSequenceFromStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const LocalSequenceFromStringZod: ZodPipe<ZodString, ZodTransform<LocalSequence, string>>;
```

    ### <a id="LocalSequenceToStringZod"></a>LocalSequenceToStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const LocalSequenceToStringZod: ZodString;
```

    ### <a id="NetworkStakeViewerRpcNamespace"></a>NetworkStakeViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakeViewerRpcNamespace: "networkStakeViewer";
```

    ### <a id="NetworkStakeViewerRpcSchemas"></a>NetworkStakeViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakeViewerRpcSchemas: object;
```

## Type Declaration

### networkStakeViewer\_active

```ts
networkStakeViewer_active: object;
```

### networkStakeViewer\_active.params

```ts
params: object;
```

### networkStakeViewer\_active.params.from

```ts
from: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
```

### networkStakeViewer\_active.params.to

```ts
to: ZodTuple<[ZodOptional<ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>>], null>;
```

### networkStakeViewer\_active.result

```ts
result: object;
```

### networkStakeViewer\_active.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodNumber], null>;
```

### networkStakeViewer\_active.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodNumber], null>;
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerRpcNamespace"></a>NetworkStakingStepRewardsByPositionViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByPositionViewerRpcNamespace: "networkStakingStepRewardsByPositionViewer";
```

    ### <a id="NetworkStakingStepRewardsByPositionViewerRpcSchemas"></a>NetworkStakingStepRewardsByPositionViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByPositionViewerRpcSchemas: object;
```

## Type Declaration

### networkStakingStepRewardsByPositionViewer\_bonus

```ts
networkStakingStepRewardsByPositionViewer_bonus: object;
```

### networkStakingStepRewardsByPositionViewer\_bonus.params

```ts
params: object;
```

### networkStakingStepRewardsByPositionViewer\_bonus.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_bonus.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_bonus.result

```ts
result: object;
```

### networkStakingStepRewardsByPositionViewer\_bonus.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>>;
```

### networkStakingStepRewardsByPositionViewer\_bonus.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByPositionViewer\_claimed

```ts
networkStakingStepRewardsByPositionViewer_claimed: object;
```

### networkStakingStepRewardsByPositionViewer\_claimed.params

```ts
params: object;
```

### networkStakingStepRewardsByPositionViewer\_claimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_claimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_claimed.result

```ts
result: object;
```

### networkStakingStepRewardsByPositionViewer\_claimed.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodTransform<AttoXL1, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_claimed.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_earned

```ts
networkStakingStepRewardsByPositionViewer_earned: object;
```

### networkStakingStepRewardsByPositionViewer\_earned.params

```ts
params: object;
```

### networkStakingStepRewardsByPositionViewer\_earned.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_earned.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_earned.result

```ts
result: object;
```

### networkStakingStepRewardsByPositionViewer\_earned.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodTransform<AttoXL1, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_earned.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_total

```ts
networkStakingStepRewardsByPositionViewer_total: object;
```

### networkStakingStepRewardsByPositionViewer\_total.params

```ts
params: object;
```

### networkStakingStepRewardsByPositionViewer\_total.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_total.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_total.result

```ts
result: object;
```

### networkStakingStepRewardsByPositionViewer\_total.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodTransform<AttoXL1, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_total.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed

```ts
networkStakingStepRewardsByPositionViewer_unclaimed: object;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.params

```ts
params: object;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.result

```ts
result: object;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodTransform<AttoXL1, Hex>>>;
```

### networkStakingStepRewardsByPositionViewer\_unclaimed.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerRpcNamespace"></a>NetworkStakingStepRewardsByStakerViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByStakerViewerRpcNamespace: "networkStakingStepRewardsByStakerViewer";
```

    ### <a id="NetworkStakingStepRewardsByStakerViewerRpcSchemas"></a>NetworkStakingStepRewardsByStakerViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByStakerViewerRpcSchemas: object;
```

## Type Declaration

### networkStakingStepRewardsByStakerViewer\_bonus

```ts
networkStakingStepRewardsByStakerViewer_bonus: object;
```

### networkStakingStepRewardsByStakerViewer\_bonus.params

```ts
params: object;
```

### networkStakingStepRewardsByStakerViewer\_bonus.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_bonus.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_bonus.result

```ts
result: object;
```

### networkStakingStepRewardsByStakerViewer\_bonus.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStakerViewer\_bonus.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStakerViewer\_claimed

```ts
networkStakingStepRewardsByStakerViewer_claimed: object;
```

### networkStakingStepRewardsByStakerViewer\_claimed.params

```ts
params: object;
```

### networkStakingStepRewardsByStakerViewer\_claimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_claimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_claimed.result

```ts
result: object;
```

### networkStakingStepRewardsByStakerViewer\_claimed.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStakerViewer\_claimed.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStakerViewer\_earned

```ts
networkStakingStepRewardsByStakerViewer_earned: object;
```

### networkStakingStepRewardsByStakerViewer\_earned.params

```ts
params: object;
```

### networkStakingStepRewardsByStakerViewer\_earned.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_earned.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_earned.result

```ts
result: object;
```

### networkStakingStepRewardsByStakerViewer\_earned.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStakerViewer\_earned.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStakerViewer\_total

```ts
networkStakingStepRewardsByStakerViewer_total: object;
```

### networkStakingStepRewardsByStakerViewer\_total.params

```ts
params: object;
```

### networkStakingStepRewardsByStakerViewer\_total.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_total.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_total.result

```ts
result: object;
```

### networkStakingStepRewardsByStakerViewer\_total.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStakerViewer\_total.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed

```ts
networkStakingStepRewardsByStakerViewer_unclaimed: object;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.params

```ts
params: object;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.result

```ts
result: object;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStakerViewer\_unclaimed.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

    ### <a id="NetworkStakingStepRewardsByStepViewerRpcNamespace"></a>NetworkStakingStepRewardsByStepViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByStepViewerRpcNamespace: "networkStakingStepRewardsByStepViewer";
```

    ### <a id="NetworkStakingStepRewardsByStepViewerRpcSchemas"></a>NetworkStakingStepRewardsByStepViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsByStepViewerRpcSchemas: object;
```

## Type Declaration

### networkStakingStepRewardsByStepViewer\_bonus

```ts
networkStakingStepRewardsByStepViewer_bonus: object;
```

### networkStakingStepRewardsByStepViewer\_bonus.params

```ts
params: object;
```

### networkStakingStepRewardsByStepViewer\_bonus.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_bonus.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_bonus.result

```ts
result: object;
```

### networkStakingStepRewardsByStepViewer\_bonus.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStepViewer\_bonus.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStepViewer\_claimed

```ts
networkStakingStepRewardsByStepViewer_claimed: object;
```

### networkStakingStepRewardsByStepViewer\_claimed.params

```ts
params: object;
```

### networkStakingStepRewardsByStepViewer\_claimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_claimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_claimed.result

```ts
result: object;
```

### networkStakingStepRewardsByStepViewer\_claimed.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStepViewer\_claimed.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStepViewer\_earned

```ts
networkStakingStepRewardsByStepViewer_earned: object;
```

### networkStakingStepRewardsByStepViewer\_earned.params

```ts
params: object;
```

### networkStakingStepRewardsByStepViewer\_earned.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_earned.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_earned.result

```ts
result: object;
```

### networkStakingStepRewardsByStepViewer\_earned.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStepViewer\_earned.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStepViewer\_total

```ts
networkStakingStepRewardsByStepViewer_total: object;
```

### networkStakingStepRewardsByStepViewer\_total.params

```ts
params: object;
```

### networkStakingStepRewardsByStepViewer\_total.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_total.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_total.result

```ts
result: object;
```

### networkStakingStepRewardsByStepViewer\_total.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStepViewer\_total.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### networkStakingStepRewardsByStepViewer\_unclaimed

```ts
networkStakingStepRewardsByStepViewer_unclaimed: object;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.params

```ts
params: object;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.result

```ts
result: object;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### networkStakingStepRewardsByStepViewer\_unclaimed.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

    ### <a id="NetworkStakingStepRewardsTotalViewerRpcNamespace"></a>NetworkStakingStepRewardsTotalViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsTotalViewerRpcNamespace: "networkStakingStepRewardsTotalViewer";
```

    ### <a id="NetworkStakingStepRewardsTotalViewerRpcSchemas"></a>NetworkStakingStepRewardsTotalViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsTotalViewerRpcSchemas: object;
```

## Type Declaration

### networkStakingStepRewardsTotalViewer\_bonus

```ts
networkStakingStepRewardsTotalViewer_bonus: object;
```

### networkStakingStepRewardsTotalViewer\_bonus.params

```ts
params: object;
```

### networkStakingStepRewardsTotalViewer\_bonus.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_bonus.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_bonus.result

```ts
result: object;
```

### networkStakingStepRewardsTotalViewer\_bonus.result.from

```ts
from: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

### networkStakingStepRewardsTotalViewer\_bonus.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### networkStakingStepRewardsTotalViewer\_claimed

```ts
networkStakingStepRewardsTotalViewer_claimed: object;
```

### networkStakingStepRewardsTotalViewer\_claimed.params

```ts
params: object;
```

### networkStakingStepRewardsTotalViewer\_claimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_claimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_claimed.result

```ts
result: object;
```

### networkStakingStepRewardsTotalViewer\_claimed.result.from

```ts
from: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

### networkStakingStepRewardsTotalViewer\_claimed.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### networkStakingStepRewardsTotalViewer\_earned

```ts
networkStakingStepRewardsTotalViewer_earned: object;
```

### networkStakingStepRewardsTotalViewer\_earned.params

```ts
params: object;
```

### networkStakingStepRewardsTotalViewer\_earned.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_earned.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_earned.result

```ts
result: object;
```

### networkStakingStepRewardsTotalViewer\_earned.result.from

```ts
from: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

### networkStakingStepRewardsTotalViewer\_earned.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### networkStakingStepRewardsTotalViewer\_total

```ts
networkStakingStepRewardsTotalViewer_total: object;
```

### networkStakingStepRewardsTotalViewer\_total.params

```ts
params: object;
```

### networkStakingStepRewardsTotalViewer\_total.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_total.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_total.result

```ts
result: object;
```

### networkStakingStepRewardsTotalViewer\_total.result.from

```ts
from: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

### networkStakingStepRewardsTotalViewer\_total.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### networkStakingStepRewardsTotalViewer\_unclaimed

```ts
networkStakingStepRewardsTotalViewer_unclaimed: object;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.params

```ts
params: object;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.params.from

```ts
from: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.params.to

```ts
to: ZodTuple<[ZodOptional<ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[..., ...], null>>;
  steps: ZodOptional<ZodArray<ZodObject<..., ...>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
}, $strip>>], null>;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.result

```ts
result: object;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.result.from

```ts
from: ZodPipe<ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodTransform<AttoXL1, bigint>>;
```

### networkStakingStepRewardsTotalViewer\_unclaimed.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

    ### <a id="NetworkStakingStepRewardsViewerRpcNamespace"></a>NetworkStakingStepRewardsViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsViewerRpcNamespace: "networkStakingStepRewardsViewer";
```

    ### <a id="NetworkStakingStepRewardsViewerRpcSchemas"></a>NetworkStakingStepRewardsViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const NetworkStakingStepRewardsViewerRpcSchemas: object;
```

    ### <a id="PermissionRequestZod"></a>PermissionRequestZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const PermissionRequestZod: ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>;
```

    ### <a id="PermissionZod"></a>PermissionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const PermissionZod: ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<{
        chain: "chain";
        expiration: "expiration";
        filteredResponse: "filteredResponse";
        rateLimit: "rateLimit";
        restrictReturnedAccounts: "restrictReturnedAccounts";
     }>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
}, $strip>;
```

    ### <a id="QualifiedSequenceFromStringZod"></a>QualifiedSequenceFromStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const QualifiedSequenceFromStringZod: ZodPipe<ZodString, ZodTransform<QualifiedSequence, string>>;
```

    ### <a id="QualifiedSequenceToStringZod"></a>QualifiedSequenceToStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const QualifiedSequenceToStringZod: ZodString;
```

    ### <a id="RequestedPermissionZod"></a>RequestedPermissionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const RequestedPermissionZod: ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>;
```

    ### <a id="RewardsRangeOptionsZod"></a>RewardsRangeOptionsZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const RewardsRangeOptionsZod: ZodObject<{
  positions: ZodOptional<ZodArray<ZodNumber>>;
  range: ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>, ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>>;
  steps: ZodOptional<ZodArray<ZodObject<{
  }, $strip>>>;
  stakers: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>>;
}, $strip>;
```

    ### <a id="SequenceFromStringZod"></a>SequenceFromStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SequenceFromStringZod: ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<LocalSequence, string>>, ZodPipe<ZodString, ZodTransform<QualifiedSequence, string>>]>;
```

    ### <a id="SequenceToStringZod"></a>SequenceToStringZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SequenceToStringZod: ZodUnion<readonly [ZodString, ZodString]>;
```

    ### <a id="SignedBlockBoundWitnessZod"></a>SignedBlockBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedBlockBoundWitnessZod: ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="SignedBoundWitnessWithStorageMetaZod"></a>SignedBoundWitnessWithStorageMetaZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedBoundWitnessWithStorageMetaZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip> = UnsignedBoundWitnessWithStorageMetaZod;
```

    ### <a id="SignedBoundWitnessZod"></a>SignedBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="SignedHydratedBlockToJsonZod"></a>SignedHydratedBlockToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedHydratedBlockToJsonZod: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="SignedHydratedBlockWithStorageMetaZod"></a>SignedHydratedBlockWithStorageMetaZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedHydratedBlockWithStorageMetaZod: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strip>>], null>;
```

    ### <a id="SignedHydratedBlockZod"></a>SignedHydratedBlockZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedHydratedBlockZod: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="SignedHydratedTransactionToJsonZod"></a>SignedHydratedTransactionToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedHydratedTransactionToJsonZod: ZodPipe<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<... & ..., string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>, ZodTransform<
  | SignedHydratedTransaction<TransactionBoundWitness, Payload>
  | undefined, [{
  addresses: Address[];
  payload_hashes: Hash[];
  payload_schemas: (string | string & object)[];
  previous_hashes: (Hash | null)[];
  $destination?: Address;
  $sourceQuery?: Hash;
  $signatures: (Hex | null)[];
  schema: "network.xyo.boundwitness";
  nbf: BlockNumber;
  exp: BlockNumber;
  script?: string[];
  fees: {
     base: Hex;
     gasLimit: Hex;
     gasPrice: Hex;
     priority: Hex;
  };
  chain: ChainId;
  from: ChainId;
}, object[]]>>;
```

    ### <a id="SignedHydratedTransactionZod"></a>SignedHydratedTransactionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedHydratedTransactionZod: ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="SignedTransactionBoundWitnessZod"></a>SignedTransactionBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const SignedTransactionBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>;
```

    ### <a id="StakeToJsonZod"></a>StakeToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const StakeToJsonZod: ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>>;
```

    ### <a id="StakeZod"></a>StakeZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const StakeZod: ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>;
```

    ### <a id="TimeDomainZod"></a>TimeDomainZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TimeDomainZod: ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>;
```

    ### <a id="TimeSyncViewerRpcNamespace"></a>TimeSyncViewerRpcNamespace

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TimeSyncViewerRpcNamespace: "timeSyncViewer";
```

    ### <a id="TimeSyncViewerRpcSchemas"></a>TimeSyncViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TimeSyncViewerRpcSchemas: object;
```

## Type Declaration

### timeSyncViewer\_convertTime

```ts
timeSyncViewer_convertTime: object;
```

### timeSyncViewer\_convertTime.params

```ts
params: object;
```

### timeSyncViewer\_convertTime.params.from

```ts
from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
```

### timeSyncViewer\_convertTime.params.to

```ts
to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
```

### timeSyncViewer\_convertTime.result

```ts
result: object;
```

### timeSyncViewer\_convertTime.result.from

```ts
from: ZodNumber;
```

### timeSyncViewer\_convertTime.result.to

```ts
to: ZodNumber;
```

### timeSyncViewer\_currentTime

```ts
timeSyncViewer_currentTime: object;
```

### timeSyncViewer\_currentTime.params

```ts
params: object;
```

### timeSyncViewer\_currentTime.params.from

```ts
from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
```

### timeSyncViewer\_currentTime.params.to

```ts
to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
```

### timeSyncViewer\_currentTime.result

```ts
result: object;
```

### timeSyncViewer\_currentTime.result.from

```ts
from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
```

### timeSyncViewer\_currentTime.result.to

```ts
to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>, ZodNumber], null>;
```

### timeSyncViewer\_currentTimeAndHash

```ts
timeSyncViewer_currentTimeAndHash: object;
```

### timeSyncViewer\_currentTimeAndHash.params

```ts
params: object;
```

### timeSyncViewer\_currentTimeAndHash.params.from

```ts
from: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
```

### timeSyncViewer\_currentTimeAndHash.params.to

```ts
to: ZodTuple<[ZodUnion<readonly [ZodLiteral<"xl1">, ZodLiteral<"epoch">, ZodLiteral<"ethereum">]>], null>;
```

### timeSyncViewer\_currentTimeAndHash.result

```ts
result: object;
```

### timeSyncViewer\_currentTimeAndHash.result.from

```ts
from: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
```

### timeSyncViewer\_currentTimeAndHash.result.to

```ts
to: ZodTuple<[ZodNumber, ZodNullable<ZodString>], null>;
```

### timeSyncViewer\_currentTimePayload

```ts
timeSyncViewer_currentTimePayload: object;
```

### timeSyncViewer\_currentTimePayload.params

```ts
params: object;
```

### timeSyncViewer\_currentTimePayload.params.from

```ts
from: ZodTuple<[], null>;
```

### timeSyncViewer\_currentTimePayload.params.to

```ts
to: ZodTuple<[], null>;
```

### timeSyncViewer\_currentTimePayload.result

```ts
result: object;
```

### timeSyncViewer\_currentTimePayload.result.from

```ts
from: ZodObject<{
}, $strip> = TimePayloadZod;
```

### timeSyncViewer\_currentTimePayload.result.to

```ts
to: ZodObject<{
}, $strip> = TimePayloadZod;
```

    ### <a id="TransactionBoundWitnessZod"></a>TransactionBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransactionBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodArray<ZodString>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>;
```

    ### <a id="TransactionFeesBigIntToJsonZod"></a>TransactionFeesBigIntToJsonZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransactionFeesBigIntToJsonZod: ZodPipe<ZodObject<{
  base: ZodBigInt;
  gasLimit: ZodBigInt;
  gasPrice: ZodBigInt;
  priority: ZodBigInt;
}, $strip>, ZodTransform<{
  base: Hex;
  gasLimit: Hex;
  gasPrice: Hex;
  priority: Hex;
}, {
  base: bigint;
  gasLimit: bigint;
  gasPrice: bigint;
  priority: bigint;
}>>;
```

    ### <a id="TransactionFeesBigIntZod"></a>TransactionFeesBigIntZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransactionFeesBigIntZod: ZodObject<{
  base: ZodBigInt;
  gasLimit: ZodBigInt;
  gasPrice: ZodBigInt;
  priority: ZodBigInt;
}, $strip>;
```

    ### <a id="TransactionFeesHexZod"></a>TransactionFeesHexZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransactionFeesHexZod: ZodObject<{
  base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>;
```

    ### <a id="TransactionFeesJsonToBigIntZod"></a>TransactionFeesJsonToBigIntZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransactionFeesJsonToBigIntZod: ZodPipe<ZodObject<{
  base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  base: bigint;
  gasLimit: bigint;
  gasPrice: bigint;
  priority: bigint;
}, {
  base: Hex;
  gasLimit: Hex;
  gasPrice: Hex;
  priority: Hex;
}>>;
```

    ### <a id="TransferPairZod"></a>TransferPairZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const TransferPairZod: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

    ### <a id="UnsignedBoundWitnessWithStorageMetaZod"></a>UnsignedBoundWitnessWithStorageMetaZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const UnsignedBoundWitnessWithStorageMetaZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="UnsignedBoundWitnessZod"></a>UnsignedBoundWitnessZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const UnsignedBoundWitnessZod: ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>;
```

    ### <a id="UnsignedHydratedTransactionZod"></a>UnsignedHydratedTransactionZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const UnsignedHydratedTransactionZod: ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<ZodString, ZodTransform<string & object, string>>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodArray<ZodString>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>;
```

    ### <a id="WithTransactionFeesZod"></a>WithTransactionFeesZod

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const WithTransactionFeesZod: ZodObject<{
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<Hex, string>>;
     priority: ZodPipe<ZodString, ZodTransform<Hex, string>>;
  }, $strip>;
}, $strip>;
```

    ### <a id="XyoPermissionsRpcSchemas"></a>XyoPermissionsRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const XyoPermissionsRpcSchemas: object;
```

## Type Declaration

### xyoPermissions\_getPermissions

```ts
xyoPermissions_getPermissions: object;
```

### xyoPermissions\_getPermissions.params

```ts
params: object;
```

### xyoPermissions\_getPermissions.params.to

```ts
to: ZodArray<ZodAny>;
```

### xyoPermissions\_getPermissions.params.from

```ts
from: ZodArray<ZodAny>;
```

### xyoPermissions\_getPermissions.result

```ts
result: object;
```

### xyoPermissions\_getPermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<...>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_getPermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  caveats: ZodOptional<ZodArray<ZodObject<{
     type: ZodEnum<...>;
     value: ZodJSONSchema;
  }, $strip>>>;
  invoker: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_requestPermissions

```ts
xyoPermissions_requestPermissions: object;
```

### xyoPermissions\_requestPermissions.params

```ts
params: object;
```

### xyoPermissions\_requestPermissions.params.to

```ts
to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_requestPermissions.params.from

```ts
from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_requestPermissions.result

```ts
result: object;
```

### xyoPermissions\_requestPermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_requestPermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_revokePermissions

```ts
xyoPermissions_revokePermissions: object;
```

### xyoPermissions\_revokePermissions.params

```ts
params: object;
```

### xyoPermissions\_revokePermissions.params.to

```ts
to: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_revokePermissions.params.from

```ts
from: ZodTuple<[ZodArray<ZodRecord<ZodString, ZodRecord<ZodString, ZodAny>>>], null>;
```

### xyoPermissions\_revokePermissions.result

```ts
result: object;
```

### xyoPermissions\_revokePermissions.result.to

```ts
to: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

### xyoPermissions\_revokePermissions.result.from

```ts
from: ZodArray<ZodObject<{
  parentCapability: ZodString;
  date: ZodOptional<ZodNumber>;
}, $strip>>;
```

    ### <a id="XyoRunnerRpcSchemas"></a>XyoRunnerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const XyoRunnerRpcSchemas: object;
```

## Type Declaration

### xyoRunner\_broadcastTransaction

```ts
xyoRunner_broadcastTransaction: object;
```

### xyoRunner\_broadcastTransaction.params

```ts
params: object;
```

### xyoRunner\_broadcastTransaction.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodOptional<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoRunner\_broadcastTransaction.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodOptional<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoRunner\_broadcastTransaction.result

```ts
result: object;
```

### xyoRunner\_broadcastTransaction.result.to

```ts
to: ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>> = HashToJsonZod;
```

### xyoRunner\_broadcastTransaction.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Hash, string>> = JsonToHashZod;
```

    ### <a id="XyoSignerRpcSchemas"></a>XyoSignerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const XyoSignerRpcSchemas: object;
```

## Type Declaration

### xyoSigner\_address

```ts
readonly xyoSigner_address: object;
```

### xyoSigner\_address.params

```ts
readonly params: object;
```

### xyoSigner\_address.params.to

```ts
readonly to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoSigner\_address.params.from

```ts
readonly from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoSigner\_address.result

```ts
readonly result: object;
```

### xyoSigner\_address.result.to

```ts
readonly to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoSigner\_address.result.from

```ts
readonly from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoSigner\_signTransaction

```ts
readonly xyoSigner_signTransaction: object;
```

### xyoSigner\_signTransaction.params

```ts
readonly params: object;
```

### xyoSigner\_signTransaction.params.to

```ts
readonly to: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoSigner\_signTransaction.params.from

```ts
readonly from: ZodTuple<[ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>], null>;
```

### xyoSigner\_signTransaction.result

```ts
readonly result: object;
```

### xyoSigner\_signTransaction.result.to

```ts
readonly to: ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<ZodString>>>;
  fees: ZodObject<{
     base: ZodPipe<ZodString, ZodTransform<..., ...>>;
     gasLimit: ZodPipe<ZodString, ZodTransform<..., ...>>;
     gasPrice: ZodPipe<ZodString, ZodTransform<..., ...>>;
     priority: ZodPipe<ZodString, ZodTransform<..., ...>>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedTransactionZod;
```

### xyoSigner\_signTransaction.result.from

```ts
readonly from: ZodPipe<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>, ZodTransform<HydratedTransactionWithStorageMeta<TransactionBoundWitness, Payload>, [{
  addresses: Address[];
  payload_hashes: Hash[];
  payload_schemas: (string | string & object)[];
  previous_hashes: (Hash | null)[];
  $destination?: Address;
  $sourceQuery?: Hash;
  $signatures: (Hex | null)[];
  schema: "network.xyo.boundwitness";
  nbf: BlockNumber;
  exp: BlockNumber;
  script?: string[];
  fees: {
     base: Hex;
     gasLimit: Hex;
     gasPrice: Hex;
     priority: Hex;
  };
  chain: ChainId;
  from: ChainId;
}, object[]]>>;
```

    ### <a id="XyoViewerRpcSchemas"></a>XyoViewerRpcSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const XyoViewerRpcSchemas: object;
```

## Type Declaration

### xyoViewer\_networkStakeStepRewardClaimedByAddress

```ts
xyoViewer_networkStakeStepRewardClaimedByAddress: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardClaimedByAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardAddressReward

```ts
xyoViewer_networkStakeStepRewardAddressReward: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardAddressReward.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory

```ts
xyoViewer_networkStakeStepRewardAddressHistory: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardAddressHistory.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardAddressShare

```ts
xyoViewer_networkStakeStepRewardAddressShare: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardAddressShare.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress

```ts
xyoViewer_networkStakeStepRewardWeightForAddress: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardWeightForAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress

```ts
xyoViewer_networkStakeStepRewardUnclaimedByAddress: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardUnclaimedByAddress.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardPoolRewards

```ts
xyoViewer_networkStakeStepRewardPoolRewards: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardPoolRewards.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight

```ts
xyoViewer_networkStakeStepRewardPositionWeight: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardPositionWeight.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss

```ts
xyoViewer_networkStakeStepRewardPotentialPositionLoss: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardPotentialPositionLoss.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardForStep

```ts
xyoViewer_networkStakeStepRewardForStep: object;
```

### xyoViewer\_networkStakeStepRewardForStep.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForStep.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardForStep.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardForStep.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForStep.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardForStep.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardRandomizer

```ts
xyoViewer_networkStakeStepRewardRandomizer: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardRandomizer.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardRandomizer.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardStakerCount

```ts
xyoViewer_networkStakeStepRewardStakerCount: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardStakerCount.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result.to

```ts
to: ZodNumber;
```

### xyoViewer\_networkStakeStepRewardStakerCount.result.from

```ts
from: ZodNumber;
```

### xyoViewer\_networkStakeStepRewardPoolShares

```ts
xyoViewer_networkStakeStepRewardPoolShares: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>], null>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result.to

```ts
to: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>>;
```

### xyoViewer\_networkStakeStepRewardPoolShares.result.from

```ts
from: ZodRecord<ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition

```ts
xyoViewer_networkStakeStepRewardForStepForPosition: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params.to

```ts
to: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.params.from

```ts
from: ZodTuple<[ZodObject<{
}, $strip>, ZodNumber], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardForStepForPosition.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition

```ts
xyoViewer_networkStakeStepRewardForPosition: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardForPosition.result.to

```ts
to: ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>;
```

### xyoViewer\_networkStakeStepRewardForPosition.result.from

```ts
from: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange

```ts
xyoViewer_networkStakeStepRewardsForRange: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForRange.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForRange.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardsForRange.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel

```ts
xyoViewer_networkStakeStepRewardsForStepLevel: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_networkStakeStepRewardsForStepLevel.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_networkStakeStepRewardsForPosition

```ts
xyoViewer_networkStakeStepRewardsForPosition: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params

```ts
params: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params.to

```ts
to: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.params.from

```ts
from: ZodTuple<[ZodNumber, ZodTuple<[ZodNumber, ZodNumber], null>], null>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result

```ts
result: object;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result.to

```ts
to: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>, ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>>], null>>;
```

### xyoViewer\_networkStakeStepRewardsForPosition.result.from

```ts
from: ZodRecord<ZodString, ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>, ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>>], null>>;
```

### xyoViewer\_accountBalance

```ts
xyoViewer_accountBalance: object;
```

### xyoViewer\_accountBalance.params

```ts
params: object;
```

### xyoViewer\_accountBalance.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_accountBalance.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_accountBalance.result

```ts
result: object;
```

### xyoViewer\_accountBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_accountBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_accountBalanceHistory

```ts
xyoViewer_accountBalanceHistory: object;
```

### xyoViewer\_accountBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_accountBalanceHistory.params.to

```ts
to: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<[..., ...], null>, ZodPipe<ZodString, ZodTransform<..., ...>>]>], null>]>;
```

### xyoViewer\_accountBalanceHistory.params.from

```ts
from: ZodUnion<readonly [ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>, ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodUnion<readonly [ZodTuple<[..., ...], null>, ZodPipe<ZodString, ZodTransform<..., ...>>]>], null>]>;
```

### xyoViewer\_accountBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_accountBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_accountBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferPairBalance

```ts
xyoViewer_transferPairBalance: object;
```

### xyoViewer\_transferPairBalance.params

```ts
params: object;
```

### xyoViewer\_transferPairBalance.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalance.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalance.result

```ts
result: object;
```

### xyoViewer\_transferPairBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_transferPairBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_transferPairBalanceHistory

```ts
xyoViewer_transferPairBalanceHistory: object;
```

### xyoViewer\_transferPairBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_transferPairBalanceHistory.params.to

```ts
to: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalanceHistory.params.from

```ts
from: ZodTuple<[ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodPipe<ZodString, ZodTransform<Address, string>>], null>], null>;
```

### xyoViewer\_transferPairBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_transferPairBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferPairBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferBalance

```ts
xyoViewer_transferBalance: object;
```

### xyoViewer\_transferBalance.params

```ts
params: object;
```

### xyoViewer\_transferBalance.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_transferBalance.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_transferBalance.result

```ts
result: object;
```

### xyoViewer\_transferBalance.result.to

```ts
to: ZodPipe<ZodBigInt, ZodTransform<Hex, bigint>> = BigIntToJsonZod;
```

### xyoViewer\_transferBalance.result.from

```ts
from: ZodPipe<ZodPipe<ZodString, ZodTransform<Hex, string>>, ZodTransform<bigint, Hex>> = JsonToBigIntZod;
```

### xyoViewer\_transferBalanceHistory

```ts
xyoViewer_transferBalanceHistory: object;
```

### xyoViewer\_transferBalanceHistory.params

```ts
params: object;
```

### xyoViewer\_transferBalanceHistory.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>, ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>>], null>;
```

### xyoViewer\_transferBalanceHistory.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodOptional<ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>, ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>>], null>;
```

### xyoViewer\_transferBalanceHistory.result

```ts
result: object;
```

### xyoViewer\_transferBalanceHistory.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_transferBalanceHistory.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodNullable<ZodObject<{
  addresses: ZodArray<ZodPipe<..., ...>>;
  payload_hashes: ZodArray<ZodPipe<..., ...>>;
  payload_schemas: ZodArray<ZodUnion<...>>;
  previous_hashes: ZodArray<ZodNullable<...>>;
  $destination: ZodOptional<ZodPipe<..., ...>>;
  $sourceQuery: ZodOptional<ZodPipe<..., ...>>;
  $signatures: ZodArray<ZodUnion<...>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  exp: ZodPipe<ZodNumber, ZodTransform<..., ...>>;
  script: ZodOptional<ZodArray<...>>;
  fees: ZodObject<{
     base: ...;
     gasLimit: ...;
     gasPrice: ...;
     priority: ...;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<..., ...>>;
  from: ZodPipe<ZodString, ZodTransform<..., ...>>;
}, $strip>>, ZodObject<{
}, $strip>], null>>;
```

### xyoViewer\_blockByHash

```ts
xyoViewer_blockByHash: object;
```

### xyoViewer\_blockByHash.params

```ts
params: object;
```

### xyoViewer\_blockByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodTransform<string, Hash>>], null>;
```

### xyoViewer\_blockByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_blockByHash.result

```ts
result: object;
```

### xyoViewer\_blockByHash.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByHash.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByNumber

```ts
xyoViewer_blockByNumber: object;
```

### xyoViewer\_blockByNumber.params

```ts
params: object;
```

### xyoViewer\_blockByNumber.params.to

```ts
to: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_blockByNumber.params.from

```ts
from: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_blockByNumber.result

```ts
result: object;
```

### xyoViewer\_blockByNumber.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blockByNumber.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_blocksByHash

```ts
xyoViewer_blocksByHash: object;
```

### xyoViewer\_blocksByHash.params

```ts
params: object;
```

### xyoViewer\_blocksByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
```

### xyoViewer\_blocksByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodOptional<ZodNumber>], null>;
```

### xyoViewer\_blocksByHash.result

```ts
result: object;
```

### xyoViewer\_blocksByHash.result.to

```ts
to: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_blocksByHash.result.from

```ts
from: ZodArray<ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<..., ...>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_chainId

```ts
xyoViewer_chainId: object;
```

### xyoViewer\_chainId.params

```ts
params: object;
```

### xyoViewer\_chainId.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_chainId.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_chainId.result

```ts
result: object;
```

### xyoViewer\_chainId.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainId.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainIdAtBlock

```ts
xyoViewer_chainIdAtBlock: object;
```

### xyoViewer\_chainIdAtBlock.params

```ts
params: object;
```

### xyoViewer\_chainIdAtBlock.params.to

```ts
to: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
```

### xyoViewer\_chainIdAtBlock.params.from

```ts
from: ZodTuple<[ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>], null>;
```

### xyoViewer\_chainIdAtBlock.result

```ts
result: object;
```

### xyoViewer\_chainIdAtBlock.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_chainIdAtBlock.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Address, string>> = AddressZod;
```

### xyoViewer\_currentBlock

```ts
xyoViewer_currentBlock: object;
```

### xyoViewer\_currentBlock.params

```ts
params: object;
```

### xyoViewer\_currentBlock.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlock.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlock.result

```ts
result: object;
```

### xyoViewer\_currentBlock.result.to

```ts
to: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_currentBlock.result.from

```ts
from: ZodTuple<[ZodObject<{
  block: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  previous: ZodNullable<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  protocol: ZodNumber;
  step_hashes: ZodOptional<ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $epoch: ZodNumber;
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [ZodString, ZodPipe<..., ...>]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<ZodString, ZodTransform<..., ...>>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<Address, string>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<Hash, string>>>;
  $signatures: ZodArray<ZodUnion<readonly [ZodPipe<..., ...>, ZodNull]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null> = SignedHydratedBlockZod;
```

### xyoViewer\_currentBlockHash

```ts
xyoViewer_currentBlockHash: object;
```

### xyoViewer\_currentBlockHash.params

```ts
params: object;
```

### xyoViewer\_currentBlockHash.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockHash.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockHash.result

```ts
result: object;
```

### xyoViewer\_currentBlockHash.result.to

```ts
to: ZodPipe<ZodString, ZodTransform<Hash, string>> = HashZod;
```

### xyoViewer\_currentBlockHash.result.from

```ts
from: ZodPipe<ZodString, ZodTransform<Hash, string>> = HashZod;
```

### xyoViewer\_currentBlockNumber

```ts
xyoViewer_currentBlockNumber: object;
```

### xyoViewer\_currentBlockNumber.params

```ts
params: object;
```

### xyoViewer\_currentBlockNumber.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockNumber.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_currentBlockNumber.result

```ts
result: object;
```

### xyoViewer\_currentBlockNumber.result.to

```ts
to: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>> = XL1BlockNumberZod;
```

### xyoViewer\_currentBlockNumber.result.from

```ts
from: ZodPipe<ZodNumber, ZodTransform<XL1BlockNumber, number>> = XL1BlockNumberZod;
```

### xyoViewer\_forkHistory

```ts
xyoViewer_forkHistory: object;
```

### xyoViewer\_forkHistory.params

```ts
params: object;
```

### xyoViewer\_forkHistory.params.to

```ts
to: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_forkHistory.params.from

```ts
from: ZodOptional<ZodArray<ZodAny>>;
```

### xyoViewer\_forkHistory.result

```ts
result: object;
```

### xyoViewer\_forkHistory.result.to

```ts
to: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
```

### xyoViewer\_forkHistory.result.from

```ts
from: ZodRecord<ZodNumber, ZodPipe<ZodString, ZodTransform<Address, string>>>;
```

### xyoViewer\_stakeByStaker

```ts
xyoViewer_stakeByStaker: object;
```

### xyoViewer\_stakeByStaker.params

```ts
params: object;
```

### xyoViewer\_stakeByStaker.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
```

### xyoViewer\_stakeByStaker.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>, ZodNumber], null>;
```

### xyoViewer\_stakeByStaker.result

```ts
result: object;
```

### xyoViewer\_stakeByStaker.result.to

```ts
to: ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>> = StakeToJsonZod;
```

### xyoViewer\_stakeByStaker.result.from

```ts
from: ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>> = JsonToStakeZod;
```

### xyoViewer\_stakeById

```ts
xyoViewer_stakeById: object;
```

### xyoViewer\_stakeById.params

```ts
params: object;
```

### xyoViewer\_stakeById.params.to

```ts
to: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_stakeById.params.from

```ts
from: ZodTuple<[ZodNumber], null>;
```

### xyoViewer\_stakeById.result

```ts
result: object;
```

### xyoViewer\_stakeById.result.to

```ts
to: ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>> = StakeToJsonZod;
```

### xyoViewer\_stakeById.result.from

```ts
from: ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>> = JsonToStakeZod;
```

### xyoViewer\_stakesByStaker

```ts
xyoViewer_stakesByStaker: object;
```

### xyoViewer\_stakesByStaker.params

```ts
params: object;
```

### xyoViewer\_stakesByStaker.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaker.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaker.result

```ts
result: object;
```

### xyoViewer\_stakesByStaker.result.to

```ts
to: ZodArray<ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>>>;
```

### xyoViewer\_stakesByStaker.result.from

```ts
from: ZodArray<ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>>>;
```

### xyoViewer\_stakesByStaked

```ts
xyoViewer_stakesByStaked: object;
```

### xyoViewer\_stakesByStaked.params

```ts
params: object;
```

### xyoViewer\_stakesByStaked.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaked.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Address, string>>], null>;
```

### xyoViewer\_stakesByStaked.result

```ts
result: object;
```

### xyoViewer\_stakesByStaked.result.to

```ts
to: ZodArray<ZodPipe<ZodObject<{
  amount: ZodBigInt;
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: Hex;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  amount: bigint;
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}>>>;
```

### xyoViewer\_stakesByStaked.result.from

```ts
from: ZodArray<ZodPipe<ZodObject<{
  addBlock: ZodNumber;
  id: ZodNumber;
  removeBlock: ZodNumber;
  staked: ZodPipe<ZodString, ZodTransform<Address, string>>;
  staker: ZodPipe<ZodString, ZodTransform<Address, string>>;
  withdrawBlock: ZodNumber;
  amount: ZodPipe<ZodString, ZodTransform<Hex, string>>;
}, $strip>, ZodTransform<{
  addBlock: number;
  amount: AttoXL1;
  id: PositionId;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
}, {
  addBlock: number;
  id: number;
  removeBlock: number;
  staked: Address;
  staker: Address;
  withdrawBlock: number;
  amount: Hex;
}>>>;
```

### xyoViewer\_transactionByBlockHashAndIndex

```ts
xyoViewer_transactionByBlockHashAndIndex: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.params

```ts
params: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockHashAndIndex.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockHashAndIndex.result

```ts
result: object;
```

### xyoViewer\_transactionByBlockHashAndIndex.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockHashAndIndex.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockNumberAndIndex

```ts
xyoViewer_transactionByBlockNumberAndIndex: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params

```ts
params: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params.to

```ts
to: ZodTuple<[ZodNumber, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.params.from

```ts
from: ZodTuple<[ZodNumber, ZodNumber], null>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result

```ts
result: object;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByBlockNumberAndIndex.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByHash

```ts
xyoViewer_transactionByHash: object;
```

### xyoViewer\_transactionByHash.params

```ts
params: object;
```

### xyoViewer\_transactionByHash.params.to

```ts
to: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_transactionByHash.params.from

```ts
from: ZodTuple<[ZodPipe<ZodString, ZodTransform<Hash, string>>], null>;
```

### xyoViewer\_transactionByHash.result

```ts
result: object;
```

### xyoViewer\_transactionByHash.result.to

```ts
to: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

### xyoViewer\_transactionByHash.result.from

```ts
from: ZodNullable<ZodTuple<[ZodObject<{
  addresses: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_hashes: ZodArray<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  payload_schemas: ZodArray<ZodUnion<readonly [..., ...]>>;
  previous_hashes: ZodArray<ZodNullable<ZodPipe<..., ...>>>;
  $destination: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $sourceQuery: ZodOptional<ZodPipe<ZodString, ZodTransform<..., ...>>>;
  $signatures: ZodArray<ZodUnion<readonly [..., ...]>>;
  schema: ZodLiteral<"network.xyo.boundwitness">;
  nbf: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  exp: ZodPipe<ZodNumber, ZodTransform<BlockNumber, number>>;
  script: ZodOptional<ZodOptional<ZodArray<...>>>;
  fees: ZodObject<{
     base: ZodPipe<..., ...>;
     gasLimit: ZodPipe<..., ...>;
     gasPrice: ZodPipe<..., ...>;
     priority: ZodPipe<..., ...>;
  }, $strip>;
  chain: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
  from: ZodPipe<ZodString, ZodTransform<ChainId, string>>;
}, $strip>, ZodArray<ZodObject<{
}, $strict>>], null>>;
```

    ### <a id="jsonrpc"></a>jsonrpc

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const jsonrpc: "2.0";
```

    ### <a id="requestSchemas"></a>requestSchemas

[**@xyo-network/xl1-rpc**](#../../README)

***

```ts
const requestSchemas: Record<string, ZodObject<ZodRawShape> | undefined> = {};
```


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

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/xl1-rpc.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/xl1-rpc

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/xl1-rpc
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/xl1-rpc

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/xl1-rpc/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/xl1-rpc

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/xl1-rpc
[socket-link]: https://socket.dev/npm/package/@xyo-network/xl1-rpc