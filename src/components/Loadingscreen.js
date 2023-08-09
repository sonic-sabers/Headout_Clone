// /* eslint-disable react-native/no-inline-styles */
// import {
//   ActivityIndicator,
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React from 'react';
// import {colors} from '../constants';

// let dimensions = Dimensions.get('window');
// export default function Loadingscreen() {
//   const ratio = 120 / 786;
//   const logowidth = dimensions.width / 2.2;
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: colors.white,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
// <Image
//   source={require('../../src/assets/Image/Logo.png')}
//   style={{
//     width: logowidth,
//     height: logowidth * ratio,
//     zIndex: 300,
//     marginBottom: 10,
//   }}
// />
//       <Text style={styles.Abouttext}>Fetching Your Product</Text>
//       <ActivityIndicator
//         size={30}
//         color={colors.primary}
//         style={{
//           marginTop: 20,
//         }}
//       />
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   Abouttext: {
//     fontSize: 17,
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//     color: colors.black3,
//   },
// });

import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Image, Text, StyleSheet, View } from 'react-native';
import { colors } from '../constants';


export default function Loadingscreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isTop, setIsTop] = useState(true);
  let dimensions = Dimensions.get('window');
  const ratio = 120 / 786;
  const logowidth = dimensions.width / 1.2;
  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 900,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      setIsTop(!isTop);
    })
  }

  useEffect(() => {
    startAnimation(isTop ? 1 : 0);
  }, [isTop]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40],
    extrapolate: 'clamp'
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[{ transform: [{ translateY }], marginTop: -70, justifyContent: 'center', alignItems: 'center' }]}>
        <Image
          source={require('../../src/assets/Image/Logo3.png')}
          style={{
            width: logowidth,
            height: logowidth * ratio,
            marginRight: -250
            // zIndex: 300,
            // marginBottom: 10,
          }}
        />
      </Animated.View>
        <Text style={styles.Abouttext}>Fetching Your Product</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Abouttext: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: colors.black3,
    marginTop: 50
  },
});