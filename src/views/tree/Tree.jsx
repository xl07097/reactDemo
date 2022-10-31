import React, { useState, useEffect } from "react";
import { Tree } from "antd";
import { getAllMenu } from "@/api/menu";
import json from "./data";
import { post } from "@/http/request";

// import array2Tree from '@/utils/treeUtils';

const { TreeNode } = Tree;

function updateTreeData(list, id, children) {
  return list.map((node) => {
    if (node.id === id) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, id, children),
      };
    }
    return node;
  });
}

function Tree1(props) {
  let [treeData, setTreeData] = useState([]);
  let [checkedKeys, setCheckedKeys] = useState([]);
  let [expandedKeys, setExpandedKeys] = useState([]);
  let [autoExpandParent, setAutoExpandParent] = useState(true);

  function getMenu() {
    // console.log(json);
    console.log(json);
    const data = json.data.map((item) => {
      return {
        key: item.id,
        title: item.name,
        ...item,
      };
    });
    setTreeData(json.data);
    // getAllMenu()
    //     .then(data => {
    //         if (data.code === 200) {
    //             setTreeData(data.data);
    //             // setTreeData(array2Tree(data.data));
    //         }
    //     })
  }

  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children && item.children.length) {
        return (
          <TreeNode title={<span>{item.name}</span>} key={item.id}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={<span>{item.name}</span>} key={item.id} {...item} />;
    });
  };

  useEffect(() => {
    // getMenu({})
    post("/sysArea/list", {}).then((res) => {
      setTreeData(res.data || []);
    });
  }, []);

  function onCheck(checkedKeys) {
    console.log(checkedKeys);
    setCheckedKeys(checkedKeys);
  }

  function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  }

  function onSelect(selectedKeys, info) {
    console.log(selectedKeys, info);
  }

  function loadData(node) {
    console.log(node);
    return new Promise((resolve) => {
      post("/sysArea/list", {
        parentCode: node.areaCode,
      }).then((res) => {
        if (res.data.length === 0) {
          resolve();
          return;
        }
        setTreeData((origin) => {
          return updateTreeData(origin, node.id, res.data || []);
        });
        resolve();
      });
    });
  }

  return (
    <Tree
      checkable
      onExpand={onExpand}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      expandedKeys={expandedKeys}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      loadData={loadData}
      treeData={treeData}
      fieldNames={{
        title: "name",
        key: "id",
        children: "children",
      }}
    >
      {/* {renderTreeNodes(treeData)} */}
    </Tree>
  );
}

export default Tree1;
