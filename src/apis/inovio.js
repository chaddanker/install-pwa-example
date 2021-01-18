import axios from 'axios';

export const inovioApi = axios.create({
    baseURL: 'https://api.inovio.co.za/v1'
});
