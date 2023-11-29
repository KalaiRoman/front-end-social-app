// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { LoginAction } from '../../Redux/actions/Loginactions';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function Login() {

// const dispatch = useDispatch();

// const [datas, setDatas] = useState({
//   email: "",
//   password: ""
// })


// const router = useNavigate();

// const { email, password } = datas;

// const handleChange = (e) => {
//   setDatas({ ...datas, [e.target.name]: e.target.value });
// }

// const Submits = (e) => {
//   e.preventDefault();

//   const datass = {
//     email: email,
//     password: password
//   }

//   dispatch(LoginAction(datass, router, toast));
// }

//   const [store, setStore] = useState([]);

//   console.log(store, 'store')

//   const datas1 = [1, 2, 3, 4, 5];

//   const handleChanges = (ids) => {

//     if (store.includes(ids)) {
//       setStore(store.filter((item) => item !== ids));
//       return;
//     }
//     setStore(store.concat(ids));

//   }
//   return (
//     <div className='d-flex row border h-100'>
//       <div className='col-lg-6 h-100'>
//         {datas1?.map((item, index) => {
//           return (
//             <div onClick={() => handleChanges(item)}>
//               {store?.includes(item) ? <div className='d-flex gap-2'>

//                 <input type="checkbox" checked={true} />{item}
//               </div> : <div className='d-flex gap-2'>
//                 <input type="checkbox" checked={false} /> {item}
//               </div>}


//             </div>
//           )
//         })}

//         <div>
//           {store?.map((item) => item)}
//         </div>
//       </div>
//       <div className='col-lg-6 border pt-5 h-100 mb-5'>
// <div className='mb-5 mt-3'>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange} />
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" name="password" value={password} onChange={handleChange} />
//   </div>

//   <button class="btn btn-primary" onClick={Submits}>Submit</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login





import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../Redux/actions/Loginactions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './styles/Login.scss';

function Login() {


  const token = localStorage.getItem("accesstoken");

  const dispatch = useDispatch();

  const [loginerror, setLoginError] = useState("");

  const [datas, setDatas] = useState({
    email: "",
    password: ""
  })


  const router = useNavigate();

  const { email, password } = datas;

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  }

  const Submits = (e) => {
    e.preventDefault();

    const datass = {
      userNameEmail: email,
      password: password
    }

    dispatch(LoginAction(datass, router, setLoginError));
  }

  useEffect(() => {

  }, [loginerror])

  if (token) {
    return window.location.assign("/home")
  }
  else {
    return (
      // <div className='main-login-section'>
      //   <div className='inside-login'>
      //     <div className='left-login'>
      //       image
      //     </div>
      //     <div className='right-login'>
      //       <div className='inside-right-login'>
      //         <div className='mb-5 mt-3'>
      //           <div class="mb-3">
      //             <label for="exampleInputEmail1" class="form-label">Email address</label>
      //             <input type="text" class="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange}
      //               placeholder='Enter Email or Username'
      //             />
      //             <div id="emailHelp" class="form-text"></div>
      //           </div>
      //           <div class="mb-3">
      //             <label for="exampleInputPassword1" class="form-label">Password</label>
      // <input type="password" class="form-control" name="password" value={password} onChange={handleChange}
      //   placeholder='Enter Password'
      // />
      //           </div>

      //           <button class="btn btn-primary" onClick={Submits}>Submit</button>

      //           <div>
      //             {loginerror}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className='main-login-section'>
        <div class="wrapper">
          <form action="">
            <h1>Login</h1>
            <div class="input-box">
              <input type="text" class="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange}
                placeholder='Enter Email or Username'
              />
              <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
              <input type="password" class="form-control" name="password" value={password} onChange={handleChange}
                placeholder='Enter Password'
              />
              <i class='bx bxs-lock-alt'></i>
            </div>

            <button class="btn" onClick={Submits}>Login</button>
            <div>
              {loginerror}
            </div>
            <div class="register-link">
              <p>Dont't have an account? <a href="#">
                Register
              </a></p>
            </div>

          </form>
        </div>
      </div>

    )
  }


}

export default Login