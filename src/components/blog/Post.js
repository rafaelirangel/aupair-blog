import './Post.css'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPosts, deletePosts, updatePost, updateComment, addComment, deleteComment, getComments } from "../../actions/posts";
import blogImg from '../../img/blogging.jpg'
import PostForm from './PostForm';
import LogIn from '../accounts/LogIn';
import SignUp from '../accounts/SignUp';
import { Link } from 'react-router-dom';
import UpdatePost from './UpdatePost';


function PostList({ posts, getPosts, getComments ,updatePost, deletePosts, updateComment, addComment, deleteComment, postId }) {

    // Fetching the posts from the server when the component is mounted.
    // The getPosts function is passed as a dependency of the useEffect hook, so it will be called every time getPosts changes.This ensures that the posts are always up - to - date.
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    // Add state for dropdown menu
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        // Fetch comments for each post
        posts.forEach(post => {
            getComments(post.id, post);
        });
    }, [getComments, posts]);


    // The propTypes object is used to define the type of the posts prop.
    // If the posts prop does not conform to this type, a warning will be displayed in the console.
    PostList.propTypes = {
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                post_img: PropTypes.string,
                title: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
                created_at: PropTypes.string.isRequired,
            })
        ).isRequired,
        getPosts: PropTypes.func.isRequired,
        deletePosts: PropTypes.func.isRequired,
        updateComment: PropTypes.func.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired,
    };



    //Formating the date so it looks nicer.
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className='postHeaderWrapper'>
            <div className='postHeaderContent'>
                <h1 className='postTopContent'>Welcome to our Au Pair blog! Here, you'll find posts about the Au Pair program,
                    tips for host families and Au Pairs, and personal stories from Au Pairs themselves.
                </h1>
            </div>

            <div className='postCenterContent'>
                <h2 className='postCenterText'>
                    Already have an account?
                    <LogIn className='logInLink' />
                </h2>

                <h2 className='postCenterText'>Don't have an account?
                    <SignUp className='signUpLink' />
                </h2>
            </div>

            <div className='postBottomContent'>
                <PostForm />
            </div>

            <div className='postWrapper'>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className='postContentWrapper'>

                            {/* Checking if the user uploaded an Img, if not display a default Img */}
                            {post.post_img ? (
                                <img src={post.post_img} alt={post.title} className='postImg' />
                            ) : (
                                <img src={blogImg} alt={post.title} className='postImg' />
                            )}

                            <div className='postContent'>
                                <div className='headerFlex'>

                                    <div className='userInfo'>
                                        <div className='profileImg'>
                                            {/* This  is hardcoded till we fix the profile component*/}
                                            <img className='userImg' src={blogImg} alt="User profile" />
                                        </div>

                                        <div className='postHeader'>
                                            <h2 className='userProfileName'>User name goes here</h2>
                                            <p className='postDate'>{formatDate(post.created_at)}</p>
                                        </div>
                                    </div>
                            
                                    <div className='toggleMenu'>
                                        {/* Button to toggle dropdown */}
                                        <button onClick={toggleDropdown} className="dropdownBtn">
                                            &#8942;
                                        </button>
                                    </div>

                                </div>

                                <div className='postInfo'>
                                    <h2 className='postTitle'>{post.title}</h2>
                                    <p className='postDescription'>{post.message}</p>
                                    <p>{post.likes_count}</p>
                                    <p></p>
                                </div>

                                <div className='postFooter'>
                                    <div className='postFooterLeft'>
                                        {/* Display like count */}
                                        <button className='likeBtn'>
                                            <span className='likeCount'></span>&#10084;
                                        </button>
                                    </div>

                                    <div class='postFooterCenter'> 
                                        <Link to='/comments' className='commentLink'>Comments...</Link>
                                    </div>
                                   
                                    <div className='postFooterRight'>
                                        <div className="dropdown">
                                            {/* Add dropdown content */}
                                            {showDropdown && (
                                                <div className="dropdownContent">
                                                    <button onClick={() => deletePosts(post.id)} className='deleteBtn'>Delete</button>
                                                    {/* <button  className='updateBtn'>Uptade Post</button> */}

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* {updateFormOpen && (
                    <UpdatePost
                        postId={postId} // Pass the post ID to the update form component
                        updatePost={updatePost}
                        onClose={toggleUpdateForm}
                    />
                )} */}
            </div>
        </div>
    );
}


// The mapStateToProps function is used to map the posts state from the Redux store to the posts prop of the Post component.This ensures that
// the component has access to the latest posts fetched from the server.
const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
    // updatePost: state.postsReducer.updatePost,
});

// Connect is used to connect the Post component to the Redux store. Passing mapStateToProps as as the first argument,
// and an object containing the getPosts, deletePosts action as a second argument.
// The connect function returns a new component that has access to the Redux store
export default connect(mapStateToProps, { getPosts, updatePost,  deletePosts, updateComment, addComment, deleteComment, getComments })(PostList);
