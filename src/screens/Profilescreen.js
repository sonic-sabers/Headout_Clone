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
  StatusBar,
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
import { Customheader, ExperienceComponent, Glass, Museum3 } from './Explorescreen';


export const Hline = () => {
  return (
    <View style={{
      backgroundColor: colors.black4,
      // flex: 1,
      height: 0.8,
      borderRadius: 30,
      marginVertical: 10,

    }}>
    </View>
  )
}


export const Endalign = () => {
  return (
    <Hstack centered between >
      <Text>Contactus</Text>
      <Text>Contactus</Text>
    </Hstack>
  )
}

export default function Profilescreen() {


  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,

      }}
      style={{
        flex: 1,
        backgroundColor: colors.white,

      }}>
      <StatusBar
        animated={true}
        backgroundColor="#F8F7FF"
      // barStyle={statusBarStyle}
      // showHideTransition={statusBarTransition}
      // hidden={hidden}
      />
      <View style={{
        padding: 30,
        backgroundColor: '#F8F7FF'
      }}>
        <Hstack styles={{
          marginVertical: 30,

        }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: colors.black,
              flex: 1,
              marginRight: 20

            }}>
            Sign in to get cashback as credits insider-only offers and exclusive deals
          </Text>
          <FontAwesome5
            name="gifts"
            color={colors.black}
            size={55}
            style={{
            }}
          />
        </Hstack>

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.black6,
            marginTop: 10,

          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.black1,
            }}>
            Continue With Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.black6,
            marginTop: 10,

          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.black1,
            }}>
            Continue With Email
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{
        padding: 10,

      }}>

        <Customheader nested title='Settings' />
        <Endalign />
        <Hline />
      </View>
      <Text>Profilescreen</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})