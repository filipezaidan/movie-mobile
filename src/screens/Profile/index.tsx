import React, { useState } from 'react';
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

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Input from '../../components/Input';

export default function Profile(){
    const navigation = useNavigation();
    const [name, setName ] = useState('Filipe Zaidan');
    const [email, setEmail ] = useState('felipezaidan10@gmail.com');

    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.profileContainer}>

                <View style={styles.header}>
                    <BackButton  onPress={() => navigation.goBack()}/>

                    <Text style={[styles.headerText, {fontFamily: fonts.complement}]}>
                        Editar Perfil
                    </Text>
                    
                    <TouchableOpacity>
                        <Text style={[styles.headerText, {fontFamily: fonts.text}]}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </View>

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
                    </View>             
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.info}> 
                    <Input
                        data={name}
                        title='Name'
                    />
                    <Input
                        data={email}
                        title='Email'
                    />
                </View>
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
    profileContainer:{
        flex: 1, 
    },
    header:{
        marginTop: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:20
    },
    headerText:{
        color: 'white', 
        fontSize: 18,  
    },
    infoContainer:{
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    info:{
        padding: 30,
    },
    content:{
        marginTop: 40,
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