import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const SearchBar = () => {
    return (<View style={styles.backgroundStyle}>
        <Text>Search Bar</Text>
    </View>)
};

const styles=StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    }
});

export default SearchBar;