import React, {useContext} from "react";
import { Context } from "../context/BlogContext";
import {View, Text, StyleSheet} from 'react-native';

const ShowScreen = ({navigation}) => {
    const {state}=useContext(Context);
    const id=navigation.getParam('id');

    const blogPost=state.find((blogPost) => blogPost.id===id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ShowScreen;