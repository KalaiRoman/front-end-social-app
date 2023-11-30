import { combineReducers } from "redux";
import OtherReducer from "./Other_reducer_edit";

import allusesreducer from './Allusers_reducer'
import otpreducer from "./Otp_reducer";
import profilereducer from "./Profile_reducer";
import postsreducer from "./Post_reducer";

const RootReducer = combineReducers({
    otheruserpost: OtherReducer,
    allusers: allusesreducer,
    otp: otpreducer,
    profile: profilereducer,
    postdata: postsreducer
});

export default RootReducer;