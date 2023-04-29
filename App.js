import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Bottomtab } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

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


