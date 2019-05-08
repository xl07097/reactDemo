import React from 'react';

import Header from './header/header'
import Content from './content/Content.jsx'

class App extends React.Component {
    cancel = () => {
        console.log(this)
        console.log(90)
    }
    render() {
        return (
            <div> 
                <Header></Header>
                <Content cancel={this.cancel} name="jack1"> <span>haha1</span> <span>hah2</span> </Content>
            </div>
        )
    }
}

export default App
