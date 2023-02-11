import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Timeline, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const EditPage = () => {
  const [skills, setSkills] = useState([]);

  const deleteSkill = (skillId) => {
    axios
      .delete(`http://127.0.0.1:3000/api/skill/${skillId}`)
      .then(() => {
        getSkills();
      })
      .catch((err) => console.log(err));
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
    <div>
      {skills.map((skill) => {
        return (
          <ul key={skill.id}>
            <li>
              <Space align="center">
                <h1 className="skill">{skill.title}</h1>
                <Link to={"/skillForm/" + skill.id}>
                  <Button type="primary">
                    <EditOutlined />
                  </Button>
                </Link>

                <Button type="primary" onClick={() => deleteSkill(skill.id)}>
                  <DeleteOutlined />
                </Button>
              </Space>
            </li>
            {skill.steps.map((step) => {
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

                    <Button type="primary" onClick={() => deleteStep(step.id)}>
                      <DeleteOutlined />
                    </Button>
                  </Space>
                </div>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default EditPage;
