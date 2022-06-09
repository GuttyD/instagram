import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Autor() {
 return (
   <View style={styles.autor}>
       <View style={styles.iconAutor}>
           <Ionicons name="person-circle-outline" size={40} color="black" />
       </View>
       <Text style={styles.nomeAutor}>Fulaninho2008._Sobrenome</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    autor: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        marginTop: -26,
        borderWidth: 1,
        borderColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconAutor: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    nomeAutor: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
    },
});