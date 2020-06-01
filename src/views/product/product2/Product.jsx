import React from 'react';
import { Table, Pagination, Button, Modal, Input, Row, Col, Upload, Icon, Progress, Popconfirm, message } from 'antd';

import { getUserList } from '@/api/product';
import { switchUserStatus } from '@/api/user';
import { timetrans } from '@/utils/dateUtils'
class Product extends React.Component {
    columns = [
        {
            title: '序号',
            type: 'index',
            key: 'index',
            render: (data, record, index) => {
                return index + 1;
            }
        },
        {
            title: '姓名',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            render: (data, record, index) => {
                return data === 1 ? '男' : '女';
            }
        },
        {
            title: '头像',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (data, record, index) => {
                return <img src={data} alt={record.name} title={record.name} style={{ width: '40px' }} />;
            }
        },
        {
            title: "添加时间",
            dataIndex: "createtime",
            render: (data, record, index) => {
                return timetrans(data);
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (data, record, index) => {
                return data === 1 ? '启用' : '禁用';
            }
        },
        {
            title: '操作',
            dataIndex: 'action',
            width: 260,
            key: 'action',
            render: (data, record, index) => {
                let msg = record.status ? '确定禁用？' : '确定启用？';
                return (
                    <div>
                        <Button type="primary" onClick={() => this.edit(record)}>编辑</Button>
                        &emsp;
                        <Popconfirm placement="top" title={msg} onConfirm={() => this.switch(record)}>
                            <Button type="danger">{record.status === 1 ? '禁用' : '启用'}</Button>
                        </Popconfirm>
                        &emsp;
                        <Popconfirm placement="top" title="确定删除？" onConfirm={() => this.delete(record)}>
                            <Button type="danger">删除</Button>
                        </Popconfirm>
                    </div>
                );
            }
        }
    ]

    state = {
        tableData: [],
        visible: false,
        loading: true,
        page: 1,
        size: 15,
        total: 0,
        pageSizeOptions: ['15', '20', '50'],
        percent: 0
    }

    search = (page, size) => {

        let req = {
            page,
            size
        };
        getUserList(req).then(data => {
            this.setState({
                loading: false
            });
            if (data.code === 200) {
                this.setState({
                    tableData: data.data,
                    total: data.length
                });
                window.scrollTo(0, 0);
            }
        });
    }

    onShowSizeChange = (page, size) => {
        this.setState({
            page: 1,
            size
        });
        this.search(1, size);
    }

    pageChange = (page) => {
        this.setState({
            page
        });
        const { size } = this.state;
        this.search(page, size);
    }

    componentDidMount = () => {
        const { page, size } = this.state;
        this.search(page, size);
    }

    edit = (data) => {
        this.setState({
            visible: true
        });
    }

    delete = (data) => {
        console.log(data);
    }

    onUploadChange = ({ file, fileList, event }) => {
        if (file.status === 'uploading') {
            if (event) {
                let percent = (event.loaded / event.total) * 100;
                this.setState({
                    percent: Number(percent.toFixed(0))
                })
            } else {
                this.setState({
                    percent: 0
                })
            }
        } else if (file.status === 'done') {
            let res = file.response;
            if (res.code === 200) {
                let data = res.data[0];
                console.log(data);
            }
        }
    }

    confirms = () => {
        this.setState({
            visible: false
        });
    }

    switch = (row) => {
        let status = row.status === 1 ? 2 : 1;
        switchUserStatus({ id: row._id, status: status }).then(data => {
            if (data.code === 200) {
                message.success('用户状态修改成功');
                const { page, size } = this.state;
                this.search(page, size);
            } else {
                message.error('用户状态修改失败');
            }
        });
    }

    modalCancel = () => {
        this.setState({
            visible: false
        });
    }

    render() {

        const { tableData, page, size, total, pageSizeOptions, loading, visible, percent } = this.state;
        const columns = this.columns;
        return (
            <>
                <Table bordered={true} rowKey="id" dataSource={tableData} columns={columns} pagination={false} loading={loading}></Table>
                <div className="page">
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        onChange={this.pageChange}
                        pageSizeOptions={pageSizeOptions}
                        current={page}
                        pageSize={size}
                        total={total}
                    />
                </div>
                <Modal
                    title="编辑"
                    keyboard={false}
                    maskClosable={false}
                    destroyOnClose={true}
                    visible={visible}
                    onOk={this.confirms}
                    onCancel={this.modalCancel}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Input></Input>
                        </Col>
                        <Col span={12}>
                            <Upload
                                // action={`${path.BASE_URI}${path.upload}`}
                                action="http://localhost:3000/api/upload/uploadfile"
                                onChange={this.onUploadChange}>
                                <Button>
                                    <Icon type="upload" /> 上传
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
            </>
        );
    }
}

export default Product;
