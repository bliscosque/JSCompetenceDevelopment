import React from "react";
import {Text,StyleSheet} from "react-native";

const ComponentsScreen=() => {
  return <Text style={styles.textStyle}>This is a txt</Text>
}

const styles=StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
})

export default ComponentsScreen;
