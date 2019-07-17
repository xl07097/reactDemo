import React from 'react';
import { Spin } from 'antd';
import 'font-awesome/css/font-awesome.min.css'
import emoji from './emoji';
import './icon.css'


function RenderIcon() {
    return (
        <div style={{background:'rgba(256,256,256,0.4)',textAlign:'justify',minHeight: 'calc(100%)',paddingTop:100}}>
            {emoji['font-awesome'].map(item => {
                let key = `${item}${~~(Math.random()*1000000)}`;
                return <span key={key} className="fa fa-3x" className={`fa fa-${item} fa-3x item`}></span>
            })}
        </div>
    )
}

export default RenderIcon;