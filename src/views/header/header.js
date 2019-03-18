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
        return (
        <header className="App-header">
            <h1 className="App-title">创客</h1>
            <ul className="app-logout">
                <li>退出</li>
            </ul>
        </header>
        )
    }
}
export default Header