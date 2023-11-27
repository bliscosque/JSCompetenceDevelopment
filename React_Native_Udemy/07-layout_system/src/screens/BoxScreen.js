import React, {useState} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";

const BoxScreen = () => {
    const [txt,setTxt]=useState("");
    return (
        <View>
            <Text>Box Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({  })

export default BoxScreen;