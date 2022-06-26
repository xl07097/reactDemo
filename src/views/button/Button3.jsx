import React, { useState } from "react";
import { Button, Radio } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function RenderButton() {
  const [size, setSize] = useState("small");

  return (
    <div>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <Button.Group>
        <Button type="primary" size={size}>
          <LeftOutlined />
          Backward
        </Button>
        <Button type="primary" size={size}>
          <RightOutlined />
          Forward
        </Button>
      </Button.Group>
    </div>
  );
}

export default RenderButton;
