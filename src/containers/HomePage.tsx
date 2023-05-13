import React, { useState } from 'react';

export default function HomePage(): React.ReactElement {
    const [count, setCount] = useState<number>(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={handleClick}>
                You've clicked me {count} times
            </button>
        </div>
    );
}
