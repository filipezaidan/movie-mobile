import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';

import api, { key } from '../../services/api';
import { MoviesProps } from '../../libs/storage';

import Header from '../../components/Header';
import MovieCardPrimary from '../../components/MovieCardPrimary';
import MovieCardSegundary from '../../components/MovieCardSegundary';
import Loading from '../../components/Loading';

import colors from '../../styles/colors';
import { set } from 'react-native-reanimated';

export default function Home(){
    const [moviesRecent,setMoviesRecent] = useState<MoviesProps[]>([]);
    const [moviesLatest,setMoviesLatest] = useState<MoviesProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    async function getMoviesRecent(){
        const { data } = await api
        .get(`movie/now_playing?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }

        setMoviesRecent(data.results);
    }

    async function getMoviesLatest(){
        const { data } = await api
        .get(`movie/upcoming?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }
        setMoviesLatest(data.results);
        console.log(moviesLatest);
    }



    useEffect( () => {
        getMoviesRecent();
        getMoviesLatest();
        setLoading(false);
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
                    title='Agora nos cinemas'
                    movies={moviesRecent}
                    requestType={'now_playing'}

                />
                
                <MovieCardSegundary
                    title='Lançamentos'
                    movies={moviesLatest}
                    requestType={'upcoming'}
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