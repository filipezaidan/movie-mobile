import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function PlayButton(){
    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.button}>
                <Entypo
                    name='controller-play'
                    size={38}
                    color='#FFFF'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button:{
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: 'rgba(175,183,182,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});