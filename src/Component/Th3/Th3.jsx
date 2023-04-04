import React, { useEffect, useState } from 'react';

const Demo = (props) => {
    return (
        <div>
          <div>Đây là tuổi: {props.age}</div>
          <div> Đây là tên: {props.displayName}</div>
        </div>
    );
  };
  
  function Th3() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Cee');
  
    const Upage = () =>{
       setAge(age + 1);
    }
    return (
      <div className='container'>
          <div>{age}</div>
          <button onClick={Upage}>Tăng age lên 1</button>
          <Demo age={age}  displayName={name}></Demo>
      </div>
    );
  }
  export default Th3;