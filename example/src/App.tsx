import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Flash } from 'react-native-web-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Flash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
