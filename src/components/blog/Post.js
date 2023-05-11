import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import {getPosts, deletePosts} from "../../actions/posts";

function PostList({ posts, getPosts, deletePosts }) {



 

    // The useEffect hook is used to fetch the posts from the server when the component is mounted.The getPosts function is passed as a dependency of the useEffect hook, so it will be called every time getPosts changes.This ensures that the posts are always up - to - date.
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div>
            <h1>My Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <img src={post.post_img} alt={post.title} />
                        <h2>{post.title}</h2>
                        <p>{post.message}</p>
                        <p>{`Created at: ${post.created_at}`}</p>
                        <button onClick={() => deletePosts(post.id)}>Delete</button>
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

// The mapStateToProps function is used to map the posts state from the Redux store to the posts prop of the Post component.This ensures that
// the component has access to the latest posts fetched from the server.
const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
});

// the connect function is used to connect the Post component to the Redux store.The mapStateToProps function is
//  passed as the first argument, and an object containing the getPosts action creator is passed as the second argument.
//  The connect function returns a new component that has access to the Redux store, and the Post component is exported as the default export.
export default connect(mapStateToProps, { getPosts, deletePosts })(PostList);
