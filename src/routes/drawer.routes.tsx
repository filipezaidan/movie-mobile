import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Details from '../screens/Details';
import ViewAll from '../screens/ViewAll';

const DrawerRoutes = createDrawerNavigator();

export default function Drawer(){
    return(
        <DrawerRoutes.Navigator>
            <DrawerRoutes.Screen
                name='Home'
                component={Home}
            />

            <DrawerRoutes.Screen
                name='Details'
                component={Details}
            />

            <DrawerRoutes.Screen
                name='ViewAll'
                component={ViewAll}
            />
        </DrawerRoutes.Navigator>
    );
}