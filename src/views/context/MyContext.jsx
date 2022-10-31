import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import { context } from "./context";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent(props) {
  let [value, setValue] = useState(["jack", "tom"]);
  let [value1, setValue1] = useState(895);
  function pushs() {
    const arr = ["lpl", ...value];
    setValue(arr);
  }

  function push1() {
    const arr = Math.random().toFixed(4);
    setValue1(arr);
  }

  return (
    <context.Provider value={value}>
      <Row gutter={16}>
        <Col span={4}>
          <Child1></Child1>
        </Col>
        <Col span={4}>
          <Child2></Child2>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={pushs}>
            添加
          </Button>
        </Col>
        <Col span={4}>
          <span>{value1}</span>
          <Button type="primary" onClick={push1}>
            添加
          </Button>
        </Col>
      </Row>
    </context.Provider>
  );
}
