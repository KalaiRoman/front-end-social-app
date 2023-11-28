import { toast } from "react-toastify";
import { createbikeshop, getAllbikes, getsinglebikes } from "../../services/bike_services/bike_services";
import { bikeFail, bikeRequest, bikeSuccess } from "../reducers/Bike_reducer";
import { singlebikeFail, singlebikeRequest, singlebikeSuccess } from "../reducers/Bike_reducer_edit";


export const BikeShopCreateAction = (data,  handleClose, setLoading) => async (dispatch) => {
    try {


        setLoading(true);
        const resposnse = await createbikeshop(data);
        if (resposnse) {
            handleClose()
            setLoading(false);
        }
        toast.success("Create Bike")

    }
    catch (err) {
        console.log(err);
    }
}

export const BikeGetData = () => async (dispatch) => {
    try {
        dispatch(bikeRequest());
        const response = await getAllbikes();
        dispatch(bikeSuccess(response));

    }
    catch (err) {
        // toast.error(err?.response?.data?.message);
        dispatch(bikeFail("Something Bike shops error"));

    }
}



export const getsingleBikeGetData = (id) => async (dispatch) => {
    try {
        dispatch(singlebikeRequest());
        const response = await getsinglebikes(id);
        dispatch(singlebikeSuccess(response));
    }
    catch (err) {
        // toast.error(err?.response?.data?.message);
        dispatch(singlebikeFail("Something Bike shops error"));

    }
}