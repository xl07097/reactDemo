import React, { Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';
import Router from '@/router/index'

const Chart = lazy(() => import('@/components/charts/Chart'));
const Charts = lazy(() => import('@/components/charts/Charts'));
const Other = lazy(() => import('@/views/other/other'));

import './content.less';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        let arr = [12, 12, 13, 2, 6, 5, 2, 3, 6, 56, 23, 126, 2, 6, 5, 2];

        console.log(Array.from(new Set([...arr])));
    }

    render() {
        return (
            <main className="main-container">
                <Suspense fallback={<div>Loading...</div>}>
                    {this.props.children}
                    <Router></Router>
                </Suspense>
            </main>
        )
    }
}

export default Content