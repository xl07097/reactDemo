import React from 'react';
import { Row, Col } from 'antd';

import Tree1 from './Tree';

function Index() {
    return (
        <Row gutter={24}>
            <Col span={6}>
                <Tree1></Tree1>
            </Col>
            <Col span={6}>
                <Tree1></Tree1>
            </Col>
            <Col span={6}>
                <Tree1></Tree1>
            </Col>
            <Col span={6}>
                <Tree1></Tree1>
            </Col>
        </Row>
    )
}

export default Index;