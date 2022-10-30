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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, Styledtextinput } from './Emailverification';



export default function Appfeedback() {
  const [EmailId, setEmailId] = useState('')

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

      <Header2 title='App Feedback' />

      <View style={{
        flex: 1,

        paddingVertical: 10,
      }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            // marginLeft: 10,
            alignSelf: 'center',
            textAlign: 'center',

          }}>
          How Satisfied You With ScaleRich App
        </Text>

        <Hstack
          styles={{
            alignSelf: 'center',
            marginTop: 10,
          }}
          centered>
          <AntDesign
            name='star'
            size={20}
            color={colors.primary}
            style={{
              marginHorizontal: 5,
            }}
          />
          <AntDesign
            name='star'
            size={20}
            color={colors.primary}
            style={{
              marginHorizontal: 5,
            }}
          />
          <AntDesign
            name='star'
            size={20}
            color={colors.primary}
            style={{
              marginHorizontal: 5,
            }}
          />
          <AntDesign
            name='star'
            size={20}
            color={colors.primary}
            style={{
              marginHorizontal: 5,
            }}
          />
          <AntDesign
            name='staro'
            size={20}
            color={colors.primary}
            style={{
              marginHorizontal: 5,
            }}
          />
        </Hstack>
        <View style={{

          backgroundColor: '#00000005',
          margin: 10,
          padding: 10,
          minHeight: 200
        }}>
          <TextInput
            style={styles.inputtext}
            placeholder='Hello,  '
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            onChangeText={setEmailId}
            value={EmailId}
            keyboardType='default'
            selectionColor={colors.primary}
            multiline
          />
        </View>

        <TouchableOpacity style={{

          padding: 15,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary,
          borderRadius: 20,
          marginTop: 20,

        }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.white,
              // marginTop: 10,

            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>

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
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,

    color: '#000',
    marginTop: 15,
  },
})