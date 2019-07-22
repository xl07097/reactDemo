import React,{useState} from 'react';
import { Button } from 'antd';

function Other(props){
    let [count, setCount] = useState([]);
    function randoms(){
        console.time("label")
        let arr = [];
        function r() {
            let n = ~~(Math.random() * 5000);
            if (arr.indexOf(n) !== -1) {
                return r();
            }
            return n;
        }
        for (let i = 0; i < 80; i++) {
            arr.push(r())
        }
        setCount(arr)
        console.timeEnd("label")
        console.log(Array.from(Array.apply(null, { length: 10 }).keys()))
    }

    return (
        <div style={{ width: 800, margin: 'auto' }}>
            <Button type="primary">hahahah</Button>
            <Button type="primary" onClick={randoms}>下一个</Button>
            <ul>
                {count.map(item => {
                    return (<li key={item}>{item}</li>)
                })}
            </ul>
            {props.children}
        </div>
    )
}


export default Other
