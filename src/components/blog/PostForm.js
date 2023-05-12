import { useState } from "react";
import { Link } from "react-router-dom";
import PostFormModal from './PostFormModal.js'
import React from 'react'
import './PostForm.css'


const PostForm = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <div className='logInWrapper'>
            <Link className='newPostLink' onClick={() => setShowModal(true)}>New Post</Link>
            {showModal && <PostFormModal onClose={handleModalClose} />}
        </div>
    )
}

export default PostForm


