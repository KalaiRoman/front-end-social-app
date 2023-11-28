import { createSlice } from "@reduxjs/toolkit";
const Bike_slice_editor = createSlice({
    name: "bikeshopsedit",
    initialState: {
        loading: false,
        singlebikeshop:[]
    },
    reducers: {
        singlebikeRequest(state, action) {
            return {
                loading: true
            }
        },
        singlebikeSuccess(state, action) {
            return {
                loading: false,
                singlebikeshop: action.payload
            }
        },
        singlebikeFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


const { actions, reducer } = Bike_slice_editor;


export const { singlebikeRequest,singlebikeSuccess,singlebikeFail } = actions;

export default reducer;