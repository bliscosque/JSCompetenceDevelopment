import React,{useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const {state,addBlogPost,deleteBlogPost}=useContext(Context);
  return (
      <View>
          <Text>Index Screen</Text>
          <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} 
          renderItem={({item}) => {return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
              <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}><Feather style={styles.icon} name="trash" /></TouchableOpacity>
              </View>
            </TouchableOpacity>
            )
          }} />
      </View>
  );
};

const styles=StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

IndexScreen.navigationOptions = ({navigation})  => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}
export default IndexScreen;