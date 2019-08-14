import React from "react";
import { Row, Col, Card, Statistic, Icon} from "antd";

function Index() {
    return (
        <div style={{ textAlign: "center" }}>
            <Row gutter={20}>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="交易量"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic
                            title="订单量"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Index;