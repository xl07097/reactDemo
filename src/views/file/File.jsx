import React from "react";
import { Table, Pagination, Button, Popconfirm, Image } from "antd";

import { getFileList, deletefile } from "@/api/file";

class File extends React.Component {
  columns = [
    {
      title: "序号",
      key: "index",
      width: 60,
      align: "center",
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
    size: 20,
    total: 0,
    pageSizeOptions: ["20", "50", 100],
  };

  search = () => {
    const { page, size } = this.state;
    getFileList({ page, size }).then((res) => {
      this.setState({
        loading: false,
      });
      if (res.code === 200) {
        const { records = [], total } = res.data;
        this.setState({
          tableData: records,
          total: total,
        });
        window.scrollTo(0, 0);
      }
    });
  };

  pageChange = (page, size) => {
    this.setState(
      {
        page,
        size,
      },
      () => {
        this.search();
      }
    );
  };

  componentDidMount = () => {
    this.search();
  };

  edit = (data) => {
    this.setState({
      visible: true,
    });
  };

  delete = (data) => {
    deletefile(data).then((res) => {
      if (res.code == 200) {
        this.search();
      }
    });
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
