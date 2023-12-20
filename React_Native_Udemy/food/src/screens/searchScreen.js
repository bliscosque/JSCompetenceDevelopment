import React, {useState} from "react";
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results,setResults]=useState([]);

    const searchApi=async () => {
        const response=yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose',
            }
        });
        setResults(response.data.businesses);
    }

    return (<View>
        <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => console.log("term was submitted")}/>
        <Text>We have found {results} results</Text>
    </View>)
};

const styles=StyleSheet.create({});

export default SearchScreen;