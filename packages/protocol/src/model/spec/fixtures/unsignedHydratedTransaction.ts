export const unsignedHydratedTransactionWithHashMeta = [
  {
    $signatures: [],
    addresses: [],
    chain: '944ac6a2ffc27ab773f34193e43f20ab7542b0ea',
    exp: 11,
    fees: {
      base: 'e8d4a51000',
      gasLimit: '038d7ea4c68000',
      gasPrice: '02540be400',
      priority: '00',
    },
    from: 'c5c9d2a8e8d0b0eba521aec623ffcb9e0982f513',
    nbf: 1,
    payload_hashes: [
      '01bbcd4c58fd88488882ba54e13e92603f13c34695eda64780502acc80c3fcc1',
      'ff127a824dc672ff5b7a32d2c7deffcdde3cc417ad112510532f24a2e948516a',
      '92693e6fefeed94eb80872ba9e2c86d7861fc84e4bc5b775ebe9966e68c26767',
      '85009387d332dffa781bbf6fa107715f36f9d6b3294c5cc8fd1ce8ada207d2bb',
    ],
    payload_schemas: [
      'network.xyo.hash',
      'network.xyo.hash',
      'network.xyo.id',
      'network.xyo.id',
    ],
    previous_hashes: [],
    schema: 'network.xyo.boundwitness',
    script: [
      'elevate|01bbcd4c58fd88488882ba54e13e92603f13c34695eda64780502acc80c3fcc1',
      'elevate|ff127a824dc672ff5b7a32d2c7deffcdde3cc417ad112510532f24a2e948516a',
    ],
    _dataHash: '214029ca586455e66fea02896c6d69739e400917c08e4e8ec1e9818c4a19bb17',
    _hash: '59aacdd66055a63e6a0686a33f155be5b6afca0630a9abfee7ae9e79f057eec8',
  },
  [
    {
      hash: '92693e6fefeed94eb80872ba9e2c86d7861fc84e4bc5b775ebe9966e68c26767',
      schema: 'network.xyo.hash',
      _dataHash: '01bbcd4c58fd88488882ba54e13e92603f13c34695eda64780502acc80c3fcc1',
      _hash: '01bbcd4c58fd88488882ba54e13e92603f13c34695eda64780502acc80c3fcc1',
    },
    {
      hash: '85009387d332dffa781bbf6fa107715f36f9d6b3294c5cc8fd1ce8ada207d2bb',
      schema: 'network.xyo.hash',
      _dataHash: 'ff127a824dc672ff5b7a32d2c7deffcdde3cc417ad112510532f24a2e948516a',
      _hash: 'ff127a824dc672ff5b7a32d2c7deffcdde3cc417ad112510532f24a2e948516a',
    },
    {
      salt: 'Hello from Sample 0 - 2026-01-15T22:41:36.587Z',
      schema: 'network.xyo.id',
      _dataHash: '92693e6fefeed94eb80872ba9e2c86d7861fc84e4bc5b775ebe9966e68c26767',
      _hash: '92693e6fefeed94eb80872ba9e2c86d7861fc84e4bc5b775ebe9966e68c26767',
    },
    {
      salt: 'Hello from Sample 1 - 2026-01-15T22:41:36.587Z',
      schema: 'network.xyo.id',
      _dataHash: '85009387d332dffa781bbf6fa107715f36f9d6b3294c5cc8fd1ce8ada207d2bb',
      _hash: '85009387d332dffa781bbf6fa107715f36f9d6b3294c5cc8fd1ce8ada207d2bb',
    },
  ],
]
