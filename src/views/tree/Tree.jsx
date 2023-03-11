import React, { useState, useEffect } from 'react'
import { Tree } from 'antd'
import { post } from '@/http/request'

const { TreeNode } = Tree

function updateTreeData(list, id, children) {
  return list.map((node) => {
    if (node.id === id) {
      return {
        ...node,
        children,
      }
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, id, children),
      }
    }
    return node
  })
}

function Tree1(props) {
  let [treeData, setTreeData] = useState([])
  let [checkedKeys, setCheckedKeys] = useState([])
  let [expandedKeys, setExpandedKeys] = useState([])
  let [autoExpandParent, setAutoExpandParent] = useState(true)

  useEffect(() => {
    post('/sysArea/list', { size: 100, parentCode: '0' }).then((res) => {
      setTreeData(res.data.records || [])
    })
  }, [])

  function onCheck(checkedKeys) {
    console.log(checkedKeys)
    setCheckedKeys(checkedKeys)
  }

  function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  function onSelect(selectedKeys, info) {
    console.log(selectedKeys, info)
  }

  function loadData(node) {
    return new Promise((resolve) => {
      post('/sysArea/list', {
        parentCode: node.areaCode,
        size: 100,
      }).then((res) => {
        console.log(res)
        if (res.data.length === 0) {
          resolve()
          return
        }
        setTreeData((origin) => {
          return updateTreeData(origin, node.id, res.data.records || [])
        })
        resolve()
      })
    })
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
        title: 'name',
        key: 'id',
        children: 'children',
      }}
    ></Tree>
  )
}

export default Tree1
