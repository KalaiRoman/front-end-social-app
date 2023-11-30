import { createSlice } from "@reduxjs/toolkit";
const Other_userpost_editor = createSlice({
    name: "othruserpost",
    initialState: {
        loading: false,
        Otheruserpost: []
    },
    reducers: {
        OtheruserpostRequest(state, action) {
            return {
                loading: true
            }
        },
        OtheruserpostSuccess(state, action) {
            return {
                loading: false,
                Otheruserpost: action.payload
            }
        },
        OtheruserpostFail(state, action) {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


const { actions, reducer } = Other_userpost_editor;


export const { OtheruserpostRequest, OtheruserpostSuccess, OtheruserpostFail } = actions;

export default reducer;