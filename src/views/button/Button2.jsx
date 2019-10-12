import React from "react";
import { Button } from "antd";

function RenderButton() {
    return (
        <div>
            <Button type="primary" shape="circle" icon="search"></Button>
            <Button type="primary" shape="circle" icon="search"></Button>
            <Button icon="search">默认</Button>
        </div>
    );
}

export default RenderButton;