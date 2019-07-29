import React from "react";
import { Route, Switch} from "react-router-dom";
import { routes, asynRouter} from "./router";
const allRouter = [...asynRouter, ...routes];
function renderRoutes(routes, rootPath){
    let child = [];

    function renderRoute(route, parentPath){
        let childPath; 
        if (/^\//.test(route)){
            childPath = `${route.path}`;
        }else{
            childPath = `${parentPath}/${route.path}`;
        }
    
        childPath = childPath.replace(/\/+/g, "/");

        if (route.component && route.children){
            let children = renderRoutes(route.children, childPath);

            child.push(<Route
                key={childPath}
                meta={route}
                render={props => <route.component {...props}>{children}</route.component>}
                path={childPath}>
            </Route>);
        } else if (route.component){
            child.push(<Route meta={route} path={childPath} component={route.component} key={childPath} exact></Route>);
        } else if (route.children){
            route.children.map(item => renderRoute(item, childPath));
        }
    }
    routes.map(item => renderRoute(item, rootPath));

    return child;
}


export default function Router(props){
    // 还需要处理权限，拉取 权限 过滤路由
    let child = renderRoutes(allRouter, "/");
    return <Switch>{child}</Switch>;
}
