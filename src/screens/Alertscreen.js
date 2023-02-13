/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {colors} from '../constants';
import {Customheader, Hstack} from '../components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import { Customheader, Headercomponent, Topattractions } from './Explorescreens/Explorescreen';
import {Endalign} from './Profilescreen';

const {width} = Dimensions.get('window');

export const Cayntext = ({text, size, children, right, left, style}) => {
  return (
    <Hstack
      styles={[
        {
          marginTop: 20,
        },
        style,
      ]}>
      {left ? children : null}
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Roboto-Regular',
            color: '#008b8b',
            marginLeft: 10,
          },
          size && {
            fontSize: 20,
            marginLeft: 0,
          },
          ,
        ]}>
        {text ? text : null}
      </Text>
      {right ? children : null}
    </Hstack>
  );
};

export default function Alertscreen() {
  const [text, onChangeText] = React.useState('');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        //
      }}>
      {/* <View> */}
      <View
        style={{
          padding: 15,
        }}>
        <Text
          style={{
            fontSize: 29,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: colors.black,
          }}>
          Hi,have an existing reservation?
        </Text>
        {/* <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: '#008b8b',
            marginTop: 20,

          }}>
          We're here to help {'>'}
        </Text> */}
        <Cayntext text="We're here to help " size right>
          <Entypo
            // onPress={() => navigation.goBack()}
            name="chevron-right"
            size={20}
            color="#008b8b"
            style={{
              marginTop: 5,
            }}
          />
        </Cayntext>
      </View>

      <Image
        source={require('./../assets/Image/NewYork.png')}
        style={{
          width: width,
          height: (width * 9) / 16,
          // borderRadius: 6,
          // marginRight: 14,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          padding: 10,
          paddingBottom: 40,
        }}>
        <Hstack
          styles={{
            borderWidth: 1,
            // backgroundColor: 'green',
            alignItems: 'center',
            borderColor: colors.black5,
            borderRadius: 5,
            marginVertical: 10,
            paddingLeft: 10,
          }}>
          <AntDesign name="search1" color={colors.black} size={20} />

          <TextInput
            // autoFocus={true}
            contextMenuHidden
            // selectTextOnFocus
            style={{
              // backgroundColor: 'blue',
              marginLeft: 10,
              flex: 1,
              color: colors.black3,
              fontWeight: '400',
              fontSize: 16,
            }}
            placeholderTextColor={colors.black4}
            placeholder="Search help articles"
            // onChangeText={onChangeText}
            onChangeText={onChangeText}
            // value={text}
          />
        </Hstack>
        <Customheader size nested title="Booking" />
        <Endalign size title="Experience duration & start time" />
        <Endalign size title="Inclusions & Exclusions" />
        <Endalign size title="Meeting point & pick-up directions" />
        <Endalign size title="Meeting point information" />
        <Cayntext text="Show all" />

        <Customheader size nested title="Payment" />
        <Endalign size title="best Price Gaurantee" />
        <Endalign size title="Conversion Fee" />
        <Endalign size title="Payment Currencies" />
        <Endalign size title="Payment Methods" />
        <Cayntext text="Show all" />

        <Customheader size nested title="Cancillation & Refunds" />
        <Endalign size title="Coronavirus Outbreak" />
        <Endalign size title="Cancel Reservation" />
        <Endalign size title="Cancillation Deadline" />
        <Endalign size title="Refund Information" />

        <Customheader size nested title="Booking Modification" />
        <Endalign size title="Add/Remove Participant" />
        <Endalign size title="Changing tour options" />
        <Endalign size title="Rescheduling a reservation" />
        <Endalign size title="Update Participant Information" />
        {/* <Endalign size title='City' /> */}

        <Customheader size nested title="Coupons & Cashback" />
        <Endalign size title="Using Coupon Code" />
        <Endalign size title="Coupon Code Not Working" />
        <Endalign size title="Getting Cashback" />
        <Endalign size title="Using Cashback" />
        {/* <Endalign size title='City' /> */}

        <Customheader size nested title="General Queries" />
        <Endalign size title="Group. Bookingd" />
        <Endalign size title="Gift experience" />
        <Endalign size title="Headout in different languagse" />
        {/* <Endalign size title='City' /> */}
        {/* <Endalign size title='City' /> */}

        <Text
          style={{
            fontSize: 25,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.black,
            alignSelf: 'center',
            marginVertical: 25,
          }}>
          Still need help?
        </Text>

        {/* <Endalign size title='City' /> */}
        {/* <Endalign size title='City' /> */}

        {/* <Text>Alertscreen</Text> */}
      </View>
    </ScrollView>
  );
}
