import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getComments, addComment, getPosts } from '../../actions/posts';
import './Post.css'

function Comments({ post, comments, getComments, addComment, getPosts }) {
  const { postId } = useParams();

  useEffect(() => {
    getComments(postId);
    getPosts(postId);
  }, [getPosts, getComments, postId]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    addComment(postId, newComment);
    setNewComment('');
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

      {comments.map((comment) => (
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
    comments: state.postsReducer.comments,
  };
};

export default connect(mapStateToProps, { getComments, addComment, getPosts })(Comments);
