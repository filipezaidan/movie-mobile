import React  from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    ImageBackground, 
    ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Button from '../../components/Button';
import { urlImage } from '../../services/api';
import PlayButton from '../../components/PlayButton';

interface MovieProps{
    key: number;
    name: string;
    img: string;
}

interface Params{
    movie: MovieProps
}

export default function Details({}){
    const route = useRoute();

    const { movie } = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{uri: urlImage + movie.backdrop_path}}
                style={styles.movieImage}
                blurRadius={2}
            >
                <View style={styles.movieContainer}>
                    <View style={styles.movieInfo}>
                        <PlayButton/>

                        <Text style={styles.movieTitle}>
                            {movie.name}
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
        marginTop: '55%'

    },
    movieTitle:{
        fontSize: 28,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.heading,
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