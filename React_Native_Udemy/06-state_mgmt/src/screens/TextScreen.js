import React, {useState} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";

const TextScreen = () => {
    const [txt,setTxt]=useState("");
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput value={txt} onChangeText={(newTxt) => {setTxt(newTxt)}} style={styles.input} autoCapitalize="none" autoCorrect={false}/>
            <Text>My name is: {txt}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TextScreen;