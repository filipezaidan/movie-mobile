import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Details from '../screens/Details';
import ViewAll from '../screens/ViewAll';
import Profile from '../screens/Profile';
import CustomDrawer from '../components/CustomDrawer';

import colors from '../styles/colors';

const DrawerRoutes = createDrawerNavigator();

export default function Drawer(){
    return(
        <DrawerRoutes.Navigator
            drawerContent={ (props) => <CustomDrawer {...props}/>}
            drawerStyle={{backgroundColor: colors.background}}
        >
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

            <DrawerRoutes.Screen
                name='Profile'
                component={Profile}
            />

        </DrawerRoutes.Navigator>
    );
}