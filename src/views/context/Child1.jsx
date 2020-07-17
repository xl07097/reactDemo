import React from "react";
import { context } from "./context";

export default class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.context);
    }
    render() {
        console.log(this.context);
        return (
            <div style={{ padding: "0 10px" }}>
                <span style={{ wordBreak: "break-all" }}>{this.context}</span><br/>
                <context.Consumer>{(value) => {
                        console.log(value)
                    return <span>{value}</span>
                    }
                }</context.Consumer>
            </div>
        );
    }
}
Child1.contextType = context;
