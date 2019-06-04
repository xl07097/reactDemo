import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Chart from '@/components/Chart';
import Charts from '@/components/Charts';
import Other from '@/views/other/other';
import routes from '@/router/index'

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
    renderRouter = (route) => {
        let r = route.map(item => {

            if (item.component && item.childRoutes) {
                const child = this.renderRouter(item.childRoutes)
                if (item.path === '/') {
                    return (<Route key={item.path} exact path="/">index</Route>)
                } else {
                    return (<Route key={item.path} path={item.path} render={props => <item.component {...props}>{child}</item.component>}></Route>)
                }
            } else if (item.component) {
                if (item.path === '/') {
                    return (<Route key={item.path} exact path="/">index</Route>)
                } else {
                    return (<Route key={item.path} path={item.path} component={item.component}></Route>)
                }
            } else if (item.childRoutes) {
                
            }

        })
        console.log(r)
        return r
    }

    render() {
        return (
            <main className="main-container">
                {this.props.children}
                <Switch>
                    <Route key='/' exact path="/">index</Route>
                    <Route path="/chart" exact component={Chart}></Route>
                    
                    <Route path="/other" exact component={Other}></Route>
                    <Route path="/other/chart" exact component={Charts}></Route>
                </Switch>
             
            </main>
        )
    }
}

export default Content