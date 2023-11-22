import React, {useReducer} from "react";
import {View,Text,StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter"

const SquareScreen_reducer_community=() => {
  const reducer=(state,action) => {
    //type: {change_red|green|blue}
    //payload: {-15|15}
    switch (action.type) {
      case 'change_red':
        return state.red+action.payload > 255 || state.red+action.payload<0
        ? state
        : {...state,red:(state.red+action.payload)}
      case 'change_green':
        return state.green+action.payload > 255 || state.green+action.payload<0
        ? state
        :  {...state,green:(state.green+action.payload)}
      case 'change_blue':
        return state.blue+action.payload > 255 || state.blue+action.payload<0
        ? state
        :  {...state,blue:(state.blue+action.payload)}
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
    <ColorCounter color="Red" onIncrease={()=>dispatch({type:'change_red',payload:COLOR_INCREMENT})} onDecrease={()=>dispatch({type:'change_red',payload:-1*COLOR_INCREMENT}) }/>
    <ColorCounter color="Green" onIncrease={()=>dispatch({type:'change_green',payload:COLOR_INCREMENT})} onDecrease={()=>dispatch({type:'change_green',payload:-1*COLOR_INCREMENT}) }/>
    <ColorCounter color="Blue" onIncrease={()=>dispatch({type:'change_blue',payload:COLOR_INCREMENT})} onDecrease={()=>dispatch({type:'change_blue',payload:-1*COLOR_INCREMENT}) }/>
    <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
  </View>
  )
}

const styles=StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default SquareScreen_reducer_community;
