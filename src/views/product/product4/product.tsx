import React, { useState, useEffect } from 'react';

import { getUserList } from '@/api/product'

interface UserInfo {
    _id: string,
    name: string,
    password: string,
    age: number,
    avatar: string,
    createtime: string,
    gender: number,
    status: number,
    __v?: number
}

function Product(props: any) {
    let [tableData, setTableData] = useState([])
    let [total, setTotal] = useState(0)

    function userList(req: any) {
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
        userList({})
    }, [total])


    return (<h2>product4{tableData.map((data: UserInfo) => {
        return <span key={data['_id']}>{data.name}</span>
    })}{total}</h2>)
}

export default Product
