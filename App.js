import React from 'react';
import { StyleSheet, View } from 'react-native';

import OlaMundo from './components/OlaMundo'
import Aluno from './components/Aluno'

export default function App() {
  return (
    <View style={styles.container}>
      <Aluno/>
      <OlaMundo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
