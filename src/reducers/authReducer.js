import { GET_CUSTOMER_DATA } from "../actions/authActions/types";
import Customer from "../models/Customer";

export default function authReducer(state = new Customer("", "", ""), action) {
    switch(action.type) {
        case GET_CUSTOMER_DATA:
            return action.payload.customer;
        default:
            return state;
    }
}