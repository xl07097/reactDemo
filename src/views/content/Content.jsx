import React from 'react';
import {Button} from 'antd';
import Chart from '@/components/Chart.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    textareaChange = e =>{
        this.setState({
            name: e.target.value
        })
    }
    componentDidMount(){
        console.log(this.props)
        let arr = [12,12,13,2,6,5,2,3,6,56,23,126,2,6,5,2];

        console.log(Array.from(new Set([...arr])));

        let tObj = {};

        arr.forEach((item,index) => {
            tObj[item] = item;
        })

        console.log(Object.values(tObj));  // 改变数组顺序
    }

    cancel = () => {
        this.props.cancel();
    }

    render() { 
       return (
            <div style={{width:800,margin: 'auto'}}>
                <span> {this.state.name} </span> <br />
                <Button type="primary" onClick={this.cancel}>hahahah</Button> <br />
                <textarea value={this.state.name} onChange={this.textareaChange}></textarea> <br />
                {this.props.children}
            </div>
        )
    }
}

export default Content