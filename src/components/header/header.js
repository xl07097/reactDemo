import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { Icon, Drawer } from "antd";
import ModifyPassword from "@/components/password/ModifyPassword";

import "./header.less";


function Header(props) {
    const [visible, setVisible] = useState(false);
    const { dispatch } = props;

    function onClose() {
        setVisible(false);
    }

    function open() {
        setVisible(true);
    }
    function collapse() {
        dispatch({
            type: 'collapse'
        });
    }

    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <h1 className="header-title">创客</h1>
                    <Link to="/">index</Link>
                    <Link to='/chart'>chart</Link>
                    <Link to='/other'>other</Link>
                    <Link to='/other/chart'>link4</Link>
                    {/**    
                    <a href="javascript:void(0)">
                        <Icon type="bars" style={{ fontSize: '22px', color: '#08c' }} onClick={collapse}></Icon>
                    </a> 
                    */} 
                
                </div>
                <div className="header-right">
                    <Icon type="bars" onClick={open} />
                </div>
            </header>
            <Drawer visible={visible} onClose={onClose} maskClosable={false} destroyOnClose={true}>
                <ModifyPassword onClose={onClose}></ModifyPassword>
            </Drawer>
        </div>
    );
}

export default connect(null)(Header);