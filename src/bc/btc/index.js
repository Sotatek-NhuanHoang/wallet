export function createNewAccountSync(passphrase) {
  // Fake network status
  // TODO: implement me
  if (typeof passphrase !== 'string' || !passphrase.length) {
    console.warn(`Passphrase must be a string. Your input: ${passphrase}`);
    return null;
  }

  return {
    address: 'SAMPLE_BTC_ADDRESS',
    keystore: 'SAMPLE_BTC_KEYSTORE',
    privateKey: 'SAMPLE_BTC_PRIVATE_KEY'
  };
}

export function privateKeyToAccountSync(privateKey) {
  // Fake network status
  // TODO: implement me
  return {
    address: 'SAMPLE_BTC_ADDRESS_FROM_PK',
    keystore: 'SAMPLE_BTC_KEYSTORE_FROM_PK',
    privateKey: 'SAMPLE_BTC_PRIVATE_KEY_FROM_PK'
  };
}

export function dumpPrivateKeySync (keystore, password) {
  // Fake network status
  // TODO: implement me
  return 'SAMPLE_DUMP_BTC_PRIVATE_KEY';
};
