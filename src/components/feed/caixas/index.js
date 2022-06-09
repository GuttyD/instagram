import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Inter from './inter';
import Autor from './autor';

export default function Caixas(){
    return (
            <View style={styles.caixas}>
            <Autor/>
            <Inter/>
            </View>      
    );
}

const styles = StyleSheet.create ({
    caixas: {
        backgroundColor: 'white',
        width: '100%',
        height: 350,
        marginTop: 80,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginBottom: 100,
    },
});