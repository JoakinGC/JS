import React, { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>Add one</button>
            <br />
            {number}
        </div>
    );
};

export default Counter;
