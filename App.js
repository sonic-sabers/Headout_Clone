import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Bottomtab } from './src/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { colors } from './src/constants';

LogBox.ignoreLogs([
	'YellowBox has been replaced with LogBox',
	'Require cycle:',
	'Encountered two children with the same key, `0`',
	'Warning: Each child in a list should have a unique "key" prop',
	'Check the render method of `Parser`. See',
	'Require cycles are allowed',
	'new NativeEventEmitter',
	'Warning: Unexpected ref object provided for FlatList. Use either a ref-setter function or React.createRef().',
	"Looks like you're passing an inline function for 'component' prop for the screen 'Applications",
	"ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
])
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


