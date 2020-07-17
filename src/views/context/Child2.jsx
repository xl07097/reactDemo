import React from "react";
import { context } from "./context";

export default class Child2 extends React.Component {
    render() {
        return (
            <div style={{padding:'0 10px'}}>
                <span style={{ wordBreak: "break-all" }}>{this.context}</span>
            </div>
        );
    }
}
Child2.contextType = context;
