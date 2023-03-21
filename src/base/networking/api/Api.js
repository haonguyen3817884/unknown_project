import axios from "axios";
import { CONTENT_TYPE, APPLICATION_JSON, X_ACCESS_TOKEN } from "../../../config/constants";

class Api {
    constructor(baseUrl) {
        this.axiosClient = axios.create({
            baseURL: baseUrl,
            headers: {
                "Content-Type": APPLICATION_JSON
            }
        });
    }

    async getData(endPoint, params) {
        try {
            let response = await this.axiosClient.get(endPoint, {params: params});
            
            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async getAuthenticatedData(endPoint, params, token) {
        try {
            let response = await this.axiosClient.get(endPoint, {
                params: params,
                headers: {
                    "x-access-token": token
                }
            });
            
            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async postData(endPoint, body) {
        try {
            let response = await this.axiosClient.post(endPoint, body, {});
            
            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async postAuthenticatedData(endPoint, body, token) {
        try {
            let response = await this.axiosClient.post(endPoint, body, {
                headers: {
                    "x-access-token": token
                }
            });

            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async putData(endPoint, body) {
        try {
            let response = await this.axiosClient.put(endPoint, body, {});
            
            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async putAuthenticatedData(endPoint, body, token) {
        try {
            let response = await this.axiosClient.put(endPoint, body, {
                headers: {
                    "x-access-token": token
                }
            });

            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async deleteData(endPoint, params) {
        try {
            let response = await this.axiosClient.delete(endPoint, {params: params});
            
            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }

    async deleteAuthenticatedData(endPoint, params, token) {
        try {
            let response = await this.axiosClient.delete(endPoint, {
                params: params,
                headers: {
                    "x-access-token": token
                }
            });

            return response;
        } catch(error) {
            console.log(error);
            return {};
        }
    }
}

export default Api;