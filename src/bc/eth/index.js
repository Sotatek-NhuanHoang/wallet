import Web3 from 'web3';

import { ETH_NETWORKS } from '@constants'
import { BLOCKCHAIN_NETWORK } from 'configs';
import mainnetConfig from 'configs/eth/mainnet';
import rinkebyConfig from 'configs/eth/rinkeby';

const web3 = new Web3();


export function getERCTokensSync () {
  let networkConfig;
  switch (BLOCKCHAIN_NETWORK.ETH) {
    case ETH_NETWORKS.MAINNET:
      networkConfig = mainnetConfig;
      break;
    case ETH_NETWORKS.RINKEBY:
      networkConfig = rinkebyConfig;
      break;
  }

  if (!networkConfig) {
    return [];
  }

  return networkConfig.tokens;
};

export function createNewAccountSync(passphrase) {
  // Fake network status
  // TODO: implement me
  if (typeof passphrase !== 'string' || !passphrase.length) {
    console.warn(`Passphrase must be a string. Your input: ${passphrase}`);
    return null;
  }


  return web3.eth.accounts.create(passphrase);
}

export function privateKeyToAccountSync(privateKey) {
  return web3.eth.accounts.privateKeyToAccount(privateKey);
}

export function dumpPrivateKeySync (keystore, password) {
  // Fake network status
  // TODO: implement me
  return 'SAMPLE_DUMP_ETH_PRIVATE_KEY';
};
