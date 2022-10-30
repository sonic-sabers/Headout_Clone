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
  ScrollView,
  TextInput,
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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { List } from 'react-native-paper';
import { Header } from './../Appscreens/Homescreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Profilenavigator from './../../navigation/Profilenavigator';

export const Header2 = (props, { onPress, Custompress, onPressed,style }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View
        style={[{
          margin: 5,
          borderRadius: 5,
          // paddingHorizontal: 5,
          paddingBottom: 10,
          marginVertical: 10,
        },
        props.noline ?null: {
          borderBottomWidth: 2,
          borderColor: colors.lightblack,
        },style
        ]}>
        <Hstack centered between>
          <TouchableOpacity
            onPress={() => onPressed ?
              console.log('dsvds')
              : Custompress ? Custompress : onPress ? navigation.navigate(onPress) : navigation.goBack()}
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
              {props.title ? props.title : 'Lorem Ipsum'}
            </Text>
          </View>

        </Hstack>
      </View>
    </>
  )
}

const Securityfunction = ({ title, icon, onPress, type }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => onPress ? navigation.navigate(onPress) : null}
      style={{
        backgroundColor: '#00000009',
        borderRadius: 10,
        padding: 17,
        flex: 1,
        margin: 5,
        paddingVertical: 25
      }}>
      <Hstack centered between>
        {type == 'material' && <MaterialCommunityIcons name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'Octicons' && <Octicons name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'Ionicons' && <Ionicons name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'FontAwesome' && <FontAwesome name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'FontAwesome5' && <FontAwesome5 name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'Feather' && <Feather name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'Foundation' && <Foundation name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'MaterialIcons' && <MaterialIcons name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        {type == 'Entypo' && <Entypo name={icon ? icon : 'account-circle-outline'} size={30} color={colors.primary} />}
        <MaterialIcons
          name='chevron-right'
          size={27}
          color={colors.primary}
        />
      </Hstack>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          fontFamily: 'Roboto',
          color: colors.lightblack,
          marginTop: 10,
        }}>

        {title ? title : 'Title Here'}
      </Text>
    </TouchableOpacity>
  )
}

export default function Securityscreen() {
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: colors.white,

    }}>
      <Header2 title="Security" />
      <Hstack
        styles={{
          marginHorizontal: 5,
        }}>
        <Securityfunction title='Google Authenticator' type='Ionicons' icon='logo-google' />
        <Securityfunction onPress='Mobileverification' type='material' title='Mobile Verification' icon='message-processing' />
      </Hstack>
      <Hstack
        styles={{
          marginHorizontal: 5,
        }}>
        <Securityfunction onPress='Emailverification' type='Entypo' title='Email Verification' icon='mail' />
        <Securityfunction onPress='AdvanceKYC' type='Entypo' title='Advance KYC' icon='text-document-inverted' />
      </Hstack>

      <TouchableOpacity
        style={styles.button}
      >
        <Hstack centered between>
          <Text
            style={styles.customtext}>
            Login Password
          </Text>
          <Hstack centered >
            <Text
              style={styles.changetext}>
              Change
            </Text>
            <MaterialIcons
              name='chevron-right'
              size={27}
              color={colors.primary}
            />
          </Hstack>
        </Hstack>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Hstack centered between>
          <Text
            style={styles.customtext}>
            Pin Code
          </Text>
          <Hstack centered >
            <Text
              style={styles.changetext}>
              Change
            </Text>
            <MaterialIcons
              name='chevron-right'
              size={27}
              color={colors.primary}
            />
          </Hstack>
        </Hstack>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  changetext: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#00000025',
    marginTop: -2,
    marginRight: 5,
  },
  customtext: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.lightblack,
    // marginTop: 10,
  },
  button: {
    backgroundColor: '#00000009',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    marginHorizontal: 10,
  },
})