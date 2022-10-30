import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ViewPropTypes,
  Switch,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import { Hstack } from '../components';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Customheader, Headercomponent, Topattractions } from './Explorescreen';

const Nearbydata = ([
  { City: 'Dubai', Country: 'United Arab Emirates', key: '1' },
  { City: 'Abu Dhabi', Country: 'United Arab Emirates', key: '2' },
  { City: 'Chiang Mai', Country: 'Thailand', key: '3' },
  { City: 'Bangkok', Country: 'Thailand', key: '4' },
  { City: 'Pattaya', Country: 'Thailand', key: '5' },
  { City: 'Delhi', Country: 'India', key: '6' },
  { City: 'Beijing', Country: 'China', key: '7' },
  { City: 'Malé', Country: 'Maldives', key: '8' },
  // { title: ' bdbfb bb', key: '9' },
]);


export default function Searchscreen() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
      padding: 15,

    }}>

      <Hstack centered styles={{
        marginBottom: 10,
        // backgroundColor: 'green',
        // padding: 5,
        borderWidth: 0.7,
        borderColor: '#00000095',
        paddingLeft: 10,
        borderRadius: 10,

      }}>
        <AntDesign name="search1" color={colors.black2} size={22} />

        <TextInput
          autoFocus={true}
          contextMenuHidden
          selectTextOnFocus
          style={{
            // backgroundColor: 'blue',
            marginLeft: 10,
            flex: 1,
            color: colors.black1,
            fontWeight: '400',
            fontSize: 16,

          }}
          placeholder='Where are you heading ?'
          onChangeText={onChangeText}
          value={text}
        />
      </Hstack>

      <View style={{
        flex: 1,

      }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: colors.black2,
            marginBottom: 15,

          }}>
          Nearby Destinations
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{

            // flex: 1,
            paddingBottom: 50,

          }}
          style={{
            flex: 1,

          }}>
          {Nearbydata.map((data, index) => {
            return (

              <Hstack
                centered
                key={data.key} styles={{
                  // backgroundColor: '#9bacb2',
                  marginBottom: 15,

                }}>
                {/* Feather map-pin */}
                <View style={{
                  height: 55,
                  width: 55,
                  backgroundColor: colors.black3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: colors.black4,

                }}>
                  <Feather name="map-pin" color={colors.black2} size={22} />

                </View>
                <View style={{
                  flex: 1,
                  marginLeft: 10,
                  justifyContent: 'center',

                }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      fontFamily: 'Roboto',
                      color: colors.black2,
                    }}>
                    {data.City}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      fontFamily: 'Roboto',
                      color: colors.black2,
                      marginTop: 4,

                    }}>
                    {data.Country}
                  </Text>
                </View>
              </Hstack>
            )
          })}
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})