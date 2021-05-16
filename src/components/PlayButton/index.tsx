import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

interface PlayProps extends TouchableOpacityProps{

}

export default function PlayButton({onPress}: PlayProps) {
    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
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
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: 'rgba(175,183,182,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});