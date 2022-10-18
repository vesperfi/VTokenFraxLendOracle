import Address from './address'

// Note: See `contracts/libraries/DataTypes.sol`
enum Provider {
  NONE = 0,
  CHAINLINK = 1,
  UNISWAP_V3 = 2,
  UNISWAP_V2 = 3,
  SUSHISWAP = 4,
  TRADERJOE = 5,
  PANGOLIN = 6,
  QUICKSWAP = 7,
  UMBRELLA_FIRST_CLASS = 8,
  UMBRELLA_PASSPORT = 9,
  FLUX = 10,
}

// Note: See `contracts/libraries/DataTypes.sol`
enum ExchangeType {
  UNISWAP_V2 = 0,
  SUSHISWAP = 1,
  TRADERJOE = 2,
  PANGOLIN = 3,
  QUICKSWAP = 4,
  UNISWAP_V3 = 5,
}

// Note: See `contracts/libraries/DataTypes.sol`
enum SwapType {
  EXACT_INPUT = 0,
  EXACT_OUTPUT = 1,
}

const InitCodeHash = {
  [Address.mainnet.UNISWAP_V2_FACTORY_ADDRESS]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [Address.mainnet.SUSHISWAP_FACTORY_ADDRESS]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}

export {Address, Provider, ExchangeType, SwapType, InitCodeHash}
