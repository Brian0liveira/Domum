import React from "react";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons'

import DescubraPapel from './HomeDescubra/DescubraPapel';
import Principal from './HomeDescubra/Principal';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName='Principal'
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'RGBA(242, 37, 68,0.7)',
        drawerStyle: {
          backgroundColor: '#ddd',
          width: '65%',
          paddingTop: 5,
        }
      }}
    >  
        <Drawer.Screen name="Principal" component={Principal} />
        <Drawer.Screen name="DescubraPapel" component={DescubraPapel} />
    </Drawer.Navigator>
  );
};
export default Home;