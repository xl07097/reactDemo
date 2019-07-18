import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import { asynRouter } from '@/router/router';
let menu = new Map();

function po(router, path){
    router.forEach(element => {
        let key = '';
        if(element.path){
            key = `${path}/${element.path}`;
            key = key.replace(/\/+/, '/');
            menu.set(key, element.meta.title);
        }
        let children = element.children || [];
        po(children, key);
    });
}
po(asynRouter, '');

function MyBread(props) {

    // function itemRender(route, params, routes, paths) {
    //     console.log(route);
    //     // console.log(params);
    //     // console.log(routes);
    //     // console.log(paths);
    //     // console.log(routes.indexOf(route))
    //     const last = routes.indexOf(route) === routes.length - 1;
    //     return last ? (
    //         <span>{route.meta.title}</span>
    //     ) : (
    //             <Link to={paths.join('/')}>{route.meta.title}</Link>
    //         );
    // }

    const { location } = props;
    const locationArr = location.pathname.split('/').filter(i => i);

    let breadcrumbItems = locationArr.map((item, index, arr) => {
        let key = arr.slice(0, index + 1).join('/');
        return (
            <Breadcrumb.Item key={key}>
                <Link to={`/${key}`}>{menu.get(`/${key}`)}</Link>
            </Breadcrumb.Item>
        )
    })
    breadcrumbItems.unshift((
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    ))


    return (
        <div style={{ padding: '8px 6px',marginBottom:'8px', background: '#FFFFFF' }}>
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    )

    // return <Breadcrumb itemRender={itemRender} routes={asynRouter} />;

}

export default withRouter(MyBread)