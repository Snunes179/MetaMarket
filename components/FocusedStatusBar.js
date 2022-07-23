import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React from 'react';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  if(isFocused == true){
    return (
      <StatusBar animated={true} {...props} />
    );
  }
  else {
    return null;
  }
  // return (
  //   <View>
  //     <Text style={styles.textTitle}>FocusedStatusBar</Text>
  //   </View>
  // )
}

const styles = StyleSheet.create({
  textTitle: {
    color: "#fafcff",
  }
});

export default FocusedStatusBar;