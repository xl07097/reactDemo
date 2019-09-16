import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { getAllMenu } from '@/api/menu';

import array2Tree from '@/utils/treeUtils';


function Tree1(props) {
    let [treeData, setTreeData] = useState([]);
    let [checkedKeys, setCheckedKeys] = useState([]);
    let [expandedKeys, setExpandedKeys] = useState([]);
    let [autoExpandParent, setAutoExpandParent] = useState(true);


    function getMenu() {
        getAllMenu()
            .then(data => {
                if (data.code === 200) {
                    setTreeData(array2Tree(data.data));
                }
            })
    }

    useEffect(() => {
        getMenu({})
    }, [])

    function onCheck(checkedKeys) {

        setCheckedKeys(checkedKeys);
    }

    function onExpand(expandedKeys) {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    }

    return (
        <Tree
            checkable
            onExpand={onExpand}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            expandedKeys={expandedKeys}
            checkedKeys={checkedKeys}
            treeData={treeData}
        >
        </Tree>
    )
}

export default Tree1
