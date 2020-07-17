import React from "react";

function High(Wrapper) {
    return class extends React.Component {
        render() {
            return <Wrapper lp="lp" {...this.props}></Wrapper>;
        }
    };
}

export default High;
