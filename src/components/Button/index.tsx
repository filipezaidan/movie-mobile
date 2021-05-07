import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import fonts from '../../styles/fonts';

export default function Button(){
    return(
    
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Buy Ticket</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 55,
        borderRadius: 5,
        backgroundColor: '#FFB800',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.text
    },
});