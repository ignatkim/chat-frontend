import axios from 'axios';
import {apiURL} from "./config";

const axiosApi = axios.create({
    baseURL: `http://${apiURL}`
});

export default axiosApi;