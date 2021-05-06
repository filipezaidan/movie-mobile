import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface MovieCardSegundaryProps{
    title: string;
}

interface MovieProps{
    key: number;
    name: string;
    img: string;
}


const data : MovieProps[]= [
    {
        key: 1,
        name: 'Os Vigadores',
        img: require('../../assets/01.jpg')
    },
    {
        key: 2, 
        name: 'Os Vigadores 2',
        img: require('../../assets/02.jpg')
    },
    {
        key: 3,
        name: 'Os Vigadores',
        img: require('../../assets/03.jpg')
    },
    {
        key: 4,
        name: 'Os Vigadores',
        img: require('../../assets/04.jpg')
    },
    {
        key: 5,
        name: 'Os Vigadores',
        img: require('../../assets/05.jpg')
    }
]

export default function MovieCardSegundary({ title } : MovieCardSegundaryProps){
    const navigation = useNavigation();

    function handleSelectMovie(movie: MovieProps){
        navigation.navigate('Details', { movie })
    }

    return(
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>View all</Text>
            </View>

            <View style={styles.cardView}>
                <FlatList
                    data={data}
                    keyExtractor={ item => String(item.key)}
                    renderItem={ ({item}) => (
                        <TouchableOpacity
                            onPress={() => handleSelectMovie(item)}
                        >
                            <Image
                                style={styles.image}
                                source={item.img}
                            />

                            <Text style={styles.titleMovie}>{item.name}</Text>
                        </TouchableOpacity>
                        )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 0,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 25,
    },
    title:{
        fontFamily: fonts.heading,
        fontSize: 23,
        color: colors.white,
    },
    subtitle: {
        fontFamily: fonts.complement,
        fontSize: 15,
        color: colors.gray
    },
    cardView:{
        paddingLeft: 30
    },
    image: { 
        width: 140,
        height: 200,
        marginRight: 20,
        borderRadius: 12,
        marginTop: 20
    },
    titleMovie:{
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.white,
        marginTop: 10,
        
    }
});