import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Bottomtab } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { colors } from './src/constants';
export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Bottomtab />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}


