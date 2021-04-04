import React from 'react';
import { Row, Col, Card, Statistic } from "antd";
import { ArrowUpOutlined }from "@ant-design/icons"
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

function TopRow() {
    return (
        <Row gutter={20}>
            <Col {...responsiveProps}>
                <Card bordered={false} className="blue">
                    <Statistic
                        title="交易量"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <div className="more">
                        <span>View more</span>
                        <i className="r-icon r-icon-white"></i>
                    </div>
                </Card>
            </Col>
            <Col {...responsiveProps}>
                <Card bordered={false} className="red">
                    <Statistic
                        title="订单量"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <div className="more">
                        <span>View more</span>
                        <i className="r-icon r-icon-white"></i>
                    </div>
                </Card>
            </Col>
            <Col {...responsiveProps}>
                <Card bordered={false} className="green">
                    <Statistic
                        title="订单量"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <div className="more">
                        <span>View more</span>
                        <i className="r-icon r-icon-white"></i>
                    </div>
                </Card>
            </Col>
            <Col {...responsiveProps}>
                <Card bordered={false} className="purple">
                    <Statistic
                        title="订单量"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                    <div className="more">
                        <span>View more</span>
                        <i className="r-icon r-icon-white"></i>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default TopRow;