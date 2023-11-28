
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './protectedrouter/Productedrouter';
import React, { Suspense, lazy, useEffect } from 'react';
import axiosInstance from './config/axiosconfig';
import { Tokencheck } from './services/login_services/login_services';
import Otp from './pages/otpscreeen/Otp';
const Login = lazy(() => import('./pages/login/Login.js'));
const Signup = lazy(() => import('./pages/signup/Signup.js'));

const Dashboard = lazy(() => import('./pages/home/Dashboard.js'));
const Bikeshopcreate = lazy(() => import('./pages/bikeshopcreate/BikeShopcreate.js'));
const Workers = lazy(() => import('./pages/workers/Workers.js'));

const BikeComments = lazy(() => import('./pages/bikeshopcreate/BikeComments.js'));

function App() {
  useEffect(() => {
    // Tokencheck().then((res) => {
    //   console.log(res, "res")
    // }).catch((err) => {

    //   // if(err?.response?.data?.result=="Token does not exist")
    //   // {
    //   //   localStorage.clear();
    //   // }
    //   console.log(err);
    // })
  }, [])
  return (
    <div className="App ">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/otp" element={<Otp />}></Route>

          <Route path="/register" element={<Signup />}></Route>
          <Route element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/bikeshop" element={<Bikeshopcreate />}></Route>
            <Route path="/workers" element={<Workers />}></Route>
            <Route path="/bikecomment/:id" element={<BikeComments />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
