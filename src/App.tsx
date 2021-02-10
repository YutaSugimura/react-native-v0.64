/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ListComponent } from './components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListComponent />
    </SafeAreaView>
  );
};

export default App;
