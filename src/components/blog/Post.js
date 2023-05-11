import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { GET_POSTS } from "../../actions/types";
import getPosts from "../../actions/posts";


const Post = () => {

    Post.propTypes = {
        posts: PropTypes.array.isRequired,
        // getLeads: PropTypes.func.isRequired,
        // deleteLead: PropTypes.func.isRequired,
    };


    return (
        <div>
           <h1> This is a post</h1>
        </div>
    )
}



const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(Post)
