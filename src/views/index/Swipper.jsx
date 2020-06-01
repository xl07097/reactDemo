import React from "react";
import { Carousel } from "antd";


function Swipper(props) {
    return (
        <Carousel auto effect="fade">
            <div>
                <img src={require("@/assets/portfolio/1200x900/01.jpg")} alt="01" />
            </div>
            <div>
                <img src={require("@/assets/portfolio/1200x900/8.jpg")} alt="01" />
            </div>
            <div>
                <img src={require("@/assets/portfolio/1200x900/5.jpg")} alt="01" />
            </div>
            <div>
                <img src={require("@/assets/portfolio/1200x900/6.jpg")} alt="01" />
            </div>
        </Carousel>
    );
}

export default Swipper;
