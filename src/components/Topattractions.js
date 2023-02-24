/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import { h1 } from '../assets/fontStyles';
import Hstack from './Hstack';

const Topattractions = props => {
  const navigation = useNavigation();
  const { nested, details, Categoriesdetails, title, price, data, style, imageStyle } = props;
  // console.log('data', data);
  return (
    <Pressable
      style={style}
      onPress={() =>
        Categoriesdetails
          ? navigation.navigate('Categoriesall', {
            otherParam: 'anything you want here',
            details,
          })
          : nested
            ? navigation.navigate('Explore', {
              screen: 'ExploreAll',
              params: { itemId: 120, details },
            })
            :
            navigation.push('ExploreAll', {
              itemId: 86,
              otherParam: 'anything you want here',
              details,
            })
      }>
      <Image
        source={require('../assets/Image/NewYork.png')}
        style={[{
          width: 150,
          height: 220,
          borderRadius: 3,
          marginRight: 15,
        }, imageStyle]}
      />
      <Text
        style={[
          h1,
          {
            color: colors.black,
            opacity: 0.75,
            marginTop: 10,
            maxWidth: 150,
          },
        ]}>
        {title ? title : 'One World Observatory Tickets'}
      </Text>
      <Hstack>
        <Text
          style={{
            fontSize: 13.3,
            fontFamily: 'Inter-Regular',
            color: colors.black3,
            opacity: 0.85,
            maxWidth: 200,
          }}>
          From
        </Text>
        <Text
          style={{
            fontSize: 13,
            // fontWeight: '700',
            // fontFamily: 'Inter-SemiBold',
            fontFamily: 'Roboto-Regular',

            color: colors.black3,
            opacity: 0.85,
            marginLeft: 2,
          }}>
          $
        </Text>
        <Text
          style={{
            fontSize: 13.3,
            fontFamily: 'Inter-Regular',
            color: colors.black3,
            opacity: 0.85,
            maxWidth: 200,
          }}>
          {price ? price : 94}
        </Text>
      </Hstack>
    </Pressable>
  );
};
export default Topattractions;

const styles = StyleSheet.create({});
