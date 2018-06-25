import { AsyncStorage } from 'react-native';


const getKeyItem = (coin) => {
    return `address.${coin.toUpperCase()}`;
};


export const AddressStorage = {
    async getWallet(coin) {
        const key = getKeyItem(coin);
        const savedWallet = await AsyncStorage.getItem(key);

        if (!savedWallet) {
            return {};
        } else {
            return JSON.parse(savedWallet);
        }
    },

    saveWallet(coin, wallet) {
        const key = getKeyItem(coin);
        AsyncStorage.setItem(key, JSON.stringify(wallet));
    },
};


export default AddressStorage;