import { useState } from "react";
import { Link } from "react-router-dom";
import './LogIn.css'

import React from 'react'

const LogIn = () => {
    const [showModal, setShowModal] = useState(false)  

  return (
    <div className='logInWrapper'>
          <Link className='loginLink' onClick={() => setShowModal(true)}>LogIn</Link>
    </div>
  )
}

export default LogIn



