import { BLOCKCHAIN_NETWORK } from '../configs';

export const ETH_NETWORKS = {
  MAINNET: 'mainnet',
  RINKEBY: 'rinkeby'
};

export const BTC_NETWORKS = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet'
};

export const COIN_TYPES = {
  COIN      : 'coin',
  ERC_TOKEN : 'erc_token'
};

export const COINS = [
  {
    symbol  : 'btc',
    name    : 'Bitcoin',
    cmcId   : 'bitcoin',
  },
  {
    symbol  : 'eth',
    name    : 'Ethereum',
    cmcId   : 'ethereum',
  }
];
