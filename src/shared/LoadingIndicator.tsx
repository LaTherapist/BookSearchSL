import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const LoadingIndicator = () => {
  return (
    <ActivityIndicator
      size="large"
      color="rgb(15, 200, 15)"
      style={styles.indicator}
    />
  );
};

const styles = StyleSheet.create({
  indicator: {
    marginTop: 50,
  },
});

export default LoadingIndicator;
