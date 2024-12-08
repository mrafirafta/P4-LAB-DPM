import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const FireworksAnimation = () => (
  <LottieView
    source={require('../assets/Animation - 1733329344955.json')} // Path to animation file
    autoPlay
    loop={false}
    style={styles.fireworksAnimation}
    resizeMode="cover"
  />
);

const styles = StyleSheet.create({
  fireworksAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default FireworksAnimation;
