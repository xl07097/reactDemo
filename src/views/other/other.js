import React from 'react';
import { Button } from 'antd';

class Other extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        fetch("/api/cars/lists", {
            method: "POST",
            headers: {
                "token": "12345678"
            }
        }).then(data => data.json()).then(data => {

            console.log(data)
        })

        console.dir($axios);
    }
    render() {
        return (
            <div style={{ width: 800, margin: 'auto' }}>
                <Button type="primary">hahahah</Button>
                {this.props.children}
            </div>
        )
    }
}

export default Other
