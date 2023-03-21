import Api from "../api/Api";
import { BASE_DOMAIN, LOGIN_ENDPOINT, ERROR, AUTH_API, GET_CUSTOMER_DATA_ENDPOINT } from "../../../config/constants";
import ApiResponse from "../../../models/ApiResponse";

class AuthApi {
    constructor() {
        this.api = new Api(BASE_DOMAIN + AUTH_API);
    }

    async login(email, password) {
        try {
            let body = {
                email: email,
                password: password
            };
            
            let response = await this.api.postData(LOGIN_ENDPOINT, body);
            
            let apiResponse = ApiResponse.fromJson(response.data);
            
            if (apiResponse.error) {
                return {
                    message: apiResponse.message
                };
            }
            
            let data = apiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }

    async getCustomerData(token) {
        try {
            let response = await this.api.getAuthenticatedData(GET_CUSTOMER_DATA_ENDPOINT, {}, token);

            let apiResponse = ApiResponse.fromJson(response.data);

            if (apiResponse.error) {
                return {
                    message: apiResponse.message
                };
            }

            let data = apiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }
}

export default AuthApi;