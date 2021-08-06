import * as React from 'react';

import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Noticias from './MainScreens/Noticias';
import Dicas from './MainScreens/Dicas';
import Home from './MainScreens/Home';
import Mapa from './MainScreens/Mapa';
import Usuario from './MainScreens/Usuario';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle:[{
          display: 'flex'
        },
        null
        ]
      }}
      >
        <Tab.Screen 
          name="Noticias" 
          component={Noticias}
          options={{ headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
              name={focused ? "newspaper" : "newspaper-outline"}
              color={color}
              size={focused ? size+10 : size}/>
            ),
          
          }} 
        />
        <Tab.Screen 
          name="Dicas" 
          component={Dicas}
          options={{ headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons 
              name={focused ? "lightbulb-on" : "lightbulb-on-outline"}
              color={color}
              size={focused ? size+10 : size}/>
            ),
          }} 
        />
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? size+10 : size}/>
            ),
          
          }} 
          /* name="home-outline" */
        />
        <Tab.Screen 
          name="Mapa" 
          component={Mapa}
          options={{ headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
              name={focused ? "map-marker" : "map-marker-outline"}
              color={color}
              size={focused ? size+10 : size}/>
            ),
          }} 
        />
        <Tab.Screen 
          name="Usuario" 
          component={Usuario}
          options={{ headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
              name={focused ? "user" : "user-o"}
              color={color}
              size={focused ? size+10 : size}/>
            ),
          }} 
        />
      </Tab.Navigator>
  );
}