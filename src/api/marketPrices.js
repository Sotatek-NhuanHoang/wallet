import Api from './api';
import { Urls } from '../configs';


const MarketPricesApi = {
    get() {
        return Api.get(Urls.MARKET_PRICES_ENDPOINT);
    },
};

export default MarketPricesApi;
