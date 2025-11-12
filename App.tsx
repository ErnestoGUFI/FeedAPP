import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import AddReportScreen from './src/screens/AddReportScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ReportsProvider } from './src/context/ReportsContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReportsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="Feed" component={FeedScreen} options={{ title: 'Feed de Reportes', headerShown: false }} />
          <Stack.Screen name="AddReport" component={AddReportScreen} options={{ title: 'Nuevo Reporte', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReportsProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});


