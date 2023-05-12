
// import React from 'react'

// const Form = () => {
//     return (
//         <div>
         
//         </div>
//     )
// }

// export default Form


import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPosts } from '../../actions/posts.js';

const Form = ({ addPosts }) => {
    const [formData, setFormData] = useState({
        // post_img:'',
        title: '',
        message: '',
    });

    const {  title, message } = formData;

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
        const post = {  title, message };
        addPosts(post);
        setFormData({
            // post_img: '',
            title: '',
            message: '',
        });
    };

    return (
        <div className="card card-body mt-4 mb-4">
            <h2>Add Post</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={onChange}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <input
                        className="form-control"
                        type="message"
                        name="message"
                        onChange={onChange}
                        value={message}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        className="form-control-file"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                    />
                    {imageURL && (
                        <img
                            src={imageURL}
                            alt="Preview"
                            className="mt-2 mb-2"
                            style={{ maxHeight: '200px' }}
                        />
                    )}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
            {/* {currentDate && (
                <div className="mt-3">
                    <h5>Post created on:</h5>
                    <p>{currentDate}</p>
                </div>
            )} */}
        </div>
    );
};

Form.propTypes = {
    addPosts: PropTypes.func.isRequired,
};

export default connect(null, { addPosts })(Form);
