import React, { useEffect, useState } from 'react';


function UserForm() {
    const [value, setValue] = useState('');

    

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value);

    }
    return (
        <div>
            Name: <input type="text" value={value} onChange={handleChange} />
            <Getting name={value}></Getting>
        </div>
    )
}

function Getting(props) {
    return (
        <div>
            <div>Getting: {props.name}</div>
        </div>
    )
}

function Bt2() {

    return (
        <div className='container'>
            <UserForm></UserForm>
        </div>
    );
}
export default Bt2;