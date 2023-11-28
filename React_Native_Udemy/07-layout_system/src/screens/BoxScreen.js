import React, {useState} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";

const BoxScreen = () => {
    const [txt,setTxt]=useState("");
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({ 
    viewStyle: {
        borderWidth: 1,
        borderColor: `black`,
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginVertical: 20,
        marginHorizontal: 20,
    }
 })

export default BoxScreen;