/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../constants';

let dimensions = Dimensions.get('window');
export default function Loadingscreen() {
  const ratio = 120 / 786;
  const logowidth = dimensions.width / 2.2;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../src/assets/Image/Logo.png')}
        style={{
          width: logowidth,
          height: logowidth * ratio,
          zIndex: 300,
          marginBottom: 10,
        }}
      />
      <Text style={styles.Abouttext}>Fetching Your Product</Text>
      <ActivityIndicator
        size={30}
        color={colors.primary}
        style={{
          marginTop: 20,
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  Abouttext: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: colors.black3,
  },
});
