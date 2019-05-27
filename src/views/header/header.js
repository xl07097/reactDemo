import React from 'react';
import {Link, IndexLink} from 'react-router-dom';
import './header.less'

class Header extends React.Component {
    
    render() {
        return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-title">创客</h1>
                    <Link to="/">index</Link>
                <Link to='/chart'>chart</Link>
                <Link to='/other'>other</Link>
                <Link to='/other/chart'>link4</Link>
            </div>
           
        </header>
        )
    }
}

export default Header