import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Chart from '@/components/Chart';
import Other from '@/views/other/other';

import './content.less';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
        let arr = [12, 12, 13, 2, 6, 5, 2, 3, 6, 56, 23, 126, 2, 6, 5, 2];

        console.log(Array.from(new Set([...arr])));

        let tObj = {};

        arr.forEach((item, index) => {
            tObj[item] = item;
        })

        console.log(Object.values(tObj));  // 改变数组顺序
    }

    render() {
        return (
            <main className="main-container">
                {this.props.children}
                <Switch>
                    <Route exact path="/">
                        index
                    </Route>
                    <Route path="/chart" component={Chart}></Route>
                    <Route path="/other" component={Other}></Route>
                    
                </Switch>
                
            </main>
        )
    }
}

export default Content