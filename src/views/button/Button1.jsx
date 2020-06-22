import React from "react";
import { Button } from "antd";

function RenderButton() {
    return (
        <div style={{padding:"10px 0",textAlign:"center",background:'#ccc'}}>
            <Button type="primary">primary</Button>
            <Button>默认</Button>
            <Button type="dashed">虚线</Button>
            <Button type="danger">危险</Button>
            <Button type="link">链接</Button>
            <Button ghost>幽灵</Button>
        </div>
    );
}

export default RenderButton;