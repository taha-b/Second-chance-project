import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Checkbox, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const list = () => {
  const [view, setView] = useState([]);
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");

  useEffect(() => {
    getSkills();
  }, [view]);

  const getSkills = () => {
    axios
      .get("http://127.0.0.1:3000/api/skills")
      .then((result) => {
        setSkills(result.data);
      })
      .catch((err) => console.error(err));
  };

  const myClickAdd = () => {
    axios
      .post("http://127.0.0.1:3000/api/steps", {
        title,
        checked,
        skill: selectedSkill,
      })
      .then((result) => {
        console.log(result);
        setView(!view);
      })
      .catch((err) => console.log(err));
  };

  const deleteStep = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/steps/${id}`)
      .then((result) => {
        setView(!view);
      })
      .catch((err) => console.log(err));
  };

  const updateClick = (id, title) => {
    axios
      .put(`http://127.0.0.1:3000/api/steps/${id}`, { title: newTitle })
      .then((result) => {
        console.log(result);
        setView(!view);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row justify="center" align="middle">
      <Col span={6} offset={9}>
        <div>
          <Select
            onChange={(value) => setSelectedSkill(value)}
            placeholder="Select a skill"
            value={selectedSkill}
            style={{ width: 200 }}
          >
            {skills.map((element) => (
              <Select.Option value={element.id}>{element.title}</Select.Option>
            ))}
          </Select>
          <Input
            onChange={(event) => setTitle(event.target.value)}
            className="Steps"
            placeholder="New Step"
          />
          <Checkbox
            onChange={(event) => setChecked(event.target.value)}
            defaultChecked={false}
            className="newStep-checkbox"
          >
            Checked
          </Checkbox>
        </div>
        <Button onClick={myClickAdd} type="primary">
          <PlusCircleOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default list;
