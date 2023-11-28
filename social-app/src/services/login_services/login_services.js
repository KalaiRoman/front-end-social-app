

// export function LoginUser() {
// return new Promise((resolve,reject)=>{
//     return 
// })
// }

import axiosInstance from "../../config/axiosconfig"

export function RegisterUser(data) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`/auth/register`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function LoginUser(data) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`/auth/login`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function Tokencheck() {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/auth/seller/tokencheck`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}


export function otpservice() {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/auth/otp/generate`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}

export function otpserviceCheck(data) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`/auth/otp/ckeck`, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}
