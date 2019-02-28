import React from 'react';

import Header from './header/header'
import Content from './content/Content'
import { Button } from 'antd'

class HelloMessage extends React.Component {
    cancel(){
        console.log(this)
        console.log(90)
    }
    render() {
        return (
            <div> 
                <Header></Header>
                <Button type="primary">Primary</Button>
                <Content cancel={this.cancel.bind(this)} name="jack1">ahhaha</Content>
            </div>
        );
    }
}

export default HelloMessage
