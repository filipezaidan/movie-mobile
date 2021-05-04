import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import colors from '../../styles/colors';
import Header from '../../components/Header';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
  
});