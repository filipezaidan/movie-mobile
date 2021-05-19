import React from 'react';
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
import Header from '../../components/Header';


import colors from '../../styles/colors';


const data = [
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
    }
]


export default function ViewAll(){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>

            <FlatList
                data={data}
                keyExtractor={ (item) => String(item.key)}
                renderItem={({item})=> {
                    return(
                        <View>
                            <Image
                            source={item.img}
                        
                            />
                        </View>
                    );

                }}
            
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