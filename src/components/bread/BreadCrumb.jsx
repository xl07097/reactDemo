import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import BreadMap from "./breadRouterMap";

function MyBread(props) {
  const { location } = props;
  const locationArr = location.pathname.split("/").filter((i) => i);

  let breadcrumbItems = locationArr.map((item, index, arr) => {
    let key = arr.slice(0, index + 1).join("/");
    return (
      <Breadcrumb.Item key={key}>
        <span>{BreadMap.get(`/${key}`)}</span>
        {/**<Link to={`/${key}`}>{BreadMap.get(`/${key}`)}</Link> */}
      </Breadcrumb.Item>
    );
  });
  breadcrumbItems.unshift(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  );

  return (
    <div style={{ padding: "8px 6px", marginBottom: "8px", background: "#FFFFFF" }}>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
}

export default withRouter(MyBread);
