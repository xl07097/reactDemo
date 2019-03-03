import React, {
    Component
} from 'react';

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
                <button onClick={this.props.cancel.bind(this)}>hahahah</button>
                <textarea value={this.state.name} onChange={this.textareaChange.bind(this)}></textarea>
                {this.props.children}
            </div>
        )
    }
}

export default Content