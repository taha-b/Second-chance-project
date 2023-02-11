import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Timeline } from "antd";
import {
  UserOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";

const skills = () => {
  const [skills, setSkills] = useState([]);
  const [newView, setNewView] = useState(false);
  const [skillTitle, setSkillTitle] = useState("");
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getData();
    getSteps();
  }, [newView]);

  const getData = () => {
    axios
      .get("http://127.0.0.1:3000/api/skill")
      .then((result) => {
        setSkills(result.data);
      })
      .catch((err) => console.error(err));
  };

  const getSteps = () => {
    axios
      .get("http://127.0.0.1:3000/api/step")
      .then((result) => {
        setSteps(result.data);
      })
      .catch((err) => console.error(err));
  };

  const myClickAdd = () => {
    axios
      .post("http://127.0.0.1:3000/api/skill", { skillTitle })
      .then((result) => {
        console.log(result);
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };

  const deleteClick = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/skill/${id}`)
      .then((result) => {
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };
  const updateClick = (id, title) => {
    axios
      .put(`http://127.0.0.1:3000/api/skill/${id}`, { skillTitle })
      .then((result) => {
        console.log(result);
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {skills.map((element, i) => {
        console.log("nt");
        return (
          <ul key={i}>
            <div>
              <li>
                <h1 className="skill">{element.skillTitle}</h1>
              </li>
            </div>
            <div>
              <li>
                <Button
                  className="delete"
                  onClick={() => {
                    deleteClick(element.id);
                  }}
                  type="primary"
                >
                  <DeleteOutlined />
                </Button>
                <Button
                  className="update"
                  onClick={() => {
                    updateClick(element.id, skillTitle);
                  }}
                  type="primary"
                >
                  <SettingOutlined />
                </Button>
              </li>
            </div>
            {steps.map((element, i) => {
              console.log(element);
              return (
                <Timeline.Item color={element.checked ? "green" : "gray"}>
                  {element.stepTitle}
                </Timeline.Item>
              );
            })}
          </ul>
        );
      })}
      <Row justify="center" align="middle">
        <Col span={6} offset={9}>
          <div>
            <Input
              onChange={(event) => setSkillTitle(event.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="New Skill"
            />
          </div>
          <div>
            <Button
              onClick={myClickAdd}
              className="login-form-button"
              type="primary"
            >
              <PlusCircleOutlined />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default skills;
