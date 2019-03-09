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
            <div>
                <span> {this.state.name} </span>
                <Button type="primary" onClick={this.props.cancel.bind(this)}>hahahah</Button>
                <textarea value={this.state.name} onChange={this.textareaChange.bind(this)}></textarea>
                {this.props.children}
            </div>
        )
    }
}

export default Content