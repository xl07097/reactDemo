import React from 'react';
import { Row, Col, Card } from 'antd';

function RenderButton() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Row gutter={20}>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default RenderButton;