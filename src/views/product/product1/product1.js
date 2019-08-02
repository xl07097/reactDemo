import React from "react";
import { Button } from 'antd';

import store from '@/model/store';

function Product(props) {
    window.console.log(props);

    function add() {
        // 改变 state 唯一方法 dispatch action
        store.dispatch({ type: 'INCREMENT' });

        // store.dispatch({ type: 'DECREMENT' });

        // store.dispatch({ type: 'INCREMENT' });

    }

    // 可以手动订阅更新，也可以事件绑定到视图层。
    store.subscribe(() => {
        console.log(store.getState());
    });

    return (
        <div>
            <h2>
                product1{props.children}
                <Button type="primary" onClick={add}>add</Button>
            </h2>
        </div>
    );
}

export default Product;