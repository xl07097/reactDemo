import React from 'react';
import { Route, Switch} from 'react-router-dom';
import router from './router';

function renderRoutes(routes, contextPath){
    let child = [];

    function renderRoute(route, path){
        let childPath; 
        if (/^\//.test(route)){
            childPath = `${route.path}`;
        }else{
            childPath = `${path}/${route.path}`;
        }
    
        childPath = childPath.replace(/\/+/g, '/');

        if (route.component && route.childRoutes){
            let childRoutes = renderRoutes(route.childRoutes, childPath);

            child.push(<Route key={childPath} exact
                render={props => <route.component {...props}>{childRoutes}</route.component>}
                path={childPath}>
                </Route>)
        } else if (route.component){
            child.push(<Route key={childPath} path={childPath} component={route.component} exact></Route>)
        } else if (route.childRoutes){
            route.childRoutes.map(item => renderRoute(item, childPath))
        }
    }
    routes.map(item => renderRoute(item, contextPath));

    return child
}


export default function Router(props){
    // 还需要处理权限，拉取 权限 过滤路由
    let child = renderRoutes(router, '/');
    return <Switch>{child}</Switch>
}
