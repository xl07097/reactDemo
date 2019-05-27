import React from 'react';
import { Link} from 'react-router-dom';
import { Button } from 'antd';

class Other extends React.Component {
    constructor(props) {
        super(props);
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
