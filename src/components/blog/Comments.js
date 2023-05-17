import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getComments } from "./actions";
import { getComments } from "../../actions/posts";

const Comment = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getComments(postId));
        console.log("Fetching comments for post:", postId);
    }, [dispatch, postId]);
    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => (
                
                <div key={comment.id}>
                    <h3>{comment.comment}</h3>
                    {/* <p>{comment.body}</p> */}
                </div>
            ))}
        </div>
    );
};

export default Comment;
