import React from 'react';
import { Button } from 'antd';

class Other extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: []
        };
    }
    componentDidMount() {

    }
    randoms = () => {
        console.time("label")

        let t = [];
        function r() {
            let n = ~~(Math.random() * 5000);
            if (t.indexOf(n) !== -1) {
                return r();
            }
            return n;
        }
        for (let i = 0; i < 80; i++) {
            t.push(r())
        }
        this.setState({
            count: t
        })
        console.timeEnd("label")
        console.log(Array.from(Array(10).keys()))
    }
    render() {
        let count = this.state.count;
        return (
            <div style={{ width: 800, margin: 'auto' }}>
                <Button type="primary">hahahah</Button>
                <Button type="primary" onClick={this.randoms}>下一个</Button>
                <ul>
                    {count.map(item => {
                        return (<li key={item}>{item}</li>)
                    })}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Other
