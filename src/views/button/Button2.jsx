import React from "react";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

function RenderButton() {
    return (
        <div>
            <Button type="primary" shape="circle"><SearchOutlined /></Button>&emsp;
            <Button type="default" shape="circle"><SearchOutlined /></Button>&emsp;
            <Button><SearchOutlined />默认</Button>
        </div>
    );
}

export default RenderButton;
