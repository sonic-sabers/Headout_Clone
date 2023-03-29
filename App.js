
import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { Bottomtab } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Bottomtab />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
