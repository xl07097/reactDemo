import React from 'react';
import { Carousel } from 'antd';

const styleImg = {
    // width: '100%'
}
function Swipper(props) {
    return (
        <div>
            {/* <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel> */}
            <Carousel autoplay effect="fade">
                <div>
                    <img style={styleImg} src={require("@/assets/portfolio/1200x900/01.jpg")} alt="01" />
                </div>
                <div>
                    <img style={styleImg} src={require("@/assets/portfolio/1200x900/4.jpg")} alt="01" />
                </div>
                <div>
                    <img style={styleImg} src={require("@/assets/portfolio/1200x900/5.jpg")} alt="01" />
                </div>
                <div>
                    <img style={styleImg} src={require("@/assets/portfolio/1200x900/6.jpg")} alt="01" />
                </div>
            </Carousel>
        </div>
    )
}

export default Swipper;
