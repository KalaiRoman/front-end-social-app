import axiosInstance from "../../config/axiosconfig"

export function getUserdata(data) {

    console.log(data,'data')
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/auth/getuser/${data}`).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err);
        })
    })
}