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

const ContactItem = (props) => {
// console.log(props);
  return (
    <View
      style={styles.button}
    >
      <Hstack centered between>
        <Hstack centered between>
          <>
          {props.facebook &&
            <MaterialIcons name='facebook' size={30} color='#1877f2' />
          }
          {props.Instagram &&
            <Ionicons name='logo-instagram' size={30} color='#3771cb' />
          }
          {props.Twitter &&
            <AntDesign name='twitter' size={30} color='#1da1f2' />
          }
          {props.Linkedin &&
            <Entypo name='linkedin-with-circle' size={30} color='#007ab9' />
          }
          </>
          <Text
            style={styles.customtext}>
            {props.title?props.title:'Title'}
          </Text>
        </Hstack>
        <TouchableOpacity>
          <MaterialIcons
            name='chevron-right'
            size={27}
            color={colors.primary}
          />
        </TouchableOpacity>
      </Hstack>
    </View>
  )
}


export default function Contactus() {
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

      <Header2 title='Contact Us' />
      <View>
        <ContactItem facebook title='Facebook'/>
        <ContactItem Instagram title='Instagram'/>
        <ContactItem Twitter title='Twitter'/>
        <ContactItem Linkedin title='LinkedIn'/>
      </View>


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
    marginTop: 2,
    marginLeft: 7,

  },
  button: {
    backgroundColor: '#00000009',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    marginHorizontal: 10,
  },
})