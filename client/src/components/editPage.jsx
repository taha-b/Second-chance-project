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
  const { userId } = JSON.parse(localStorage.getItem("user"))[0];

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
      .get("http://127.0.0.1:3000/api/skill/relation/" + userId)
      .then((result) => {
        setSkills(result.data);
        console.log(result.data);
        // const skills = [];
        // result.data.forEach((skill) => {
        //   skills[skill.skillId] = {
        //     id: skill.skillId,
        //     title: skill.skillTitle,
        //     discription: skill.discription,
        //     steps: [],
        //   };
        // });

        // result.data.forEach((step) => {
        //   skills[step.skillId].steps.push({
        //     id: step.stepId,
        //     title: step.stepTitle,
        //     checked: step.checked,
        //   });
        // });
        // setSkills(skills);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'url("https://cdn.discordapp.com/attachments/802193325754810441/1074496375565328445/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg")',
        backgroundSize: "cover",
      }}
    >
      {skills
        .filter((e) => {
          return e;
        })
        .map((skill) => {
          return (
            <div className="forms-skill">
              <ul key={skill.skillId}>
                <li>
                  <Space align="center">
                    <h1 className="skill">{skill.skillTitle}</h1>
                    <Link to={"/skillForm/" + skill.skillId}>
                      <Button type="primary">
                        <EditOutlined />
                      </Button>
                    </Link>

                    <Button
                      type="primary"
                      onClick={() => deleteSkill(skill.skillId)}
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
                            color={step.checked ? "green" : "red"}
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
          );
        })}
    </div>
  );
};

export default EditPage;
