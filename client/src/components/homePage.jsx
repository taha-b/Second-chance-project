import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const homePage = () => {
  return (
    <div className="homePage">
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
        <img src="./imgs/interview.jpg" className="background" />

        <ul>
          <h1>
            <u>Descreption</u>
          </h1>
          <h2>To access to our app you need to follow some steps :</h2>
          <li className="firstStep">
            <u>Sign Up:</u>
            <p>
              If you don't have an account, you need to sign up it's for free.
            </p>
          </li>
          <li className="secondStep">
            <u>Login:</u>
            <p>
              Now you already have an account, fill your information and get in.
            </p>
            <u>Usage:</u>
            <p>
              Once you logged in, you are going to see an empty page with three
              buttons; addSkill, addStep and update.
            </p>
            <u>addSkill</u>
            <p>
              This button will send you to the page where you can add a skill
              that you already know or you attend to learn.
            </p>
            <u>addStep</u>
            <p>
              This button will send you to the page where you can add a step
              that you already know or you attend to learn, but every step
              should be relied to a specific skill :
              <ul>
                <li>1 .Select the skill.</li>
                <li>2 .Add a title to your step.</li>
                <li>3 .Check if you have reached to learn it.</li>
              </ul>
            </p>
            <u>Update</u>
            <p>
              This button allow you to update or delete your skills or your
              steps.
            </p>
          </li>
        </ul>
      </div>
      <h1 className="enjoy">ENJOY !</h1>
    </div>
  );
};

export default homePage;
