# @xyo-network/xl1-validation

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One SDK Validation



## Reference

**@xyo-network/xl1-validation**

***

## Type Aliases

- [ValidateTransactionContext](#type-aliases/ValidateTransactionContext)
- [SignerValidator](#type-aliases/SignerValidator)
- [SignerMapping](#type-aliases/SignerMapping)

## Variables

- [BoundWitnessSignaturesValidator](#variables/BoundWitnessSignaturesValidator)
- [TransactionDurationValidator](#variables/TransactionDurationValidator)
- [TransactionElevationValidator](#variables/TransactionElevationValidator)
- [TransactionFromValidator](#variables/TransactionFromValidator)
- [TransactionGasValidator](#variables/TransactionGasValidator)
- [TransactionJsonSchemaValidator](#variables/TransactionJsonSchemaValidator)
- [TransactionProtocolValidator](#variables/TransactionProtocolValidator)
- [SelfSignerValidator](#variables/SelfSignerValidator)

## Functions

- [BoundWitnessReferencesValidator](#functions/BoundWitnessReferencesValidator)
- [validateTransaction](#functions/validateTransaction)
- [CompletedStepRewardAddressValidatorFactory](#functions/CompletedStepRewardAddressValidatorFactory)
- [DerivedReceiveAddressValidatorFactory](#functions/DerivedReceiveAddressValidatorFactory)
- [TransactionTransfersValidatorFactory](#functions/TransactionTransfersValidatorFactory)

### functions

  ### <a id="BoundWitnessReferencesValidator"></a>BoundWitnessReferencesValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
function BoundWitnessReferencesValidator<T>(allowedSchemas?): HydratedBoundWitnessValidationFunction<T>;
```

## Type Parameters

### T

`T` *extends* `BoundWitness` = `BoundWitness`

## Parameters

### allowedSchemas?

`string`[]

## Returns

`HydratedBoundWitnessValidationFunction`\<`T`\>

  ### <a id="CompletedStepRewardAddressValidatorFactory"></a>CompletedStepRewardAddressValidatorFactory

[**@xyo-network/xl1-validation**](#../README)

***

```ts
function CompletedStepRewardAddressValidatorFactory(allowedSigners): SignerValidator;
```

## Parameters

### allowedSigners

`Address`[]

## Returns

[`SignerValidator`](#../type-aliases/SignerValidator)

  ### <a id="DerivedReceiveAddressValidatorFactory"></a>DerivedReceiveAddressValidatorFactory

[**@xyo-network/xl1-validation**](#../README)

***

```ts
function DerivedReceiveAddressValidatorFactory(allowedSigners, allowedScope): SignerValidator;
```

## Parameters

### allowedSigners

`Address`[]

### allowedScope

`string`

## Returns

[`SignerValidator`](#../type-aliases/SignerValidator)

  ### <a id="TransactionTransfersValidatorFactory"></a>TransactionTransfersValidatorFactory

[**@xyo-network/xl1-validation**](#../README)

***

```ts
function TransactionTransfersValidatorFactory(signerValidators): HydratedTransactionValidationFunction<TransactionBoundWitness, {
  step?: {
  };
}>;
```

## Parameters

### signerValidators

[`SignerValidator`](#../type-aliases/SignerValidator)[] = `...`

## Returns

`HydratedTransactionValidationFunction`\<`TransactionBoundWitness`, \{
  `step?`: \{
  \};
\}\>

  ### <a id="validateTransaction"></a>validateTransaction

[**@xyo-network/xl1-validation**](#../README)

***

```ts
function validateTransaction(
   tx, 
   context?, 
additionalValidators?): Promise<Error[]>;
```

## Parameters

### tx

`SignedHydratedTransactionWithStorageMeta`

### context?

[`ValidateTransactionContext`](#../type-aliases/ValidateTransactionContext)

### additionalValidators?

`HydratedTransactionValidationFunction`[] = `[]`

## Returns

`Promise`\<`Error`[]\>

### type-aliases

  ### <a id="SignerMapping"></a>SignerMapping

[**@xyo-network/xl1-validation**](#../README)

***

```ts
type SignerMapping = Map<Address, Address[]>;
```

  ### <a id="SignerValidator"></a>SignerValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
type SignerValidator = (signer, signee, context?) => boolean;
```

## Parameters

### signer

`Address`

### signee

`Address`

### context?

### address?

`Address`

### scope?

`string`

### step?

`StepIdentity`

## Returns

`boolean`

  ### <a id="ValidateTransactionContext"></a>ValidateTransactionContext

[**@xyo-network/xl1-validation**](#../README)

***

```ts
type ValidateTransactionContext = object;
```

## Properties

### chainId?

```ts
optional chainId: ChainId;
```

***

### step?

```ts
optional step: StepIdentity;
```

### variables

  ### <a id="BoundWitnessSignaturesValidator"></a>BoundWitnessSignaturesValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const BoundWitnessSignaturesValidator: BoundWitnessValidationFunction;
```

  ### <a id="SelfSignerValidator"></a>SelfSignerValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const SelfSignerValidator: SignerValidator;
```

  ### <a id="TransactionDurationValidator"></a>TransactionDurationValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionDurationValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
```

  ### <a id="TransactionElevationValidator"></a>TransactionElevationValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionElevationValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
```

  ### <a id="TransactionFromValidator"></a>TransactionFromValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionFromValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
```

  ### <a id="TransactionGasValidator"></a>TransactionGasValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionGasValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
```

  ### <a id="TransactionJsonSchemaValidator"></a>TransactionJsonSchemaValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionJsonSchemaValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
```

  ### <a id="TransactionProtocolValidator"></a>TransactionProtocolValidator

[**@xyo-network/xl1-validation**](#../README)

***

```ts
const TransactionProtocolValidator: HydratedTransactionValidationFunction<TransactionBoundWitness>;
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

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/xl1-validation.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/xl1-validation

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/xl1-validation
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/xl1-validation

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/xl1-validation/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/xl1-validation

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/xl1-validation
[socket-link]: https://socket.dev/npm/package/@xyo-network/xl1-validation