import React from "react";

const CustomRef = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="customRef">333333333333333333333333333333333333
            <h2>Ref 转发简单示例</h2>
        </div>
    );
});

export default CustomRef;
