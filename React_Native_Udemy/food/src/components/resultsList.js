import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    return (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true} data={results} keyExtractor={(result) =>result.id}
            renderItem={({item}) => {
                return <ResultsDetail result={item} />
            }}
        />
    </View>
    )
}

const styles=StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15,
    },
    containerStyle: {
        marginBottom: 10,
    }
});

export default ResultsList;