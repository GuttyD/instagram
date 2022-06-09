import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Inter(){
    const [liked, setLikeState] = useState(false);
    const [save, setSaveState] = useState(false);




    return (
        <View style={styles.inter}>
            <TouchableOpacity style={styles.cora} onPress={() => setLikeState(!liked)}>
                { liked && <AntDesign style={styles.cora} name="heart" size={32} color="#e63240" /> }
                { !liked && <AntDesign style={styles.cora} name="hearto" size={32} color="white" /> }
            </TouchableOpacity>



            <TouchableOpacity style={styles.coment}>
                <Ionicons style={styles.coment} name="chatbubble-outline" size={32} color="white" />
            </TouchableOpacity>
            
            
            
            <TouchableOpacity style={styles.direct}>
                <Ionicons style={styles.direct} name="paper-plane-outline" size={32} color="white" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.salvo} onPress={() => setSaveState(!save)}>
                { save && <FontAwesome style={styles.salvo} name="bookmark" size={32} color="white" /> }
                { !save && <FontAwesome style={styles.salvo} name="bookmark-o" size={32} color="white" /> }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    inter: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 350,
        position: 'relative',
    },
    cora: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'black',
        marginTop: 5,
    },
    coment: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'black',
        marginTop: 5,
    },
    direct: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'black',
        marginTop: 5,
    },
    salvo: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'black',
        marginTop: 5,
    }
});