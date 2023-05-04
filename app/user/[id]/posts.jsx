import { getUserPosts } from '@/utils/features';
import React from 'react';

const posts = async ({ id }) => {
    const postss = await getUserPosts(id);
    console.log('abc', postss)
    //const postsPromise = getUserPosts(params.id);
    return (
        <div>
            {postss.map((i) => (
                <h1 key={i.id}>{i.title}</h1>
            )
            )}
        </div>
    )
}

export default posts
