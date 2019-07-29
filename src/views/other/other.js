import React, { useState } from "react";
import { Button } from "antd";

function Other(props) {
    let [count, setCount] = useState([]);
    function randoms() {
        window.console.time("label");
        let arr = [];
        function r() {
            let n = ~~(Math.random() * 5000);
            if (arr.indexOf(n) !== -1) {
                return r();
            }
            return n;
        }
        let i = 0;
        while (i < 80) {
            arr.push(r());
            i++;
        }

        setCount(arr);
        window.console.timeEnd("label");
        window.console.log(Array.from(Array.apply(null, { length: 10 }).keys()));
    }

    return (
        <div style={{ width: 800, margin: "auto" }}>
            <Button type="primary" onClick={randoms}>下一个</Button>
            <ul style={{textAlign:"jutisfy"}}>
                {count.map(item => {
                    return (<li style={{display:"inline-block",padding:"0 10px"}} key={item}>{item}</li>);
                })}
            </ul>
            {props.children}
        </div>
    );
}


export default Other;
