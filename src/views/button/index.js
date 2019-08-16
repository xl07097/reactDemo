import React, { lazy, Suspense } from "react";
import { Spin } from 'antd';

const Button1 = lazy(() => import('./Button1'));
const Button2 = lazy(() => import('./Button2'));
const Button3 = lazy(() => import('./Button3'));
// import Button1 from "./Button1";
// import Button2 from "./Button2";
// import Button3 from "./Button3";

function RenderButtonGroup() {
    return (<div>
        <Suspense fallback={<Spin />}>
            <Button1 />
        </Suspense>

        <br />
        <Button2 /> 
        <br />
        <Button3 />
    </div>);
}

export default RenderButtonGroup;
