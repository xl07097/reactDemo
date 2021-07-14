import React, { useState } from "react";
import Person from "./Person";
import { Button } from "antd";

const Index = () => {
    let [count, setCount] = useState(10);
    function random() {
        setCount(~~(Math.random()*20));
    }
    return (
        <>
            <Button type="primary" onClick={random}>
                随机数
            </Button>
            <Person size={count}></Person>
        </>
    );
};

export default Index;
