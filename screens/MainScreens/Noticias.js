import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dados from './Noticias/Dados';
import Destaques from './Noticias/Destaques';
import Principal from './Noticias/Principal';

const Drawer = createDrawerNavigator();

const Noticias = () => {
  return (
    <Drawer.Navigator   
        screenOptions={{
            headerShown: false,
        }}   >
        <Drawer.Screen name="Noticias" component={Principal} />
        <Drawer.Screen name="Dados" component={Dados} />
        <Drawer.Screen name="Destaques" component={Destaques} />
    </Drawer.Navigator>
  );
};
export default Noticias;