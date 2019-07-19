import React from 'react';
import {Layout} from 'antd'

import Headers from '../components/header/header'
import Contents from './content/Content'
// import Footers from "../components/footer/footer";
import Side from '@/components/sidemenu/Side'


const {Content, Sider } = Layout;

const style = {
    boxShadow: '2px 0 6px rgba(0, 21, 41, .35)'
}

function App(){
    return (
        <div style={{display:'flex',minHeight: 'calc(100%)'}}>
            <Layout>
                <Headers></Headers>
                <Layout>
                    <Sider width={234} style={style}>
                        <Side></Side>
                    </Sider>
                    <Content>
                        <Contents name="jack1">

                        </Contents>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default App;
