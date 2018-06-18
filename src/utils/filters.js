import numeral from 'numeral';


export const currenyFormatFilter = (currency) => {
    return currency.toUpperCase();
};


export const coinPriceFormatFilter = (coinPrice) => {
    return numeral(coinPrice).format('0.[0000]');
};


export const marketVolumeFormatFilter = (coinPrice) => {
    return numeral(coinPrice).format('0.[0000]');
};
