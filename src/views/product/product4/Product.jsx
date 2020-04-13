import React from 'react';
import './p.less';

function Product(props) {

    let icon = require.context("@/assets/icons", false, /\.png$/)

    let iconlist = icon.keys().map(item => {
        return item.replace(/\.\//g, '').replace(/\.png/, '');
    })

    let flag = require.context("@/assets/flags", false, /\.png$/)

    let flaglist = flag.keys().map(item => {
        return item.replace(/\.\//g, '').replace(/\.png/, '');
    })

    return (
        <>
            <div className='icon-wrapper'>
                {iconlist.map(item => {
                    return (<i key={item} className={`icon icon-${item}`}></i>)
                })}
                {flaglist.map(item => {
                    return (<i key={item} className={`icon icon-${item}`}></i>)
                })}
            </div>
        </>
    )
}

export default Product
