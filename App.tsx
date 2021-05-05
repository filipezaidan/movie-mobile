import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

import {useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}

