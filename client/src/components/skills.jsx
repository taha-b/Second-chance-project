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

const skills = ({ data }) => {
  const [dataSkills, setDataSkills] = useState([]);
  const [newView, setNewView] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [dataSteps, setDataSteps] = useState([]);

  useEffect(() => {
    getData();
    getSteps();
  }, [newView]);

  const getData = () => {
    axios
      .get("http://127.0.0.1:3000/api/skills")
      .then((result) => {
        setDataSkills(result.data);
      })
      .catch((err) => console.log(err));
  };

  const getSteps = () => {
    axios
      .get("http://127.0.0.1:3000/api/steps")
      .then((result) => {
        setDataSteps(result.data);
      })
      .catch((err) => console.log(err));
  };

  const myClickAdd = () => {
    axios
      .post("http://127.0.0.1:3000/api/skills", { title: newTitle })
      .then((result) => {
        console.log(result);
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };

  const deleteClick = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/skills/${id}`)
      .then((result) => {
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };
  const updateClick = (id, title) => {
    axios
      .put(`http://127.0.0.1:3000/api/skills/${id}`, { title: newTitle })
      .then((result) => {
        console.log(result);
        setNewView(!newView);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {dataSkills.map((element, i) => {
        console.log("nt");
        return (
          <ul key={i}>
            <div>
              <li>
                <h1 className="skill">{element.title}</h1>
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
                    updateClick(element.id, newTitle);
                  }}
                  type="primary"
                >
                  <SettingOutlined />
                </Button>
              </li>
            </div>
            {dataSteps.map((element, i) => {
              console.log(element);
              return (
                <Timeline.Item color="green">{element.title}</Timeline.Item>
              );
            })}
          </ul>
        );
      })}
      <Row justify="center" align="middle">
        <Col span={6} offset={9}>
          <div>
            <Input
              onChange={(event) => setNewTitle(event.target.value)}
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
