import React, {useState,useEffect} from "react";
import "./footer.less";

function Footer (){
    const [count, setCount] = useState(0);

    return (
        <footer className="footer" onClick={() => setCount(count+1)}>{count}</footer>
    );
}

export default Footer;