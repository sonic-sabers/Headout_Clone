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

import RBSheet from 'react-native-raw-bottom-sheet';
import { ExperienceComponent, Glass, Museum1, Museum2, Museum3 } from './Explorescreen';

export default function ExploreAll() {
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

        <ExperienceComponent free img={Museum3} center title='Chicago' Category='Entertainment' rate='67' discount='10' />
        <ExperienceComponent  img={Glass} center title='The Lion King' Category='Entertainment' rate='95.5' />
        <ExperienceComponent free img={Museum2} center title='A Strange Loop' Category='Entertainment' rate='60' discount='10' />
        <ExperienceComponent img={Museum1} center title='The Music Man' Category='Entertainment' rate='292.2' />
        <ExperienceComponent img={Glass} center title='Aladdin' Category='Entertainment' rate='69' discount='10' />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({})