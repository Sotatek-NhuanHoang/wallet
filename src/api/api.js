import { create } from 'apisauce';
import { Urls } from '../configs';


const baseApi = create({
    baseURL: Urls.BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Urls.ACCESS_TOKEN
    }
});

const Api = {
    async get(endpoint, params) {
        try {
            const response = await baseApi.get(endpoint, params);

            if (response.ok) {
                return response;
            } else {
                throw new Error(response.problem);
            }
        } catch (error) {
            throw error;
        }
    },
};


export default Api;
