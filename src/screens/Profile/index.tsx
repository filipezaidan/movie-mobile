import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Platform,
    Touchable,
} from 'react-native';
import { } from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Profile(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <BackButton  onPress={() => navigation.goBack()}/>

            <View style={styles.content}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/profile.jpg')}
                    />
                    <Text style={styles.name}> 
                        Filipe Zaidan
                    </Text>
                </View>


                <Button
                    title={'Salvar'}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: Platform.OS === 'ios' ? 0 : 30,
    },
    content:{
        marginVertical: '25%',
        alignItems: 'center',
        justifyContent:    'center',
    },
    image:{
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    name: {
        fontSize: 28,
        color: colors.white,
        fontFamily: fonts.text,
        marginBottom: '10%'
    },


});