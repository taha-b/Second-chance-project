import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";
import { Button, Input, Row, Col, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import "../style.css";

const list = () => {
  const [stepTitle, setStepTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const param = useParams();

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    axios
      .get("http://127.0.0.1:3000/api/skill")
      .then((result) => {
        setSkills(result.data);
      })
      .catch((err) => console.error(err));
  };

  const submitForm = () => {
    axios
      .post("http://127.0.0.1:3000/api/step", {
        stepTitle,
        checked,
        skillId: selectedSkill,
      })
      .then((result) => {
        setSelectedSkill("");
        setStepTitle("");
        setChecked(false);
      })
      .catch((err) => console.log(err));
  };

  const editForm = () => {
    axios
      .put(`http://127.0.0.1:3000/api/step/${param.id}`, { stepTitle })
      .then((result) => {
        setStepTitle("");
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
        <Select
          className="select"
          onChange={(value) => setSelectedSkill(value)}
          placeholder="Parent skill"
          value={selectedSkill}
        >
          {skills.map((element) => (
            <Select.Option key={element.skillId} value={element.skillId}>
              {element.skillTitle}
            </Select.Option>
          ))}
        </Select>
        <Input
          className="site-form-item-icon"
          onChange={(event) => setStepTitle(event.target.value)}
          placeholder="Step title"
        />
        <Checkbox
          onChange={(event) => setChecked(event.target.checked)}
          defaultChecked={false}
          className="newStep-checkbox"
        >
          Checked
        </Checkbox>

        <Button
          className="login-form-button"
          type="primary"
          onClick={param && param.id ? editForm : submitForm}
        >
          <PlusCircleOutlined />
          {param && param.id ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default list;
