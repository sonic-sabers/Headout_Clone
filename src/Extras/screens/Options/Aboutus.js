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
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, Styledtextinput } from './Emailverification';

const About = () => {
  return (
    <View>
      <Text>Contactus</Text>
    </View>
  )
}


export default function Aboutus() {
  return (
    <ScrollView
      style={{
        // flex: 1,
        backgroundColor: colors.white,
      }}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.white,
        marginBottom: 70
      }}
    >

      <Header2 title='About Us' />
      <View
        style={{

          height: 90,
          // flex: 1,
          borderRadius: 20,
          padding: 10,
          backgroundColor: '#00000005',
          margin: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>

        <View style={{
          height: 40,
          width: 40,
          borderRadius: 90,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary
        }}>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'cover',
            }}
            source=
            {require('../../assets/images/Logo2.png')}
          />
        </View>
        {/* <View style={{
          height: 40,
          width: 40,
          borderRadius: 90,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary
        }}> */}
          <Image
            style={{
              height: 64,
              width: 87,
              resizeMode: 'cover',
            }}
            source=
            {require('../../assets/images/Sit1.png')}
          />
        {/* </View> */}
      </View>
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient> */}
      <View style={{
        flex: 1,
        // backgroundColor:'#00000005',
        backgroundColor: colors.primary,
        marginHorizontal: 10,
        paddingTop: 10,
        borderRadius: 20,
        overflow: 'hidden'

      }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.white,
            marginLeft: 15,
            marginBottom: 10,

          }}>
          ScaleRich
        </Text>
        <View style={{

          flex: 1,
          backgroundColor: colors.white,
          borderRadius:10


        }}>

          <View style={{

            flex: 1,
            backgroundColor: '#00000010',
            borderRadius:10


          }}>

          </View>
        </View>
      </View>

    </ScrollView>
  )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});