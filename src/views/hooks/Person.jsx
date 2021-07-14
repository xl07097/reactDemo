import React from "react";
import usePerson from "./usePerson";

const Person = ({ size }) => {
    const [loading, data] = usePerson(size);
    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.username}</li>
            ))}
        </ul>
    );
};

export default Person;
