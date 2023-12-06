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

        <View style={styles.viewParentStyle}>
            <View style={styles.c1Style} />
            <View style={styles.c2Style} />
            <View style={styles.c3Style} />
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
    viewParentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    c1Style: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    c2Style: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: "flex-end"
    },
    c3Style: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    },
 })

export default BoxScreen;