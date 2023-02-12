import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const homePage = () => {
  return (
    <div>
      <h1 className="khaddamni">KHADDAMNI</h1>
      <ul className="nav">
        <li>
          <Link to="/login/">
            <button className="login">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signUp/">
            <button className="register">Sign Up</button>
          </Link>
        </li>
      </ul>
      <div className="container">
        <u>Descreption</u>
        <img src="./imgs/interview.jpg" className="background" />
        <p>
          To access to our app you need to follow some steps :
          <ul>
            <li className="firstStep">
              <u>Sign Up:</u>
              <p>
                If you don't have an account you need to sign up it's for free
              </p>
            </li>
            <li className="secondStep">
              <u>Login:</u>
              <p>
                Now you already have an account fill your information and enjoy
              </p>
              <u>Usage:</u>
              <p>
                once you logged in you are going to see an empty page with two
                buttons addSkill and addStep
              </p>
              <p></p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default homePage;
