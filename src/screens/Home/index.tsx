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

export default function Home(){
    const [moviesRecent,setMoviesRecent] = useState([]);
    const [moviesLatest,setMoviesLatest] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    
    async function getMoviesRecent(){
        const { data } = await api
        .get(`now_playing?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }
        
        setMoviesRecent(data.results);
        setLoading(false);
    }

    async function getMoviesLatest(){
        const { data } = await api
        .get(`upcoming?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }
        
        setMoviesLatest(data.results);
        setLoading(false);
    }



    useEffect( () => {
        
        getMoviesRecent();
        getMoviesLatest();

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
                    data={moviesRecent}
                />
                
                <MovieCardSegundary
                    title='Lançamentos'
                    data={moviesLatest}
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