import React from "react";


function Product(props) {
    console.log(props);
    return (<h2>product1{props.children}</h2>);
}

export default Product;