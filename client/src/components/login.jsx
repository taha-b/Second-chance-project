import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../style.css";
import axios from "axios";

const login = () => {
  const [adresseMail, setAdresseMail] = useState("");
  const [passeword, setPasseword] = useState("");
  const navigate = useNavigate();
  const myClick = () => {
    axios
      .get(`http://localhost:3000/api/users/${adresseMail}`, {
        headers: { passeword: passeword },
      })
      .then((result) => {
        if (typeof result.data === "string") {
          alert(result.data);
        } else {
          localStorage.setItem("user", JSON.stringify(result.data));
          navigate("/public/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'url("https://cdn.discordapp.com/attachments/802193325754810441/1074310098777817128/andrew-neel-cckf4TsHAuw-unsplash.jpg")',
        backgroundSize: "cover",
      }}
    >
      <form className="forms">
        <h1 className="welcome">WELCOME Back !</h1>

        <Input
          className="site-form-item-icon"
          onChange={(event) => setAdresseMail(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Adresse Mail"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setPasseword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />

        <Button
          onClick={() => myClick()}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Login
        </Button>
        <div className="register-now">
          <Link to="/signUp">register now!</Link>
        </div>
      </form>
    </div>
  );
};

export default login;
