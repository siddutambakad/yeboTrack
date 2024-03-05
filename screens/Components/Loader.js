import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.Loader}>
      <ActivityIndicator
        size={50}
        color={'#C5197D'}
        animating={true}></ActivityIndicator>
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  Loader: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 5,
  },
});