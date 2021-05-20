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

import Header from '../../components/Header';
import Movie from '../../components/Movie';


import colors from '../../styles/colors';
import api, { key, urlImage } from '../../services/api';
import { MoviesProps } from '../../libs/storage';
import Loading from '../../components/Loading';


interface Params {
    requestType : string;
}

export default function ViewAll(){

    const route = useRoute();
    const { requestType: moviesRequest } = route.params as Params;

    const navigation = useNavigation();

    const [movies,setMovies] = useState<MoviesProps[]>([])
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    
    function handleSelectMovie(movie: MoviesProps){
        navigation.navigate('Details', { movie });
    }

    async function getMovies(){
        const { data } = await api
        .get(`${moviesRequest}?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }

        setMovies(data.results);
        setLoading(false);
    }


    useEffect(() => {
        getMovies();
    },[moviesRequest])

    if(loading){
       return <Loading/>
    }


    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            
            <FlatList
                data={movies}
                keyExtractor={ (item) => String(item.id)}
                renderItem={({item})=> {
                    return(
                        <TouchableOpacity 
                           onPress={() => handleSelectMovie(item)}
                        >
                            <Movie 
                                title={item.title}
                                image={{uri: urlImage + item.backdrop_path}}
                            />
                        </TouchableOpacity>
                    );
                }}
                numColumns={3}
                showsVerticalScrollIndicator={false}            
            />
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