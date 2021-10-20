import React from "react";
import { Button } from "antd";

function RenderButton() {
    return (
        <div style={{ padding: "10px 0", textAlign: "center", background: "#ccc" }}>
            <Button type="primary">primary</Button>&emsp;
            <Button>默认</Button>&emsp;
            <Button type="dashed">虚线</Button>&emsp;
            <Button type="danger">危险</Button>&emsp;
            <Button type="link">链接</Button>&emsp;
            <Button ghost>幽灵</Button>
        </div>
    );
}

export default RenderButton;
