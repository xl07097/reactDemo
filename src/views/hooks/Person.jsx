import React from "react";
import usePerson from "./usePerson";

const Person = ({ personId }) => {
    const [loading, data] = usePerson(personId);

    console.log("1", loading);
    console.log("2", data);

    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <ul>
            {data.map((item) => (
                <span key={item.id}>{item.deptname}</span>
            ))}
        </ul>
    );
};

export default Person;
