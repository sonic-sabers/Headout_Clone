/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';
import Hstack from './Hstack';
import {h1} from '../assets/fontStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
let images = 315;

export const Museum1 = require('../assets/Image/Museum1.png');
export const Museum2 = require('../assets/Image/Museum2.png');
export const Museum3 = require('../assets/Image/Museum3.png');
export const Glass = require('../assets/Image/Glass.png');
export const Helicopter = require('../assets/Image/Helicopter.png');
export const NewYork = require('../assets/Image/NewYork.png');

const ExperienceComponent = props => {
  const {
    free,
    img,
    center,
    style,
    title,
    Category,
    rate,
    discount,
    reviewcount,
    rating,
    noRating,
    save,
    from,
    noInstant,
    reducewidth,
    onLoad,
  } = props;

  const navigation = useNavigation();
  let imgSource = Museum1;

  if (img) {
    imgSource = img;
  }

  return (
    <View>
      {onLoad ? (
        <SkeletonPlaceholder>
          <View
            style={{
              marginTop: 10,
              borderRadius: 7,
              marginRight: 10,
            }}>
            <View
              style={{
                width: images,
                height: (images * 315) / 504,
              }}
            />
            {/* <View
              style={{ marginTop: 6, width: 260, height: 20, borderRadius: 5 }}
            />
            <View
              style={{ marginTop: 6, width: 350, height: 70, borderRadius: 10 }}
            /> */}
            <View style={{height: 10, marginTop: 15, width: images}} />
            <View style={{height: 10, marginTop: 15, width: '90%'}} />
            <View style={{height: 10, marginTop: 15, width: '50%'}} />
            <View style={{height: 10, marginTop: 15, width: '20%'}} />
          </View>
        </SkeletonPlaceholder>
      ) : (
        <Pressable
          onPress={() =>
            navigation.push('Exploredetails', {
              screenname: 'Explorescreen',
              title,
              reviewcount,
            })
          }
          style={[
            {
              overflow: 'hidden',
            },
            style,
            center ? {alignSelf: 'center'} : {marginRight: 15},
            reducewidth && {
              width: images + 40,
              alignSelf: 'center',
              marginBottom: 20,
            },
          ]}>
          <ImageBackground
            source={imgSource}
            style={[
              {
                height: (images * 315) / 504,
                marginTop: 10,
                borderRadius: 7,
                padding: 8,
                zIndex: 600,
              },
              center
                ? {
                    width: images + 50,
                    height: ((images + 50) * 315) / 504,
                  }
                : {
                    width: images,
                  },
              reducewidth && {
                width: images + 40,
                height: ((images + 30) * 315) / 504,
              },
            ]}
            imageStyle={{
              borderRadius: 4,
            }}>
            {free && (
              <TouchableOpacity
                style={{
                  backgroundColor: colors.white,
                  padding: 3,
                  borderRadius: 2,
                  alignSelf: 'flex-start',
                  paddingHorizontal: 7,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 1.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Inter-SemiBold',
                    color: colors.black,
                    opacity: 0.7,
                  }}>
                  Free Cancellation
                </Text>
              </TouchableOpacity>
            )}
          </ImageBackground>
          <View>
            <Hstack
              centered
              between
              styles={[
                {
                  marginTop: 5,
                  width: images,
                },
                center && {
                  width: images + 50,
                },
                reducewidth && {
                  width: images + 40,
                },
              ]}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Inter-Medium',
                  color: colors.black2,
                  opacity: 0.8,
                  maxWidth: images - 20,
                }}>
                {Category ? Category : 'Museum of Modern Art(MoMA) Tickets'}
              </Text>
              <Hstack centered styles={{marginTop: 5}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Inter-SemiBold',
                    color: colors.color1,
                  }}>
                  {rating ? rating : '4.3'}
                </Text>
                <FontAwesome
                  name="star"
                  size={12}
                  color={colors.color1}
                  style={{
                    marginHorizontal: 2,
                  }}
                />
                {!noRating && (
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: 'Inter-Regular',
                      color: colors.black2,
                      opacity: 0.8,
                    }}>
                    ({reviewcount ? reviewcount : 9})
                  </Text>
                )}
              </Hstack>
            </Hstack>
            <Text
              style={[
                h1,
                {
                  color: colors.black,
                  opacity: 0.75,
                  maxWidth: images - 20,
                },
              ]}>
              {title ? title : 'Museum of Modern Art(MoMA) Tickets'}
            </Text>
            {!noInstant && (
              <Hstack
                centered
                styles={{
                  marginLeft: -2,
                  marginTop: 5,
                }}>
                <Ionicons
                  name="flash-outline"
                  size={16}
                  color={colors.black1}
                />
                <Text
                  style={{
                    fontSize: 13.5,
                    fontFamily: 'Inter-Regular',
                    color: colors.black1,
                    marginLeft: 2,
                  }}>
                  Instant Confirmation
                </Text>
              </Hstack>
            )}
            {from && (
              <Hstack centered>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Inter-Medium',
                    color: colors.black2,
                    opacity: 0.8,
                  }}>
                  from
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Inter-Medium',

                    color: colors.black2,
                    opacity: 0.8,
                    marginLeft: 3,
                    textDecorationLine: 'line-through',
                  }}>
                  ${from}
                </Text>
              </Hstack>
            )}
            <Hstack
              centered
              styles={{
                marginTop: 5,
              }}>
              <Hstack>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',

                    color: colors.black1,
                    marginTop: 2,
                  }}>
                  $
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Inter-SemiBold',

                    color: colors.black1,
                    marginTop: 2,
                  }}>
                  {rate ? rate : '25'}
                </Text>
              </Hstack>
              {discount && (
                <View
                  style={{
                    marginLeft: 3,
                    backgroundColor: '#DCFBDB',
                    borderRadius: 3,
                    marginTop: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    height: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Inter-Medium',
                      color: '#367D4F',
                    }}>
                    {discount}% Cashback
                  </Text>
                </View>
              )}
              {save && (
                <View
                  style={{
                    marginLeft: 3,
                    backgroundColor: '#DCFBDB',
                    borderRadius: 3,
                    marginTop: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    height: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Inter-Medium',
                      color: '#367D4F',
                    }}>
                    Save {save}%
                  </Text>
                </View>
              )}
            </Hstack>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default ExperienceComponent;
