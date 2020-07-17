import React, { useEffect, useRef } from "react";
import CustomRef from "./CustomRef";

function Index() {
    const ref = useRef();
    useEffect(() => {
        console.log(ref.current);
    }, []);
    return (
        <div>
            <CustomRef ref={ref}></CustomRef>
        </div>
    );
}

export default Index;
