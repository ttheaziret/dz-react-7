import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/post/Post';
import PostSpinner from '../../components/post/PostSpinner';
import { getPosts } from '../../store/PostsSlice';
import { expandPost } from '../../store/PostsSlice'; // Import the new action

function PostPage() {
    const dispatch = useDispatch();

    const { posts, preloader, error, expandedPostId } = useSelector(state => state.postsReducer);

    const getPostsFunc = () => {
        dispatch(getPosts());
    }

    useEffect(() => {
        getPostsFunc();
    }, []);

    const handleExpandPost = (postId) => {
        dispatch(expandPost(postId));
    };

    return (
        <>
            <button onClick={getPostsFunc}>get posts</button>
            <button>delete all</button>
            {preloader ? <PostSpinner />
            : error ? <h3>{error}</h3> :
            posts.map(post => (
                <Post
                    key={post.id}
                    postInfo={post}
                    expanded={expandedPostId === post.id} // Pass whether the post is expanded
                    onExpand={() => handleExpandPost(post.id)} // Pass the expand function
                />
            ))}
        </>
    );
}

export default PostPage;
