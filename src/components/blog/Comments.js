import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../actions/posts";
import './Comments.css'

const Comment = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getComments(postId));
        console.log("Fetching comments for post:", postId);
    }, [dispatch, postId]);

    return (
        <div className="commentsWrapper">
            <div className="commentsContent">
                {/* <h1>Comments</h1>
                <p> Hello World</p> */}

                {/* {comments.map((comment) => (

                    <div key={comment.id}>
                        <h3>{comment.comment}</h3>

                        <p>{comment.comment_date}</p>
                    </div>
                ))} */}
            </div>

            <div className="contentsForm">


            </div>
            
        </div>
    );
};

export default Comment;
