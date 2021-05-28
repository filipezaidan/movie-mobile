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
            drawerContentOptions={{
               labelStyle:{ fontWeight: 'bold' },
                activeTintColor: "#fff",
               inactiveTintColor: "#DDD",
                activeBackgroundColor: '#181e29',
                inactiveBackgroundColor: '#000',
               itemStyle: { 
                   marginVertical: 5, 
                   width: '95%',

                }

            }}
        >
            <DrawerRoutes.Screen
                name='Home'
                component={Home}
                options={{
                    drawerLabel:"Inicio"
                }}

            />

            <DrawerRoutes.Screen
                name='Profile'
                component={Profile}
                options={{
                    drawerLabel:"Perfil"
                }}
                
            />
            <DrawerRoutes.Screen
                name='Details'
                component={Details}
                options={{
                    drawerLabel:"Detalhes"
                }}
            />

            <DrawerRoutes.Screen
                name='ViewAll'
                component={ViewAll}
                options={{
                    drawerLabel:   'Ver todos'
                    
                }}
            />


        </DrawerRoutes.Navigator>
    );
}