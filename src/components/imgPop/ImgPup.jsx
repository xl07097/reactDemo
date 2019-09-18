import React from "react";

const divStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 33333,
    background: "rgba(0, 0, 0, 0.2)"
};

function ImgPup(props) {


    return (
        <div>
            {props.children}
            <div className="img-pup">

            </div>
        </div>
    );
}

export default ImgPup;