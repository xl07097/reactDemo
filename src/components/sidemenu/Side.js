import React,{useState, Component} from 'react';
import { Link ,withRouter} from 'react-router-dom';
import { Menu} from 'antd';

import routes from '@/router/router';

// function renderSubMenu(route, parentRoute){
//     return route.map(item => {
//         if (item.path === '*'){
//             return null;
//         }
//         let newPath;
//         if (/^\//.test(item.path)) {
//             newPath = `${item.path}`;
//         } else {
//             newPath = `${parentRoute}/${item.path}`;
//         }
//         newPath = newPath.replace(/\/+/g, '/');
//         if (item.childRoutes){
//             return (<Menu.SubMenu key={newPath} title={item.meta.title}>
//                 {item.childRoutes && renderSubMenu(item.childRoutes, newPath)}
//                 </Menu.SubMenu>)
//         }else{
//             return (<Menu.Item key={newPath}>
//                 <Link to={newPath}>{item.meta.title}</Link>
//             </Menu.Item>)
//         }
//     })
// }

// function Side(props){
//     const { history } = props;
//     const [selectKeys,setSelectKeys] = useState([])
//     const [openKeys, setOpenKeys] = useState([])
//     history.listen(function(p){
//         console.log(p);
//         setSelectKeys([p.pathname]);
//     })
//     return (<div className='sidebar' style={{width:234}}>
//         <Menu theme="dark" mode="inline" 
//             defaultSelectedKeys={selectKeys}
//             defaultOpenKeys={openKeys}>
//             {
//                 renderSubMenu(routes, '/')
//             }
//         </Menu>
//     </div>)
// }



class Side extends Component{
    constructor(props){
        super(props)
        console.log(props)
        let openKeys = this.getOpenkeys(props.location.pathname);
        this.state = {
            defaultSelectedKeys: [props.location.pathname],
            defaultOpenKeys: openKeys,
            selectKeys: [props.location.pathname],
            openKeys: openKeys
        }
    }
    componentDidMount(){
        console.log(this.state)
        const { history } = this.props;
        history.listen((item) => {
            let openKeys = this.getOpenkeys(item.pathname);
            this.setState({
                selectKeys: [item.pathname],
                openKeys: openKeys
            })
        })
    }
    titleClick = ({ key, domEvent })=>{
        let openKeys = this.getOpenkeys(key);
        this.setState({
            openKeys: openKeys
        })
    }
    getOpenkeys = (key) =>{
        let openKeys = key.split('/').map((item, index, arr) => {
            return arr.slice(0, index + 1).join("/");
        })
        openKeys.shift()
        return openKeys;
    }
    clickMenu = ({ item, key, keyPath, domEvent }) => {

    }
    openChange = (openKeys) =>{
        console.log(openKeys)
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
            if (item.childRoutes) {
                return (<Menu.SubMenu path={newPath} key={newPath} title={item.meta.title}
                    onTitleClick={this.titleClick}>
                    {item.childRoutes && this.renderSubMenu(item.childRoutes, newPath)}
                </Menu.SubMenu>)
            } else {
                return (<Menu.Item path={newPath} key={newPath}>
                    <Link to={newPath}>{item.meta.title}</Link>
                </Menu.Item>)
            }
        })
    }

    render(){
        return (<div className='sidebar' style={{ width: 234 }}>
            <Menu theme="dark" mode="inline"
                onClick={this.clickMenu}
                onOpenChange={this.openChange}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                defaultOpenKeys={this.state.defaultOpenKeys}
                selectedKeys={this.state.selectKeys}
                openKeys={this.state.openKeys}
                >
                {
                    this.renderSubMenu(routes, '/')
                }
            </Menu>
        </div>)
    }
}

export default withRouter(Side);