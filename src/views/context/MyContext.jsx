import React, { useState } from "react";
import { Col, Row, Button } from "antd";
import { context } from "./context";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent(props) {
    let [value, setValue] = useState(["jack", "tom"]);
    function pushs() {
        const arr = ["lpl", ...value];
        setValue(arr);
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
                <Col>
                    <Button type="primary" onClick={pushs}>
                        添加
                    </Button>
                </Col>
            </Row>
        </context.Provider>
    );
}
