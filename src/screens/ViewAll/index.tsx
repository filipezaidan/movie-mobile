import React, { useState, useEffect }from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Platform,
    FlatList,
    Image
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

import api, { key, urlImage, language } from '../../services/api';
import { MoviesProps, GenresProps } from '../../libs/storage';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import GenresList from '../../components/GenresList';
import Movie from '../../components/Movie';

import colors from '../../styles/colors';


interface Params {
    requestType : string;
}

export default function ViewAll(){

    const route = useRoute();
    const { requestType: moviesRequest } = route.params as Params;

    const navigation = useNavigation();

    const [movies,setMovies] = useState<MoviesProps[]>([])
    const [genres, setGenres] = useState<GenresProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    function handleSelectMovie(movie: MoviesProps){
        navigation.navigate('Details', { movie });
    }

    async function getGenres(){
        const { data } = await api
        .get(`genre/movie/list?api_key=${key}&language=${language}`)
        
        if(!data){
            return setLoading(true);
        }
        
        setGenres([
            {
                id: 1,
                name: 'Todos'
            }, 
            ...data.genres
        ]);
    }

    async function getMovies(){
        const { data } = await api
        .get(`movie/${moviesRequest}?api_key=${key}&language=${language}&page=${page}`);

        if(!data){
            return setLoading(true);
        }
        setMovies(data.results);
        
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getGenres();
        getMovies();
    },[moviesRequest])

    return(
        <SafeAreaView style={styles.container}>
            <Header/>

            <GenresList
                data={genres}                
            />

            {
                loading ? 
                    <Loading/> 
                    :
                    <FlatList
                        data={movies}
                        keyExtractor={ (item) => String(item.id)}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                            onPress={() => handleSelectMovie(item)}
                            >
                                <Movie 
                                    title={item.title}
                                    image={{uri: urlImage + item.backdrop_path}}
                                    votes={item.vote_average}
                                />
                            </TouchableOpacity>
                            )
                        }
                        numColumns={3}
                        showsVerticalScrollIndicator={false}            
                        />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: Platform.OS === 'ios' ? 0 : 30,
        paddingVertical: 30,
    }
});