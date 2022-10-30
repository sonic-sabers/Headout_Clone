import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';


let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 431) / 360);
let imageWidth = dimensions.width;
let itemwidth = imageWidth / 2 - 20

export default function HelpnSupport({ setHelpnSupports }) {
  const [Activehelp, setActivehelp] = useState('')
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{
          flex: 1,
          padding: 10,
          paddingLeft: 15
        }}>
          <View style={styles.headerstyle}>

            <Hstack centered between>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(
                    StackActions.popToTop()
                  )
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
              }}
              >
                <Text
                  style={styles.headertext}>
                  Help & Support
                </Text>
              </View>
            </Hstack>
          </View>
          <TouchableOpacity
            onPress={() =>
            (setActivehelp('MakeARequest'),
              navigation.navigate('HelpnSupportRequest'))
            }
            style={styles.supportstyle}>
            <MaterialIcons
              name='chevron-right'
              size={30}
              color={Activehelp == 'MakeARequest' ? colors.primary : colors.lightblack}
            />
            <Text
              style={[styles.supporttext,
              {
                color: Activehelp == 'MakeARequest' ? colors.primary : colors.lightblack
              }
              ]}>
              Make A Request
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
            (setActivehelp('MostAskedQuestions'),
              navigation.navigate('Helpnsupportdetails'))

            }
            style={styles.supportstyle}>
            <MaterialIcons
              name='chevron-right'
              size={30}
              color={Activehelp == 'MostAskedQuestions' ? colors.primary : colors.lightblack}
            />
            <Text
              style={[styles.supporttext,
              {
                color: Activehelp == 'MostAskedQuestions' ? colors.primary : colors.lightblack
              }
              ]}>
              Most Asked Questions !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
            (setActivehelp('AskForHelpInChat'),
              navigation.navigate('HelpnSupportchat'))

            }
            style={styles.supportstyle}>
            <MaterialIcons
              name='chevron-right'
              size={30}
              color={Activehelp == 'AskForHelpInChat' ? colors.primary : colors.lightblack} />
            <Text
              style={[styles.supporttext, {
                color: Activehelp == 'AskForHelpInChat' ? colors.primary : colors.lightblack
              }]}>
              Ask For Help In Chat !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  headerstyle: {
    margin: 5,
    borderBottomWidth: 2,
    borderRadius: 5,
    // paddingHorizontal: 5,
    borderColor: colors.lightblack,
    paddingBottom: 10,
    marginVertical: 10,
  },
  supporttext: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.lightblack,
  },
  supportstyle: {
    height: 90,
    backgroundColor: '#00000005',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonstyle: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    borderWidth: 2,
    borderColor: colors.primary,
  },
})