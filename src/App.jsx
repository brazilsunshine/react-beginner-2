import React, {useState} from 'react';
import Reddit from "./Reddit";
import Joke from "./Joke";

function App () {
    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);
    return (
        <div>
            <div className="buttons">
                <button onClick={() => setRedditVisible(prevRedditVisible => !prevRedditVisible)}>
                    Toggle Reddit
                </button>

                <button onClick={() => setJokeVisible(prevJokeVisible => !prevJokeVisible)}>
                    Toggle Joke
                </button>
            </div>

            {redditVisible && <Reddit />}
            {jokeVisible && <Joke />}

        </div>
    );
}

export default App;