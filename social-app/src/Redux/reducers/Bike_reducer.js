import { createSlice } from "@reduxjs/toolkit";


const Bike_slice = createSlice({
    name: "bikeshops",
    initialState: {
        loading: false,
        bikeshop: [],
        singlebikeshop:[]
    },
    reducers: {
        bikeRequest(state, action) {
            return {
                loading: true
            }
        },
        bikeSuccess(state, action) {
            return {
                loading: false,
                bikeshop: action.payload
            }
        },
        bikeFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


const { actions, reducer } = Bike_slice;


export const { bikeRequest, bikeSuccess, bikeFail } = actions;

export default reducer;