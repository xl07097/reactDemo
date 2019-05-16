import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import Chart from '@/components/Chart.js';

class Other extends React.Component {
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
            <div style={{ width: 800, margin: 'auto' }}>

                <Button type="primary">hahahah</Button>
                {this.props.children}

            </div>
        )
    }
}

export default withRouter(Other)
