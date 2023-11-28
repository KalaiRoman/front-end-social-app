import { combineReducers } from "redux";
import reducer from "./Bike_reducer";

import bikeeditreducer from './Bike_reducer_edit'
import otpreducer from "./Otp_reducer";

const RootReducer = combineReducers({
    bike: reducer,
    bikeedit: bikeeditreducer,
    otp: otpreducer
});

export default RootReducer;