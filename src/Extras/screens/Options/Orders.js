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

const Ordercomponent = (props,{title,status,qty,unit}) => {
  // <Ordercomponent title='sdvdsv' status='sdv' qty='sdv' unit='sdv'   />

  return (
    <TouchableOpacity style={{

      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 20,
      overflow: 'hidden',

    }}>
      <Hstack
        centered
        between
        styles={{
          // height: 30,
          backgroundColor: '#00000080',
          padding: 10,

        }}>
        <Hstack centered>
          <Text
            style={{
              fontSize: 8,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.twitter,
              backgroundColor: 'white',
              borderRadius: 90,
              padding: 6,
              paddingVertical: 9,

            }}>
            Logo
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.white,
              marginLeft: 10,
            }}>
           {title?title:' India Bulls'}
          </Text>
        </Hstack>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.white,
            }}>
            02/07/2022
          </Text>
          <Text
            style={{
              fontSize: 8,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: colors.white,
              alignSelf: 'flex-end',
            }}>
            02:17 am
          </Text>
        </View>
      </Hstack>
      <Hstack
        centered
        between
        styles={{
          // height: 30,
          backgroundColor: '#f2f2f2',
          padding: 10,

        }}>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              fontFamily: 'Roboto',
              color: colors.lightblack,
            }}>
            Price:{unit?unit:'12000'} / unit
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              fontFamily: 'Roboto',
              color: colors.lightblack,
            }}>
            Qty : {qty?qty:'13'} unit
          </Text>
        </View>
        <Text
          style={[{
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'Roboto',
            // color: 'red',
          },
          status=='Success'&& {color: '#00ce00',},
          status=='Pending'&& {color: '#ffaa00',},
          status=='Failed'&& {color: '#ce0000',},
          ]}>
          {status?status:'Failed'}
        </Text>
      </Hstack>
    </TouchableOpacity>

  )
}

export default function Orders() {
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: colors.white,
      }}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.white,
        // marginBottom: 70
      }}
    >
      <Header2 title='Orders' />
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
        <Ordercomponent title='India Bulls' status='Success' qty='12000' unit='10'   />
        <Ordercomponent title='Mahindra' status='Pending' qty='2000' unit='7'  />
        <Ordercomponent title='Navi Finserv' status='Success' qty='1000' unit='4'  />
        <Ordercomponent title='Mahindra' status='Failed' qty='8000' unit='9'  />
        <Ordercomponent title='India Bulls' status='Success' qty='100' unit='3'  />
        <Ordercomponent title='Mahindra' status='Failed' qty='9000' unit='5'  />
        <Ordercomponent title='India Bulls' status='Pending' qty='3000' unit='3'  />
        <Ordercomponent title='Navi Finserv' status='Failed' qty='6000' unit='2'  />
        <Ordercomponent title='Navi Finserv' status='Success' qty='4000' unit='5'  />
        <View style={{
          // marginBottom: 90,
        }} />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({})