import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { getAllMenu } from '@/api/menu';

// import { getUserList } from '@/api/product'


function Product(props) {
    let [treeData, setTreeData] = useState([]);
    let [checkedKeys, setCheckedKeys] = useState([]);
    let [expandedKeys, setExpandedKeys] = useState([]);
    let [autoExpandParent, setAutoExpandParent] = useState(true);

    
    function getMenu() {
        getAllMenu()
            .then(data => {
                if (data.code === 200) {
                    let json = data.data.map((item) => {
                        return {
                            id: item._id,
                            title: item.title,
                            path: item.path,
                            key: item.path,
                            pid: item.pid, icon: item.icon,
                            createtime: item.createtime,
                            status: item.status
                        }
                    });
                    let zNodes = json;
                    let tmpMap = {};
                    let r = [];
                    let key = 'id';
                    let parentKey = 'pid';
                    let childKey = 'children';

                    for (let i = 0, l = zNodes.length; i < l; i++) {
                        tmpMap[zNodes[i][key]] = zNodes[i];
                    }

                    for (let i = 0, l = zNodes.length; i < l; i++) {
                        if (tmpMap[zNodes[i][parentKey]] && zNodes[i][key] !== zNodes[i][parentKey]) {
                            if (!tmpMap[zNodes[i][parentKey]][childKey])
                                tmpMap[zNodes[i][parentKey]][childKey] = [];
                            tmpMap[zNodes[i][parentKey]][childKey].push(zNodes[i]);
                        } else {
                            r.push(zNodes[i]);
                        }
                    }
                    setTreeData(r)
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

export default Product
