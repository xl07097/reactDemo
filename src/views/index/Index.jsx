import React from "react";
import { Row, Col } from "antd";

import TopRow from './TopRow';
import MyCalendar from './calendar/MyCalendar';
// import ChartLine from './chart/ChartLine';


import './index.less';


function Index() {
    return (
        <div style={{ textAlign: "center" }}>
            <TopRow></TopRow>
            <Row gutter={16}>
                <Col span={12}>
                    <MyCalendar></MyCalendar>
                </Col>
                <Col span={12}>
                    {/* <ChartLine></ChartLine> */}
                </Col>
            </Row>
        </div>
    );
}

export default Index;
