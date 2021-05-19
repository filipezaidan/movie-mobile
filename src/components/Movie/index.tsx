import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
 } from 'react-native';

import RatingBar from '../RatingBar';

export default function  Movie({ image }){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                //onPress={() => handleSelectMovie(item)}
            >
                <Image
                    style={styles.image}
                    source={image}
                />

                <Text>
                    Duno
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
});