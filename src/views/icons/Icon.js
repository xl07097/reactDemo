import React from 'react';
import { Spin } from 'antd';

function RenderIcon() {
    return (
        <div style={{textAlign:'center',height: '100%',paddingTop:100}}>
            <Spin></Spin>
        </div>
    )
}

export default RenderIcon;