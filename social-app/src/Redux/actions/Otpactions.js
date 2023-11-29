import { otpservice, otpserviceCheck } from "../../services/login_services/login_services";
import { otpFail, otpRequest, otpSuccess } from "../reducers/Otp_reducer"
import { ProfileActions } from "./Profileactions";



export const GetotpActions = () => async (dispatch) => {

    dispatch(otpRequest())
    try {


        const response = await otpservice();
        dispatch(otpSuccess(response?.data?.otp))

    } catch (error) {
        dispatch(otpFail(error?.response?.data?.message))

    }
}



export const PostotpActions = (data, setError, router) => async (dispatch) => {
    try {
        const response = await otpserviceCheck(data);
        if (response) {
            router("/home")
            dispatch(
                ProfileActions()

            )
        }
    } catch (error) {
        setError(error?.response?.data?.message);
    }
}