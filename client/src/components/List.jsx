import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Input, Row, Col, Timeline, Checkbox } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const list = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const [newStep, setNewStep] = useState("");

  useEffect(() => {
    getSteps();
  }, [view]);

  const getSteps = () => {
    axios
      .get("http://127.0.0.1:3000/api/steps")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.log(err));
  };

  const myClickAdd = () => {
    axios
      .post("http://127.0.0.1:3000/api/steps", { title: newStep })
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
        {data.map((element, i) => {
          return <Timeline.Item color="green">{element.title}</Timeline.Item>;
        })}
        <Input
          onChange={(event) => setNewStep(event.target.value)}
          className="Steps"
          placeholder="New Step"
        />
        <Button onClick={myClickAdd} type="primary">
          <PlusCircleOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default list;
