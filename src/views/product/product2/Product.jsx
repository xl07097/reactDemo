import React from "react";
import { Table, Pagination, Button, Popconfirm, message, Image } from "antd";
import BaseModal from "./BaseModal";

import { getUserList } from "@/api/product";
import { switchUserStatus } from "@/api/user";
import { timetrans } from "@/utils/dateUtils";

class Product extends React.Component {
  columns = [
    {
      title: "序号",
      key: "index",
      render: (data, record, index) => {
        return index + 1;
      },
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
      render: (data, record, index) => {
        return data === 1 ? "男" : "女";
      },
    },
    {
      title: "头像",
      dataIndex: "avatar",
      key: "avatar",
      with: 110,
      render: (data, record, index) => {
        return <Image src={data} alt={record.name} title={record.name} width={100} />;
      },
    },
    {
      title: "添加时间",
      dataIndex: "createtime",
      render: (data, record, index) => {
        return timetrans(data);
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (data, record, index) => {
        return data === 1 ? "启用" : "禁用";
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      width: 260,
      key: "action",
      render: (data, record, index) => {
        let msg = record.status == 1 ? "确定禁用？" : "确定启用？";
        return (
          <div>
            <Button type="primary" onClick={() => this.edit(record)}>
              编辑
            </Button>
            {/* &emsp;
            <Popconfirm placement="top" title={msg} onConfirm={() => this.switch(record)}>
              <Button type="danger">{record.status === 1 ? "禁用" : "启用"}</Button>
            </Popconfirm> */}
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

    getUserList({ page, size }).then((res) => {
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
        console.log(90);
        this.search();
      }
    );
  };

  componentDidMount = () => {
    this.search();
  };

  edit = (row) => {
    this.setState({
      visible: true,
    });
  };

  delete = (row) => {
    console.log(row);
  };

  modalClose = (flag) => {
    this.setState({
      visible: false,
    });
  };

  switch = (row) => {
    let status = row.status === 1 ? 2 : 1;
    switchUserStatus({ id: row.id, status }).then((data) => {
      if (data.code === 200) {
        message.success("用户状态修改成功");
        this.search();
      } else {
        message.error("用户状态修改失败");
      }
    });
  };

  render() {
    const { tableData, page, size, total, pageSizeOptions, loading, visible } = this.state;
    const columns = this.columns;
    return (
      <>
        <Table
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
        <BaseModal visible={visible} modalClose={this.modalClose}></BaseModal>
      </>
    );
  }
}

export default Product;
