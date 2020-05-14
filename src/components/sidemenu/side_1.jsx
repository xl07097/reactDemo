/* eslint-disable indent */
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Menu } from "antd";
import { asynRouter } from "@/router/router";

const style = {
    width: 234,
};

function getOpenkeys(key) {
    let openKeys = key.split("/").map((item, index, arr) => {
        return arr.slice(0, index + 1).join("/");
    });
    openKeys.shift();
    return openKeys;
}
function Side(props) {
    const { location } = props;

    const defaultSelectedKeys = [location.pathname];

    let openKey = getOpenkeys(location.pathname);

    let defaultOpenKeys = openKey;
    let [openKeys, setOpenKeys] = useState(openKey);
    // let openKeys = getOpenkeys(location.pathname)

    // let [selectKeys, setSelectKeys] = useState([location.pathname])
    let selectKeys = [location.pathname];

    function titleClick({ key }) {
        let openKeys = getOpenkeys(key);
        setOpenKeys(openKeys);
    }

    function renderSubMenu(route, parentRoute) {
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
                        onTitleClick={titleClick}
                    >
                        {item.children && renderSubMenu(item.children, newPath)}
                    </Menu.SubMenu>
                );
            } else {
                return (
                    <Menu.Item path={newPath} key={newPath}>
                        <Link to={newPath}>
                            <Icon type="mail" />
                            <span>{item.meta.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
        });
    }

    function clickMenu({ item, key, keyPath, domEvent }) {
        setOpenKeys(keyPath.reverse());
        console.log(keyPath);
    }

    const openKeyProps = props.collapse ? {} : { openKeys };

    return (
        <Menu
            theme="dark"
            mode="inline"
            {...openKeyProps}
            // onOpenChange={openChange}
            // defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            selectedKeys={selectKeys}
            // openKeys={openKeys}
            onClick={clickMenu}
        >
            {renderSubMenu(asynRouter, "/")}
        </Menu>
    );
}
export default connect((state) => ({
    collapse: state.collapse,
    mode: state.collapse ? "vertical" : "inline",
}))(withRouter(Side));
// export default withRouter(Side);
