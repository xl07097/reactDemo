import React from 'react';
import { Spin } from 'antd';

function RenderIcon() {
    return (
        <div style={{background:'rgba(256,256,256,0.4)',textAlign:'center',height: 'calc(100%)',paddingTop:100}}>
            <Spin size="large"></Spin>
        </div>
    )
}

export default RenderIcon;