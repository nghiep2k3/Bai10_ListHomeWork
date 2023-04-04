import React, { useEffect, useState } from 'react';

// export default function Th4() {
//     return (
//       <div>
//         <input type="text" name="user" placeholder="Please type somthing" />
//         <button>Print</button>
//       </div>
//     );
//   }


// export default function Th4() {
//   const [userInput, setUserInput] = useState("");

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleButtonClick = (e) => {
//     alert(userInput);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="user"
//         placeholder="Please type somthing"
//         onChange={handleInputChange}
//       />
      
//       <button onClick={handleButtonClick}>Print</button>
//     </div>
//   );
// }

export default function Th4() {
    const [name, setName] = useState('google');
  const handleClick = () => {
    setName('facebook');
  };

  return (
    <div>
      <p className={name === 'google' ? 'color-red': 'color-green'}>Xin chào các bạn</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

  
