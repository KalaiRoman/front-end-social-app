import { createSlice } from "@reduxjs/toolkit";


const Profile_slice = createSlice({
    name: "profile",
    initialState: {
        loading: false,
        profileData: [],
    },
    reducers: {
        profileRequest(state, action) {
            return {
                loading: true
            }
        },
        profileSuccess(state, action) {
            return {
                loading: false,
                profileData: action.payload
            }
        },
        profileFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        },
      
    }
})


const { actions, reducer } = Profile_slice;


export const { profileRequest, profileSuccess, profileFail} = actions;

export default reducer;