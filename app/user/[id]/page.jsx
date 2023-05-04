import React, { Suspense } from 'react'
import { getUserDetail, getUserPosts } from '@/utils/features';
import Posts from './posts';

export const generateMetadata = async ({ params }) => {
    const user = await getUserDetail(params.id);
    return {
        title: `${user.name}'s Profile`,
    };
};

const page = async ({ params }) => {
    const user = await getUserDetail(params.id);
    //console.log(params.id);

    //const postsPromise = getUserPosts(params.id);
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>

            <Suspense fallback={<div>Loading...</div>}>
                <Posts id={params.id} />
            </Suspense>
        </div>
    )
}

export default page





