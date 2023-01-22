import {useEffect, useState} from "react";

function useFetch (url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    // think useEffect as mounted in vue.js
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                setIsLoading(false);
                setData(response);
            })
            .catch(error => {
                console.log(error);

                setIsLoading(false);
                setErrorMessage('There was an error');
            });
    }, [url]);

    return { data, isLoading, errorMessage };
}

export default useFetch