import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, DatePicker, Space, version } from "antd";
import Login from "./components/login.jsx";
import SignUp from "./components/signUp.jsx";
import YourCV from "./components/yourCV.jsx";
import Skills from "./components/skills.jsx";
import StepForm from "./components/stepForm.jsx";
import FinalList from "./components/finalList.jsx";
import SkillForm from "./components/skillForm.jsx";

const App = () => {
  return (
    <div>
      {/* <h1 className='khaddamni'>KHADDAMNI</h1>
      <ul className='nav'>
      <li><button className='login'>Login</button></li>
      <li><button className='register'>SignUp</button></li>
      </ul>
      <div className='container'>
        <u>Descreption</u>
        <img src="./imgs/interview.jpg" className='background'/>
        <p>To access to our app you need to follow some steps :
          <ul>
            <li className='firstStep'>
              <u>Sign Up:</u>
              <p>If you don't have an account you need to sign up it's for free</p>
              </li>
              <li className='secondStep'>
              <u>Sign Up:</u>
              <p>Now you already have an account fill your information and enjoy</p>
              </li>
            </ul> 
        </p>
        
               
      // </div> */}
      {/* <Login/>  */}
      {/* <SignUp/> */}
      <Skills />
      {/* <SkillForm /> */}
      {/* <StepForm /> */}
      {/* <FinalList/> */}
      {/* <YourCV/> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
