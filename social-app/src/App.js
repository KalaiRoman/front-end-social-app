
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './protectedrouter/Productedrouter';
import React, { Suspense, lazy, useEffect } from 'react';
import axiosInstance from './config/axiosconfig';
import { Tokencheck } from './services/login_services/login_services';
import Otp from './pages/otpscreeen/Otp';
import Home from './pages/Homepage/Home';
import Profile from './pages/profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from './Redux/actions/Profileactions';
import OtherUserprofile from './pages/profile/OtherUserprofile';

const Login = lazy(() => import('./pages/login/Login.js'));
const Signup = lazy(() => import('./pages/signup/Signup.js'));

const Dashboard = lazy(() => import('./pages/home/Dashboard.js'));
const Bikeshopcreate = lazy(() => import('./pages/bikeshopcreate/BikeShopcreate.js'));
const Workers = lazy(() => import('./pages/workers/Workers.js'));

const BikeComments = lazy(() => import('./pages/bikeshopcreate/BikeComments.js'));

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => state?.profile?.profileData);

  useEffect(() => {

    dispatch(ProfileActions());
  }, [])

  useEffect(() => {
  }, [state?.username])
  return (
    <div className="App ">
      <div id="device-bar-1">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <header>
        <div class="tb">
          <div class="td" id="logo">
            <a href="/home"><i class="fab fa-facebook-square"></i></a>
          </div>
          <div class="td" id="search-form">
            <form method="get" action="#">
              <input type="text" placeholder="Search Facebook" />
              <button type="submit"><i class="material-icons">search</i></button>
            </form>
          </div>
          <div class="td" id="f-name-l"><span>{state?.username}</span></div>
          <div class="td" id="i-links">
            <div class="tb">
              <div class="td" id="m-td">
                <div class="tb">
                </div>
              </div>
              <div class="td">
                <a href="/profile" id="p-link">
                  <img src={state?.profileimage} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/otp" element={<Otp />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path="/home" element={<Home state={state} />}></Route>
            <Route path="/dashboard" element={<Dashboard state={state} />}></Route>

            <Route path="/profile" element={<Profile state={state} />}></Route>
            <Route path="/otherprofile" element={<OtherUserprofile />}></Route>

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
