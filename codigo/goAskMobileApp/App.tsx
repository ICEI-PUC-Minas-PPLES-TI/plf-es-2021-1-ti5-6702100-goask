import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is the GoAsk app!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffcc',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 60,
    textAlign: 'center',
    color: '#944dff',
    fontWeight: 'bold',
    textShadowOffset: {height: 2, width: -2},
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
});

export default App;
