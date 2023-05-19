// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { updatePost } from '../../actions/posts.js';

// const PostUpdateForm = ({ postId, updatePost, onClose }) => {
//     const [formData, setFormData] = useState({
//         title: '',
//         message: '',
//     });

//     const { title, message } = formData;

//     const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const updatedPost = {
//             title,
//             message,
//         };

//         updatePost(postId, updatedPost);
//         // Clear the form or close the modal
//         setFormData({
//             title: '',
//             message: '',
//         });
//         onClose();
//     };

//     return (
//         <form onSubmit={onSubmit}>
//             <label>
//                 Title:
//                 <input
//                     type="text"
//                     name="title"
//                     value={title}
//                     onChange={onChange}
//                 />
//             </label>
//             <label>
//                 Message:
//                 <input
//                     type="text"
//                     name="message"
//                     value={message}
//                     onChange={onChange}
//                 />
//             </label>
//             <button type="submit">Update</button>
//         </form>
//     );
// };

// PostUpdateForm.propTypes = {
//     postId: PropTypes.number.isRequired,
//     updatePost: PropTypes.func.isRequired,
//     onClose: PropTypes.func.isRequired,
// };

// export default connect(null, { updatePost })(PostUpdateForm);
