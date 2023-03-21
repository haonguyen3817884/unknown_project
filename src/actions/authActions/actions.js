import { GET_CUSTOMER_DATA } from "./types";

export const getCustomerData = ({customer}) => {
    return {
        type: GET_CUSTOMER_DATA,
        payload: {
            customer
        }
    };
};