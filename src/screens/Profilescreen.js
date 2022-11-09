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
      marginHorizontal: 10,
      marginTop: 20,

    }}>
    </View>
  )
}


export const Endalign = ({ title, text, icon, size }) => {
  return (
    <Hstack centered between styles={{
      marginHorizontal: 10,
      marginTop: 15,
    }}>
      <TouchableOpacity>
        <Text
          style={[{
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.black2,
          },
          size && {
            fontSize: 18,

          }
          ]}>
          {title ? title : 'Title'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Hstack centered >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'Roboto',
              color: colors.black2,
            }}>
            {text ? text : null}
          </Text>
          {icon ? <Entypo name='chevron-right' size={18} color={colors.black2} /> : null}
        </Hstack>
      </TouchableOpacity>
    </Hstack>
  )
}

export default function Profilescreen() {


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        // flex: 1,

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
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Image/Google.png')}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
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
            flexDirection: 'row',
            alignItems: 'center',

          }}>

          <MaterialCommunityIcons name='email-outline' size={18} color={colors.black2} />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.black1,
              marginLeft: 7,

            }}>
            Continue With Email
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{
        padding: 10,
        paddingBottom: 150,

      }}>

        <Customheader nested title='Settings' />
        <Endalign title='City' text='New York' icon />
        <Endalign title='Currency' text='USD $' icon />

        <Hline />
        <Customheader nested title='Help' />
        <Endalign title='Chat with us' icon />
        <Endalign title='FAQs' icon />

        <Hline />
        <Customheader nested title='Legal' />
        <Endalign title='Privacy Policy' icon />
        <Endalign title='Terms of Usage' icon />

        <Hline />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            marginLeft: 10,
            marginTop: 10,


          }}>
          Ashish Ins.
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            marginLeft: 10,
            // marginTop:10,


          }}>
          Made with ❤️ all over the O
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            marginLeft: 10,
            marginTop: 10,


          }}>
          App Version 1.0.1
        </Text>
      </View>
      {/* <View style={{
        paddingBottom: 50,

      }} /> */}
      {/* <Text>Profilescreen</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})