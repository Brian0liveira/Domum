import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Noticias from './Noticias';
import Dados from './Noticias/Dados';
import Destaques from './Noticias/Destaques';

const Routes = createAppContainer(
    createDrawerNavigator({

        Noticias,
        Dados,
        Destaques,

    },{
        initialRouteName: 'Noticias'
    })
);

export default Routes;