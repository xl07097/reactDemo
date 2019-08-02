import React from "react";
import { Button } from 'antd';
import { connect } from 'react-redux';

function Product(props) {
    window.console.log(props);
    const { count, dispatch } = props;
    
    function add() {
        // 改变 state 唯一方法 dispatch action
        dispatch({ type: 'INCREMENT' });
    }

    return (
        <div>
            <h2>
                product1
            </h2>
            {count}
            <Button type="primary" onClick={add}>add</Button>
        </div>
    );
}

export default connect((state) => ({count: state.count}))(Product);