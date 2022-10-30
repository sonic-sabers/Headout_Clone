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
import { ExperienceComponent, Glass, Museum3 } from './Explorescreen';

export default function Exploredetails() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 10,
      paddingBottom: 0,

    }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{

          // justifyContent: 'center',
          // alignItems: 'center',
          paddingBottom: 40,

        }}
        style={{
          // backgroundColor: 'green',
          flex: 1,

        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.black5,
          }}>
          Broadway Tickets
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.black5,
            marginTop: 15,

          }}>
          Explore Options
        </Text>

        <ExperienceComponent img={Museum3} center title='Chicago' Category='Entertainment' rate='67' discount='10' />

        <ExperienceComponent img={Glass} center title='The Lion King' Category='Entertainment' rate='95.5' />
        <ExperienceComponent img={Glass} center title='The Music Man' Category='Entertainment' rate='292.2' />
        <ExperienceComponent img={Glass} center title='A Strange Loop' Category='Entertainment' rate='60' discount='10' />
        <ExperienceComponent img={Glass} center title='Aladdin' Category='Entertainment' rate='69' discount='10' />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({})