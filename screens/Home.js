import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeArea, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';
import {COLORS, NFTData} from '../constants';
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';

const Home = () => {
  return (
    // <View style={styles.container}>
    // <Text style={styles.textTitle}>Home</Text>
    // </View>
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList 
            data={NFTData}
            renderItem={({ item }) =>  <NFTCard data={item}/>}//<Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>

        <View style={styles.appBackground}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    zIndex: 1,
  },
  appBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  textTitle: {
    color: '#fafcff',
    fontSize: 24,
  },
  textSubtitle: {
    color: '#fafcff',
    fontSize: 16,
  }
});

export default Home;