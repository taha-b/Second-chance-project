import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Timeline, Space } from "antd";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import axios from "axios";

const skills = () => {
  const [skills, setSkills] = useState([]);

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
              <h1 className="skill">{skill.title}</h1>
            </li>
            {skill.steps.map((step) => {
              return (
                <Timeline.Item
                  key={step.id}
                  color={step.checked ? "green" : "gray"}
                >
                  {step.title}
                </Timeline.Item>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default skills;
