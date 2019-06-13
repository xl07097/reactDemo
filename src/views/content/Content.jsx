import React, { Suspense} from 'react';
import {Spin} from 'antd';
import Router from '@/router/index';

import './content.less';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let arr = [12, 12, 13, 2, 6, 5, 2, 3, 6, 56, 23, 126, 2, 6, 5, 2];
        console.log(Array.from(new Set([...arr])));
    }

    render() {
        return (
            <main className="main-container">
                <Suspense fallback={<Spin />}>
                    <Router></Router>
                </Suspense>
            </main>
        )
    }
}

export default Content