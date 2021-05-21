import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList 
} from 'react-native';
import { GenresProps } from '../../libs/storage';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Params {
    data : GenresProps[];
}

export default function GenresList({ data } : Params){
    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.genres}>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginBottom: 10,
        height: 30,
        margin: 5,
        
    },
    genres:{
        flex: 1,
        width: '100%',
        marginLeft: 10,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        padding: 10,
    },
    title:{
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.complement
    }
});