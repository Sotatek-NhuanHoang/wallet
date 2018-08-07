import BtcService from './btc';


export const WalletService = {};


WalletService.generateWallet = (coin) => {
    switch (coin.toLowerCase()) {
        case 'btc':
            return BtcService.generateWallet();
    }
};


export default WalletService;
