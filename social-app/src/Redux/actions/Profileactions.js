
import { getAllUserdata, getUserdata } from "../../services/user_services/user_services";
import { alluserFail, alluserRequest, alluserSuccess } from "../reducers/Allusers_reducer";
import { profileRequest, profileSuccess, profileFail, Allusers } from "../reducers/Profile_reducer";
import jwt_decode from "jwt-decode";

export const ProfileActions = () => async (dispatch) => {
    dispatch(profileRequest())
    try {

        const token = localStorage.getItem("accesstoken");
        const check = await jwt_decode(token);
        const response = await getUserdata(check?.id);
        dispatch(profileSuccess(response?.data))

    } catch (error) {
        dispatch(profileFail(error?.response?.data?.message))

    }
}

export const ProfileAllUsersActions = () => async (dispatch) => {
    dispatch(alluserRequest())
    try {
        const response = await getAllUserdata();

        console.log(response, 'response')

        if (response) {
            await dispatch(alluserSuccess(response?.data))

        }

    } catch (error) {
        dispatch(alluserFail(error));
    }
}
