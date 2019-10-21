import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { asyncAdd } from '@/model/thunks/thunk';

/**
 *  useSelector
 *  useDispatch
 */

function Product(props) {
    let timer = null;
    console.log(props);
    useEffect(() => {
        const { dispatch } = props;
        dispatch(asyncAdd({ page: 1, size: 100 }))
    }, []);

    // const { list } = props;

    const list = useSelector(state => state.list);


    return (
        <React.Fragment>
            {list.map(item => {
                return <p key={item._id}>{item._id}</p>
            })}
        </React.Fragment>
    );
}

// export default connect(state => ({ list: state.list }))(Product);
export default Product;
