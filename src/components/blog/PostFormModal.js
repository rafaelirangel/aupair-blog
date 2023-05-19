import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPosts } from '../../actions/posts.js';
import './PostFormModal.css'

const PostFormModal = ({ addPosts, onClose }) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

    const [formData, setFormData] = useState({
        post_img: null,
        title: '',
        message: '',
    });

    const { post_img, title, message } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const [imageURL, setImageURL] = useState('');

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
            setFormData({ ...formData, post_img: imageFile });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageURL(reader.result);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post_img', post_img);
        formData.append('title', title);
        formData.append('message', message);
        addPosts(formData); // Pass the formData directly to the addPosts function  
        setFormData({
          post_img: null,
          title: '',
          message: '',
        });
        setImageURL(''); // clear the image preview
        handleClose(); // close the modal
      };

    return (
        <div className='modalWrapper'>
            <div className='modalContent'>
                <div className='formContent'>
                    <button className='closeBtn' onClick={handleClose}>X</button>
                    <h2 className='formTitle'>Create Post</h2>
                </div>
                <form onSubmit={onSubmit} className='postForm'>

                    <label className='postTitle' >
                        <input
                            className='formUserInput'
                            type="text"
                            name="title"
                            placeholder='Enter the poster title'
                            onChange={onChange}
                            value={title}
                        />
                    </label>

                    <label className='postDescription'>
                        <input
                            className='descriptionInput'
                            type="text"
                            name="message"
                            placeholder='Enter here your post description'
                            onChange={onChange}
                            value={message}
                        />
                    </label>
                    <span className='imgContent'>Upload an Image:</span>
                    <label className='fileInputLabel'>
                    <input
                        className="imgPost"
                        type="file"
                        accept="image/*"
                        name="post_img"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    Choose file
                   </label>
                    {imageURL && (
                        <img
                            src={imageURL}
                            alt="Preview"
                            className="imgFormPost"
                            style={{ maxHeight: '200px' }}
                        />
                    )}
                    <button type="submit" className="postFormBtn" >
                        Post
                    </button>

                </form>
            </div>
        </div>
    );
};

PostFormModal.propTypes = {
    addPosts: PropTypes.func.isRequired,
};

export default connect(null, { addPosts })(PostFormModal);


