import {View} from 'react-native';
import React from 'react';

export default function Hstack({children, between, styles, centered}) {
  return (
    <View
      style={[
        {
          justifyContent: between ? 'space-between' : null,
          alignItems: centered ? 'center' : null,
        },
        styles,
        {flexDirection: 'row'},
      ]}>
      {children}
    </View>
  );
}
