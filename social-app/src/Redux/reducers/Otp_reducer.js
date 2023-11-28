import { createSlice } from "@reduxjs/toolkit";


const Otp_slice = createSlice({
    name: "otp",
    initialState: {
        loading: false,
        otpData: []
    },
    reducers: {
        otpRequest(state, action) {
            return {
                loading: true
            }
        },
        otpSuccess(state, action) {
            return {
                loading: false,
                otpData: action.payload
            }
        },
        otpFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


const { actions, reducer } = Otp_slice;


export const { otpRequest, otpSuccess, otpFail } = actions;

export default reducer;