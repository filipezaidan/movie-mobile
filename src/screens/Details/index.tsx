import React, { useState, useEffect }  from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    ImageBackground, 
    ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import Button from '../../components/Button';
import api, { key, urlImage } from '../../services/api';
import PlayButton from '../../components/PlayButton';
import Loading from '../../components/Loading';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function Details({}){
    const route = useRoute();
    const { movie } = route.params;

    const [movieDetail, setMovieDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function handleGetMovieDetail(){
            const { data } = await api
            .get(`${movie.id}?api_key=${key}&language=pt-BR`);
    
            if(!data){
                return setLoading(true);
            }
            
            setMovieDetail(data);
            setLoading(false);
        }
        handleGetMovieDetail();
    },[movie])

    if(loading){
        return <Loading/>
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{uri: urlImage + movie.backdrop_path}}
                style={styles.movieImage}
                blurRadius={2}
            >
                <View style={styles.movieContainer}>
                        <PlayButton/>
                    <View style={styles.movieInfo}>

                        <Text style={styles.movieTitle}>
                            {movie.original_title}
                            
                        </Text>

                        <Text style={styles.movieDetail}>
                        {movieDetail.release_date.substring(0,4)} | {movieDetail.genres[0].name}
                        </Text>
                    </View>
                </View>

                <View style={styles.movieAbout}>
                    <View style={styles.aboutText}>
                        <Text style={styles.aboutTitle}>
                            Sinopse
                        </Text>

                        <ScrollView 
                            style={styles.aboutContainer}
                            showsVerticalScrollIndicator={false}
                        >
                            <Text style={styles.aboutDescription}>
                                {movie.overview}
                            </Text>
                        </ScrollView>

                        <Button/>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : 30,
    },
    movieImage: {
        flex: 1
    },
    movieContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    movieInfo: {
        flex: 1,
        marginTop: '55%',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    movieTitle:{
        marginTop: 60,
        fontSize: 28,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
    },
    movieDetail:{
        marginBottom: 5,
        fontFamily: fonts.complement,
        color: colors.white,
        fontSize: 15

    },
    movieAbout: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    aboutText: {
        marginTop: 40,
        paddingHorizontal: 3,
        alignItems: 'center',
    },
    aboutTitle:{
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.white,
        marginBottom: 15,
    },
    aboutContainer:{
        marginBottom: 20,
        paddingHorizontal: 10
    },
    aboutDescription: {
        fontSize: 15,
        color: colors.white,
        fontFamily: fonts.complement,
        textAlign: 'justify',
    },
});