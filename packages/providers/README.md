# @xyo-network/chain-viewers

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One API



## Reference

**@xyo-network/chain-viewers**

***

## Classes

- [SimpleNetworkStakeViewer](#classes/SimpleNetworkStakeViewer)
- [SimpleStepRewardsByPositionViewer](#classes/SimpleStepRewardsByPositionViewer)
- [SimpleStepRewardsByStakerViewer](#classes/SimpleStepRewardsByStakerViewer)
- [SimpleStepRewardsByStepViewer](#classes/SimpleStepRewardsByStepViewer)
- [SimpleStepRewardsViewer](#classes/SimpleStepRewardsViewer)

## Interfaces

- [SimpleNetworkStakeViewerParams](#interfaces/SimpleNetworkStakeViewerParams)
- [SimpleStepRewardsByPositionViewerParams](#interfaces/SimpleStepRewardsByPositionViewerParams)
- [SimpleStepRewardsByStakerViewerParams](#interfaces/SimpleStepRewardsByStakerViewerParams)
- [SimpleStepRewardsByStepViewerParams](#interfaces/SimpleStepRewardsByStepViewerParams)
- [NodeStepRewardsViewerParams](#interfaces/NodeStepRewardsViewerParams)

### classes

  ### <a id="SimpleNetworkStakeViewer"></a>SimpleNetworkStakeViewer

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `AbstractCreatable`\<[`SimpleNetworkStakeViewerParams`](#../interfaces/SimpleNetworkStakeViewerParams)\>

## Implements

- `NetworkStakeViewer`

## Constructors

### Constructor

```ts
new SimpleNetworkStakeViewer(key, params): SimpleNetworkStakeViewer;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams` & `RequiredCreatableParams`\>

### Returns

`SimpleNetworkStakeViewer`

### Inherited from

```ts
AbstractCreatable<SimpleNetworkStakeViewerParams>.constructor
```

## Accessors

### context

### Get Signature

```ts
get context(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

***

### rewardMultipliers

### Get Signature

```ts
get rewardMultipliers(): XL1RangeMultipliers | undefined;
```

#### Returns

`XL1RangeMultipliers` \| `undefined`

***

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

***

### createHandler()

```ts
createHandler(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Overrides

```ts
AbstractCreatable.createHandler
```

***

### startHandler()

```ts
protected startHandler(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Overrides

```ts
AbstractCreatable.startHandler
```

  ### <a id="SimpleStepRewardsByPositionViewer"></a>SimpleStepRewardsByPositionViewer

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `AbstractCreatable`\<[`SimpleStepRewardsByPositionViewerParams`](#../interfaces/SimpleStepRewardsByPositionViewerParams)\>

## Implements

- `NetworkStakeStepRewardsByPositionViewer`

## Constructors

### Constructor

```ts
new SimpleStepRewardsByPositionViewer(key, params): SimpleStepRewardsByPositionViewer;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams` & `RequiredCreatableParams`\>

### Returns

`SimpleStepRewardsByPositionViewer`

### Inherited from

```ts
AbstractCreatable<SimpleStepRewardsByPositionViewerParams>.constructor
```

## Accessors

### context

### Get Signature

```ts
get context(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

***

### rewardMultipliers

### Get Signature

```ts
get rewardMultipliers(): XL1RangeMultipliers;
```

#### Returns

`XL1RangeMultipliers`

## Methods

### bonus()

```ts
bonus(__namedParameters): Promise<Record<number, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByPositionViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`number`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByPositionViewer.bonus
```

***

### claimed()

```ts
claimed(_options?): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### \_options?

`NetworkStakeStepRewardsByPositionViewerOptions`

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByPositionViewer.claimed
```

***

### earned()

```ts
earned(__namedParameters): Promise<Record<number, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByPositionViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`number`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByPositionViewer.earned
```

***

### total()

```ts
total(__namedParameters): Promise<Record<number, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByPositionViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`number`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByPositionViewer.total
```

***

### unclaimed()

```ts
unclaimed(_options): Promisable<Record<number, AttoXL1>>;
```

### Parameters

#### \_options

`NetworkStakeStepRewardsByPositionViewerOptions` = `{}`

### Returns

`Promisable`\<`Record`\<`number`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByPositionViewer.unclaimed
```

***

### calculateRewards()

```ts
protected calculateRewards(__namedParameters, rewardMultipliers?): Promise<Record<number, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByPositionViewerOptions` = `{}`

#### rewardMultipliers?

`XL1RangeMultipliers`

### Returns

`Promise`\<`Record`\<`number`, `AttoXL1`\>\>

  ### <a id="SimpleStepRewardsByStakerViewer"></a>SimpleStepRewardsByStakerViewer

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `AbstractCreatable`\<[`SimpleStepRewardsByStakerViewerParams`](#../interfaces/SimpleStepRewardsByStakerViewerParams)\>

## Implements

- `NetworkStakeStepRewardsByStakerViewer`

## Constructors

### Constructor

```ts
new SimpleStepRewardsByStakerViewer(key, params): SimpleStepRewardsByStakerViewer;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams` & `RequiredCreatableParams`\>

### Returns

`SimpleStepRewardsByStakerViewer`

### Inherited from

```ts
AbstractCreatable<SimpleStepRewardsByStakerViewerParams>.constructor
```

## Accessors

### context

### Get Signature

```ts
get context(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

***

### rewardMultipliers

### Get Signature

```ts
get rewardMultipliers(): XL1RangeMultipliers;
```

#### Returns

`XL1RangeMultipliers`

***

### stakedChainContext

### Get Signature

```ts
get stakedChainContext(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

## Methods

### bonus()

```ts
bonus(__namedParameters): Promise<Record<Address, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByStakerViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`Address`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStakerViewer.bonus
```

***

### claimed()

```ts
claimed(_options?): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### \_options?

`NetworkStakeStepRewardsByStakerViewerOptions`

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStakerViewer.claimed
```

***

### earned()

```ts
earned(options): Promise<Record<Address, AttoXL1>>;
```

### Parameters

#### options

`NetworkStakeStepRewardsByStakerViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`Address`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStakerViewer.earned
```

***

### total()

```ts
total(options): Promise<Record<Address, AttoXL1>>;
```

### Parameters

#### options

`NetworkStakeStepRewardsByStakerViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`Address`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStakerViewer.total
```

***

### unclaimed()

```ts
unclaimed(_options): Promisable<Record<Address, AttoXL1>>;
```

### Parameters

#### \_options

`NetworkStakeStepRewardsByStakerViewerOptions` = `{}`

### Returns

`Promisable`\<`Record`\<`Address`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStakerViewer.unclaimed
```

***

### calculateRewards()

```ts
protected calculateRewards(__namedParameters, rewardMultipliers?): Promise<Record<Address, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByStakerViewerOptions` = `{}`

#### rewardMultipliers?

`XL1RangeMultipliers`

### Returns

`Promise`\<`Record`\<`Address`, `AttoXL1`\>\>

  ### <a id="SimpleStepRewardsByStepViewer"></a>SimpleStepRewardsByStepViewer

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `AbstractCreatable`\<[`SimpleStepRewardsByStepViewerParams`](#../interfaces/SimpleStepRewardsByStepViewerParams)\>

## Implements

- `NetworkStakeStepRewardsByStepViewer`

## Constructors

### Constructor

```ts
new SimpleStepRewardsByStepViewer(key, params): SimpleStepRewardsByStepViewer;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams` & `RequiredCreatableParams`\>

### Returns

`SimpleStepRewardsByStepViewer`

### Inherited from

```ts
AbstractCreatable<SimpleStepRewardsByStepViewerParams>.constructor
```

## Accessors

### context

### Get Signature

```ts
get context(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

***

### rewardMultipliers

### Get Signature

```ts
get rewardMultipliers(): XL1RangeMultipliers;
```

#### Returns

`XL1RangeMultipliers`

## Methods

### bonus()

```ts
bonus(__namedParameters): Promise<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByStepViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStepViewer.bonus
```

***

### claimed()

```ts
claimed(_options?): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### \_options?

`NetworkStakeStepRewardsByStepViewerOptions`

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStepViewer.claimed
```

***

### earned()

```ts
earned(__namedParameters): Promise<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByStepViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStepViewer.earned
```

***

### total()

```ts
total(__namedParameters): Promise<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### \_\_namedParameters

`NetworkStakeStepRewardsByStepViewerOptions` = `{}`

### Returns

`Promise`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStepViewer.total
```

***

### unclaimed()

```ts
unclaimed(_options): Promisable<Record<StepIdentityString, AttoXL1>>;
```

### Parameters

#### \_options

`NetworkStakeStepRewardsByStepViewerOptions` = `{}`

### Returns

`Promisable`\<`Record`\<`StepIdentityString`, `AttoXL1`\>\>

### Implementation of

```ts
NetworkStakeStepRewardsByStepViewer.unclaimed
```

  ### <a id="SimpleStepRewardsViewer"></a>SimpleStepRewardsViewer

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `AbstractCreatable`\<[`NodeStepRewardsViewerParams`](#../interfaces/NodeStepRewardsViewerParams)\>

## Implements

- `NetworkStakeStepRewardsViewer`

## Constructors

### Constructor

```ts
new SimpleStepRewardsViewer(key, params): SimpleStepRewardsViewer;
```

### Parameters

#### key

`unknown`

#### params

`Partial`\<`TParams` & `RequiredCreatableParams`\>

### Returns

`SimpleStepRewardsViewer`

### Inherited from

```ts
AbstractCreatable<NodeStepRewardsViewerParams>.constructor
```

## Accessors

### position

### Get Signature

```ts
get position(): NetworkStakeStepRewardsByPositionViewer;
```

#### Returns

`NetworkStakeStepRewardsByPositionViewer`

### Implementation of

```ts
NetworkStakeStepRewardsViewer.position
```

***

### staker

### Get Signature

```ts
get staker(): NetworkStakeStepRewardsByStakerViewer;
```

#### Returns

`NetworkStakeStepRewardsByStakerViewer`

### Implementation of

```ts
NetworkStakeStepRewardsViewer.staker
```

***

### step

### Get Signature

```ts
get step(): NetworkStakeStepRewardsByStepViewer;
```

#### Returns

`NetworkStakeStepRewardsByStepViewer`

### Implementation of

```ts
NetworkStakeStepRewardsViewer.step
```

***

### total

### Get Signature

```ts
get total(): NetworkStakeStepRewardsTotalViewer;
```

#### Returns

`NetworkStakeStepRewardsTotalViewer`

### Implementation of

```ts
NetworkStakeStepRewardsViewer.total
```

***

### context

### Get Signature

```ts
get protected context(): StakedChainContextRead;
```

#### Returns

`StakedChainContextRead`

***

### rewardMultipliers

### Get Signature

```ts
get protected rewardMultipliers(): XL1RangeMultipliers | undefined;
```

#### Returns

`XL1RangeMultipliers` \| `undefined`

## Methods

### createHandler()

```ts
createHandler(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Overrides

```ts
AbstractCreatable.createHandler
```

***

### startHandler()

```ts
protected startHandler(): Promise<void>;
```

### Returns

`Promise`\<`void`\>

### Overrides

```ts
AbstractCreatable.startHandler
```

### interfaces

  ### <a id="NodeStepRewardsViewerParams"></a>NodeStepRewardsViewerParams

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `CreatableParams`

## Properties

### context

```ts
context: StakedChainContextRead;
```

***

### rewardMultipliers?

```ts
optional rewardMultipliers: XL1RangeMultipliers;
```

  ### <a id="SimpleNetworkStakeViewerParams"></a>SimpleNetworkStakeViewerParams

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `CreatableParams`

## Properties

### context

```ts
context: StakedChainContextRead;
```

***

### rewardMultipliers?

```ts
optional rewardMultipliers: XL1RangeMultipliers;
```

  ### <a id="SimpleStepRewardsByPositionViewerParams"></a>SimpleStepRewardsByPositionViewerParams

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `CreatableParams`

## Properties

### context

```ts
context: StakedChainContextRead;
```

***

### rewardMultipliers?

```ts
optional rewardMultipliers: XL1RangeMultipliers;
```

  ### <a id="SimpleStepRewardsByStakerViewerParams"></a>SimpleStepRewardsByStakerViewerParams

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `CreatableParams`

## Properties

### context

```ts
context: StakedChainContextRead;
```

***

### rewardMultipliers?

```ts
optional rewardMultipliers: XL1RangeMultipliers;
```

  ### <a id="SimpleStepRewardsByStepViewerParams"></a>SimpleStepRewardsByStepViewerParams

[**@xyo-network/chain-viewers**](#../README)

***

## Extends

- `CreatableParams`

## Properties

### context

```ts
context: StakedChainContextRead;
```

***

### rewardMultipliers?

```ts
optional rewardMultipliers: XL1RangeMultipliers;
```

***

### stakeEventsViewer

```ts
stakeEventsViewer: StakeEventsViewer;
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

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/chain-viewers.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/chain-viewers

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/chain-viewers
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/chain-viewers

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/chain-viewers/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/chain-viewers

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/chain-viewers
[socket-link]: https://socket.dev/npm/package/@xyo-network/chain-viewers