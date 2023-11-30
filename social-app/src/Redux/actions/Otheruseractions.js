// import { toast } from "react-toastify";
// import { createbikeshop, getAllbikes, getsinglebikes } from "../../services/bike_services/bike_services";
// import { bikeFail, bikeRequest, bikeSuccess } from "../reducers/Allusers_reducer";
// import { singlebikeFail, singlebikeRequest, singlebikeSuccess } from "../reducers/Bike_reducer_edit";

import { GetSinglePost } from "../../services/post_services/post_services";
import { OtheruserpostFail, OtheruserpostRequest, OtheruserpostSuccess } from "../reducers/Other_reducer_edit";


// export const BikeShopCreateAction = (data,  handleClose, setLoading) => async (dispatch) => {
//     try {


//         setLoading(true);
//         const resposnse = await createbikeshop(data);
//         if (resposnse) {
//             handleClose()
//             setLoading(false);
//         }
//         toast.success("Create Bike")

//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// export const BikeGetData = () => async (dispatch) => {
//     try {
//         dispatch(bikeRequest());
//         const response = await getAllbikes();
//         dispatch(bikeSuccess(response));

//     }
//     catch (err) {
//         // toast.error(err?.response?.data?.message);
//         dispatch(bikeFail("Something Bike shops error"));

//     }
// }



export const OtherUserPosts = (id) => async (dispatch) => {
    dispatch(OtheruserpostRequest());
    try {
        const response = await GetSinglePost(id);
        dispatch(OtheruserpostSuccess(response?.data?.responsePost));
    }
    catch (err) {
        // toast.error(err?.response?.data?.message);
        dispatch(OtheruserpostFail("Something Bike shops error"));

    }
}