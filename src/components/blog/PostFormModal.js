import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPosts } from '../../actions/posts.js';
import './PostFormModal.css'

const PostFormModal = ({ addPosts, onClose }) => {
    const [formData, setFormData] = useState({
        post_img: '',
        title: '',
        message: '',
    });


    const { title, message, post_img } = formData;

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
        const post = { title, message, post_img };
        addPosts(post);
        setFormData({
            post_img: '',
            title: '',
            message: '',
        });
        setImageURL(''); // clear the image preview
        handleClose(); // close the modal
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }

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
                    <label className='postImg'>Upload an Image:</label>
                    <input
                        className="imgPost"
                        type="file"
                        accept="image/*"
                        name="post_img"
                        onChange={handleImageChange}
                    />
                    {imageURL && (
                        <img
                            src={imageURL}
                            alt="Preview"
                            className=""
                            style={{ maxHeight: '100px' }}
                        />
                    )}

                    <div className="form-group">
                        <button type="submit" className="postFormBtn">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

PostFormModal.propTypes = {
    addPosts: PropTypes.func.isRequired,
};

export default connect(null, { addPosts })(PostFormModal);
