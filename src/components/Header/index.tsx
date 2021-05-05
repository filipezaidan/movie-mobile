import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Feather, Ionicons  } from '@expo/vector-icons';

import profile from '../../assets/profile.jpg';

export default function Header(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather 
                    name='menu' 
                    size={32} 
                    color='#ffff'
                />
            </TouchableOpacity>

            <View style={styles.actions}>
                <TouchableOpacity>
                    <Feather 
                        name='search'
                        size={28} 
                        color='#ffff'
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons 
                        name="md-notifications" 
                        size={28} 
                        color='#ffff' 
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.profileImage} source={profile}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actions:{
        width: '45%',
        flexDirection:  'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage:{
        width: 44,
        height: 44,
        borderRadius: 22,
    },

});