import React, { Component, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import {COLORS, NFTData} from '../constants';
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList 
            data={nftData}
            renderItem={({ item }) =>  <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
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