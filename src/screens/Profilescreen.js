/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  // StyleSheet,
  Image,
  Modal,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import { colors } from '../constants';
import { Customheader, Hstack } from '../components';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { innerText } from '../assets/fontStyles';
// import { Customheader, ExperienceComponent, Glass, Museum3 } from './Explorescreens/Explorescreen';

export const Hline = ({ style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.black5,
          // flex: 1,
          height: 1,
          borderRadius: 30,
          marginVertical: 15,
          marginHorizontal: 10,
          opacity: 0.5,
          // marginTop: 20,
        },
        style,
      ]}
    />
  );
};

const AuthButton = props => {
  const { title, icon } = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: colors.white,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0.8,
        borderColor: colors.black6,
        marginTop: 15,
        flexDirection: 'row',
      }}>
      {icon ? (
        <MaterialCommunityIcons
          name="email-outline"
          size={18}
          color={colors.black2}
        />
      ) : (
        <Image
          source={require('../assets/Image/Google.png')}
          style={{ width: 17, height: 17 }}
        />
      )}
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Inter-Regular',
          color: colors.black,
          opacity: 0.75,
          marginLeft: 10,
        }}>
        {title ? title : 'Continue with Google'}
      </Text>
    </TouchableOpacity>
  );
};
export const Endalign = ({ title, text, icon, size, dollor, light }) => {
  return (
    <Hstack
      centered
      between
      styles={{
        marginHorizontal: 25,
        marginTop: 15,
      }}>
      <TouchableOpacity>
        <Text
          style={[
            {
              fontSize: 13.5,
              // fontWeight: '500',
              fontFamily: 'Inter-Regular',
              color: colors.black,
              opacity: 0.75,
            },
            size && {
              fontSize: 18,
            },
            light && {
              fontSize: 15,
              // fontWeight: '500',
              color: colors.black,
              fontFamily: 'Inter-Light',
              opacity: 0.6,
            },
          ]}>
          {title ? title : 'Title'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Hstack centered>
          <Text
            style={{
              fontSize: 12.5,
              fontFamily: 'Inter-Regular',
              color: colors.black,
              opacity: 0.75,
              marginRight: 4,
            }}>
            {text ? text : null}
          </Text>
          {dollor && (
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
                color: colors.black,
                opacity: 0.6,
              }}>
              $
            </Text>
          )}
          {icon ? (
            <Entypo name="chevron-thin-right" size={13} color={colors.black2} />
          ) : null}
        </Hstack>
      </TouchableOpacity>
    </Hstack>
  );
};

export default function Profilescreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, onChangeemail] = React.useState('');
  const [sendLink, setSendLink] = React.useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <StatusBar animated={true} backgroundColor="#F8F7FF" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        backdropOpacity={0.3}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            backgroundColor: '#00000040',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginTop: '30%',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View
                style={{
                  backgroundColor: colors.black6,
                  height: 4,
                  width: 40,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  padding: 20,
                  flex: 1,
                  marginTop: 20,
                }}>
                <Text
                  style={[
                    {
                      marginBottom: 15,
                      // textAlign: 'center',
                      color: colors.black,
                      opacity: 0.8,
                    },
                    innerText,
                  ]}>
                  Continue with Email
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    // fontWeight: '400',
                    fontFamily: 'Inter-Regular',
                    color: colors.black,

                    marginRight: 20,
                    opacity: 0.8,
                    lineHeight: 20,
                    maxWidth: '80%',
                  }}>
                  We'll send you a link to your email that will instantly sign
                  you in
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: colors.black6,
                    borderRadius: 5,
                    padding: 4,
                    marginVertical: 20,
                    height: 46,
                    paddingLeft: 20,
                    fontSize: 14.5,
                    // fontWeight: '400',
                    fontFamily: 'Inter-Regular',
                    opacity: 0.95,
                    color: colors.black4,
                  }}
                  placeholderTextColor={colors.black4}
                  placeholder="Enter your email address"
                  onChangeText={email => {
                    onChangeemail(email);
                    (email == 'Ashish@headout.com' ||
                      email == 'ashish@headout.com') ?
                      setSendLink(true) :
                      setSendLink(false);
                  }}
                  value={email}
                  returnKeyType="done"
                  onSubmitEditing={() => setModalVisible(!modalVisible)}
                />
                {!sendLink && email.length > 0 && (
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'Inter-Regular',
                      color: 'red',
                      marginTop: -10,
                    }}>
                    Invalid Email Address
                  </Text>
                )}
              </View>
              {email.length > 0 && (
                <Pressable
                  style={[
                    {
                      height: 46,
                      // flex: 1,
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginBottom: 20,
                    },
                    sendLink
                      ? { backgroundColor: colors.primary }
                      : { backgroundColor: colors.black4 },
                    ,
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Send Link</Text>
                </Pressable>
              )}
            </View>
          </View>
        </Pressable>
      </Modal>
      <View
        style={{
          padding: 25,
          backgroundColor: '#F8F7FF',
        }}>
        <Hstack
          styles={{
            marginVertical: 20,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 13,
                // fontWeight: '400',
                fontFamily: 'Inter-Regular',
                color: colors.black,

                marginRight: 20,
                opacity: 0.8,
                lineHeight: 20,
                maxWidth: '80%',
              }}>
              Sign in to get cashback as credits, insider-only offers and
              exclusive deals
            </Text>
          </View>
          <FontAwesome5
            name="gifts"
            color={colors.black}
            size={55}
            style={[
              {
                // transform: [{ rotate: '180deg' }],
                transform: [{ rotateY: '180deg' }],
              },
            ]}
          />
        </Hstack>

        <AuthButton />
        <AuthButton
          onPress={() => setModalVisible(true)}
          title="Continue with Email"
          icon
        />
      </View>

      <View
        style={{
          // padding: 10,
          paddingBottom: 130,
        }}>
        <Customheader account title="Settings" />
        <Endalign title="City" text="New York" icon />
        <Endalign title="Currency" text="USD" dollor icon />

        <Hline />
        <Customheader
          account
          style={{
            marginTop: 0,
          }}
          nested
          title="Help"
        />
        <Endalign title="Chat with us" icon />
        <Endalign title="FAQs" icon />

        <Hline />
        <Customheader
          account
          style={{
            marginTop: 0,
          }}
          nested
          title="Legal"
        />
        <Endalign title="Privacy Policy" icon />
        <Endalign title="Terms of Usage" icon />

        <Hline />
        <View
          style={{
            marginLeft: 25,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Inter-Regular',
              color: colors.black,
              opacity: 0.45,
            }}>
            Ashish Inc.
          </Text>
          <Hstack>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: colors.black,
                opacity: 0.45,
              }}>
              Made with
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: colors.black,
                marginHorizontal: 2,
              }}>
              ❤️
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: colors.black,
                opacity: 0.45,
              }}>
              all over the
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: colors.black,
                marginHorizontal: 2,
              }}>
              🌎
            </Text>
          </Hstack>

          <Text
            style={{
              fontSize: 11.5,
              fontFamily: 'Inter-Regular',
              color: colors.black,
              opacity: 0.4,
              marginTop: 20,
            }}>
            App Version 2.0.1
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
