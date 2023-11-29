
import { CreatePost, GetPost, GetSingleDeletePost, GetSinglePost } from "../../services/post_services/post_services";
import { toast } from 'react-toastify';
import { postRequest, postSingleUser, postSuccess, postsFail } from "../reducers/Post_reducer";


import jwt_decode from "jwt-decode";


export const GetPostActions = () => async (dispatch) => {
    dispatch(postRequest())
    try {
        const response = await GetPost();
        if (response) {
            dispatch(postSuccess(response?.data))

        }
    } catch (error) {
        dispatch(postsFail(error))

    }
}



export const GetSinglePostActions = () => async (dispatch) => {
    dispatch(postRequest())
    try {


        const token = localStorage.getItem("accesstoken");

        const check = await jwt_decode(token);


        const response = await GetSinglePost(check?.id);
        if (response) {
            dispatch(postSingleUser(response?.data))

        }
    } catch (error) {
        dispatch(postsFail(error))

    }
}


export const PostCreateActions = (data, handleClose) => async (dispatch) => {
    try {
        const response = await CreatePost(data);

        if (response) {
            toast.success("Create New Post");
            dispatch(GetPostActions());
            dispatch(GetSinglePostActions());
            handleClose();
        }
    } catch (error) {
        console.log(error)
    }
}





export const PostDeleteActions = (data) => async (dispatch) => {
    try {
        const response = await GetSingleDeletePost(data);

        if (response) {
            toast.success("Post Deleted");
            dispatch(GetPostActions());
        }
    } catch (error) {
        console.log(error)
    }
}



