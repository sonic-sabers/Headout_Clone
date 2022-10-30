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
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, Styledtextinput } from './Emailverification';
import LinearGradient from 'react-native-linear-gradient';

const UPI = 'https://pixlok.com/wp-content/uploads/2021/01/UPI_logo_PNG.jpg';
const Gpay ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSlgmTaTRx0lDMFwiMkdFzFirtbyAtQa3-s-W522xzg&s';
const Phonepay ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdVpmwAizkiHulYC8mUon4fNka3-KplFXjBkI1Rd0ew&s'
const Paytm ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXMyQRbXZDZqODAyxtJxDf7rWCZRHEW9Pfkdj1N2O-g&s';

const Customcomponent = ({ title, children }) => {
  const [EmailId, setEmailId] = useState('')

  return (
    <TouchableOpacity
      style={[{
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        marginVertical: 8,

      }]}>
      <Hstack centered between>
        {children ?
          <Hstack>
            <Image source={{ uri: UPI}}
              style={{ width: 45, height: 25 }}
            />
            <Image source={{ uri: Gpay}}
              style={{ width: 22, height: 22,marginLeft:5 }}
            />
            <Image source={{ uri: Phonepay}}
              style={{ width: 22, height: 22,marginLeft:5 }}
            />
            <Image source={{ uri: Paytm}}
              style={{ width: 50, height: 15,marginLeft:5,marginTop:3 ,marginLeft:6,}}
            />
          </Hstack> :
          <MaterialCommunityIcons name='bank' size={23} color={colors.primary} />
        }

        <Text
          // style={styles.activetext}
          style={[{
            fontSize: 13,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
          }]}>
          {title}
        </Text>

      </Hstack>
    </TouchableOpacity>
  )
}


export const Header3 = (props, { onPress, Custompress, onPressed }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>

      <View style={{
        margin: 5,
        borderBottomWidth: 2,
        borderRadius: 5,
        // paddingHorizontal: 5,
        borderColor: colors.lightblack,
        paddingBottom: 10,
        marginVertical: 10,
      }}>

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


export default function Addmoney({ setModalVisible,setAddmoneys }) {
  const [EmailId, setEmailId] = useState('1000')
  const inputRef = React.useRef()
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,

      }}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.white,
        // marginBottom: 40,

        padding: 10
      }}
    >
      {/* <Header2 title='Add Money' onPressed={() =>
        setModalVisible(false)
      } /> */}

      <>

        <View style={{
          margin: 5,
          borderBottomWidth: 2,
          borderRadius: 5,
          // paddingHorizontal: 5,
          borderColor: colors.lightblack,
          paddingBottom: 10,
          marginVertical: 10,
        }}>

          <Hstack centered between>
            <TouchableOpacity
              onPress={() =>
                setAddmoneys(false)
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
                Add Money
              </Text>
            </View>

          </Hstack>
        </View>
      </>


      <View style={{
        // padding: 10,
        flex: 1,
        marginHorizontal: -10

      }}>
        <Hstack
          centered
          between
          styles={[styles.inputholder, { margin: 10 }]}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: 1.5,
              borderColor: colors.lightblack,
              height: 30,
              borderRadius: 2,
              // marginHorizontal: 10

            }}>
            <FontAwesome name='rupee' size={25} color={colors.primary} style={{
              marginHorizontal: 10,
            }} />

          </TouchableOpacity>
          <TextInput
            style={styles.inputtext}
            placeholder='Add Money'
            placeholderTextColor={colors.lightblack}
            onChangeText={setEmailId}
            value={EmailId}
            keyboardType='number-pad'
            selectionColor={colors.primary}
            // autoFocus
            ref={inputRef}
          />
          <TouchableOpacity onPress={() => inputRef.current.focus()}>
            <Feather
              name='edit-2' size={20} color={colors.primary} style={{
                marginHorizontal: 10,
              }} />
          </TouchableOpacity>
        </Hstack>

        <LinearGradient
          colors={['#0C7FF2', '#1AACFF']} style={{
            marginTop: 20,
            paddingTop: 40,
            flex: 1,
            marginBottom: -30,
            paddingBottom: 40,
            padding: 20,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,

          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.white,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Payment Methods
          </Text>

          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          paddingBottom:40
          }}
          style={{
            flex: 1,
          }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.white,
              }}>
              UPI
            </Text>

            <Customcomponent children title='UPI' />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.white,
                marginTop: 10,

              }}>
              Net Banking
            </Text>
            <Customcomponent title='NEFT' />
            <Customcomponent title='IMPS' />
            <Customcomponent title='RTGS' />
          </ScrollView>
          <TouchableOpacity
            // onPress={() => onPress ? onPress() : null}
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.white,
              borderRadius: 15,
              marginVertical: 10,

            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.lightblack
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      {/* <Custombutton title='Confirm' /> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  inactivestyle: {
    // flex: 1,
    backgroundColor: colors.lightblack,
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.lightblack,
    paddingHorizontal: 45,
    marginBottom: 20,

  },
  inactivetext: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.white
  },
  inputholder: {
    // height: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    bordercolor: colors.lightblack
  },
  inputtext: {
    marginLeft: 5,
    fontWeight: '400',
    fontSize: 15,
    color: colors.lightblack,
    // marginBottom: -10,
    flex: 1,
    // backgroundColor: 'green'
  },
  inputendtext: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: colors.primary,
    marginRight: 10,
  },
})