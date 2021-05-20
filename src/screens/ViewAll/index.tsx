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
import { useRoute } from '@react-navigation/native'

import Header from '../../components/Header';
import Movie from '../../components/Movie';


import colors from '../../styles/colors';
import api, { key, urlImage } from '../../services/api';
import { MoviesProps } from '../../libs/storage';
import Loading from '../../components/Loading';


/*const data = [
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
    },
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
    },
    {
        key: 6,
        img: require('../../assets/01.jpg')
    },
    {
        key: 7, 
        img: require('../../assets/02.jpg')
    },
    {
        key: 8,
        img: require('../../assets/03.jpg')
    },
    {
        key: 9,
        img: require('../../assets/04.jpg')
    },
    {
        key: 10,
        img: require('../../assets/05.jpg')
    }
]


*/

interface Params {
    requestType : string;
}

export default function ViewAll(){

    const route = useRoute();
    const { requestType } = route.params as Params;

    const [movies,setMovies] = useState<MoviesProps[]>([])
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);


    async function getMovies(){
        const { data } = await api
        .get(`${requestType}?api_key=${key}&language=pt-BR&page=${page}`);

        if(!data){
            return setLoading(true);
        }

        setMovies(data.results);
        setLoading(false);
    }


    useEffect(() => {
        getMovies();
    },[requestType])

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
                        <Movie 
                            title={item.title}
                            image={{uri: urlImage + item.backdrop_path}}
                        />
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