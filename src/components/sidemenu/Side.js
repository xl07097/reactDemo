import React from 'react';
import { Link} from 'react-router-dom';
import { Menu} from 'antd';

import routes from '@/router/index';

function renderSubMenu(route){
    return route.map(item => {
        if (item.childRoutes){
            return (<Menu.SubMenu key={item.path} title={item.meta.title}>
                {item.childRoutes && renderSubMenu(item.childRoutes)}
                </Menu.SubMenu>)
        }else{
            return (<Menu.Item key={item.path}>
                    <Link to={item.path}>{item.meta.title}</Link>
            </Menu.Item>)
        }
    })
}
function renderItemMenu(){

}

function Side(props){
    return (<div className='sidebar' style={{width:234}}>
        <Menu theme="dark" mode="inline">
            {
                renderSubMenu(routes)
            }
        </Menu>
    </div>)
}

export default Side;