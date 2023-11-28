import React, { useEffect, useState } from 'react'
import './styles/Worksers.scss';
function Workers() {

    const datas = ["first", "second", "third"];
    const [statess, setStates] = useState("first");
    const [workereslist, setWorkerslist] = useState({
        workername: "",
        email: "",
        contactno: "",
        address: "",
        pincode: "",
        bankname: "",
        alternatecontactno: "",
        familymembers: "",
        accountno: "",
        profileimage: "",
        expirenence: ""
    });



    useEffect(() => {

    }, [statess])


    return (
        <div>

            {datas?.map((item, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => setStates(item)} className={item == statess ? "active" : "inactive"}>{item}</button>
                    </div>
                )
            })}


            {(() => {
                switch (statess) {
                    case 'first':
                        return (
                            <div>
                                first
                            </div>
                        )
                    case 'second':
                        return (
                            <div>
                                second
                            </div>
                        )
                    case 'third':
                        return (
                            <div>
                                third
                            </div>
                        )
                    default:
                        return null
                }
            })()}





        </div>
    )
}

export default Workers