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
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HelpnSupport from '../Options/HelpnSupport';
import { Header2 } from './Securityscreen';


export default function HelpnSupportchat() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,

      }}>
      <Header2 title='Help & Support' />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // marginBottom: 100,
        }}
        style={{
          flex: 1,
          // marginBottom: 80,

          // backgroundColor: colors.color1,

        }}>

        <View style={{

          padding: 15,
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.lightblack,
          borderRadius: 20,
          marginTop: 10,

        }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.white,
              // marginTop: 10,

            }}>
            Ask For Help In Chat !
          </Text>
        </View>
      </ScrollView>
      <View style={{
          // backgroundColor: colors.color2,
          height:98,
          
      }}>
        <Text>HelpnSupportchat</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({})