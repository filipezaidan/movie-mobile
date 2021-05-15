import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../styles/colors';

interface RatingProps{
    votes: number;
}

export default function  RatingBar({ votes } : RatingProps){
    const [rating, setRating] = useState<number[]>([1,2,3,4,5]);

    const value = votes/2;

    return(
        <View style={styles.container}>
            {rating.map( (item, index) => {
                return(
                    <AntDesign
                        key={index}
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