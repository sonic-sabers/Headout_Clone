import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { innerText } from '../assets/fontStyles'
import { colors } from '../constants'

export default function Detailsheader({title}) {
  return (
    <Text
      style={[
        {
          marginLeft: 10,
          color: colors.black,
        },
        innerText,
        styles,
      ]}>
      {title ? title : 'Title'}
    </Text>
  )
}

const styles = StyleSheet.create({})