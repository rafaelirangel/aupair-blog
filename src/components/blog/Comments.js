import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getComments, addComment } from '../../actions/posts';
import './Post.css'

function Comments({ post, comments, getComments, addComment }) {
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
      .post(`https://carebeyondborders.herokuapp.com/posts/${postId}/comments/`, commentData)
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
  

  return (
    <div>
      {post && (
        <div className='commentWrapper'>
          <p>{post.content}</p>
        </div>
      )}

      <div className='commentWrapper'>
        <input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a comment...'
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      {comments
      .filter(comment => comment.post === Number(postId)) // Filter comments by post ID
      .map((comment) => (
        <div key={comment.id} className='commentWrapper'>
          <p>{comment.comment}</p>
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
};

const mapStateToProps = (state) => {
  return {
    post: state.postsReducer.post,
    comments: state.postsReducer.comments || [],
  };
};

export default connect(mapStateToProps, { getComments, addComment })(Comments);
