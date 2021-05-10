import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';

import api, { key } from '../../services/api';

import Header from '../../components/Header';
import MovieCardPrimary from '../../components/MovieCardPrimary';
import MovieCardSegundary from '../../components/MovieCardSegundary';
import Loading from '../../components/Loading';

import colors from '../../styles/colors';

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
    const [movies,setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        async function getMovies(){
            const { data } = await api
            .get(`popular?api_key=${key}&language=en-US&page=1`);

            if(!data){
                return setLoading(true);
            }

            console.log(data);
            setLoading(false);
        }
        getMovies();

    },[])


    if(loading){
        return (
            <Loading/>
        );
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <MovieCardPrimary
                    title='Trailers'
                />
                <MovieCardSegundary
                    title='Now in Cinemas'
                />
                <MovieCardSegundary
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