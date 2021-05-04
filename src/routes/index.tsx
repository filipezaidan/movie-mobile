import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Drawer from './drawer.routes';
import colors from '../styles/colors';

export default function Routes(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={colors.background} style={'light'}/>
            <Drawer/>
        </NavigationContainer>
    );
}