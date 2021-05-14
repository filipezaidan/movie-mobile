import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../styles/colors';

export default function  RatingBar({ votes }){
    const [rating, setRating] = useState([1,2,3,4,5]);

    const value = votes/2;

    return(
        <View style={styles.container}>
            {rating.map( (item) => {
                return(
                    <AntDesign 
                        name='star'
                        size={23} 
                        color={
                            item <= value ? 
                            colors.yellow : colors.gray
                        }
                    /> 
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});