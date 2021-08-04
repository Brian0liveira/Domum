import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

      {/* <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerShown: false,
        }} 
      />

      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{
          headerShown: false,
        }}
      /> */}
      
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
