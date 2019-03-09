import React, {
    Component
} from 'react';
import {Button} from 'antd';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    textareaChange(e){
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
                <Button type="primary" onClick={this.props.cancel.bind(this)}>hahahah</Button> <br />
                <textarea value={this.state.name} onChange={this.textareaChange.bind(this)}></textarea> <br />
                {this.props.children}
            </div>
        )
    }
}

export default Content