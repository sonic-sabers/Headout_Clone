
import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import {  Bottomtab } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Bottomtab />
      </NavigationContainer>
    </PaperProvider>
  );
}
