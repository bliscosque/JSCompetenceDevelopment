import React, {useState} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";

const BoxScreen = () => {
    const [txt,setTxt]=useState("");
    return (
        <View>
        
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>

        <View style={styles.view2Style}>
            <Text>Child 1</Text>
            <Text>Child 2</Text>
            <Text>Child 3</Text>
        </View>

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
    },
    view2Style: {
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
 })

export default BoxScreen;