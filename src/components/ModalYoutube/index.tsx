import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import YoutubeIframe, { getYoutubeMeta } from "react-native-youtube-iframe";


export default function ModalYoutube({}){
    return(
        <View style={styles.container}>

                <View style={{backgroundColor: 'rgba(0,0,0,0.3)', height: 250, paddingHorizontal: 20}}>

                    <TouchableWithoutFeedback>
                        <AntDesign
                            name='close'
                            color='#fff'
                            size={32}
                        />
                    </TouchableWithoutFeedback>
                    
                    <YoutubeIframe
                        play={true}
                        height={250}
                        videoId={"2qm_eh-rV8g"}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        paddingHorizontal: 10,
    }
});