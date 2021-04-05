import React, { useState } from "react";

import { Modal, Input, Row, Col, Upload, Progress, Button } from "antd";
import {UploadOutlined } from "@ant-design/icons"
import url from "@/utils/urls";

function BaseModal(props) {
    let [percent, setPercent] = useState(0);
    const modalClose = props.modalClose;
    function confirms() {
        setPercent(0);
        modalClose(false)
    }
    
    function modalCancel() {
        setPercent(0);
        modalClose(false);
    }

    function onUploadChange({ file, fileList, event }) {
        if (file.status === "uploading") {
            if (event) {
                let percent = (event.loaded / event.total) * 100;
                setPercent(Number(percent.toFixed(0)));
            } else {
                setPercent(0);
            }
        } else if (file.status === "done") {
            let res = file.response;
            if (res.code === 200) {
                let data = res.data;
                console.log(data);
            }
        }
    }

    return (
        <Modal
            title="编辑"
            keyboard={false}
            maskClosable={false}
            destroyOnClose={true}
            visible={props.visible}
            onOk={confirms}
            onCancel={modalCancel}
        >
            <Row gutter={24}>
                <Col span={12}>
                    <Input></Input>
                </Col>
                <Col span={12}>
                    <Upload
                        action={`${url.upload}`}
                        name="upfile"
                        headers={{
                            token: "dc91f324d3a641209a4b129ee1261ec7",
                        }}
                        onChange={onUploadChange}
                    >
                        <Button>
                            <UploadOutlined /> 上传
                        </Button>
                    </Upload>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12} offset={12}>
                    <Progress type="circle" percent={percent} />
                </Col>
            </Row>
        </Modal>
    );
}

export default BaseModal;
