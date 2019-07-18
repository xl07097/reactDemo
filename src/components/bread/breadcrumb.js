import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import { asynRouter } from '@/router/router'


// class MyBread extends React.Component {

// }


function itemRender(route, params, routes, paths) {
    console.log(route);
    // console.log(params);
    // console.log(routes);
    // console.log(paths);

    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.meta.title}</span>
    ) : (
            <Link to={paths.join('/')}>{route.meta.title}</Link>
        );
}


function MyBread(props) {

    // const { location } = props;
    // const locationArr = location.pathname.split('/').filter(i => i);

    // let breadcrumbItems = locationArr.map((item, index, arr) => {
    //     let key = arr.slice(0, index + 1).join('/');
    //     return (
    //         <Breadcrumb.Item key={key}>
    //             <Link to={`/${key}`}>{item}</Link>
    //         </Breadcrumb.Item>
    //     )
    // })
    // breadcrumbItems.unshift((
    //     <Breadcrumb.Item key="home">
    //         <Link to="/">Home</Link>
    //     </Breadcrumb.Item>
    // ))


    // return (
    //     <div style={{ padding: '8px 6px',marginBottom:'8px', background: '#FFFFFF' }}>
    //         <Breadcrumb>
    //             {breadcrumbItems}
    //         </Breadcrumb>
    //     </div>
    // )

    return <Breadcrumb itemRender={itemRender} routes={asynRouter} />;

}

export default withRouter(MyBread)