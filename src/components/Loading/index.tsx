import React from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import loading from '../../assets/loading.json';
import colors from '../../styles/colors';

export default function Loading(){
    return(
        <View style={styles.container}>
            <LottieView
                style={styles.loading}
                source={loading}
                autoPlay
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    loading:{
        marginLeft: '3%',
        width: 200,
        height: 200,
    }
});
