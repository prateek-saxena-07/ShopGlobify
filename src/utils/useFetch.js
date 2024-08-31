import { useEffect, useState } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    //Custom hook that takes any url as dependency and returns data for it as well as loading and error state.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }
            catch (err) {
                setError(err);
                
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url])
    return { data, loading, error };
}

export default useFetch;