import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Timeline, Space, Row, Col, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const Skills = () => {
  const { userId } = JSON.parse(localStorage.getItem("user"))[0];
  const [skills, setSkills] = useState([]);
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
      <ul className="nav">
        <li>
          <Button type="primary">
            <Link to="/skillForm" className="skillLink">
              Add Skill
            </Link>
          </Button>
        </li>

        <li>
          <Button type="primary">
            <Link to="/stepForm">Add Step</Link>
          </Button>
        </li>
        <li>
          <Link to="/editPage">
            <Button type="primary">Update</Button>
          </Link>
        </li>
      </ul>

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

export default Skills;
