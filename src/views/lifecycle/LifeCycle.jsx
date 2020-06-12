import React from "react";
import { Button } from "antd";
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "jack",
        };
        console.log("constructor===>>");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps===>>");
        console.log(props);
        console.log(state);
        return {
            pa: 10,
        };
    }
    componentDidMount() {
        console.log("componentDidMount===>>");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate===>>");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate===>>");
        console.log(prevProps);
        console.log(prevState);
        return prevState.name;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate===>>");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount===>>");
    }
    componentDidCatch(err, info) {
        console.log("componentDidCatch===>>");
        console.log(err);
        console.log(info);
    }

    index = () => {
        this.setState({
            name: "tom",
        });
    };
    render() {
        console.log("render===>>");
        return (
            <div className="haha" style={{ textAlign: "center" }}>
                <h1>组件内生命周期</h1>
                <span>{this.state.name}</span>
                <pre>打开控制台，看打印</pre>
                <Button type="primary" onClick={this.index}>
                    变化
                </Button>
            </div>
        );
    }
}
export default LifeCycle;
