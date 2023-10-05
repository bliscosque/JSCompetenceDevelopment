import React from "react";
import {Text,StyleSheet,View,Button} from "react-native";

const ColorScreen=() => {
  const randomRgb=() => {
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
  }
  return (
    <View style={{height:100,width:100,backgroundColor:randomRgb()}}>
      <Button title="Add a Color" />
    </View>
  )
}

const styles=StyleSheet.create({})

export default ColorScreen;
