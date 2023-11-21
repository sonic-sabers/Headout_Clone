/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import { h1 } from '../assets/fontStyles';
import Hstack from './Hstack';
import { NewYork } from './ExperienceComponent';

const Topattractions = props => {
  const navigation = useNavigation();
  const {
    nested,
    details,
    Categoriesdetails,
    title,
    price,
    data,
    style,
    Location,
    imageStyle,
    img,
    MediumSize,
    SmallSize,
    customPress
  } = props;
  let imgSource = NewYork;

  if (img) {
    imgSource = img;
  }

  return (
    <Pressable
      style={style}
      onPress={() => customPress ? customPress() :
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
            : navigation.push('ExploreAll', {
              itemId: 86,
              otherParam: 'anything you want here',
              details,
            })
      }>
      <Image
        source={imgSource}
        style={[
          {
            width: 150,
            height: 220,
            borderRadius: 3,
            marginRight: 15,
          },
          MediumSize && {
            width: 130,
            height: 180,
          },
          SmallSize && {
            width: 120,
            height: 120,
          },
          imageStyle,
        ]}
      />
      <Text style={[h1, styles.titleText, SmallSize && { maxWidth: 120, fontSize: 13 }]}>
        {title ? title : 'One World Observatory Tickets'}
      </Text>
      {Location && <Text style={[h1, styles.fromText]}>
        {Location ? Location : 'One World Observatory Tickets'}
      </Text>}
      {!SmallSize && <Hstack>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.Dollor}>$</Text>
        <Text style={styles.PriceText}>{price ? price : 94}</Text>
      </Hstack>}
    </Pressable>
  );
};
export default Topattractions;

const styles = StyleSheet.create({
  titleText: {
    color: colors.black,
    opacity: 0.75,
    marginTop: 10,
    maxWidth: 150,
  },
  fromText: {
    fontSize: 13.3,
    fontFamily: 'Inter-Regular',
    color: colors.black3,
    opacity: 0.85,
    maxWidth: 200,
  },
  PriceText: {
    fontSize: 13.3,
    fontFamily: 'Inter-Regular',
    color: colors.black3,
    opacity: 0.85,
    maxWidth: 200,
  },
  Dollor: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: colors.black3,
    opacity: 0.85,
    marginLeft: 2,
  },
});
