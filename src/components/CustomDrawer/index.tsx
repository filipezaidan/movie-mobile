import React from 'react';
import {
    Text,
    View,
    SafeAreaView
    ,StyleSheet,
    Image,
    Platform,
} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { color } from 'react-native-reanimated';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props}> 
            <View style={styles.container}>
                
                <View style={styles.contentProfile}>
                        <View style={styles.profile}>
                            <Image 
                                style={styles.profileImage}
                                source={require('../../assets/profile.jpg')}
                            />

                            <View style={styles.profileText}>
                                <Text style={[styles.text,{ fontSize: 17, fontFamily: fonts.complement}]}>
                                    Olá,
                                </Text>

                                <Text style={[styles.text,{ fontSize: 19, fontFamily: fonts.heading}]}>
                                    Filipe Zaidan
                                </Text>
                            </View>
                        </View>
                </View>

                <DrawerItemList {...props} />

            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
    },
    contentProfile:{
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    profile:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileText:{
        marginLeft: 10
    },
    text:{
        color: colors.white,
    },
    profileButtonEdit:{}

})