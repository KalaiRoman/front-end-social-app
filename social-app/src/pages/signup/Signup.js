import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../Redux/actions/Loginactions';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [userregister, setUserregister] = useState({
        username: "",
        email: "",
        password: "",
        contactno: ""
    })

    const { username, email, password, contactno } = userregister;

    const handleChnage = (e) => {
        setUserregister({ ...userregister, [e.target.name]: e.target.value });
    }


    const HandleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            password: password,
            contactno: contactno,
            role: "seller"
        }
        dispatch(RegisterAction(data, navigate))
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"

                        name="username"
                        onChange={handleChnage}
                        value={username}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email"
                        onChange={handleChnage}
                        value={email}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name="password"
                        onChange={handleChnage}
                        value={password}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact No</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="contactno"
                        onChange={handleChnage}
                        value={contactno}
                    />

                </div>

                <button onClick={HandleSubmit} className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Signup