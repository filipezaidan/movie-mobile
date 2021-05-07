import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}

