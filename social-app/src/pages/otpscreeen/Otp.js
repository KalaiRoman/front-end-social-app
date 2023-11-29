import React, { useEffect, useState } from 'react'
import './styles/Otp.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetotpActions, PostotpActions } from '../../Redux/actions/Otpactions';
import { useNavigate } from 'react-router-dom';
function Otp() {

    const router = useNavigate();


    const dispatch = useDispatch();

    const state = useSelector((state) => state?.otp?.otpData);

    const [otp, setOtp] = useState("");

    const [error, setError] = useState("");



    useEffect(() => {
        dispatch(GetotpActions());
    }, [error])


    const autoPopulatecode = () => {
        setOtp(state)
    }

    const handleChange = (e) => {
        setOtp(e?.target?.value);
    }

    const SubmitOtp = (e) => {
        e.preventDefault();

        const data = {
            otpuser: otp
        }
        dispatch(PostotpActions(data, setError, router));
    }
    return (
        // <div className='otp-section'>
        //     <div className='main-section'>
        // <div>
        //     <h4 className='text-success fw-1 fs-1'>OTP</h4>

        //     <div className='fw-bold fs-1'>
        //         <>
        //             {state}
        //         </>
        //     </div>
        //     <div>
        //         <div className='mt-4 mb-4'>
        //             <button onClick={autoPopulatecode}>copy code</button>
        //         </div>
        //     </div>
        //     <div class="mb-3">
        //         <label for="exampleInputEmail1" class="form-label">Otp</label>
        //         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="otp" value={otp} onChange={handleChange}
        //             placeholder='Enter Your Otp ...'
        //         />
        //         <div id="emailHelp" class="form-text">
        //         </div>

        //         <div className='text-danger'>
        //             {error}
        //         </div>
        //         <div className='mt-4'>
        //             <button onClick={SubmitOtp}>Submit</button>
        //         </div>
        //     </div>
        // </div>
        //     </div>
        // </div>
        <div className='main-login-section'>
            <div class="wrapper">
                <div>
                    <h4 className='text-success fw-1 fs-1'>OTP</h4>

                    <div className='fw-bold fs-1'>
                        <>
                            {state}
                        </>
                    </div>
                    <div>
                        <div className='mt-4 mb-4'>
                            <button onClick={autoPopulatecode} class="btn">copy code</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Otp</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="otp" value={otp} onChange={handleChange}
                            placeholder='Enter Your Otp ...'
                        />
                        <div id="emailHelp" class="form-text">
                        </div>

                        <div className='text-danger'>
                            {error}
                        </div>
                        <div className='mt-4'>
                            <button onClick={SubmitOtp} class="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp