import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results,setResults]=useState([]);
    const [errorMessage, setErrorMessage]=useState('');

    const searchApi=async (term) => {
        try {
            const response=await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose',
                }
            });
            //console.log(response.data.businesses);
            setResults(response.data.businesses);
        }catch (err) {
            //console.log(err);
            setErrorMessage('Something went wrong with the request');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};