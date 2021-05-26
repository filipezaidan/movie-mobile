import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
                    <View style={styles.imageContainer}>

                        <TouchableOpacity style={styles.imageContainer}>
                        
                            <Image
                                style={styles.image}
                                source={require('../../assets/profile.jpg')}
                            />
                            <View style={styles.editImage}>
                                <Text style={{color: colors.white, fontSize: 26, fontFamily: fonts.text }}>Editar</Text>

                            </View>
                        </TouchableOpacity> 
                        
                    </View>
                   
                    <View style={styles.name}>
                        <Text style={styles.textName}> 
                            Filipe Zaidan
                        </Text>
                    </View>
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
        justifyContent: 'center',
    },
    imageContainer: {
      
    },
    image:{
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    editImage:{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,1,0.39)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    textName:{
        fontSize: 28,
        color: colors.white,
        fontFamily: fonts.complement,
    },
});