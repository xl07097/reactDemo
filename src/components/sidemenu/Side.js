import React from 'react';
import { Link} from 'react-router-dom';
import { Menu} from 'antd';

import routes from '@/router/router';

function renderSubMenu(route, parentRoute){
    return route.map(item => {
        if (item.path === '*'){
            return null;
        }
        let newPath;
        if (/^\//.test(item.path)) {
            newPath = `${item.path}`;
        } else {
            newPath = `${parentRoute}/${item.path}`;
        }
        newPath = newPath.replace(/\/+/g, '/');
        if (item.childRoutes){
            return (<Menu.SubMenu key={newPath} title={item.meta.title}>
                {item.childRoutes && renderSubMenu(item.childRoutes, newPath)}
                </Menu.SubMenu>)
        }else{
            return (<Menu.Item key={newPath}>
                <Link to={newPath}>{item.meta.title}</Link>
            </Menu.Item>)
        }
    })
}

function Side(props){
    return (<div className='sidebar' style={{width:234}}>
        <Menu theme="dark" mode="inline">
            {
                renderSubMenu(routes, '/')
            }
        </Menu>
    </div>)
}

export default Side;