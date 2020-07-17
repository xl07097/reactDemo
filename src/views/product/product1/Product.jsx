import React from "react";
import { Button } from 'antd';
import { connect } from 'react-redux';

function Product(props) {
    const { count, dispatch } = props;

    function add() {
        // 改变 state 唯一方法 dispatch action
        dispatch({ type: 'INCREMENT' });
    }

    return (
        <>
            <h2>
                redux
            </h2>
            {count}
            <Button type="primary" onClick={add}>add</Button>
        </>
    );
}

//将state.count 绑定到 props 的 count
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        INCREMENT: (...args) => dispatch(actions.INCREMENT(...args))
    };
};

export default connect(mapStateToProps)(Product);
