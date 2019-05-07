import React from 'react';
import {Button} from 'antd';
import Chart from '@/components/Chart.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
        this.cancel = this.props.cancel;
    }

    textareaChange = e =>{
        this.setState({
            name: e.target.value
        })
    }
    componentDidMount(){
        console.log(this.props)
    }

    render() { 
       return (
            <div style={{width:800,margin: 'auto'}}>
                <span> {this.state.name} </span> <br />
                <Button type="primary" onClick={this.props.cancel}>hahahah</Button> <br />
                <textarea value={this.state.name} onChange={this.textareaChange}></textarea> <br />
                {this.props.children}
                <Chart></Chart>
            </div>
        )
    }
}

export default Content