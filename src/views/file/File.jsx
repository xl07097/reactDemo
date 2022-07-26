import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, Popconfirm, Image } from "antd";

import { getFileList, deletefile } from "@/api/file";

const File = function () {
  const [tableData, setTableData] = useState([]);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [total, setTotal] = useState(0);
  const pageSizeOptions = [20, 50, 100];

  useEffect(() => {
    search();
  }, [page, size]);

  function search() {
    getFileList({ page, size }).then((res) => {
      setLoading(false);
      if (res.code === 200) {
        const { records = [], total } = res.data;
        setTableData(records);
        setTotal(total);
        window.scrollTo(0, 0);
      }
    });
  }
  function pageChange(page, size) {
    setPage(page);
    setSize(size);
  }

  function dels(data) {
    debugger;
    deletefile(data.id).then((res) => {
      if (res.code == 200) {
        search();
      }
    });
  }
  const columns = [
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
      render: (data, record, index) => {
        return <span style={{ wordBreak: "break-all", overflowWrap: "break-word" }}>{data}</span>;
      },
    },
    {
      title: "地址",
      dataIndex: "url",
      key: "url",
      width: 300,
      render: (data, record, index) => {
        return <span style={{ wordBreak: "break-all", overflowWrap: "break-word" }}>{data}</span>;
      },
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
          <Popconfirm placement="top" title="确定删除？" onConfirm={() => dels(record)}>
            <Button type="danger">删除</Button>
          </Popconfirm>
        );
      },
    },
  ];

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
          onChange={pageChange}
          pageSizeOptions={pageSizeOptions}
          current={page}
          pageSize={size}
          total={total}
        />
      </div>
    </>
  );
};

export default File;
