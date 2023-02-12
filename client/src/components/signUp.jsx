import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Input, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";

const signUp = () => {
  const [fullName, setFullName] = useState("");
  const [adresseMail, setAdresseMail] = useState("");
  const [passeword, setPasseword] = useState("");
  const [checkPasseword, setCheckPasseword] = useState("");

  const navigate = useNavigate();
  const myClick = () => {
    console.log(fullName, adresseMail, passeword, checkPasseword);
    if (!passeword || passeword !== checkPasseword) {
      alert("please check password");
    } else {
      axios
        .post("http://localhost:3000/api/users", {
          fullName: fullName,
          adresseMail: adresseMail,
          passeword: passeword,
        })
        .then((result) => navigate("/login"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'url("https://cdn.discordapp.com/attachments/802193325754810441/1074317090879701163/denny-muller-jLjfAWwHdB8-unsplash.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <form
        className="forms"
        style={{
          position: "absolute",
          width: "35%",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "45%",
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }} className="welcome">
          WELCOME!
        </h1>
        <Input
          onChange={(event) => setFullName(event.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
        />
        <Input
          style={{ marginTop: "10px" }}
          onChange={(event) => setAdresseMail(event.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="addresseMail"
          placeholder="Adresse Mail"
        />
        <Input
          style={{ marginTop: "10px" }}
          onChange={(event) => setPasseword(event.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        <Input
          style={{ marginTop: "10px" }}
          onChange={(event) => setCheckPasseword(event.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="tap again your Password"
        />
        <Button
          onClick={myClick}
          style={{ width: "100%", marginTop: "30px" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default signUp;
