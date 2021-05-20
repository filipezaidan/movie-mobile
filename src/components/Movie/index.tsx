import React, { useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
 } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import RatingBar from '../RatingBar';




export default function  Movie({ title, image,  }){

    function textLimit(text: string){
        if(text.length <= 14){
            return text;
        }else{
            return text.substring(0,11) + '...';
        }
     }
    

    return(
        <View style={styles.container}>
            <TouchableOpacity
                //onPress={() => handleSelectMovie(item)}
            >
                <Image
                    style={styles.image}
                    source={image}
                />

                <Text style={styles.title}>
                    {textLimit(title)}
                </Text>

                <RatingBar
                    votes={8} 
                    size={15}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    image: { 
        width: 125,
        height: 200,
        borderRadius: 12,
        marginTop: 20,
        alignSelf: 'center',
    },
    title : {
        fontSize: 15,
        fontFamily: fonts.text,
        color: colors.white,
        marginTop: 10,
    }     
});