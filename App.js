import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Navigator from './screens/Navigator';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
        name="Navigator" 
        component={Navigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen 
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
      />
{/*       
      <Stack.Screen 
        name="Navigator" 
        component={Navigator}
        options={{
          headerShown: false,
        }}
      /> */}

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
