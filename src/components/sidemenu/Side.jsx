/* eslint-disable indent */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

import { asynRouter } from "@/router/router";
const style = {
  width: 234,
};

class Side extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      defaultSelectedKeys: [props.location.pathname],
      defaultOpenKeys: [],
      selectKeys: [props.location.pathname],
      openKeys: [],
    };
  }

  componentDidMount() {
    const { history, location } = this.props;
    let openKeys = this.getOpenkeys(location.pathname);
    this.setState({
      defaultOpenKeys: openKeys,
      openKeys: openKeys,
    });

    history.listen((item) => {
      let openKeys = this.getOpenkeys(item.pathname);
      this.setState({
        selectKeys: [item.pathname],
        openKeys: openKeys,
      });
    });
  }
  titleClick = ({ key, domEvent }) => {
    let openKeys = this.getOpenkeys(key);
    this.setState({
      openKeys: openKeys,
    });
  };
  getOpenkeys = (key) => {
    let openKeys = key.split("/").map((item, index, arr) => {
      return arr.slice(0, index + 1).join("/");
    });
    openKeys.shift();
    return openKeys;
  };
  clickMenu = ({ item, key, keyPath, domEvent }) => {};
  openChange = (openKeys) => {
    this.setState({
      openKeys: openKeys,
    });
  };
  renderSubMenu = (route, parentRoute) => {
    return route.map((item) => {
      if (item.path === "*") {
        return null;
      }
      let newPath;
      if (/^\//.test(item.path)) {
        newPath = `${item.path}`;
      } else {
        newPath = `${parentRoute}/${item.path}`;
      }
      newPath = newPath.replace(/\/+/g, "/");
      if (item.children) {
        return (
          <Menu.SubMenu
            path={newPath}
            key={newPath}
            title={
              <span>
                <Icon type="mail" />
                <span>{item.meta.title}</span>
              </span>
            }
            onTitleClick={this.titleClick}
          >
            {item.children && this.renderSubMenu(item.children, newPath)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item path={newPath} key={newPath}>
            <Link to={newPath}>{item.meta.title}</Link>
          </Menu.Item>
        );
      }
    });
  };

  render() {
    const { location } = this.props;
    let openKeys = this.getOpenkeys(location.pathname);
    console.log(openKeys);
    console.log(location.pathname);
    return (
      <Menu
        theme="dark"
        mode="inline"
        // inlineCollapsed={collapse}
        onOpenChange={this.openChange}
        // defaultSelectedKeys={location.pathname}
        defaultOpenKeys={openKeys}
        selectedKeys={location.pathname}
        // openKeys={openKeys}
      >
        {this.renderSubMenu(asynRouter, "/")}
      </Menu>
    );
  }
}

export default connect((state) => ({
  collapse: state.collapse,
  mode: state.collapse ? "vertical" : "inline",
}))(withRouter(Side));
