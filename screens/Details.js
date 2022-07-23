import React from 'react';
import { StyleSheet, Text, View, SafeArea, FlatList } from 'react-native';
import { useState } from 'react';
import {COLORS, NFTData} from '../constants';

const Details = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.textTitle}>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192734',
    alignItems: 'center',
    justifyContent: 'center',
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

export default Details;