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

export default function Transaction({setTransactions}) {
  return (
    <View>
      <>

        <View style={{
          margin: 5,
          borderBottomWidth: 2,
          borderRadius: 5,
          // paddingHorizontal: 5,
          borderColor: colors.lightblack,
          paddingBottom: 10,
          marginVertical: 10,
        }}>

          <Hstack centered between>
            <TouchableOpacity
              onPress={() =>
                setTransactions(false)
              }
            >

              <MaterialIcons
                name='chevron-left'
                size={35}
                color={colors.primary}
                style={{
                  marginLeft: -5,
                }}

              />
            </TouchableOpacity>

            <View style={{
              flex: 1,
              // backgroundColor: 'green'
            }}
            >

              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: colors.lightblack,
                  marginLeft: -15,
                  flex: 1,
                  alignSelf: 'center',
                }}>
               Transactions
              </Text>
            </View>

          </Hstack>
        </View>
      </>
    </View>
  )
}

const styles = StyleSheet.create({})