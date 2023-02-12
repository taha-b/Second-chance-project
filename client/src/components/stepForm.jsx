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

  const getStep = () => {
    axios
      .get("http://127.0.0.1:3000/api/step" + param.id)
      .then((result) => {
        setStepTitle(result.data[0].stepTitle);
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

  // const deleteStep = (id) => {
  //   axios
  //     .delete(`http://127.0.0.1:3000/api/step/${id}`)
  //     .then((result) => {
  //       setView(!view);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const updateClick = (id, title) => {
  //   axios
  //     .put(`http://127.0.0.1:3000/api/step/${id}`, { title: newTitle })
  //     .then((result) => {
  //       console.log(result);
  //       setView(!view);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <div
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
        <Select
          onChange={(value) => setSelectedSkill(value)}
          placeholder="Parent skill"
          value={selectedSkill}
          style={{ width: 200 }}
        >
          {skills.map((element) => (
            <Select.Option key={element.skillId} value={element.skillId}>
              {element.skillTitle}
            </Select.Option>
          ))}
        </Select>
        <Input
          style={{ marginTop: "10px" }}
          onChange={(event) => setStepTitle(event.target.value)}
          className="Steps"
          placeholder="Step title"
        />
        <Checkbox
          style={{ marginTop: "10px" }}
          onChange={(event) => setChecked(event.target.checked)}
          defaultChecked={false}
          className="newStep-checkbox"
        >
          Checked
        </Checkbox>

        <Button
          style={{ marginTop: "10px" }}
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
