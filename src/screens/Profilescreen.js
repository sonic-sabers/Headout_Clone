/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  // StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import {colors} from '../constants';
import {Customheader, Hstack} from '../components';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Customheader, ExperienceComponent, Glass, Museum3 } from './Explorescreens/Explorescreen';

export const Hline = () => {
  return (
    <View
      style={{
        backgroundColor: colors.black5,
        // flex: 1,
        height: 1,
        borderRadius: 30,
        marginVertical: 15,
        marginHorizontal: 10,
        opacity: 0.5
        // marginTop: 20,
      }}
    />
  );
};

const AuthButton = props => {
  const {title, icon, onPress} = props;
  return (
    <TouchableOpacity
      onPress={() => (onPress ? onPress : null)}
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
          style={{width: 17, height: 17}}
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
export const Endalign = ({title, text, icon, size, dollor}) => {
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
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#F8F7FF"
      />
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
            style={{}}
          />
        </Hstack>

        <AuthButton />
        <AuthButton title="Continue with Email" icon />
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

// const styles = StyleSheet.create({});
