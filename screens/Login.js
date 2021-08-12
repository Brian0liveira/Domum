import React, {useState} from 'react';
import { database } from '../src/config/firebase';
import { StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { HelperText, TextInput } from 'react-native-paper';

import styles from '../src/styleSheets/mainStyle';

export default function App({navigation}){

    const [emailInput, setEmailInput] = useState(null)
    const [password, setPassword] = useState(null)
    const [hidePass, setHidePass] = React.useState(true);    

    function login() {
      database.auth().createUserWithEmailAndPassword(emailInput, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
  });
    }

  return(
        
        <KeyboardAvoidingView style={styles.background}>
          
          <View style = {styles.contLogo}>
            <Image style = {styles.img} source={require('../src/assets/imgs/logo.png')}/>
          </View>

          <View style = {styles.containers}>
            <TextInput style = {styles.input}
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              theme={
                { colors: {primary: "#4BD6BC"} }
              }
              onChangeText = {value => setEmailInput(value)}
            />
            
            <TextInput style = {styles.input}
              mode="outlined"
              label="Senha"
              theme={
                { colors: {primary: "#4BD6BC"} }
              }
              onChangeText = {value => setPassword(value)}
              secureTextEntry = {hidePass}
              right={<TextInput.Icon name="eye" onPress={ () => setHidePass(!hidePass) } />}
            />

            <TouchableOpacity style = {styles.btnSubmit} onPress = {() => {login()}}>
              <Text style = {styles.textSubmit}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {login.btnRegister} onPress = {() => Cadastrar()}>
              <Text style = {login.textRegister}  >
                Cadastrar
              </Text>

              <View style = {login.registerLine}></View>
              <View style = {login.registerCircles}>
                <View style = {login.registerCircle}></View>
                <View style = {login.registerCircle}></View>
              </View>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
  );
}


const login = StyleSheet.create({

  helper: {
    marginTop: -5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%'
  },

  btnRegister:{
    marginTop: '20%',
    marginBottom: 50,
    alignItems: 'center'
    
  },

  textRegister:{
    color:'rgba(5, 50, 69, 0.7)',
    marginBottom: 5
  },
  
  registerLine:{
    width: 100,
    height: 2,
    backgroundColor: 'rgba(5, 50, 69, 0.7)',
    marginBottom: 0,
  },

  registerCircles: {
    marginTop: 5,
    flexDirection: 'row', 
    alignItems: 'center',
    
  },
  registerCircle: {
    margin: 5,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'black'
    
  }

});
