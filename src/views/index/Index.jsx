import React from "react";
import { Row, Col, Card, Statistic, Icon} from "antd";

const responsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: {
        marginBottom: '20px'
    }
};

function Index() {
    return (
        <div style={{ textAlign: "center" }}>
            <Row gutter={20}>
                <Col {...responsiveProps}>
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
                <Col {...responsiveProps}>
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
                <Col {...responsiveProps}>
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
                <Col {...responsiveProps}>
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
            </Row>
        </div>
    );
}

export default Index;