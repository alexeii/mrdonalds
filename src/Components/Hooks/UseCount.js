import {useState} from 'react';


export  function UseCount () {
    const [count, setCount] = useState(1);

    const onChange = e => setCount(e.target.value);

    return {count, setCount, onChange}
}