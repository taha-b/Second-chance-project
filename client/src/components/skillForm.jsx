import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Space, Upload } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

import axios from "axios";

const SkillForm = () => {
  const [skillTitle, setSkillTitle] = useState("");
  const { userId } = JSON.parse(localStorage.getItem("user"))[0];
  const param = useParams();

  useEffect(() => {
    getSkill();
  }, []);

  const getSkill = () => {
    axios
      .get("http://127.0.0.1:3000/api/skill/" + param.id)
      .then((result) => {
        setSkillTitle(result.data[0].skillTitle);
      })
      .catch((err) => console.error(err));
  };

  const submitForm = () => {
    axios
      .post("http://127.0.0.1:3000/api/skill", { skillTitle, userId })
      .then((result) => {
        setSkillTitle("");
      })
      .catch((err) => console.log(err));
  };

  const editForm = () => {
    axios
      .put(`http://127.0.0.1:3000/api/skill/${param.id}`, { skillTitle })
      .then((result) => {
        setSkillTitle("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'url("https://cdn.discordapp.com/attachments/802193325754810441/1074491745246646372/thomas-bormans-pcpsVsyFp_s-unsplash.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="forms">
        <Input
          className="site-form-item-icon"
          onChange={(event) => setSkillTitle(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Skill title"
          value={skillTitle}
        />
        <Upload>
          <Button icon={<UploadOutlined />}>Image</Button>
        </Upload>
        <Button
          onClick={param && param.id ? editForm : submitForm}
          className="login-form-button"
          type="primary"
        >
          {param && param.id ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default SkillForm;
