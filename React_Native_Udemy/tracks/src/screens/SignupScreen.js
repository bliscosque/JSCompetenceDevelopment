import React, {useState} from "react";
import {View,StyleSheet} from "react-native";
import { Text,Input, Button } from '@rneui/themed';
import Spacer from "./components/Spacer";

const SignupScreen = ({navigation}) => {

    //const 

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Signup for Tracker</Text>
        </Spacer>
        
        <Spacer>
            <Input label="Email" />
        </Spacer>

        <Spacer>
            <Input label="Password" />
        </Spacer>
        
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 230
    }
 });

export default SignupScreen;