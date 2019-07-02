import React, { Suspense} from 'react';
import {Spin} from 'antd';
import Router from '@/router/index';

import './content.less';

function Content(){
    return (
        <main className="main-container">
            <Suspense fallback={<Spin />}>
                <Router></Router>
            </Suspense>
        </main>
    )
}

export default Content