import React from 'react';
import './header.less'

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0 
        }
    }
    componentDidMount(){
        setInterval(()=> {
           this.tick();
        },1000)
    }
    tick(){
        this.setState((prev,props) =>({
            count: prev.count+1
        }))
    }
    render() {
        return (<header className="header">
            <h2>创客</h2> 
        </header>)
    }
}
export default Header