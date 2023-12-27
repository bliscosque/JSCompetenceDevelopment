import React from "react";
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
    <View style={styles.containerStyle}>
        <Image style={styles.imgStyle} source={{uri:result.image_url}} />
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    imgStyle: {
        width: 250,
        borderRadius: 4,
        height: 120,
    },
    nameStyle: {
        fontWeight: 'bold',
    },
    containerStyle: {
        marginLeft: 15,
    },
});

export default ResultsDetail;