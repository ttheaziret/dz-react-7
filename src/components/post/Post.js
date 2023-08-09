import React from 'react';
import { useDispatch } from 'react-redux';
import { expandPost } from '../../store/PostsSlice'; // Import the new action

function Post({ postInfo, expanded, onExpand }) {
    const dispatch = useDispatch();

    return (
        <>
            <h1>{postInfo.title}</h1>
            <button onClick={onExpand}>more info</button>
            {expanded && (
                <div>
                    <p>Details: {postInfo.body}</p>
                </div>
            )}
            <p>-------------------</p>
        </>
    );
}

export default Post;
