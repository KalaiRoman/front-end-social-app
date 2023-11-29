import { createSlice } from "@reduxjs/toolkit";


const Post_slice = createSlice({
    name: "posts",
    initialState: {
        loading: false,
        postData: [],
        singleUserPost: []
    },
    reducers: {
        postRequest(state, action) {
            return {
                loading: true
            }
        },
        postSuccess(state, action) {
            return {
                loading: false,
                postData: action.payload
            }
        },
        postFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        },
        postSingleUser(state, action) {
            return {
                loading: false,

                singleUserPost: action.payload

            }
        },

    }
})


const { actions, reducer } = Post_slice;


export const { postRequest, postSuccess, postsFail,postSingleUser } = actions;

export default reducer;