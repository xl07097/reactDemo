/* eslint-disable indent */
import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import Headers from "../components/header/Header";
import Contents from "./content/Content";
// import Footers from "../components/footer/footer";
import Side from "@/components/sidemenu/Side.jsx";

const { Content, Sider } = Layout;

const style = {
    boxShadow: "2px 0 6px rgba(0, 21, 41, .35)",
};

function App(props) {
    const { collapse } = props;
    return (
        <>
            <Layout style={{ display: "flex", minHeight: "calc(100%)" }}>
                <Headers></Headers>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapse} width={234} style={style}>
                        <Side></Side>
                    </Sider>
                    <Content>
                        <Contents name="jack1"></Contents>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default connect((state) => ({ collapse: state.collapse }))(App);
