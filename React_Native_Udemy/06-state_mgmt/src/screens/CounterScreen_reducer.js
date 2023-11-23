import React,{useReducer} from "react";
import {Text,StyleSheet,View,Button} from "react-native";

const CounterScreen_reducer=() => {
  const reducer=(state,action) => {
    //type: inc, dec
    //payload: 1
    switch(action.type) {
      case 'inc':
        return {...state,counter:(state.counter+action.payload)}
      case 'dec':
        return {...state,counter:(state.counter-action.payload)}
      default:
        return {...state}
    }
  }

  const [state,dispatch]=useReducer(reducer,{counter:0})

  return <View>
    <Button title="Increase" onPress={()=>dispatch({type:'inc',payload:1})} />
    <Button title="Decrease" onPress={()=>dispatch({type:'dec',payload:1})} />
    <Text style={styles.textStyle}>Current Count: {state.counter}</Text>
  </View>
}

const styles=StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default CounterScreen_reducer;
