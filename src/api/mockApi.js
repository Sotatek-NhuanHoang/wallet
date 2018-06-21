import { getAllCoinsSync, getPrice, getBalance, sendCoin } from '@bc';
import {
    createNewAccountSync as createNewETHAccountSync,
    privateKeyToAccountSync as privateKeyToETHAccountSync
} from '@bc/eth';
import {
    createNewAccountSync as createNewBTCAccountSync,
    privateKeyToAccountSync as privateKeyToBTCAccountSync
} from '@bc/btc';


const MockApi = {
    getAllCoins: () => {
        return getAllCoinsSync();
    },

    getPrice: (coin) => {
        return getPrice(coin);
    },

    getBalance: (coin, address) => {
        return getBalance(coin, address);
    },

    createNewAccount: (coin, password) => {
        switch (coin.toUpperCase()) {
            case 'BTC':
                return createNewBTCAccountSync(password);

            case 'ETH':
                return createNewETHAccountSync(password);
        }
    },

    importPrivateKeyToAccount: (coin, privateKey) => {
        switch (coin.toUpperCase()) {
            case 'BTC':
                return privateKeyToBTCAccountSync(privateKey);

            case 'ETH':
                return privateKeyToETHAccountSync(privateKey);
        }
    },

    sendCoin,
};

export default MockApi;