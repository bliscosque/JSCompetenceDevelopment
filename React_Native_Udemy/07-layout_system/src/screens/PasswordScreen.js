import React, {useState} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";

const PasswordScreen = () => {
    const [txt,setTxt]=useState("");
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput value={txt} onChangeText={(newTxt) => {setTxt(newTxt)}} style={styles.input} autoCapitalize="none" autoCorrect={false}/>
            {txt.length > 5 
              ?  <Text>Password is ok!</Text>
              : <Text>Password must be longer than 5 chars</Text>
            }
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

export default PasswordScreen;