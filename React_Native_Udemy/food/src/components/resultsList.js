import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) return null;
    return (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true} data={results} keyExtractor={(result) =>result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})} >
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
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

export default withNavigation(ResultsList);