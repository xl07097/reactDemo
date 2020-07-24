import React, { useState } from "react";
import Person from "./Person";
import { Button } from "antd";

const Index = () => {
    let [count, setCount] = useState(0);
    function random() {
        setCount(Math.random());
    }
    return (
        <>
            <Button type="primary" onClick={random}>
                随机数
            </Button>
            <Person personId={count}></Person>
        </>
    );
};

export default Index;
