import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://raw.githubusercontent.com/LeeHengYu/LeetCodeRevision/main",
})

class APIClient{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<string>(this.endpoint, config).then(res => res.data);
    }
}

export default APIClient;