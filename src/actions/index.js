import axios from 'axios'
import { CREATE } from "../types/data";
import CUSTOMER_DETAILS from "../constant"

//API call
export const readData = () => {
    return async function (dispatch) {
        try {
            const customerData = await axios.get(`${CUSTOMER_DETAILS}`)
            dispatch(setResponseData(customerData.data))
        } catch (error) {
            alert(error);
        }

    }
}

export const setResponseData = (createData = null) => {
    //going inside action payload
    if (createData) {
        return {
            type: CREATE,
            payload: createData,
        }
    }
}

