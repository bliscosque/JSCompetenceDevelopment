import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to the Components Demo" onPress={() => navigation.navigate("Components")}/>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to the List Demo</Text>
      </TouchableOpacity>
      <Button title="Go to the Image Demo" onPress={() => navigation.navigate("Image")}/>
      <Button title="Go to the Counter Demo" onPress={() => navigation.navigate("Counter")}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
