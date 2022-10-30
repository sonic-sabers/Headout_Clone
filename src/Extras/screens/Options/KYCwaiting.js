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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, Styledtextinput } from './Emailverification';


export default function KYCwaiting() {
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

      <Header2 title='Advance KYC' />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
      }}>
        <Feather name='clock' size={25} color={colors.primary} />
        <Text
          style={styles.customtext}>
          Verification Will Be Take Some Time.
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          // style={[{
          //   marginTop: 0,
          //   // backgroundColor:'blue',
          //   fontSize: 14,
          //   fontWeight: '500',
          //   fontFamily: 'Roboto',
          //   color: colors.lightblack,
          // }]}>
          style={styles.customtext}>

          See Your KYC Details
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  customtext: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.lightblack,
    maxWidth: 100,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,

  },
})