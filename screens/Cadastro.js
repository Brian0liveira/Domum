import React, {useState} from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../src/styleSheets/mainStyle'

export default function Cadastro({navigation}){

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const checkTextInput = () => {
      //Check for the Email TextInput
      if (!email.trim()) {
        alert('Por Favor, Insira um Email');
        return;
      }

      //Check for the UserName TextInput
      if (!userName.trim()) {
        alert('Por Favor, Insira um Nome de Usuário');
        return;
      }

      //Check for the Password TextInput
      if (!password.trim()) {
        alert('Por Favor, Insira uma Senha');
        return;
      }

      Cadastrar()

    };

    const Cadastrar = () => {
      
      alert('Cadastro realizado com sucesso!!');
      navigation.navigate("Login")

    }

  return(

      <KeyboardAvoidingView style={styles.background}>

        <View style = {styles.contLogo}>
          <Image style = {styles.img} source={require('../src/assets/imgs/logo.png')}/>
        </View>
        
        <View style = {styles.containers}>
          <TextInput style = {styles.input}
            placeholder= 'Email'
            placeholderTextColor = 'rgba(5, 50, 69, 0.7)'
            onChangeText = {value => setEmail(value)}
            KeyboardType = 'email-address'
            require
          />
          
          <TextInput style = {styles.input}
            placeholder= 'Nome de Usuário'
            placeholderTextColor = 'rgba(5, 50, 69, 0.7)'
            onChangeText = {value => setUserName(value)}
            require
          />
          
          <TextInput style = {styles.input}
            placeholder= 'Senha'
            placeholderTextColor = 'rgba(5, 50, 69, 0.7)'
            onChangeText = {value => setPassword(value)}
            secureTextEntry={true}
            require
          />

          <TouchableOpacity style = {styles.btnSubmit} onPress={checkTextInput}>

            <Text style = {styles.textSubmit}
                title="Cadastrar"
                type="Clear"
            >CADASTRAR</Text>

          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );


}
