# @xyo-network/xl1-wrappers

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One SDK Wrappers



## Reference

**@xyo-network/xl1-wrappers**

***

## Classes

- [BaseWrapper](#classes/BaseWrapper)
- [FeesWrapper](#classes/FeesWrapper)
- [SignatureWrapper](#classes/SignatureWrapper)
- [ChainWrapper](#classes/ChainWrapper)
- [HydratedTransactionWrapper](#classes/HydratedTransactionWrapper)

## Interfaces

- [BaseWrapperConfig](#interfaces/BaseWrapperConfig)

## Functions

- [createSignatureWrappers](#functions/createSignatureWrappers)

### classes

  ### <a id="BaseWrapper"></a>BaseWrapper

[**@xyo-network/xl1-wrappers**](#../README)

***

## Extended by

- [`ChainWrapper`](#ChainWrapper)

## Type Parameters

### T

`T`

### C

`C` *extends* [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\> = [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\>

## Constructors

### Constructor

```ts
protected new BaseWrapper<T, C>(value, config): BaseWrapper<T, C>;
```

### Parameters

#### value

`T`

#### config

`Partial`\<`C`\> = `{}`

### Returns

`BaseWrapper`\<`T`, `C`\>

## Properties

### config

```ts
protected readonly config: Partial<C>;
```

***

### value

```ts
protected readonly value: T;
```

## Accessors

### provider

### Get Signature

```ts
get provider(): XyoConnection | undefined;
```

#### Returns

`XyoConnection` \| `undefined`

## Methods

### create()

```ts
static create<T, C>(value, config): Promise<BaseWrapper<T, BaseWrapperConfig<T>>>;
```

### Type Parameters

#### T

`T`

#### C

`C` *extends* [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\> = [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\>

### Parameters

#### value

`T`

#### config

`Partial`\<`C`\> = `{}`

### Returns

`Promise`\<`BaseWrapper`\<`T`, [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\>\>\>

***

### validateConfig()

```ts
static validateConfig(_config): PromisableArray<Error>;
```

### Parameters

#### \_config

`unknown`

### Returns

`PromisableArray`\<`Error`\>

***

### validateValue()

```ts
static validateValue(_value): PromisableArray<Error>;
```

### Parameters

#### \_value

`unknown`

### Returns

`PromisableArray`\<`Error`\>

***

### validate()

```ts
validate(): PromisableArray<Error>;
```

### Returns

`PromisableArray`\<`Error`\>

  ### <a id="ChainWrapper"></a>ChainWrapper

[**@xyo-network/xl1-wrappers**](#../README)

***

## Extends

- [`BaseWrapper`](#BaseWrapper)\<`Address`, [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`Address`\>\>

## Constructors

### Constructor

```ts
protected new ChainWrapper(value, config): ChainWrapper;
```

### Parameters

#### value

`Address`

#### config

`Partial`\<`C`\> = `{}`

### Returns

`ChainWrapper`

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`constructor`](BaseWrapper.md#constructor)

## Properties

### config

```ts
protected readonly config: Partial<C>;
```

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`config`](BaseWrapper.md#config)

***

### value

```ts
protected readonly value: Address;
```

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`value`](BaseWrapper.md#value)

## Accessors

### provider

### Get Signature

```ts
get provider(): XyoConnection | undefined;
```

#### Returns

`XyoConnection` \| `undefined`

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`provider`](BaseWrapper.md#provider)

***

### id

### Get Signature

```ts
get id(): Address;
```

#### Returns

`Address`

## Methods

### create()

```ts
static create<T, C>(value, config): Promise<BaseWrapper<T, BaseWrapperConfig<T>>>;
```

### Type Parameters

#### T

`T`

#### C

`C` *extends* [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\> = [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\>

### Parameters

#### value

`T`

#### config

`Partial`\<`C`\> = `{}`

### Returns

`Promise`\<[`BaseWrapper`](#BaseWrapper)\<`T`, [`BaseWrapperConfig`](#../interfaces/BaseWrapperConfig)\<`T`\>\>\>

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`create`](BaseWrapper.md#create)

***

### validateConfig()

```ts
static validateConfig(_config): PromisableArray<Error>;
```

### Parameters

#### \_config

`unknown`

### Returns

`PromisableArray`\<`Error`\>

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`validateConfig`](BaseWrapper.md#validateconfig)

***

### validateValue()

```ts
static validateValue(_value): PromisableArray<Error>;
```

### Parameters

#### \_value

`unknown`

### Returns

`PromisableArray`\<`Error`\>

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`validateValue`](BaseWrapper.md#validatevalue)

***

### validate()

```ts
validate(): PromisableArray<Error>;
```

### Returns

`PromisableArray`\<`Error`\>

### Inherited from

[`BaseWrapper`](#BaseWrapper).[`validate`](BaseWrapper.md#validate)

  ### <a id="FeesWrapper"></a>FeesWrapper

[**@xyo-network/xl1-wrappers**](#../README)

***

## Implements

- `TransactionFeesInstance`

## Constructors

### Constructor

```ts
new FeesWrapper(__namedParameters): FeesWrapper;
```

### Parameters

#### \_\_namedParameters

`TransactionFeesHex` | `TransactionFeesBigInt`

### Returns

`FeesWrapper`

## Properties

### base

```ts
base: AttoXL1;
```

### Implementation of

```ts
TransactionFeesInstance.base
```

***

### gasLimit

```ts
gasLimit: AttoXL1;
```

### Implementation of

```ts
TransactionFeesInstance.gasLimit
```

***

### gasPrice

```ts
gasPrice: AttoXL1;
```

### Implementation of

```ts
TransactionFeesInstance.gasPrice
```

***

### priority

```ts
priority: AttoXL1;
```

### Implementation of

```ts
TransactionFeesInstance.priority
```

## Methods

### validate()

```ts
static validate(__namedParameters): Promisable<Error[]>;
```

### Parameters

#### \_\_namedParameters

`TransactionFeesHex` | `TransactionFeesBigInt`

### Returns

`Promisable`\<`Error`[]\>

***

### validate()

```ts
validate(): Promise<Error[]>;
```

### Returns

`Promise`\<`Error`[]\>

### Implementation of

```ts
TransactionFeesInstance.validate
```

  ### <a id="HydratedTransactionWrapper"></a>HydratedTransactionWrapper

[**@xyo-network/xl1-wrappers**](#../README)

***

## Type Parameters

### T

`T` *extends* `HydratedTransactionWithStorageMeta`

## Implements

- `HydratedTransactionInstance`\<\[`T`\[`0`\], `T`\[`1`\]\[`number`\][]\]\>

## Constructors

### Constructor

```ts
protected new HydratedTransactionWrapper<T>(data): HydratedTransactionWrapper<T>;
```

### Parameters

#### data

`T`

### Returns

`HydratedTransactionWrapper`\<`T`\>

## Properties

### data

```ts
data: T;
```

### Implementation of

```ts
HydratedTransactionInstance.data
```

***

### fees

```ts
fees: TransactionFeesInstance;
```

### Implementation of

```ts
HydratedTransactionInstance.fees
```

***

### payloadsCache

```ts
protected payloadsCache: WithStorageMeta<Payload>[] = [];
```

## Accessors

### boundWitness

### Get Signature

```ts
get boundWitness(): T[0];
```

#### Returns

`T`\[`0`\]

### Implementation of

```ts
HydratedTransactionInstance.boundWitness
```

***

### elevatedPayloadCount

### Get Signature

```ts
get elevatedPayloadCount(): number;
```

#### Returns

`number`

### Implementation of

```ts
HydratedTransactionInstance.elevatedPayloadCount
```

***

### elevatedPayloads

### Get Signature

```ts
get elevatedPayloads(): WithStorageMeta<AllowedBlockPayload>[];
```

#### Returns

`WithStorageMeta`\<`AllowedBlockPayload`\>[]

### Implementation of

```ts
HydratedTransactionInstance.elevatedPayloads
```

***

### externalPayloads

### Get Signature

```ts
get externalPayloads(): Record<Hash, Schema | Payload>;
```

#### Returns

`Record`\<`Hash`, `Schema` \| `Payload`\>

### Implementation of

```ts
HydratedTransactionInstance.externalPayloads
```

***

### from

### Get Signature

```ts
get from(): Address;
```

#### Returns

`Address`

***

### payloadCount

### Get Signature

```ts
get payloadCount(): number;
```

#### Returns

`number`

### Implementation of

```ts
HydratedTransactionInstance.payloadCount
```

***

### payloads

### Get Signature

```ts
get payloads(): WithHashMeta<WithStorageMeta<T[1][number]>>[];
```

#### Returns

`WithHashMeta`\<`WithStorageMeta`\<`T`\[`1`\]\[`number`\]\>\>[]

### Implementation of

```ts
HydratedTransactionInstance.payloads
```

***

### privateExternalPayloads

### Get Signature

```ts
get privateExternalPayloads(): Record<Hash, Schema>;
```

#### Returns

`Record`\<`Hash`, `Schema`\>

### Implementation of

```ts
HydratedTransactionInstance.privateExternalPayloads
```

***

### publicExternalPayloads

### Get Signature

```ts
get publicExternalPayloads(): Payload[];
```

#### Returns

`Payload`[]

### Implementation of

```ts
HydratedTransactionInstance.publicExternalPayloads
```

***

### signatureCount

### Get Signature

```ts
get signatureCount(): number;
```

#### Returns

`number`

### Implementation of

```ts
HydratedTransactionInstance.signatureCount
```

***

### signatures

### Get Signature

```ts
get signatures(): SignatureInstance[];
```

#### Returns

`SignatureInstance`[]

### Implementation of

```ts
HydratedTransactionInstance.signatures
```

## Methods

### parse()

```ts
static parse<T>(transaction, validate): Promise<HydratedTransactionInstance<[T[0], T[1][number][]], AllowedBlockPayload>>;
```

### Type Parameters

#### T

`T` *extends* `HydratedTransactionWithStorageMeta`

### Parameters

#### transaction

`T`

#### validate

`boolean` = `false`

### Returns

`Promise`\<`HydratedTransactionInstance`\<\[`T`\[`0`\], `T`\[`1`\]\[`number`\][]\], `AllowedBlockPayload`\>\>

***

### elevatedPayload()

```ts
elevatedPayload(index): WithHashMeta<AllowedBlockPayload & T[1][number]> | undefined;
```

### Parameters

#### index

`number`

### Returns

`WithHashMeta`\<AllowedBlockPayload & T\[1\]\[number\]\> \| `undefined`

### Implementation of

```ts
HydratedTransactionInstance.elevatedPayload
```

***

### gasRequired()

```ts
gasRequired(): bigint;
```

### Returns

`bigint`

***

### payload()

```ts
payload(index): WithStorageMeta<Payload> | undefined;
```

### Parameters

#### index

`number`

### Returns

`WithStorageMeta`\<`Payload`\> \| `undefined`

### Implementation of

```ts
HydratedTransactionInstance.payload
```

***

### reward()

```ts
reward(): bigint;
```

### Returns

`bigint`

### Implementation of

```ts
HydratedTransactionInstance.reward
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

`SignatureInstance` \| `undefined`

### Implementation of

```ts
HydratedTransactionInstance.signature
```

***

### validate()

```ts
validate(): Promise<Error[]>;
```

### Returns

`Promise`\<`Error`[]\>

### Implementation of

```ts
HydratedTransactionInstance.validate
```

***

### parse()

```ts
protected parse(validate): Promise<HydratedTransactionInstance<[WithHashMeta<T[0]>, WithHashMeta<T[1][number]>[]], AllowedBlockPayload>>;
```

### Parameters

#### validate

`boolean` = `false`

### Returns

`Promise`\<`HydratedTransactionInstance`\<\[`WithHashMeta`\<`T`\[`0`\]\>, `WithHashMeta`\<`T`\[`1`\]\[`number`\]\>[]\], `AllowedBlockPayload`\>\>

  ### <a id="SignatureWrapper"></a>SignatureWrapper

[**@xyo-network/xl1-wrappers**](#../README)

***

## Implements

- `SignatureInstance`

## Constructors

### Constructor

```ts
new SignatureWrapper(
   signature, 
   address, 
   hash): SignatureWrapper;
```

### Parameters

#### signature

`Hex`

#### address

`Address`

#### hash

`Hash`

### Returns

`SignatureWrapper`

## Properties

### address

```ts
address: Address;
```

### Implementation of

```ts
SignatureInstance.address
```

***

### hash

```ts
hash: Hash;
```

### Implementation of

```ts
SignatureInstance.hash
```

***

### signature

```ts
signature: Hex;
```

### Implementation of

```ts
SignatureInstance.signature
```

## Methods

### validate()

```ts
static validate(
   hash, 
   address, 
signature): Promise<Error[]>;
```

### Parameters

#### hash

`Hash`

#### address

`Address`

#### signature

`Hex`

### Returns

`Promise`\<`Error`[]\>

***

### validate()

```ts
validate(): Promise<Error[]>;
```

### Returns

`Promise`\<`Error`[]\>

### Implementation of

```ts
SignatureInstance.validate
```

### functions

  ### <a id="createSignatureWrappers"></a>createSignatureWrappers

[**@xyo-network/xl1-wrappers**](#../README)

***

```ts
function createSignatureWrappers(bw): Promise<SignatureInstance[]>;
```

## Parameters

### bw

`BoundWitness`

## Returns

`Promise`\<`SignatureInstance`[]\>

### interfaces

  ### <a id="BaseWrapperConfig"></a>BaseWrapperConfig

[**@xyo-network/xl1-wrappers**](#../README)

***

## Type Parameters

### T

`T`

## Properties

### provider

```ts
provider: XyoConnection;
```

***

### value

```ts
value: T;
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

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/xl1-wrappers.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/xl1-wrappers

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/xl1-wrappers
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/xl1-wrappers

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/xl1-wrappers/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/xl1-wrappers

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/xl1-wrappers
[socket-link]: https://socket.dev/npm/package/@xyo-network/xl1-wrappers