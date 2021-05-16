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

import { urlImage } from '../../services/api';
import { MoviesProps } from '../../libs/storage';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface MovieCardProps {
    title: string;
    movies: MoviesProps[];
}

export default function MovieCardSegundary({ title, movies } : MovieCardProps){
    const navigation = useNavigation();

    function textLimit(text: string){
        if(text.length <= 15){
            return text;
        }else{
            return text.substring(0,14)+ '...';
        }
     }

    function handleSelectMovie(movie : MoviesProps){
        navigation.navigate('Details', { movie })
    }

    return(
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>Ver todos</Text>
            </View>

            <View style={styles.cardView}>
                <FlatList
                    data={movies}
                    keyExtractor={ item => String(item.id)}
                    renderItem={ ({item}) => (
                        <TouchableOpacity
                            onPress={() => handleSelectMovie(item)}
                        >
                            <Image
                                style={styles.image}
                                source={{uri: urlImage + item.backdrop_path}}
                            />

                            <Text style={styles.titleMovie}>
                                {textLimit(item.title)}
                            </Text>
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
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 10,
    },
    title:{
        fontFamily: fonts.heading,
        fontSize: 23,
        color: colors.white,
    },
    subtitle: {
        fontFamily: fonts.complement,
        fontSize: 15,
        color: colors.gray,
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
        fontSize: 15,
        fontFamily: fonts.text,
        color: colors.white,
        marginTop: 10,
        
    }
});