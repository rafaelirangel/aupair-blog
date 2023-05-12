import './Post.css'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPosts, deletePosts, addPosts } from "../../actions/posts";
import blogImg from '../../img/blogging.jpg'



function PostList({ posts, getPosts, deletePosts, addPosts }) {

    // The useEffect hook is used to fetch the posts from the server when the component is mounted.The getPosts function is passed as a dependency of the useEffect hook, so it will be called every time getPosts changes.This ensures that the posts are always up - to - date.
    useEffect(() => {
        getPosts();
    }, [getPosts]);


    // Add state for like count
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);

    // Update like count when button is clicked
    const handleLikeBtn = () => {
        if (likeCount === 0) {
            setLikeCount(1);
        } else {
            setLikeCount(0);
        }
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const commentInput = e.target.elements.commentInput;
        const newComment = commentInput.value.trim();
        if (newComment !== "") {
            setComments([...comments, newComment]);
            commentInput.value = "";
        }
    };

    return (
        <div className='postWrapper'>
            <h1 className='pageTitle'>All Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className='postContentWrapper'>

                        {post.post_img ? (
                            <img src={post.post_img} alt={post.title} className='postImg' />
                        ) : (
                            <img src={blogImg} alt={post.title} className='postImg' />
                        )}

                        <div className='postContent'>
                            <div className='userInfo'>
                                <div className='profileImg'>
                                    {/* This img is hardcoded till we fix the img issue */}
                                    {/* <img className='userImg' src={contactImg} alt="User profile"/> */}
                                </div>
                               
                               <div className='postHeader'> 
                                    <h2 className='userProfileName'>User name goes here</h2>
                                    <p className='postDate'>{formatDate(post.created_at)}</p>
                               </div>
                            </div>
                            <div className='postInfo'>
                                <h2 className='postTitle'>{post.title}</h2>
                                <p className='postDescription'>{post.message}</p>

                                {/* Display comments */}
                                <div className='postComments'>
                                    {comments.map((comment, index) => (
                                        <p key={index} className='commentText'>{comment}</p>
                                    ))}
                                </div>
                            </div>

                            <div className='postFooter'>
                                <div className='postFooterLeft'>
                                    {/* Display like count */}
                                    <button onClick={handleLikeBtn} className='likeBtn'>
                                        <span className='likeCount'>{likeCount}</span>&#10084;
                                    </button>

                                    {/* Add comments button */}
                                    <form onSubmit={handleCommentSubmit}>
                                        <input type="text" name="commentInput" placeholder="Add a comment" />
                                        <button type="submit" className='commentBtn'>
                                            Add Comment
                                        </button>
                                    </form>
                                </div>

                                <div className='postFooterRight'>
                                    <button onClick={() => deletePosts(post.id)} className='deleteBtn'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// The propTypes object is used to define the type of the posts prop.In this case, it is defined as an array 
// of objects that have certain properties(such as id, post_img, title, message, and created_at).If the posts prop does not conform to this type, a warning will be displayed in the console.
PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            post_img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        })
    ).isRequired,
    getPosts: PropTypes.func.isRequired,
    deletePosts: PropTypes.func.isRequired,
};


//formating date so it looks nicer
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// The mapStateToProps function is used to map the posts state from the Redux store to the posts prop of the Post component.This ensures that
// the component has access to the latest posts fetched from the server.
const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
});

// the connect function is used to connect the Post component to the Redux store.The mapStateToProps function is
//  passed as the first argument, and an object containing the getPosts action creator is passed as the second argument.
//  The connect function returns a new component that has access to the Redux store, and the Post component is exported as the default export.
export default connect(mapStateToProps, { getPosts, deletePosts, addPosts })(PostList);
