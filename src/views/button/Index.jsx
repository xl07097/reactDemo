import React, { lazy, Suspense } from "react";
import { Row, Col } from "antd";

import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

function RenderButtonGroup() {
  return (
    <div>
      <Row gutter={24}>
        <Col span={8}>
          <Button1 />
        </Col>
        <Col span={8}>
          <Button2 />
        </Col>
        <Col span={8}>
          <Button3 />
        </Col>
      </Row>
    </div>
  );
}

export default RenderButtonGroup;
