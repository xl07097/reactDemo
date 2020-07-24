import { useState, useEffect } from "react";
function usePerson(personId) {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("http://122.51.129.51:8080/note/dept/getAllDeptTree", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setData(res.data);
            });
    }, [personId]);
    return [loading, data];
}

export default usePerson;
