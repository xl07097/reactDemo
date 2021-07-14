import React from "react";
import { Table, Pagination, Button, Popconfirm, Image } from "antd";

import { getFileList, deletefile } from "@/api/file";

class File extends React.Component {
    columns = [
        {
            title: "序号",
            key: "index",
            width: 60,
            align: 'center',
            render: (data, record, index) => {
                return index + 1;
            },
        },
        {
            title: "预览",
            dataIndex: "url",
            key: "preview",
            width: 160,
            render: (data, record, index) => {
                if (data.endsWith("png") || data.endsWith("jpg") || data.endsWith("jpeg")) {
                    return <Image width={160} src={data} />;
                }
            },
        },
        {
            title: "文件名称",
            dataIndex: "name",
            key: "name",
            width: 100,
            textWrap: "word-break",
        },
        {
            title: "地址",
            dataIndex: "url",
            key: "url",
            width: 300,
            textWrap: "word-break",
        },
        {
            title: "描述",
            dataIndex: "description",
            width: 100,
            key: "description",
        },
        {
            title: "操作",
            dataIndex: "action",
            width: 180,
            key: "action",
            render: (data, record, index) => {
                return (
                    <div>
                        <Button type="primary" onClick={() => this.edit(record)}>
                            编辑
                        </Button>
                        &emsp;
                        <Popconfirm placement="top" title="确定删除？" onConfirm={() => this.delete(record)}>
                            <Button type="danger">删除</Button>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    state = {
        tableData: [],
        visible: false,
        loading: true,
        page: 1,
        size: 15,
        total: 0,
        pageSizeOptions: ["15", "20", "50"],
    };

    search = (page, size) => {
        let req = {
            page,
            size,
        };
        getFileList(req).then((res) => {
            this.setState({
                loading: false,
            });
            if (res.code === 200) {
                const { data = [], total } = res.data;
                this.setState({
                    tableData: data,
                    total: total,
                });
                window.scrollTo(0, 0);
            }
        });
    };

    pageChange = (page, size) => {
        console.log(page, size)
        this.setState({
            page,
            size,
        });
        this.search(page, size);
    };

    componentDidMount = () => {
        const { page, size } = this.state;
        this.search(page, size);
    };

    edit = (data) => {
        this.setState({
            visible: true,
        });
    };

    delete = (data) => {
        console.log(data);
         const { page, size } = this.state;
        deletefile(data).then(res => {
            if (res.code == 200) {
                this.search(page, size);
            }
        })
    };

    render() {
        const { tableData, page, size, total, pageSizeOptions, loading } = this.state;
        const columns = this.columns;
        return (
            <>
                <Table
                    scroll={{ x: "100%" }}
                    bordered={true}
                    rowKey="id"
                    dataSource={tableData}
                    columns={columns}
                    pagination={false}
                    loading={loading}
                ></Table>
                <div className="page">
                    <Pagination
                        showSizeChanger
                        onChange={this.pageChange}
                        pageSizeOptions={pageSizeOptions}
                        current={page}
                        pageSize={size}
                        total={total}
                    />
                </div>
            </>
        );
    }
}

export default File;
