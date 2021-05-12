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
    const [movies,setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        async function getMovies(){
            const { data } = await api
            .get(`popular?api_key=${key}&language=pt-BR&page=${page}`);

            if(!data){
                return setLoading(true);
            }
            
            setMovies(data.results);
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
                    data={movies}
                />
                
                <MovieCardSegundary
                    title='Coming soon'
                    data={movies}
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