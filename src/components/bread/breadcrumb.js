import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Breadcrumb } from 'antd';


// class MyBread extends React.Component {

// }

function MyBread(props) {

    const { location } = props;
    const locationArr = location.pathname.split('/').filter(i => i);

    let breadcrumbItems = locationArr.map((item, index, arr) => {
        let key = arr.slice(0, index + 1).join('/');
        return (
            <Breadcrumb.Item key={key}>
                <Link to={`/${key}`}>{item}</Link>
            </Breadcrumb.Item>
        )
    })
    breadcrumbItems.unshift((
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    ))


    return (
        <div style={{ padding: '8px 6px', background: '#FFFFFF' }}>
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    )
}

export default withRouter(MyBread)