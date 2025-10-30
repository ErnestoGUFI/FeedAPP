import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FeedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});


