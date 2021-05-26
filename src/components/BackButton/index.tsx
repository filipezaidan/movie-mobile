import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

interface backButtonProps extends TouchableOpacityProps {};

export default function BackButton({ onPress } : backButtonProps){

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Ionicons
                    name='ios-chevron-back-outline'
                    size={32}
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
});