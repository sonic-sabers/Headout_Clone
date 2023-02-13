/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import Hstack from './Hstack';
import { colors } from '../constants';
import { topText,innerText } from '../assets/fontStyles';

const Customheader = ({
  title,
  seeall,
  style,
  nested,
  category,
  size,
  styles,
  account,
  innerTexts,
}) => {
  const navigation = useNavigation();
  let details = 'details';
  return (
    <Hstack
      centered
      between
      styles={[
        {
          marginTop: 25,
          marginLeft: 15,
        },
        category && {
          marginLeft: 5,
        },
        style,
      ]}>
      <Text
        style={[
          {
            marginLeft: 10,
            color: colors.black,
          },
          topText,
          size && {
            fontSize: 25,
            marginTop: 20,
          },
          account && {
            fontSize: 15,
          },
          styles,
          innerTexts && innerText,
        ]}>
        {title ? title : 'Title'}
      </Text>
      {seeall && (
        <TouchableOpacity
          onPress={() =>
            nested
              ? navigation.navigate('Explorestack', {
                screen: 'ExploreAll',
                params: { itemId: 120, details },
              })
              : navigation.push('ExploreAll', {
                itemId: 86,
                otherParam: 'anything you want here',
                details,
                title: 'New York Tours',
              })
          }>
          <Hstack centered styles={{}}>
            <Text
              style={{
                fontSize: 13,
                // fontWeight: '600',
                fontFamily: 'Inter-Regular',
                color: colors.black,
                marginRight: 3,
                opacity: 0.75,
              }}>
              See All
            </Text>
            <Entypo
              name="chevron-thin-right"
              size={12.5}
              color={colors.black1}
              style={{
                marginRight: 20,
              }}
            />
          </Hstack>
        </TouchableOpacity>
      )}
    </Hstack>
  );
};

export default Customheader;

// const styles = StyleSheet.create({});
