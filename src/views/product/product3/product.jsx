import React, { useEffect }from "react";

function Product() {
    let timer = null;
    useEffect(() => {
        timer = setInterval(() => {
            fetch('http://localhost:9087/note/socket/push/1?message=hello')
                .then(data => data.text())
                .then(data => {
                    console.log(data);
                });
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (<h2>product3</h2>);
}

export default Product;