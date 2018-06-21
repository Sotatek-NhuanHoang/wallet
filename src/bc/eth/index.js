import { ETH_NETWORKS } from '@constants'
import { BLOCKCHAIN_NETWORK } from '@configs';
import mainnetConfig from '@configs/eth/mainnet';
import rinkebyConfig from '@configs/eth/rinkeby';

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

  return {
    address: 'SAMPLE_ETH_ADDRESS',
    keystore: 'SAMPLE_ETH_KEYSTORE',
    privateKey: 'SAMPLE_ETH_PRIVATE_KEY'
  };
}

export function privateKeyToAccountSync(privateKey) {
  // Fake network status
  // TODO: implement me
  return {
    address: 'SAMPLE_ETH_ADDRESS_FROM_PK',
    keystore: 'SAMPLE_ETH_KEYSTORE_FROM_PK',
    privateKey: 'SAMPLE_ETH_PRIVATE_KEY_FROM_PK'
  };
}

export function dumpPrivateKeySync (keystore, password) {
  // Fake network status
  // TODO: implement me
  return 'SAMPLE_DUMP_ETH_PRIVATE_KEY';
};
