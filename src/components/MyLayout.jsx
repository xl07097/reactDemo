/* eslint-disable indent */
import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import Headers from "@/components/header/Header";
import MyContents from "@/views/content/Content";
import MySide from "@/components/sidemenu/MySide.jsx";

const { Content, Sider } = Layout;

const style = {
    boxShadow: "2px 0 6px rgba(0, 21, 41, .35)",
};

function MyLayout(props) {
    const { collapse } = props;
    return (
        <Layout style={{ minHeight: "calc(100%)" }}>
            <Headers></Headers>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapse} width={234} style={style}>
                    <MySide collapsed={collapse}></MySide>
                </Sider>
                <Content>
                    <MyContents></MyContents>
                </Content>
            </Layout>
        </Layout>
    );
}

export default connect((state) => ({ collapse: state.collapse }))(MyLayout);
