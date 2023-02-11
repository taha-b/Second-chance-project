import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const list = () => {
  const [stepTitle, setStepTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");

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
    <Row justify="center" align="middle">
      <Col span={6} offset={9}>
        <div>
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
            onChange={(event) => setStepTitle(event.target.value)}
            className="Steps"
            placeholder="Step title"
          />
          <Checkbox
            onChange={(event) => setChecked(event.target.checked)}
            defaultChecked={false}
            className="newStep-checkbox"
          >
            Checked
          </Checkbox>
        </div>
        <Button onClick={submitForm} type="primary">
          <PlusCircleOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default list;
