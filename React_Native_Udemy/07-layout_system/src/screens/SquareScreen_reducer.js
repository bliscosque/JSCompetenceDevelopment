import React, {useReducer} from "react";
import {View,Text,StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter"

const SquareScreen_reducer=() => {
  const reducer=(state,action) => {
    //state: {red:number,green:number,blue:number}
    //action: {colorToChange: red|green|blue, amt:-15|15}
    switch (action.colorToChange) {
      case 'red':
        return state.red+action.amt > 255 || state.red+action.amt<0
        ? state
        : {...state,red:(state.red+action.amt)}
      case 'green':
        return state.green+action.amt > 255 || state.green+action.amt<0
        ? state
        :  {...state,green:(state.green+action.amt)}
      case 'blue':
        return state.blue+action.amt > 255 || state.blue+action.amt<0
        ? state
        :  {...state,blue:(state.blue+action.amt)}
      default:
        return {...state}
    }
  }

  const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
  const COLOR_INCREMENT=10

  const {red,green,blue}=state

  return (
  <View>
    <Text style={styles.textStyle}>Square</Text>
    <ColorCounter color="Red" onIncrease={()=>dispatch({colorToChange:'red',amt:COLOR_INCREMENT})} onDecrease={()=>dispatch({colorToChange:'red',amt:-1*COLOR_INCREMENT}) }/>
    <ColorCounter color="Green" onIncrease={()=>dispatch({colorToChange:'green',amt:COLOR_INCREMENT})} onDecrease={()=>dispatch({colorToChange:'green',amt:-1*COLOR_INCREMENT}) }/>
    <ColorCounter color="Blue" onIncrease={()=>dispatch({colorToChange:'blue',amt:COLOR_INCREMENT})} onDecrease={()=>dispatch({colorToChange:'blue',amt:-1*COLOR_INCREMENT}) }/>
    <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
  </View>
  )
}

const styles=StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default SquareScreen_reducer;
