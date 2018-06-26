import { PrivateKey } from 'bitcore-lib';


export function createNewAccountSync(passphrase) {
  // Fake network status
  // TODO: implement me
  if (typeof passphrase !== 'string' || !passphrase.length) {
    console.warn(`Passphrase must be a string. Your input: ${passphrase}`);
    return null;
  }

  const privateKey = new PrivateKey();
  const address = privateKey.toAddress();
  const keystore = privateKey.toPublicKey();

  return {
    address,
    keystore,
    privateKey: privateKey.toWIF(),
  };
}

export function privateKeyToAccountSync(userPrivateKey) {
  const privateKey = new PrivateKey(userPrivateKey);
  const address = privateKey.toAddress();
  const keystore = privateKey.toPublicKey();

  return {
    address,
    keystore,
    privateKey,
  };
}

export function dumpPrivateKeySync (keystore, password) {
  // Fake network status
  // TODO: implement me
  return 'SAMPLE_DUMP_BTC_PRIVATE_KEY';
};
