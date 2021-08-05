import React from "react";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons'

import Dados from './Noticias/Dados';
import Destaques from './Noticias/Destaques';
import Principal from './Noticias/Principal';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon= { ({}) => <Icon color={'#45B19D'} size={50} name={'menu'} /> }
        label = ""
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const Noticias = ({navigation}) => {
  return (
    <Drawer.Navigator  
      initialRouteName='Noticias'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'rgba(34, 150, 128, 0.6)',
        drawerStyle: {
          backgroundColor: '#97DCCF',
          width: '65%',
          paddingTop: 5,
        }
      }}
    >  
        <Drawer.Screen name="Noticias" component={Principal} />
        <Drawer.Screen name="Dados" component={Dados} />
        <Drawer.Screen name="Destaques" component={Destaques} />
    </Drawer.Navigator>
  );
};
export default Noticias;