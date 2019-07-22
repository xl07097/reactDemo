import React,{useState} from 'react';

import { getUserList } from '@/api/product'

function Product(props: any){
    let [tableData, setTableData] = useState([])
    let [total, setTotal] = useState(0)
    console.dir(React)
    
    getUserList({
        page:1,
        size: 15
    }).then((data: any) =>{
        if (data.code === 200) {
            // setTableData(res.data);
            // setTotal(res.total);
            window.scrollTo(0, 0)
        }
    })
    return (<h2>product4{tableData.map(data => {
        return <span></span>
    })}{total}</h2>)
}

export default Product