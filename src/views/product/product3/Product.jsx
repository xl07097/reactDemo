import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncAdd } from "@/model/thunks/thunk";

/**
 *  useSelector
 *  useDispatch
 */

function Product(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncAdd({ page: 1, size: 100 }));
  }, []);

  const list = useSelector((state) => state.list);

  return (
    <React.Fragment>
      {list.map((item) => {
        return <p key={item.id}>{item.username}</p>;
      })}
    </React.Fragment>
  );
}

export default Product;
