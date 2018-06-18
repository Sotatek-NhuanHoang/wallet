import Api from './api';
import { Urls } from '../configs';


const MasterApi = {
    get() {
        return Api.get(Urls.MASTER_DATA_ENDPOINT);
    },
};

export default MasterApi;
