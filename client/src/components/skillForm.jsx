import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Space, Upload } from "antd";
import {
  UserOutlined,
  PlusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import axios from "axios";

const skillForm = () => {
  const [skillTitle, setSkillTitle] = useState("");

  const submitForm = () => {
    axios
      .post("http://127.0.0.1:3000/api/skill", { skillTitle })
      .then((result) => {
        setSkillTitle("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6} offset={9}>
        <Space>
          <Input
            onChange={(event) => setSkillTitle(event.target.value)}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Skill title"
          />
          <Upload>
            <Button icon={<UploadOutlined />}>Image</Button>
          </Upload>
          <Button
            onClick={submitForm}
            className="login-form-button"
            type="primary"
          >
            <PlusCircleOutlined />
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default skillForm;
