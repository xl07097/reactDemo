import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Drawer } from 'antd';
import ModifyPassword from '@/components/password/ModifyPassword'

import './header.less'


function Header() {
    const [visible, setVisible] = useState(false)

    function onClose() {
        setVisible(false)
    }

    function open() {
        setVisible(true)
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
                </div>
                <div className="header-right">
                    <Icon type="bars" onClick={open} />
                </div>
            </header>
            <Drawer visible={visible} onClose={onClose} maskClosable={false} destroyOnClose={true}>
                <ModifyPassword onClose={onClose}></ModifyPassword>
            </Drawer>
        </div>
    )
}

export default Header