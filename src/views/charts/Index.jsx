import React from 'react';
import { Row, Col } from 'antd';


import Chart1 from './Chart';
import Chart2 from './Charts';

function ChartIndex() {
    return (
        <React.Fragment>
            <Row style={{'textAlign':'center'}}>
                <Col span={12}>
                    <Chart1></Chart1>
                </Col>
                <Col span={12}>
                    <Chart2></Chart2>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ChartIndex;
