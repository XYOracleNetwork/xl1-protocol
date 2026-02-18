/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  describe, expect, it,
} from 'vitest'

import { blockRate } from './blockRate.ts'

describe('blockRate', () => {
  it('calculates blocks per second correctly', () => {
    // 10 blocks produced over 1000 milliseconds => 10 blocks/second
    const start = [{ block: 100, $epoch: 0 }]
    const end = [{ block: 110, $epoch: 1000 }]

    const result = blockRate(start as any, end as any, 'seconds')

    expect(result.span).toEqual(10)
    expect(result.timeDifference).toEqual(1) // seconds
    expect(result.rateUnit).toEqual('seconds')
    expect(result.rate).toBeCloseTo(10)
    expect(result.timePerBlock).toBeCloseTo(0.1)
  })

  it('calculates blocks per millisecond correctly', () => {
    // 10 blocks produced over 1000 milliseconds => 0.01 blocks/millisecond
    const start = [{ block: 200, $epoch: 0 }]
    const end = [{ block: 210, $epoch: 1000 }]

    const result = blockRate(start as any, end as any, 'millis')

    expect(result.span).toEqual(10)
    expect(result.timeDifference).toEqual(1000) // milliseconds
    expect(result.rateUnit).toEqual('millis')
    expect(result.rate).toBeCloseTo(0.01)
    expect(result.timePerBlock).toBeCloseTo(100)
  })

  it('calculates blocks per minute correctly', () => {
    // 30 blocks produced over 60000 milliseconds => 30 blocks/minute
    const start = [{ block: 300, $epoch: 0 }]
    const end = [{ block: 330, $epoch: 60_000 }]

    const result = blockRate(start as any, end as any, 'minutes')

    expect(result.span).toEqual(30)
    expect(result.timeDifference).toEqual(1) // minutes
    expect(result.rateUnit).toEqual('minutes')
    expect(result.rate).toBeCloseTo(30)
    expect(result.timePerBlock).toBeCloseTo(1 / 30)
  })

  it('calculates blocks per minute with large epoch values', () => {
    // 30 blocks produced over 60000 milliseconds => 30 blocks/minute
    const start = [{
      schema: 'network.xyo.boundwitness',
      addresses: [
        '7bbf96a1eca9db6a170f7cc0851bd136830f8581',
      ],
      payload_hashes: [
        '0f1bf71185953a44337da7f0588ab2085bd117bafdacc46796c23d6e5189e6d1',
        '8f33c208189378949b58fd69405c77221bea6566a919c437045c74a45ce7eede',
        'd921a1146e13a8287c997eff07436c1cb40cd0eed0c03e466665c0e16c1e3582',
        'aa4d4d041d99dbc5f81b9aab9c40f62ab876bf037264b25ddc34b3b418fc8190',
        'b6128503f21eea72be0a535f357162abf18e206eae1a7e63aaf0162d705cf1a1',
        '81407fc6fc642e2e1c536f021bd542c709e014ddf7a5a190a706c498494fd951',
        'e25bc64d83bb33bb020e655da2ee9b34149525261b0817329a5c2da88cbb3e45',
        'e277ae4b71bba869f8697b5a85e3152e954ca35f9fae2b63dd5c3530c95fd3ac',
        '96be1b6a85eb596caf6511ef422e47ccd9a911d1372b071a2a0f2131d57e955f',
        '96be1b6a85eb596caf6511ef422e47ccd9a911d1372b071a2a0f2131d57e955f',
        'ec410b05cbbf2034947cb6e0182035f1a0e9e99f135acfda4ae8338026a66976',
        'ec410b05cbbf2034947cb6e0182035f1a0e9e99f135acfda4ae8338026a66976',
        'ec410b05cbbf2034947cb6e0182035f1a0e9e99f135acfda4ae8338026a66976',
        'ec410b05cbbf2034947cb6e0182035f1a0e9e99f135acfda4ae8338026a66976',
        'f959ced1d38884508981771ac771cb8b6273c797b3ec5b06922b1b7db7d1eab5',
      ],
      payload_schemas: [
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.chain.stake.intent',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.time',
      ],
      previous_hashes: [
        'a8e6cd6d55a22578380eff993d6dc69b5f7e83b87541ac1d56d6bb515924d85f',
      ],
      $signatures: [
        '56e728693ca9ca14b5b35eb510d70b4f0da2cd65a6bcd2461219e386089eb95b2a3dc0f11754e61536ba3b73beabb4a9b262558f28ec943823f85178a291e51e',
      ],
      block: 710_943,
      chain: '319e667ced10452a117472811130444ded357f26',
      previous: 'e2dc922445ee4c743b0ace41b966e9ba1fd866af942a97d3fb690ffad68a2098',
      protocol: 1_002_000,
      step_hashes: [
        'c15c33f8b804545292565924ae3cddbbd5a7cc8130fffd00e4321e8af4a1359d',
        'bc3d5d926e6e3ca07e606fd073d8a064b360a7dc6baea3b8418a9f4c6e6ba629',
        '932ac276b3ba7d7b42649342ac17394e0119a91d0be6d1d203979114861378dd',
        '3382bbd3cc4d26a4e4b749e3ad77d66817b22e0724ba0aeb445cc02a20f79330',
        '3ad2b8e4eddfb01b2697966357483140233570eae49bac6160cdc97f8dabe464',
        '6243a56e66d249688522670ac353a1824face30f049f68b037d022521a48f1e3',
      ],
      $epoch: 1_771_425_408_836,
      _hash: '145f2352c2265fe03d0824ad08b023b747caafc2e55276fee9b3a23e523888ab',
      _dataHash: '7be5311a49252cef143e300f11e98d7e4e384f4914978220db995af91d9486c8',
    }]
    const end = [{
      schema: 'network.xyo.boundwitness',
      addresses: [
        '7bbf96a1eca9db6a170f7cc0851bd136830f8581',
      ],
      payload_hashes: [
        'c21d83ff0493cab3876a7b67d204210f5c70b914c593af98475d0f739ca505ce',
        'def078b2fde9ea709c2a4e932a897fd791bc33345ce5d46195666f9bfb466396',
        'bdbee3a111cefef27e7463a370a3a9f64416e782ccdbfd30d7ff5c99b0490a14',
        '62595ce4c54fcca1e665ade3263babd38f6d9e8a69a352be5ab76a892de387be',
        'c17cd5aa322dc687ac96b3be44245630d3fa255f61b1c0183ef7e3a3c195ab2c',
        '9acc01935399703991513c2dc39173412e1ec934f10728b221108251cf6a030d',
        'eb44fa2b677a9ec527f8a69f0bfdb8f2c8eb4209847bacb0498cdaab59187781',
        'b10c4907f3c03b064864be3daa6b848be576265d7114f6fe0e1681603386fa31',
        'b55f92a2be431cfaab2fdfc6a6402be40bb632e60c819bee6d89ea20dced4ca6',
        'b55f92a2be431cfaab2fdfc6a6402be40bb632e60c819bee6d89ea20dced4ca6',
        'c2bfffae954e6aacaf62ccdca6394f202664dfe59a2544f14f967794301b9fcb',
        'c2bfffae954e6aacaf62ccdca6394f202664dfe59a2544f14f967794301b9fcb',
        'b55f92a2be431cfaab2fdfc6a6402be40bb632e60c819bee6d89ea20dced4ca6',
        'b55f92a2be431cfaab2fdfc6a6402be40bb632e60c819bee6d89ea20dced4ca6',
        '128737893f34e885d7fb7f13d02fe4d76bed5e48f0512bb6ec5a6fb8d2b522ec',
      ],
      payload_schemas: [
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.boundwitness',
        'network.xyo.chain.stake.intent',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.transfer',
        'network.xyo.time',
      ],
      previous_hashes: [
        'e2e591e3a8533f5391c0f932434b085c2395de02634214d984514888715f157c',
      ],
      $signatures: [
        '2656fd027f1bb77630cb677b5f43867f411fef9ed6d85a1df040f90c876ff05771b8f1bd3faad31300dcd3d17857fe2cccdbbfad627db6dba776aadd7c2c5b71',
      ],
      block: 710_958,
      chain: '319e667ced10452a117472811130444ded357f26',
      previous: '1e33dbaf5dbe3cf4a0765f050edc3d3fe86f700fa63c92f20f15c2dcc93829b0',
      protocol: 1_002_000,
      step_hashes: [
        'fe938b419f780e0423a61d333d0b7e604303fd3da56027f93d1ff23d8d09500d',
        '7a61cd9f08008750bcbc9a577150d804c4012e4035514da7f15d79e3e20ea6bb',
        '932ac276b3ba7d7b42649342ac17394e0119a91d0be6d1d203979114861378dd',
        '3382bbd3cc4d26a4e4b749e3ad77d66817b22e0724ba0aeb445cc02a20f79330',
        '3ad2b8e4eddfb01b2697966357483140233570eae49bac6160cdc97f8dabe464',
        '6243a56e66d249688522670ac353a1824face30f049f68b037d022521a48f1e3',
      ],
      $epoch: 1_771_425_988_267,
      _hash: 'af3e0e6a7ecbd59ff064872c1b904c03d71086ce290ac741e3b428344df064bb',
      _dataHash: '50742b2c32dd003bc83339ee83359783062121b7b326e0e1b2884fe8af625544',
    }]

    const result = blockRate(start as any, end as any, 'minutes')

    expect(result.span).toEqual(15)
    expect(result.timeDifference).toEqual(9.657_183_333_333_334) // minutes
    expect(result.rateUnit).toEqual('minutes')
    expect(result.rate).toBeCloseTo(1.553_247_927_708_389_7)
    expect(result.timePerBlock).toBeCloseTo(9.657_183_333_333_334 / 15)
  })

  it('throws when time difference is zero', () => {
    // 10 blocks produced with identical epochs => division by zero
    const start = [{ block: 400, $epoch: 1000 }]
    const end = [{ block: 410, $epoch: 1000 }]

    expect(() => blockRate(start as any, end as any, 'seconds')).toThrow('Time difference must be greater than 0')
  })

  it('calculates average milliseconds per block (time per block)', () => {
    // 10 blocks produced over 1000 milliseconds => 100 ms per block
    const start = [{ block: 500, $epoch: 0 }]
    const end = [{ block: 510, $epoch: 1000 }]

    const result = blockRate(start as any, end as any)

    expect(result.span).toEqual(10)
    // result.timeDifference is in millis when no timeUnit provided
    expect(result.timeDifference).toEqual(1000)
    expect(result.timePerBlock).toBeCloseTo(100)
  })
})
