import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import YoutubeIframe from "react-native-youtube-iframe";

interface YoutubeProps{
    videoId: string;
    onClose: () => void;
}

export default function ModalYoutube({ videoId, onClose } : YoutubeProps){
    return(
        <View style={styles.container}>

                <View style={styles.content}>

                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.button}
                    
                    >
                        <AntDesign
                            name='close'
                            color='#fff'
                            size={32}
                        />
                    </TouchableOpacity>
                    
                    <YoutubeIframe
                        play={true}
                        height={350}
                        videoId={videoId}
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
    },
    content:{
        backgroundColor: 'rgba(0,0,0,0.1)', 
        height: 500, 
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center'
    },
    button:{
        alignItems: 'flex-end',
        marginBottom: 10,
    }
});