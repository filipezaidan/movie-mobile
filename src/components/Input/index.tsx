import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

import fonts from '../../styles/fonts';

export default function Input({title, data}){
    
    return(
        <View style={styles.container}> 
            <Text style={styles.title}> 
                {title}
            </Text >

            <TextInput
                style={styles.text}
                value={data}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    title:{
        color: 'rgba(0,0,0,0.2)',
        fontSize: 15,
        fontFamily: fonts.complement,
        marginBottom: 10,
    },
    text:{
        fontFamily: fonts.text,
        fontSize: 20,
    },

});