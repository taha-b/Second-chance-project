import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Timeline, Space, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import e from "cors";

const EditPage = () => {
  const [skills, setSkills] = useState([]);

  const deleteSkill = (skillId) => {
    console.log("fired");
    axios
      .delete(`http://127.0.0.1:3000/api/skill/${skillId}`)
      .then(() => {
        console.log("zae");
        getSkills();
      })
      .catch((err) => console.log());
  };

  const deleteStep = (stepId) => {
    axios
      .delete(`http://127.0.0.1:3000/api/step/${stepId}`)
      .then((result) => {
        getSkills();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    axios
      .get("http://127.0.0.1:3000/api/skill/relation")
      .then((result) => {
        const skills = [];
        result.data.forEach((skill) => {
          skills[skill.skillId] = {
            id: skill.skillId,
            title: skill.skillTitle,
            discription: skill.discription,
            steps: [],
          };
        });

        result.data.forEach((step) => {
          skills[step.skillId].steps.push({
            id: step.stepId,
            title: step.stepTitle,
            checked: step.checked,
          });
        });

        setSkills(skills);
      })
      .catch((err) => console.error(err));
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
      <Row>
        {skills
          .filter((e) => {
            return e;
          })
          .map((skill) => {
            return (
              <Col span={6} offset={3}>
                <div
                  className="forms"
                  style={{
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <ul key={skill.id}>
                    <li>
                      <Space align="center">
                        <h1 className="skill">{skill.title}</h1>
                        <Link to={"/skillForm/" + skill.id}>
                          <Button type="primary">
                            <EditOutlined />
                          </Button>
                        </Link>

                        <Button
                          type="primary"
                          onClick={() => deleteSkill(skill.id)}
                        >
                          <DeleteOutlined />
                        </Button>
                      </Space>
                    </li>
                    {skill.steps
                      .filter((e) => {
                        return e;
                      })
                      .map((step) => {
                        return (
                          <div>
                            <Space align="center">
                              <Timeline.Item
                                key={step.id}
                                color={step.checked ? "green" : "gray"}
                              >
                                {step.title}
                              </Timeline.Item>
                              <Link to={"/stepForm/" + step.id}>
                                <Button type="primary">
                                  <EditOutlined />
                                </Button>
                              </Link>

                              <Button
                                type="primary"
                                onClick={() => deleteStep(step.id)}
                              >
                                <DeleteOutlined />
                              </Button>
                            </Space>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default EditPage;
