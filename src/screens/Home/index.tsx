import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';

import colors from '../../styles/colors';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

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
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <MovieCard 
                    title='Trailers'
                />
                <MovieCard 
                    title='Now in Cinemas'
                />
                <MovieCard 
                    title='Coming soon'
                />
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: Platform.OS == 'ios' ? 0 : 30,
        paddingVertical: 30,
    },
});