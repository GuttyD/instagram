import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Barra() {
 return (
   <View style={styles.barra}>
       <TouchableOpacity style={styles.home}>
       <Feather style={styles.home} name="home" size={24} color="white"/>
       </TouchableOpacity>



       <TouchableOpacity style={styles.lupa}>
         <AntDesign name="search1" size={24} color="white"/>
       </TouchableOpacity>



       <TouchableOpacity style={styles.reels}>
            <Entypo name="folder-video" size={24} color="white" />
       </TouchableOpacity>

       <TouchableOpacity style={styles.shop}>
            <Entypo name="shop" size={24} color="white"/>
       </TouchableOpacity>



       <TouchableOpacity style={styles.perfil}>
            <Ionicons name="person-outline" size={24} color="white"/>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    barra: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: '#333333',
    },
    home: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    lupa: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    reels: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    shop: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    perfil: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
});