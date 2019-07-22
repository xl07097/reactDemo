import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

import { asynRouter } from '@/router/router';
const style = {
    width: 234
}


class Side extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // defaultSelectedKeys: [props.location.pathname],
            // defaultOpenKeys: [],
            selectKeys: [props.location.pathname],
            openKeys: []
        }
    }
    componentDidMount() {
        const { history, location } = this.props;
        let openKeys = this.getOpenkeys(location.pathname);
        this.setState({
            // defaultOpenKeys: openKeys,
            openKeys: openKeys
        })


        history.listen((item) => {

            let openKeys = this.getOpenkeys(item.pathname);
            this.setState({
                selectKeys: [item.pathname],
                openKeys: openKeys
            })
        })
    }
    titleClick = ({ key, domEvent }) => {
        let openKeys = this.getOpenkeys(key);
        this.setState({
            openKeys: openKeys
        })
    }
    getOpenkeys = (key) => {
        let openKeys = key.split('/').map((item, index, arr) => {
            return arr.slice(0, index + 1).join("/");
        })
        openKeys.shift()
        return openKeys;
    }
    clickMenu = ({ item, key, keyPath, domEvent }) => {

    }
    openChange = (openKeys) => {
        this.setState({
            openKeys: openKeys
        })
    }
    renderSubMenu = (route, parentRoute) => {
        return route.map(item => {
            if (item.path === '*') {
                return null;
            }
            let newPath;
            if (/^\//.test(item.path)) {
                newPath = `${item.path}`;
            } else {
                newPath = `${parentRoute}/${item.path}`;
            }
            newPath = newPath.replace(/\/+/g, '/');
            if (item.children) {
                return (<Menu.SubMenu path={newPath} key={newPath} title={item.meta.title}
                    onTitleClick={this.titleClick}>
                    {item.children && this.renderSubMenu(item.children, newPath)}
                </Menu.SubMenu>)
            } else {
                return (<Menu.Item path={newPath} key={newPath}>
                    <Link to={newPath}>{item.meta.title}</Link>
                </Menu.Item>)
            }
        })
    }

    render() {
        return (<div className='sidebar' style={style}>
            <Menu theme="dark" mode="inline"
                onOpenChange={this.openChange}
                // defaultSelectedKeys={this.state.defaultSelectedKeys}
                // defaultOpenKeys={this.state.defaultOpenKeys}
                selectedKeys={this.state.selectKeys}
                openKeys={this.state.openKeys}
            >
                {
                    this.renderSubMenu(asynRouter, '/')
                }
            </Menu>
        </div>)
    }
}

export default withRouter(Side);