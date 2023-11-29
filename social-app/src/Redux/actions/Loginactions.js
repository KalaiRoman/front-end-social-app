
import { toast } from "react-toastify";
import { LoginUser, RegisterUser } from "../../services/login_services/login_services";


export const RegisterAction = (data, navigate) => async (dispatch) => {
    try {
        const response = await RegisterUser(data);
        navigate("/")
        toast.success("success");
    }
    catch (err) {
    }
}

export const LoginAction = (data, navigate, setLoginError) => async (dispatch) => {
    try {
        const response = await LoginUser(data);

        localStorage.setItem("accesstoken", JSON.stringify(response?.data?.token));
        navigate("/otp")
    }
    catch (err) {
        console.log(err?.response?.data?.message, 'kl')
        setLoginError(err?.response?.data?.message);

    }
}