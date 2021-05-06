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
            <View style={styles.movieContainer}>
            
                    <ImageBackground 
                        style={styles.movieImg} 
                        source={movie.img}
                    >
                        <View style={styles.movieInfo}>
                            <Text style={styles.movieTitle}>
                                {movie.name}
                            </Text>
                        </View>          
                    </ImageBackground>
            </View>
            <View style={styles.movieDetail}>
                <Text>
                    {movie.name}
                </Text>
                <Text style={styles.movieAbout}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quia, sint possimus. Id aliquid impedit unde? 
                </Text>

                <TouchableOpacity> 
                    <Text>Buy Ticket</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        marginTop: Platform.OS == 'ios' ? 0 : 30,
        justifyContent: 'space-between',
    },
    movieContainer:{},
    movieImg:{
        flex: 1,
        width: '100%',
        height: 500, 
        opacity: 0.8
    },
    movieInfo:{},
    movieDetail:{},
    movieTitle:{},
    movieAbout:{},
});