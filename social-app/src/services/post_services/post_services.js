import axiosInstance from "../../config/axiosconfig"

export function CreatePost(data) {

    return new Promise((resolve, reject) => {
        axiosInstance.post(`/post/create/`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function GetPost(data) {

    return new Promise((resolve, reject) => {
        axiosInstance.get(`/post/allposts/`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function GetSinglePost(data) {

    return new Promise((resolve, reject) => {
        axiosInstance.get(`/post/single/${data}`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function GetSingleDeletePost(data) {

    return new Promise((resolve, reject) => {
        axiosInstance.post(`/post/single/delete/`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function PostLike(id, data) {

    return new Promise((resolve, reject) => {
        axiosInstance.put(`/post/like/${id}`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function PostCommand(id, data) {

    return new Promise((resolve, reject) => {
        axiosInstance.put(`/post/command/${id}`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function PostCommandDelete(id, data) {

    return new Promise((resolve, reject) => {
        axiosInstance.post(`/post/command/delete/${id}`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}