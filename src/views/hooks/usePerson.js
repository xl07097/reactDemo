import { useState, useEffect } from "react";
function usePerson(personId) {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        console.log("4", loading);
        fetch("http://122.51.129.51:8080/note/dept/getAllDeptTree", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("5", loading);
                setLoading(false);
                setData(res);
                console.log("6", loading);
            });
    }, [personId]);
    console.log("3", loading);
    return [loading, data];
}

export default usePerson;
