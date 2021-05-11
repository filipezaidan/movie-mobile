import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    FlatList,
    StyleSheet,
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import PlayButton from '../PlayButton';

interface MovieCardPropsPrimary{
    title: string;
    data?: [Object];
}

const data = [
    {
        key: 1,
        img: require('../../assets/01.jpg')
    },
    {
        key: 2, 
        img: require('../../assets/02.jpg')
    },
    {
        key: 3,
        img: require('../../assets/03.jpg')
    },
    {
        key: 4,
        img: require('../../assets/04.jpg')
    },
    {
        key: 5,
        img: require('../../assets/05.jpg')
    }
]

export default function MovieCardPrimary({ title, }: MovieCardPropsPrimary){
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
                    renderItem={ ({ item }) => (

                        <ImageBackground 
                            style={styles.image}  
                            source={item.img}
                        >
                            <PlayButton/>
                        </ImageBackground> 
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
        marginTop: 10,
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
        paddingLeft: 30,
    },
    image: {
        flex: 1, 
        width: 300,
        height: 200,
        marginRight: 20,
        borderRadius: 12,
        marginTop: 20,
    },
});