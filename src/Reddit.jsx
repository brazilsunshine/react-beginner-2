import React from 'react';
import {useQuery} from "react-query";

export default function Reddit () {
    // const { data: posts, isLoading, errorMessage } = useFetch('http://www.reddit.com/r/aww.json');

     const {
         data: posts,
         isLoading,
         isError,
         error,
         isSuccess,

     } = useQuery('posts', fetchPosts, { // third parameter is optional
         retry: false // will prevent React from trying to fetch the data multiple times
     });

     function fetchPosts ()
     {
         return  fetch('https://www.reddit.com/r/aww.json')
             .then(response => response.json())
     }


    return (
        <div>
            <h2>REDDIT API</h2>

            {isLoading && <div>Loading...</div>}

            {isSuccess &&
                <ul>
                    {posts.data.children.map(post => (
                        <li key={post.data.id}>
                            <a href={`https://reddit.com${post.data.permalink}`}>
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            }

            {isError && <div>{error.message}</div>}

        </div>
    )
}