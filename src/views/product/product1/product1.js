import React from "react";


function Product(props) {
    window.console.log(props);
    return (<h2>product1{props.children}</h2>);
}

export default Product;