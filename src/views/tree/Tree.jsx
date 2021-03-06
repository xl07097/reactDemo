import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { getAllMenu } from '@/api/menu';
import json from './data';

// import array2Tree from '@/utils/treeUtils';

const { TreeNode } = Tree;

function Tree1(props) {
    let [treeData, setTreeData] = useState([]);
    let [checkedKeys, setCheckedKeys] = useState([]);
    let [expandedKeys, setExpandedKeys] = useState([]);
    let [autoExpandParent, setAutoExpandParent] = useState(true);


    function getMenu() {
        // console.log(json);
        setTreeData(json.data);
        // getAllMenu()
        //     .then(data => {
        //         if (data.code === 200) {
        //             setTreeData(data.data);
        //             // setTreeData(array2Tree(data.data));
        //         }
        //     })
    }

    const renderTreeNodes = data => {
        return data.map(item => {
            if (item.children && item.children.length) {
                return (
                    <TreeNode title={item.name} key={item.id} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode title={item.name} key={item.id} {...item} />;
        });
    }


    useEffect(() => {
        getMenu({})
    }, [])

    function onCheck(checkedKeys) {
        console.log(checkedKeys)
        setCheckedKeys(checkedKeys);
    }

    function onExpand(expandedKeys) {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    }

    function onSelect(selectedKeys, info) {
        console.log(selectedKeys, info)
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
            // treeData={treeData}
        >
            {renderTreeNodes(treeData)}
        </Tree>
    )
}

export default Tree1
