
// // import * as React from 'react';
// // import { NavigationContainer, } from '@react-navigation/native';
// // import { Bottomtab } from './src/screens';
// // import { Provider as PaperProvider } from 'react-native-paper';
// // import { SafeAreaView } from 'react-native';

// // export default function App() {
// //   return (
// //     <PaperProvider>
// //       <SafeAreaView style={{ flex: 1 }}>
// //         <NavigationContainer>
// //           <Bottomtab />
// //         </NavigationContainer>
// //       </SafeAreaView>
// //     </PaperProvider>
// //   );
// // }


// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // // import React, { useState } from 'react';
// // // import { StyleSheet } from 'react-native';


// // export default function App() {
// //   return (
// //     <View>
// //       <Text>App</Text>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({})

// // import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene as Vscene,
  ViroText,
  ViroARSceneNavigator as VNavigtor,
} from '@viro-community/react-viro';
import * as React from 'react';

const HelloWorldSceneAR = () => {
  // const [text, setText] = useState('Initializing AR...');

  return (
    <Vscene>
      <ViroText
        text={'hi'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </Vscene>
  );
};

export default () => {
  return (
    <VNavigtor
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
