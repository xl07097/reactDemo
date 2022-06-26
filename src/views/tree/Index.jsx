import React from "react";
import { Row, Col } from "antd";

import Tree from "./Tree";

function Index() {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Tree></Tree>
      </Col>
    </Row>
  );
}

export default Index;
