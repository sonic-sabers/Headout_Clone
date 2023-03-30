/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants';
import {
  Customheader,
  ExperienceComponent,
  Hstack,
  Topattractions,
} from '../../components';

import Feather from 'react-native-vector-icons/Feather';
import {innerText} from '../../assets/fontStyles';

let dimensions = Dimensions.get('window');
let imageWidth = dimensions.width - 30;
// let imageHeight = dimensions.height;

export const Museum1 = require('../../assets/Image/Museum1.png');
export const Museum2 = require('../../assets/Image/Museum2.png');
export const Museum3 = require('../../assets/Image/Museum3.png');
export const Glass = require('../../assets/Image/Glass.png');
export const Helicopter = require('../../assets/Image/Helicopter.png');
export const NewYork = require('../../assets/Image/NewYork.png');
export const Liberty = require('../../assets/Image/Liberty.png');

export default function Explorescreen(route) {
  const [text, onChangeText] = useState('');
  const [City, onChangeCity] = useState('New York');
  const navigation = useNavigation();
  const [onLoad, setOnLoad] = useState(true);
  useEffect(() => {
    const CurrentCity = route?.route?.params?.City;
    console.log('City', CurrentCity);
    onChangeCity(CurrentCity?.length ? CurrentCity : 'New York');
    setOnLoad(false);
  }, [route?.route?.params?.City]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={!onLoad}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              overflow: 'hidden',
            }}>
            <ImageBackground
              source={City === 'New York' ? Liberty : Museum2}
              style={{
                alignSelf: 'center',
                width: imageWidth,
                height: (imageWidth * 600) / 527,
                marginTop: 20,
                flex: 1,
                padding: 35,
              }}
              imageStyle={{
                borderRadius: 15,
              }}
              resizeMode="cover">
              <Text style={[innerText, {color: colors.white}]}>
                {City}'s best experiences are waiting for you
              </Text>
            </ImageBackground>
            {/* )} */}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Hstack
              styles={{
                height: 50,
                margin: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.15,
                shadowRadius: 1.5,
                elevation: 1,
                marginHorizontal: 30,
                borderRadius: 8,
                marginTop: -25,
                padding: 4,
                backgroundColor: colors.white,
                alignItems: 'center',
                flexDirection: 'row',
              }}
              centered
              between>
              <TextInput
                style={{
                  color: colors.black4,
                  fontSize: 13.5,
                  flex: 1,
                  marginLeft: 8,
                  fontFamily: 'Inter-Regular',
                }}
                placeholderTextColor={colors.black4}
                placeholder="Where you are heading?"
                onChangeText={onChangeText}
                value={text}
                editable={false}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 8,
                  height: 43,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 43,
                }}>
                <Feather name="search" size={20} color={colors.white} />
              </TouchableOpacity>
            </Hstack>
          </TouchableOpacity>
        </View>
        <Customheader title="Top Experience in" City={City} />
        <ScrollView
          horizontal
          // scrollEnabled={!onLoad}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            color: colors.color2,
          }}
          style={{
            paddingLeft: 25,
            marginBottom: 25,
          }}>
          <ExperienceComponent
            img={Glass}
            title="SUMMIT One Vanderbilt Tickets"
            Category="Summit One Vanderbilt"
            rate="42.46"
            discount="10"
            reviewcount="128"
            free
            onLoad={onLoad}
          />
          <ExperienceComponent
            free
            title="Tickets to Edge Observation Deck"
            Category="Edge Observation Deck Tickets"
            rate="40.82"
            reviewcount="29"
            onLoad={onLoad}
          />

          <ExperienceComponent
            img={Museum3}
            Category="Empire State Building Tickets"
            title="Skip-the-Line Entry Tickets to Empire State Building Observatory"
            rate="44"
            discount="10"
            reviewcount="443"
            onLoad={onLoad}
          />
          <ExperienceComponent
            img={Museum2}
            title="Entry Tickets to The Museum of Modern Art(MoMA)"
            Category="Museum of Modern Art(MoMA) Tickets"
            rate="43.46"
            reviewcount="402"
          />
          <ExperienceComponent
            img={Museum2}
            title="The Lion King"
            Category="Broadway Tickets"
            rate="99.5"
            reviewcount="364"
          />
          <View
            style={{
              paddingRight: 30,
            }}
          />
        </ScrollView>
        <View
          style={{
            // marginBottom: 30,
            backgroundColor: colors.black7,
            flex: 1,
            paddingVertical: 30,
          }}>
          <Customheader
            seeall
            style={{
              marginTop: 5,
            }}
            title="Top Attractions in"
            City={City}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 15,
            }}
            style={{
              paddingHorizontal: 10,
              paddingRight: 20,
              marginTop: 20,
            }}>
            <Topattractions title="Broadway Tickets" price="46.5" />
            <Topattractions title="Empire State Building Tickets" price="44" />
            <Topattractions
              title="One World Obervatory TIckets"
              price="40.82"
            />
            <Topattractions title="Top of the Rock Tickets" price="74" />
            <Topattractions title="Statue of Liberty Tickets" price="29" />
          </ScrollView>
        </View>
        <View>
          <Customheader title="Entertainment" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,
            }}>
            <ExperienceComponent
              img={Museum3}
              Category="Entertainment"
              title="The Lion King"
              rate="99.5"
              reviewcount="364"
              rating="4.55"
            />
            <ExperienceComponent
              img={Museum2}
              title="Aladdin"
              Category="Entertainment"
              rate="74"
              rating="4.47"
              discount="10"
              reviewcount="546"
            />
            <ExperienceComponent
              img={Museum2}
              title="Moulin Rouge! The Musical"
              Category="Entertainment"
              rate="106.5"
              rating="4.77"
              reviewcount="7"
            />
            <ExperienceComponent
              img={Museum2}
              title="Chicago"
              Category="Entertainment"
              rate="67"
              rating="4.52"
              discount="10"
              reviewcount="600"
            />
            <ExperienceComponent
              img={Museum2}
              title="MJ The Musical"
              Category="Entertainment"
              rate="106.5"
              rating="4.4"
              reviewcount="2"
            />
          </ScrollView>
        </View>
        <View>
          <Customheader
            title="Observation Desks"
            style={{
              marginTop: 20,
            }}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,
            }}>
            <ExperienceComponent
              free
              title="Tickets to Edge Observation Deck"
              Category="Tickets"
              rate="40.82"
              reviewcount="29"
              rating="4.34"
            />
            <ExperienceComponent
              img={Museum3}
              Category="Tickets"
              title="Skip-the-Line Entry Tickets to Empire State Building Observatory"
              rate="44"
              discount="10"
              reviewcount="443"
              rating="4.38"
            />
            <ExperienceComponent
              img={Museum3}
              Category="Tickets"
              title="Skip-the-Line Entry Tickets to One World Observatory"
              rate="47.91"
              discount="10"
              reviewcount="56"
              rating="4.34"
            />
            <ExperienceComponent
              free
              title="SUMMIT One Vanderbilt Tickets"
              Category="Tickets"
              rate="42.46"
              reviewcount="128"
              rating="4.46"
            />
          </ScrollView>
        </View>
        <View>
          <Customheader title="Cruises" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,

              marginBottom: 25,
            }}>
            <ExperienceComponent
              free
              title="1 Hour Statue of Liberty Sightseeing Cruise"
              Category="Cruises"
              rate="30"
              reviewcount="7"
              rating="4.31"
            />
            <ExperienceComponent
              free
              title="Statue of Liberty & Ellis island Sunset Cruise with Times Square Dinning"
              Category="Cruises"
              rate="70"
              reviewcount="3"
              rating="4.41"
            />
            <ExperienceComponent
              free
              title="Statue of Liberty & Ellis island General Admission + Guided Tour"
              Category="Cruises"
              rate="69"
              reviewcount="43"
              rating="4.1"
            />
          </ScrollView>
        </View>
        <View>
          <Customheader title="Aerial Sightseeing" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,

              marginBottom: 25,
            }}>
            <ExperienceComponent
              free
              title="15 Minute NYC Helicopter Tour from Downtown Manhattan"
              Category="Aerial Sightseeing"
              rate="229"
              reviewcount="138"
              rating="4.53"
              discount="5"
            />
            <ExperienceComponent
              free
              title="30 Minute NYC Helicopter Tour from Downtown Manhattan"
              Category="Aerial Sightseeing"
              rate="389"
              reviewcount="78"
              rating="4.51"
              discount="5"
            />
            <ExperienceComponent
              free
              title="Helicopter 1-on-1 Flying Lession"
              Category="Aerial Sightseeing"
              rate="540"
              rating="New"
              noRating
            />
          </ScrollView>
        </View>
        <View>
          <Customheader title="Bikes & Segway" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,
            }}>
            <ExperienceComponent
              free
              title="Centrak Park Bike Rental Tickets"
              Category="Tours"
              rate="10.89"
              from="21.78"
              reviewcount="3"
              rating="4.14"
              save="50"
            />
            <ExperienceComponent
              free
              title="Central Park Bike Tour"
              Category="Tours"
              rate="48.99"
              reviewcount="3"
              noInstant
              rating="4.48"
            />
            <ExperienceComponent
              free
              title="Brooklyn Bridge Bike Rentals"
              Category="Tours"
              rate="48.99"
              reviewcount="4"
              noInstant
              rating="4.53"
            />
          </ScrollView>
        </View>
        <View>
          <Customheader title="Cruises in" City={City} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,
              paddingBottom: 100,
            }}>
            <ExperienceComponent
              free
              title="Statue of Liberty & Ellis island Sunset Cruise with Times Square Dinning"
              Category="Cruises"
              rate="70"
              reviewcount="3"
              rating="4.41"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
