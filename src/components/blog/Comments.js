import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getComments, addComment, deleteComment } from '../../actions/posts';
import './Comments.css'

function Comments({ post, comments, getComments, addComment, deleteComment }) {
  const { postId } = useParams();

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);

  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);
  
  const handleAddComment = () => {
    const commentData = {
      comment: newComment,
      post: postId,
    };
  
    axios
      .post(`http://localhost:8000/posts/${postId}/comments/`, commentData)
      .then(response => {
        const newComment = response.data; // Assuming the server returns the newly added comment
        setCommentList(prevComments => [...prevComments, newComment]);
        // Clear the comment input field
        setNewComment('');
  
        // Fetch the updated comments
        getComments(postId);
      })
      .catch(error => {
        // Handle the error
      });
  };

  const handleDeleteComment = (postId, commentId) => {
    console.log('postId:', postId);
    console.log('commentId:', commentId);
    axios
      .delete(`http://localhost:8000/posts/${postId}/comments/${commentId}/`)
      .then(() => {
        // Fetch the updated comments
        getComments(postId);
      })
      .catch(error => {
        // Handle the error
      });
  };
  

  return (
    <div className='commentsContent'>
      {post && (
        <div className='postWrapper'>
          <p>{post.content}</p>
        </div>
      )}

      <div className='submission-form'>
        <input
          type='text'
          className="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a comment...'
        />
        <button className="comment-button" onClick={handleAddComment}>Add Comment</button>
      </div>

      {comments
      .filter(comment => comment.post === Number(postId)) // Filter comments by post ID
      .map((comment) => (
        <div key={comment.id} className='commentWrapper'>
          <p>{comment.comment}</p>
          <button onClick={() => handleDeleteComment(postId, comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

Comments.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
  getComments: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: state.postsReducer.post,
    comments: state.postsReducer.comments || [],
  };
};

export default connect(mapStateToProps, { getComments, addComment, deleteComment })(Comments);
