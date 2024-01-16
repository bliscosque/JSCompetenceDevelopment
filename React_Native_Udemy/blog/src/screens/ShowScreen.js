import React, {useContext} from "react";
import { Context } from "../context/BlogContext";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state}=useContext(Context);
    const id=navigation.getParam('id');

    const blogPost=state.find((blogPost) => blogPost.id===id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>

    )
}

const styles = StyleSheet.create({});

ShowScreen.navigationOptions = ({navigation})  => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      ),
    };
  }

export default ShowScreen;