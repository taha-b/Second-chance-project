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
      .then((r) => {
        if (typeof r.data === "string") {
          alert(r.data);
        } else {
          localStorage.setItem("user", JSON.stringify(r.data));
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
          WELCOME Back !
        </h1>

        <Input
          onChange={(event) => setAdresseMail(event.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Adresse Mail"
        />
        <Input
          style={{ marginTop: "10px" }}
          onChange={(event) => setPasseword(event.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />

        <Button
          onClick={() => myClick()}
          style={{ width: "100%", marginTop: "30px" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Login
        </Button>
        <div
          style={{ textAlign: "center", marginTop: "25px", fontSize: "25px" }}
        >
          <Link to="/signUp">register now!</Link>
        </div>
      </form>
    </div>
  );
};

export default login;
