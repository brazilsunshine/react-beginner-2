import React from 'react';
import {useQuery} from "react-query";

export default function Joke () {
    // const { data: joke, isLoading, errorMessage } = useFetch('https://official-joke-api.appspot.com/jokes/random');

    const {
        data: joke,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useQuery('joke', fetchJoke, { // third parameter is optional
        staleTime: 6000,
        refetchOnWindowFocus: false,
        // by default refetchOnWindowFocus tells React to automatically request fresh data for you
        // in the background when the user leaves your application and returns to stale data, so
        // we need to set it to false to prevent this automatically request from happening
    });

    function fetchJoke ()
    {
        return fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json());
    }


    return (
        <div>
            <h2>JOKE API</h2>

            { isLoading && <div>Loading...</div> }

            { isSuccess &&
                <div>
                    { joke.setup + '' + joke.punchline }
                </div>
            }

            {isError && <div>{ error.message }</div>}

        </div>
    )
}