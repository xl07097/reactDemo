import React from "react";
import "font-awesome/css/font-awesome.min.css";
import emoji from "./emoji";
import "./icon.css";


function RenderIcon() {
    let arr = Array.from(new Set(emoji["font-awesome"]));

    return (
        <div style={{background:"rgba(256,256,256,0.4)",textAlign:"justify",minHeight: "calc(100%)"}}>
            {arr.map(item => {
                let key = `${item}${~~(Math.random()*1000000)}`;
                return <i key={key} className={`fa fa-${item} fa-3x item`} aria-hidden="true"></i>;
            })}
        </div>
    );
}

export default RenderIcon;