import React, { useState, useEffect } from 'react';

import { getUserList } from '@/api/product'

function Product(props: any) {
    let [tableData, setTableData] = useState([])
    let [total, setTotal] = useState(0)
    console.dir(React)

    function userList(req:any) {
        getUserList({
            page: 1,
            size: 15
        }).then((data: any) => {
            if (data.code === 200) {
                setTotal(data.total);
                setTableData(data.data);
                window.scrollTo(0, 0)
            }
        })
    }

    useEffect(() => {
        // userList({})
    }, [total])
    return (<h2>product4{tableData.map((data: Array<Object>) => {
        return <span key={data['_id']}>{data}</span>
    })}{total}</h2>)
}

export default Product