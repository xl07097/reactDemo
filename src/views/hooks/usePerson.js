import { useState, useEffect } from "react";
import { getUserList } from "@/api/product";

function usePerson(size) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getUserList({
      page: 1,
      size: size,
    }).then((res) => {
      setLoading(false);
      if (res.code === 200) {
        let { list = [] } = res.data;
        setData(list);
      }
    });
  }, [size]);
  return [loading, data];
}

export default usePerson;
