import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../../actions/posts';

function Comments({ postId, comments, getComments }) {
    useEffect(() => {
        getComments(postId);
    }, [getComments, postId]);

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} className='commentWrapper'>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    );
}

Comments.propTypes = {
    postId: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
        })
    ).isRequired,
    getComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.match.params.postId;
    return {
        postId,
        comments: state.postsReducer.comments[postId] || [],
    };
};

export default connect(mapStateToProps, { getComments })(Comments);
