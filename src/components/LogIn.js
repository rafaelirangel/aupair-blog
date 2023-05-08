import { useState } from "react";
import { Link } from "react-router-dom";
import LogInModal from "./LogInModal";
import './LogIn.css'

import React from 'react'

const LogIn = () => {
    const [showModal, setShowModal] = useState(false)  

    const handleModalClose = () =>{
      setShowModal(false)
    }

  return (
    <div className='logInWrapper'>
          <Link className='loginLink' onClick={() => setShowModal(true)}>LogIn</Link>
          {showModal && <LogInModal onClose={handleModalClose} />}
    </div>
  )
}

export default LogIn



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import './LogIn.css'
// import Modal from "./Modal"; // import the modal component

// const LogIn = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleModalClose = () => {
//     setShowModal(false);
//   }

//   return (
//     <div className='logInWrapper'>
//       <Link className='loginLink' onClick={() => setShowModal(true)}>LogIn</Link>
//       {showModal && <Modal onClose={handleModalClose} />}
//     </div>
//   )
// }

// export default LogIn;
