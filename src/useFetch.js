import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('Could not fetch the tasks');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
                else{
                    setIsLoading(false);
                    setError(err.message);
                }
            })
        }, 1000);
        return() => abortController.abort();
    }, [url]);
    return {data, isLoading, error}
}

export default useFetch