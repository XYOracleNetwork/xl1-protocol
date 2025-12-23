# @xyo-network/xl1-network-model

[![logo][]](https://xyo.network)

[![npm-badge][]][npm-link]
[![npm-downloads-badge][]][npm-link]
[![jsdelivr-badge][]][jsdelivr-link]
[![npm-license-badge][]](LICENSE)
[![socket-badge][]][socket-link]

XYO Layer One API



## Reference

**@xyo-network/xl1-network-model**

***

## Interfaces

- [ChainConnection](#interfaces/ChainConnection)
- [ChainForkFields](#interfaces/ChainForkFields)
- [NetworkFields](#interfaces/NetworkFields)
- [NetworkBootstrapFields](#interfaces/NetworkBootstrapFields)
- [Network](#interfaces/Network)

## Type Aliases

- [NetworkBootstrapSchema](#type-aliases/NetworkBootstrapSchema)
- [NetworkBootstrap](#type-aliases/NetworkBootstrap)

## Variables

- [LocalNetworkIconString](#variables/LocalNetworkIconString)
- [MainNetwork](#variables/MainNetwork)
- [SequenceNetwork](#variables/SequenceNetwork)
- [LocalNetwork](#variables/LocalNetwork)
- [DefaultNetworks](#variables/DefaultNetworks)
- [NetworkBootstrapSchema](#variables/NetworkBootstrapSchema)
- [isNetworkBootstrap](#variables/isNetworkBootstrap)
- [asOptionalNetwork](#variables/asOptionalNetwork)

## Functions

- [getNetworkNode](#functions/getNetworkNode)
- [getNetworkNodes](#functions/getNetworkNodes)
- [initNetworkNode](#functions/initNetworkNode)

## References

### MainNetworkIconString

Renames and re-exports [LocalNetworkIconString](#variables/LocalNetworkIconString)

***

### SequenceNetworkIconString

Renames and re-exports [LocalNetworkIconString](#variables/LocalNetworkIconString)

### functions

  ### <a id="getNetworkNode"></a>getNetworkNode

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
function getNetworkNode(): Promise<MemoryNode<MemoryNodeParams, NodeModuleEventData>>;
```

## Returns

`Promise`\<`MemoryNode`\<`MemoryNodeParams`, `NodeModuleEventData`\>\>

  ### <a id="getNetworkNodes"></a>getNetworkNodes

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
function getNetworkNodes(): Map<string, AttachableNodeInstance<NodeParams<AnyConfigSchema<NodeConfig>>, NodeModuleEventData>>;
```

## Returns

`Map`\<`string`, `AttachableNodeInstance`\<`NodeParams`\<`AnyConfigSchema`\<`NodeConfig`\>\>, `NodeModuleEventData`\>\>

  ### <a id="initNetworkNode"></a>initNetworkNode

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
function initNetworkNode(activeNetwork): Promise<AttachableNodeInstance<NodeParams<AnyConfigSchema<NodeConfig>>, NodeModuleEventData>>;
```

## Parameters

### activeNetwork

[`NetworkBootstrap`](#../type-aliases/NetworkBootstrap)

## Returns

`Promise`\<`AttachableNodeInstance`\<`NodeParams`\<`AnyConfigSchema`\<`NodeConfig`\>\>, `NodeModuleEventData`\>\>

### interfaces

  ### <a id="ChainConnection"></a>ChainConnection

[**@xyo-network/xl1-network-model**](#../README)

***

## Extended by

- [`NetworkBootstrapFields`](#NetworkBootstrapFields)

## Properties

### chain?

```ts
optional chain: ChainId;
```

Chain Identifier - can be a hex (eth contract address) or a string

***

### name

```ts
name: string;
```

Name of the chain

***

### url

```ts
url: string;
```

Url for accessing the network

  ### <a id="ChainForkFields"></a>ChainForkFields

[**@xyo-network/xl1-network-model**](#../README)

***

## Extended by

- [`NetworkBootstrapFields`](#NetworkBootstrapFields)

## Properties

### forkedAtLastBlockNumber?

```ts
optional forkedAtLastBlockNumber: string;
```

Block Number at which the chain was forked from

***

### forkedAtLastHash?

```ts
optional forkedAtLastHash: string;
```

Hash in the last block the chain was forked from

***

### forkedChainId?

```ts
optional forkedChainId: Address;
```

Address of the forked chain

  ### <a id="Network"></a>Network

[**@xyo-network/xl1-network-model**](#../README)

***

## Extends

- [`NetworkBootstrap`](#../type-aliases/NetworkBootstrap)

## Properties

### chain?

```ts
optional chain: ChainId;
```

Chain Identifier - can be a hex (eth contract address) or a string

### Inherited from

[`ChainConnection`](#ChainConnection).[`chain`](ChainConnection.md#chain)

***

### name

```ts
name: string;
```

Name of the chain

### Inherited from

[`ChainConnection`](#ChainConnection).[`name`](ChainConnection.md#name)

***

### url

```ts
url: string;
```

Url for accessing the network

### Inherited from

[`ChainConnection`](#ChainConnection).[`url`](ChainConnection.md#url)

***

### forkedAtLastBlockNumber?

```ts
optional forkedAtLastBlockNumber: string;
```

Block Number at which the chain was forked from

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedAtLastBlockNumber`](ChainForkFields.md#forkedatlastblocknumber)

***

### forkedAtLastHash?

```ts
optional forkedAtLastHash: string;
```

Hash in the last block the chain was forked from

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedAtLastHash`](ChainForkFields.md#forkedatlasthash)

***

### forkedChainId?

```ts
optional forkedChainId: Address;
```

Address of the forked chain

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedChainId`](ChainForkFields.md#forkedchainid)

***

### description

```ts
description: string;
```

Description of the network

### Inherited from

[`NetworkFields`](#NetworkFields).[`description`](NetworkFields.md#description)

***

### explorerUrl?

```ts
optional explorerUrl: string;
```

Url for accessing the network explorer

### Inherited from

[`NetworkFields`](#NetworkFields).[`explorerUrl`](NetworkFields.md#explorerurl)

***

### icon?

```ts
optional icon: string;
```

string representation of the icon (svg)

### Inherited from

[`NetworkFields`](#NetworkFields).[`icon`](NetworkFields.md#icon)

***

### id

```ts
id: DefaultNetworkIds;
```

Machine-readable identifier

### Inherited from

[`NetworkFields`](#NetworkFields).[`id`](NetworkFields.md#id)

***

### symbol?

```ts
optional symbol: string;
```

Symbol of the network

### Inherited from

[`NetworkFields`](#NetworkFields).[`symbol`](NetworkFields.md#symbol)

***

### custom

```ts
custom: boolean;
```

  ### <a id="NetworkBootstrapFields"></a>NetworkBootstrapFields

[**@xyo-network/xl1-network-model**](#../README)

***

Note: Optional Properties can be found walking the chain to the genesis block

## Extends

- [`NetworkFields`](#NetworkFields).[`ChainForkFields`](#ChainForkFields).[`ChainConnection`](#ChainConnection)

## Properties

### chain?

```ts
optional chain: ChainId;
```

Chain Identifier - can be a hex (eth contract address) or a string

### Inherited from

[`ChainConnection`](#ChainConnection).[`chain`](ChainConnection.md#chain)

***

### name

```ts
name: string;
```

Name of the chain

### Inherited from

[`ChainConnection`](#ChainConnection).[`name`](ChainConnection.md#name)

***

### url

```ts
url: string;
```

Url for accessing the network

### Inherited from

[`ChainConnection`](#ChainConnection).[`url`](ChainConnection.md#url)

***

### forkedAtLastBlockNumber?

```ts
optional forkedAtLastBlockNumber: string;
```

Block Number at which the chain was forked from

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedAtLastBlockNumber`](ChainForkFields.md#forkedatlastblocknumber)

***

### forkedAtLastHash?

```ts
optional forkedAtLastHash: string;
```

Hash in the last block the chain was forked from

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedAtLastHash`](ChainForkFields.md#forkedatlasthash)

***

### forkedChainId?

```ts
optional forkedChainId: Address;
```

Address of the forked chain

### Inherited from

[`ChainForkFields`](#ChainForkFields).[`forkedChainId`](ChainForkFields.md#forkedchainid)

***

### description

```ts
description: string;
```

Description of the network

### Inherited from

[`NetworkFields`](#NetworkFields).[`description`](NetworkFields.md#description)

***

### explorerUrl?

```ts
optional explorerUrl: string;
```

Url for accessing the network explorer

### Inherited from

[`NetworkFields`](#NetworkFields).[`explorerUrl`](NetworkFields.md#explorerurl)

***

### icon?

```ts
optional icon: string;
```

string representation of the icon (svg)

### Inherited from

[`NetworkFields`](#NetworkFields).[`icon`](NetworkFields.md#icon)

***

### id

```ts
id: DefaultNetworkIds;
```

Machine-readable identifier

### Inherited from

[`NetworkFields`](#NetworkFields).[`id`](NetworkFields.md#id)

***

### schema

```ts
schema: "network.xyo.network.bootstrap";
```

### Inherited from

[`NetworkFields`](#NetworkFields).[`schema`](NetworkFields.md#schema)

***

### symbol?

```ts
optional symbol: string;
```

Symbol of the network

### Inherited from

[`NetworkFields`](#NetworkFields).[`symbol`](NetworkFields.md#symbol)

  ### <a id="NetworkFields"></a>NetworkFields

[**@xyo-network/xl1-network-model**](#../README)

***

## Extended by

- [`NetworkBootstrapFields`](#NetworkBootstrapFields)

## Properties

### description

```ts
description: string;
```

Description of the network

***

### explorerUrl?

```ts
optional explorerUrl: string;
```

Url for accessing the network explorer

***

### icon?

```ts
optional icon: string;
```

string representation of the icon (svg)

***

### id

```ts
id: DefaultNetworkIds;
```

Machine-readable identifier

***

### schema

```ts
schema: "network.xyo.network.bootstrap";
```

***

### symbol?

```ts
optional symbol: string;
```

Symbol of the network

### type-aliases

  ### <a id="NetworkBootstrap"></a>NetworkBootstrap

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
type NetworkBootstrap = Payload<NetworkBootstrapFields, NetworkBootstrapSchema>;
```

  ### <a id="NetworkBootstrapSchema"></a>NetworkBootstrapSchema

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
type NetworkBootstrapSchema = typeof NetworkBootstrapSchema;
```

### variables

  ### <a id="DefaultNetworks"></a>DefaultNetworks

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const DefaultNetworks: NetworkBootstrap[];
```

  ### <a id="LocalNetwork"></a>LocalNetwork

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const LocalNetwork: NetworkBootstrap;
```

  ### <a id="LocalNetworkIconString"></a>LocalNetworkIconString

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const LocalNetworkIconString: string;
```

  ### <a id="MainNetwork"></a>MainNetwork

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const MainNetwork: NetworkBootstrap;
```

  ### <a id="NetworkBootstrapSchema"></a>NetworkBootstrapSchema

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const NetworkBootstrapSchema: "network.xyo.network.bootstrap";
```

  ### <a id="SequenceNetwork"></a>SequenceNetwork

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const SequenceNetwork: NetworkBootstrap;
```

  ### <a id="asOptionalNetwork"></a>asOptionalNetwork

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const asOptionalNetwork: (value) => NetworkBootstrap | undefined;
```

## Parameters

### value

`AnyNonPromise`

## Returns

[`NetworkBootstrap`](#../type-aliases/NetworkBootstrap) \| `undefined`

  ### <a id="isNetworkBootstrap"></a>isNetworkBootstrap

[**@xyo-network/xl1-network-model**](#../README)

***

```ts
const isNetworkBootstrap: (x?) => x is NetworkBootstrap;
```

## Parameters

### x?

`unknown`

## Returns

`x is NetworkBootstrap`


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

[npm-badge]: https://img.shields.io/npm/v/@xyo-network/xl1-network-model.svg
[npm-link]: https://www.npmjs.com/package/@xyo-network/xl1-network-model

[npm-downloads-badge]: https://img.shields.io/npm/dw/@xyo-network/xl1-network-model
[npm-license-badge]: https://img.shields.io/npm/l/@xyo-network/xl1-network-model

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@xyo-network/xl1-network-model/badge
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/@xyo-network/xl1-network-model

[socket-badge]: https://socket.dev/api/badge/npm/package/@xyo-network/xl1-network-model
[socket-link]: https://socket.dev/npm/package/@xyo-network/xl1-network-model