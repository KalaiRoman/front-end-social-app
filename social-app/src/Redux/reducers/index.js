import { combineReducers } from "redux";
import reducer from "./Bike_reducer";

import bikeeditreducer from './Bike_reducer_edit'
import otpreducer from "./Otp_reducer";
import profilereducer from "./Profile_reducer";
import postsreducer from "./Post_reducer";

const RootReducer = combineReducers({
    bike: reducer,
    bikeedit: bikeeditreducer,
    otp: otpreducer,
    profile: profilereducer,
    postdata: postsreducer
});

export default RootReducer;