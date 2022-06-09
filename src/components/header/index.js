import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Header(){
    return (
        <SafeAreaView style={styles.header}>
            <Image style={styles.logo} source={require('./img/28-287308_instagram-logo-text-white.png')}/>
                <View style={styles.acoes}>
                    <TouchableOpacity style={styles.acoesBtn}>
                        <AntDesign name="plussquare" size={32} color="white" />   
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.interacoes}>
                        <AntDesign name="hearto" size={32} color="white" />  
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.mensagens}>
                        <Ionicons name="paper-plane-outline" size={32} color="white" />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    header: {
        width: '30%',
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 130,
        marginEnd: 200,
        position: 'relative',
    },
    acoes: {
        width: 5,
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    acoesBtn: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 25,
        margin: -80,
        marginBottom: -95,
    },
    interacoes: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 25,
        marginStart: 80,
        marginBottom: -15,
    },
    mensagens: {
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 25,
        marginEnd: -50,
        marginBottom: -15,
    },
});
