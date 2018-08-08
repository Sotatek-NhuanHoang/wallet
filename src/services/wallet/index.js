import BtcService from './btc';
import validate, { bitcoinPrivateKeyConstraint, ethPrivateKeyConstraint } from 'utils/validate';


export const WalletService = {};


WalletService.validatePrivateKey = (coin, privateKey) => {
    let error = null;
    let validationResult = null;

    switch (coin.toLowerCase()) {
        case 'btc':
            validationResult = validate({ privateKey }, { privateKey: bitcoinPrivateKeyConstraint });
            break;

        case 'eth':
        case 'drc':
            validationResult = validate({ privateKey }, { privateKey: ethPrivateKeyConstraint });
            break;
    }

    if (validationResult) {
        error = validationResult[0].error;
    }

    return { error, };
};


WalletService.generateWallet = (coin) => {
    switch (coin.toLowerCase()) {
        case 'btc':
            return BtcService.generateWallet();
    }
};


WalletService.importWalletFromPrivateKey = (coin, privateKey) => {
    switch (coin.toLowerCase()) {
        case 'btc':
            return BtcService.importWalletFromPrivateKey(privateKey);
    }
};


export default WalletService;
