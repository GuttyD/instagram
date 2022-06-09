import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/header/index';
import Caixas from './src/components/feed/caixas';
import Story from './src/components/feed/story';
import Barra from './src/components/feed/barra';

export default function App() {
  return (
      <SafeAreaView style={styles.feed}>
        <Header/>
        <Story/>
          <ScrollView>
            <Caixas/>
            <Caixas/>
            <Caixas/>
            <Caixas/>
            <Caixas/>
            <Caixas/>
            <Caixas/>
            <Caixas/>
          </ScrollView>
        <Barra/>
        <StatusBar hidden/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  feed: {
    backgroundColor: 'black',
  },
});
