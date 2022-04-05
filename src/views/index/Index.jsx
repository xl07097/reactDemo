import React from "react";
import { Row, Col } from "antd";

import TopRow from "./TopRow";
import MyCalendar from "./calendar/MyCalendar";
// import ChartLine from './chart/ChartLine';
import Swipper from "./Swipper";

import "./index.less";

function Index() {
  return (
    <div style={{ textAlign: "center" }}>
      <TopRow></TopRow>
      <Row gutter={16}>
        <Col span={24}>
          <MyCalendar></MyCalendar>
        </Col>
      </Row>
      <Row gutter={16}>
        {/* <Col span={12}>
                    <ChartLine></ChartLine>
                </Col> */}
        <Col span={12}>
          <Swipper></Swipper>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
