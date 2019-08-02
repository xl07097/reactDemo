import React from 'react';
import { Table, Pagination, Button, Modal, Input } from 'antd';

import dbUtil from '@/utils/dbUtil';
import { getUserList } from '@/api/product';

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
            dataIndex: 'name',
            key: 'name'
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
                return <img src={data} title='avatar' style={{ width: '40px' }} />;
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
            key: 'action',
            render: (data, record, index) => {
                return <Button onClick={() => this.edit(record)}>编辑</Button>;
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
        pageSizeOptions: ['15', '20', '50']
    }

    db = '';

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
                    total: data.total
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

        this.db = openDatabase("car", '1.0', 'Test DB', 20 * 1024 * 1024);
        this.db.transaction(async (tx) => {
            await dbUtil(tx, 'CREATE TABLE IF NOT EXISTS user (_id unique, name, password,age,avatar,gender,status,createtime)');
        });
    }

    edit = (data) => {
        this.setState({
            visible: true
        });
     
        this.db.transaction(async (tx) => {
            await dbUtil(tx, 'CREATE TABLE IF NOT EXISTS user (_id unique, name, password,age,avatar,gender,status,createtime)');
            let result = await dbUtil(tx, 'select * from user where _id=?', [data['_id']]);

            if (!result.rows.length) {
                let res = await dbUtil(tx, 'INSERT INTO user(_id, name, password, age, avatar, gender, status, createtime) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [data['_id'], data['name'], data['password'], data['age'], data['avatar'], data['gender'], data['status'], data['createtime']]);

                // insertId: 5
                // rows: SQLResultSetRowList { length: 0 }
                // rowsAffected: 1
            }
        });
    }

    confirms = () => {
        this.setState({
            visible: false
        });
    }

    modalCancel = () => {
        this.setState({
            visible: false
        });
    }

    render() {

        const { tableData, page, size, total, pageSizeOptions, loading } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Table bordered={true} rowKey="_id" dataSource={tableData} columns={columns} pagination={false} loading={loading}></Table>
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
                    visible={this.state.visible}
                    onOk={this.confirms}
                    onCancel={this.modalCancel}>
                    <Input></Input>
                </Modal>
            </div>
        );
    }
}

export default Product;
