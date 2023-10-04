import React from 'react'
import {FlatList,View,Text,StyleSheet} from 'react-native'

const ListScreen=() => {
  const friends=[{name: 'f1', age: 10},{name:'f2', age: 20},{name:'f3', age:30}]

  return (
    <View>
      <Text>List Screen </Text>
      <FlatList data={friends} renderItem={(element)=>{return <Text style={styles.text}>{element.item.name} - Age: {element.item.age}</Text>}} keyExtractor={friend=>friend.name}/> 
  </View>
  )
}

const styles=StyleSheet.create({
  text: {
    marginVertical: 50
  }
})

export default ListScreen
