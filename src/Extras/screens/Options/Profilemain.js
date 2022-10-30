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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, Styledtextinput } from './Emailverification';
import { RollInRight } from 'react-native-reanimated';

const Profilecomponent = ({title,screen})=> {
const navigation= useNavigation();
  return (
    <View style={{

      backgroundColor: '#00000005',

      marginVertical: 10,
      marginHorizontal: 10,
      // padding: 15,
      borderRadius: 20,
      overflow: 'hidden',
      paddingRight: 0,
      height: 80,

    }}>
      <Hstack centered between>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            flex: 1,
            margin: 20
          }}>
          {title?title:'Title'}
        </Text>
        <TouchableOpacity
        onPress={()=>
          screen?
        navigation.navigate(screen):null}
        style={{
          backgroundColor: '#0c7ff2',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 7,
          height: 80,
        }}>
          <MaterialIcons
            name='chevron-right'
            size={35}
            color={colors.white}
          />
        </TouchableOpacity>
      </Hstack>
    </View>
  )
}

export default function Profilemain() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.white,
        // marginBottom: 70
      }}
    >
      <Header2 title='Profile'  />
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          backgroundColor: colors.white,
          marginBottom: 90
        }}
        showsVerticalScrollIndicator={false}
        style={{
          // flex:1,
          backgroundColor: colors.white,
        }}
      >
      <Profilecomponent title='User Profile' screen='Userprofile'/>
      <Profilecomponent title='Demat Details' screen='Demataccount'/>
      <Profilecomponent title='Bank Details' screen='Bankdetails'/>
    
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})