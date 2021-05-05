import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, Text, Image} from 'react-native';

import colors from '../../styles/colors';
import Header from '../../components/Header';


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

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.trailersContainer}>
                <View style={styles.trailersText}>
                    <Text style={styles.title}>Trailers</Text>
                    <Text style={styles.subtitle}>View all</Text>
                </View> 
                <FlatList
                    data={data}
                    keyExtractor={ item => String(item.key)}
                    renderItem={ ({item}) => <Image style={styles.image}  source={item.img}/> }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 30,
        paddingVertical: 30,
        paddingHorizontal: 25,
    },
    trailersContainer: {
        marginVertical: 30,

    },
    trailersText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        
    },
    title:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 25,
        color: colors.white
    },
    subtitle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        color: colors.gray
    },
    image: { 
        width: 300,
        height: 200,
        marginRight: 20,
        borderRadius: 12,
        marginTop: 20
    }
});