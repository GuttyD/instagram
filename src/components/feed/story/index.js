import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Story() {
 return (
        
    <View style={styles.storyContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
            <TouchableOpacity style={styles.storyBubble}/>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create ({
    storyContainer: {
        width: '100%',
        height: 90,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems: 'center',
    },
    storyBubble: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'purple',
        marginRight: 10,
        marginStart: 10,
        marginTop: 20,
    },
});