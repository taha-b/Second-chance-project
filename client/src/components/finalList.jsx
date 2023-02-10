import React from "react";
import "antd/dist/antd.css";
import { Button, Row, Col, Table } from "antd";

const finalList = () => {
  const columns = [
    {
      title: "steps",
      dataIndex: "id",
    },
    {
      title: "name",
      dataIndex: "step",
    },
  ];
  const dataSource = [
    {
      id: 1,
      step: "step",
    },
    {
      id: 2,
      step: "step2",
    },
  ];
  return (
    <Row justify="center" align="middle">
      <Col span={6} offset={9}>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{ type: "checkbox" }}
        ></Table>
      </Col>
    </Row>
  );
};

export default finalList;
