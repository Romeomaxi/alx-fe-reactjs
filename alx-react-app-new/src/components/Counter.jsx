import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                Increment
            </button>
            <button 
                onClick={() => setCount(count - 1)} 
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
                Decrement
            </button>
            <button 
                onClick={() => setCount(0)} 
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;
