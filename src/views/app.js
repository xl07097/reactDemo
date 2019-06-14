import React from 'react';
import {Layout} from 'antd'

import Headers from '../components/header/header'
import Contents from './content/Content.jsx'
// import Footers from "../components/footer/footer";
import Side from '@/components/sidemenu/Side.js'

const {Content, Sider } = Layout;

function App(){
    return (
        <div style={{display:'flex',height: '100%'}}>
            <Layout>
                <Headers></Headers>
                <Layout>
                    <Sider width={234}>
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
