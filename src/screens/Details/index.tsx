import React  from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    TouchableOpacity,
    ImageBackground, 
} from 'react-native';
import { useRoute } from '@react-navigation/native'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { color } from 'react-native-reanimated';

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

    const { movie } = route.params as Params

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={movie.img}
                style={styles.movieImage}
                blurRadius={0.2}
            >
                <View style={styles.movieContainer}>
                    <View style={styles.movieInfo}>
                        <Text style={styles.movieTitle}>
                            {movie.name}
                        </Text>

                    </View>
                </View>

                <View style={styles.movieAbout}>
                    <View style={styles.aboutText}>
                        <Text style={styles.aboutTitle}>
                            StoryLine
                        </Text>
                        <Text style={styles.aboutDescription}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Maiores, odio animi labore quibusdam voluptatem eum corporis 
                            quod, veritatis dolorem consequuntur quidem inventore. 
                            A porro voluptatum nulla fugiat sunt sit veritatis.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text>Buy Ticket</Text>
                    </TouchableOpacity>

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
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    movieInfo: {
        marginTop: '55%'

    },
    movieTitle:{
        fontSize: 28,
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.heading
    },
    movieAbout: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    aboutText: {
        marginTop: 40
    },
    aboutTitle:{
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.white,
        marginBottom: 10
    },
    aboutDescription: {
        fontSize: 22,
        color: colors.white,
        fontFamily: fonts.complement,
        textAlign: 'center'
    },
    buyButton: {
        width: 250,
        height: 55,
        borderRadius: 5,
        backgroundColor: '#FFB800',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    }

    
});