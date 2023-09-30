import React from "react";
import {View,Text,StyleSheet} from "react-native";

const ComponentsScreen=() => {
  let name="Thiago"
  return <View>
    <Text style={styles.textStyle}>This is a txt</Text>
    <Text style={styles.subTextStyle}>App by: {name}</Text>
  </View>
}

const styles=StyleSheet.create({
  textStyle: {
    fontSize: 40
  },
  subTextStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen;
