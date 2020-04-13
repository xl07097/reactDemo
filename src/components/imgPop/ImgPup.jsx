import React from "react";

const divStyle = {
    position: "fixed",
    lineHeight: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 33333,
    textAlign: 'center',
    background: "rgba(0, 0, 0, 0.2)"
};
const imgStyle = {
    width: '75%',
    height: '75%'
}
const closeStyle = {
    position: 'absolute',
    right: '10%',
    top: '10%',
    width: '60px',
    height: '60px'
}
function ImgPup(props) {
    return (
        <div style={divStyle}>
            <div style={closeStyle} className="imgClose">
                <Icon type="close" />
            </div>
            <img style={imgStyle} src={props.src} alt={props.name} title={props.name}/>
        </div>
    );
}

export default ImgPup;