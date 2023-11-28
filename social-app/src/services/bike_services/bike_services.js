

import axiosInstance from "../../config/axiosconfig"

export function createbikeshop(data) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`/seller/bike/create`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function getAllbikes(data) {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/seller/bike/allbikes`).then((res) => {
            resolve(res?.data?.createbikeshops)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function getsinglebikes(id) {

    return new Promise((resolve, reject) => {
        axiosInstance.get(`/seller/bike/single/${id}`).then((res) => {
            resolve(res?.data?.createbikeshops)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function deletesinglebikes(id) {

    return new Promise((resolve, reject) => {
        axiosInstance.delete(`/seller/bike/delete/${id}`).then((res) => {
            resolve(res?.data?.createbikeshops)
        }).catch((err) => {
            reject(err);
        })
    })
}