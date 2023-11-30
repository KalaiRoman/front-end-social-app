import { createSlice } from "@reduxjs/toolkit";


const Alluser_slice = createSlice({
    name: "allusers",
    initialState: {
        loading: false,

        allusers: []

    },
    reducers: {
        alluserRequest(state, action) {
            return {
                loading: true
            }
        },
        alluserSuccess(state, action) {
            return {
                loading: false,
                allusers: action.payload
            }
        },
        alluserFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


const { actions, reducer } = Alluser_slice;


export const { alluserRequest, alluserSuccess, alluserFail } = actions;

export default reducer;