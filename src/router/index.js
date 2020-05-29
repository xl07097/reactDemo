import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes, asynRouter } from "./router";
const allRouter = [...asynRouter, ...routes];
function renderRoutes(routes) {
    let child = [];

    function renderRoute(route) {
        if (route.children) {
            child.push(
                <Route
                    exact={route.exact}
                    key={route.path}
                    meta={route.meta}
                    render={(props) => <route.component {...props}>{renderRoutes(route.children)}</route.component>}
                    path={route.path}
                ></Route>
            );
        } else {
            child.push(
                <Route
                    exact={route.exact}
                    meta={route.meta}
                    path={route.path}
                    component={route.component}
                    key={route.path}
                ></Route>
            );
        }
    }
    routes.map((item) => renderRoute(item));
    return child;
}

export default function Router(props) {
    // 还需要处理权限，拉取 权限 过滤路由
    return <Switch>{renderRoutes(allRouter)}</Switch>;
}
