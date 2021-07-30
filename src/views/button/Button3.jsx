import React,{useState} from "react";
import { Button, Radio } from "antd";

function RenderButton() {
    const [size, setSize] = useState("small");

    return (
        <div>
            <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <Button.Group>
                <Button type="primary" size={size}>
                    {/* <Icon type="left" /> */}
                    Backward
                </Button>
                <Button type="primary" size={size}>
                    Forward
                    {/* <Icon type="right" /> */}
                </Button>
            </Button.Group>
        </div>
    );
}

export default RenderButton;
