import bitcore from 'bitcore-lib';

const { PrivateKey } = bitcore;


export const BtcService = {};


BtcService.generateWallet = (coin) => {
    const privateKey = new PrivateKey();
    const address = privateKey.toAddress();
    const keyStore = privateKey.toPublicKey();

    return {
        address: address.toString(),
        keyStore: keyStore.toString(),
        privateKey: privateKey.toString(),
    };
};


export default BtcService;
