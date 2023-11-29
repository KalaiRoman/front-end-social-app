
import { getUserdata } from "../../services/user_services/user_services";
import { profileRequest, profileSuccess, profileFail } from "../reducers/Profile_reducer";
import jwt_decode from "jwt-decode";

export const ProfileActions = () => async (dispatch) => {
    dispatch(profileRequest())
    try {

        const token = localStorage.getItem("accesstoken");

        const check = await jwt_decode(token);

      
        const response = await getUserdata(check?.id);

        console.log(response,'response')
        dispatch(profileSuccess(response?.data))

    } catch (error) {
        dispatch(profileFail(error?.response?.data?.message))

    }
}
