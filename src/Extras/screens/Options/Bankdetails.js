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


export default function Bankdetails() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}

    >
      <Header2 title='Bank Details' />
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
        <View style={{

          margin: 10,
          backgroundColor: colors.primary,
          borderRadius: 20,
          overflow: 'hidden',
          // padding: 10,
          marginTop: 20,

        }}>
          <View style={{
            backgroundColor: '#eee',
            borderRadius: 20,
            padding: 14,

          }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.lightblack,
                marginLeft: 10,
                alignSelf: 'center',
                // marginVertical:15
                paddingHorizontal: 20,
              }}>
              Federal Bank
            </Text>

            <Hstack centered between styles={{

              marginVertical: 10,
              marginHorizontal: 7,


            }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.lightblack,
                  // marginLeft: 10,

                }}>
                Holder Name :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.primary,
                  // marginLeft: 10,

                }}>
                Nitin SHankarwar
              </Text>
            </Hstack>

            <Hstack centered between styles={{

              marginVertical: 10,
              marginHorizontal: 7,


            }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.lightblack,
                  // marginLeft: 10,

                }}>
                Account No. :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.primary,
                  // marginLeft: 10,

                }}>
                20838100010049
              </Text>
            </Hstack>
            <Hstack centered between styles={{

              marginVertical: 10,
              marginHorizontal: 7,


            }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.lightblack,
                  // marginLeft: 10,

                }}>
                IFSC :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.primary,
                  // marginLeft: 10,

                }}>
                FDRL5555816
              </Text>
            </Hstack>
          </View>
          <Hstack centered styles={{

            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,

          }}>
            <AntDesign name='sharealt' size={20} color={colors.white} />

            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.white,
                marginLeft: 10,

              }}>
              Share
            </Text>
          </Hstack>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})