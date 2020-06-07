import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Icon, Drawer } from "antd";
import ModifyPassword from "@/components/password/ModifyPassword";

import "./header.less";

function Header(props) {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("menu-fold");
    const { dispatch } = props;

    function onClose() {
        setVisible(false);
    }

    function open() {
        setVisible(true);
    }
    function collapse() {
        dispatch({
            type: "collapse",
        });
        setType(type === "menu-fold" ? "menu-unfold" : "menu-fold");
    }

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <h1 className="header-title">创客</h1>
                    <Link to="/">index</Link>
                    <Link to="/chart">chart</Link>
                    <Link to="/other">other</Link>
                    <Link to="/other/chart">link4</Link>

                    <span style={{marginLeft:'10px'}}>
                        <Icon type={type} style={{ fontSize: "22px" }} onClick={collapse} />
                    </span>
                </div>
                <div className="header-right">
                    <Icon type="bars" onClick={open} style={{ fontSize: "20px" }} />
                </div>
            </header>
            <Drawer visible={visible} onClose={onClose} maskClosable={false} destroyOnClose={true}>
                <ModifyPassword onClose={onClose}></ModifyPassword>
            </Drawer>
        </>
    );
}

export default connect(null)(Header);
