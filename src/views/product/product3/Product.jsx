import React, { useEffect } from "react";
import { connect } from "react-redux";
import { asyncAdd } from '@/model/thunks/thunk';

function Product(props) {
    let timer = null;
    console.log(props);
    useEffect(() => {
        const { dispatch } = props;
        dispatch(asyncAdd({ page: 1, size: 100 }))
        // timer = setInterval(() => {
        //     fetch('http://localhost:9087/note/socket/push/1?message=hello')
        //         .then(data => data.text())
        //         .then(data => {
        //             console.log(data);
        //         });
        // }, 2000);

        // return () => {
        //     clearInterval(timer);
        // };
    }, []);

    const { list } = props;


    return (
        <React.Fragment>
            {list.map(item => {
                return <p key={item._id}>{item._id}</p>
            })}
        </React.Fragment>
    );
}

export default connect(state => ({ list: state.list }))(Product);
