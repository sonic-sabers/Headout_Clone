/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../constants';
import { Customheader, Hstack } from '../components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import { Customheader, Headercomponent, Topattractions } from './Explorescreens/Explorescreen';
import { Endalign } from './Profilescreen';
import { h1, h1Regular, h2, innerText, titleText } from '../assets/fontStyles';
import { Accordion, Points } from './Explorescreens/Exploredetails';

const { width } = Dimensions.get('window');

export const Cayntext = ({
  text,
  size,
  children,
  right,
  left,
  style,
  fontStyle,
}) => {
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
          fontStyle,
          ,
        ]}>
        {text ? text : null}
      </Text>
      {right ? children : null}
    </Hstack>
  );
};

const NeedHelpComponent = ({ title }) => {
  return (
    <View
      style={{
        height: 50,
        width: 180,
        borderWidth: 1,
        borderColor: '#00000020',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 2,
      }}>
      <Text style={[h2, { fontSize: 15, color: colors.black, opacity: 0.8 }]}>
        {title}
      </Text>
    </View>
  );
};

// export default function Alertscreen() {
//   const [text, onChangeText] = React.useState('');

//   return (
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       style={{
//         flex: 1,
//         backgroundColor: colors.white,
//         //
//       }}>
//       {/* <View> */}
//       <View
//         style={{
//           padding: 15,
//         }}>
// <Text
//   style={{
//     fontSize: 29,
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//     color: colors.black,
//   }}>
//   Hi,have an existing reservation?
// </Text>
//         <Cayntext
//           text="We're here to help "
//           right
//           fontStyle={{
//             fontFamily: 'Inter-Bold',
//             marginLeft: 0,
//             fontSize: 15,
//           }}>
//           <Entypo
//             // onPress={() => navigation.goBack()}
//             // name="chevron-right"
//             name="chevron-thin-right"
//             size={13}
//             color="#008b8b"
//             style={{
//               marginTop: 5,
//             }}
//           />
//         </Cayntext>
//       </View>

//       <Image
//         source={require('./../assets/Image/Help-img.jpeg')}
//         style={{
//           width: width,
//           height: (width * 9) / 16,
//           // borderRadius: 6,
//           // marginRight: 14,
//           resizeMode: 'cover',
//         }}
//       />
//       <View
//         style={{
//           padding: 10,
//           paddingBottom: 40,
//         }}>
//         <Hstack
//           styles={{
//             borderWidth: 1,
//             // backgroundColor: 'green',
//             alignItems: 'center',
//             borderColor: colors.black5,
//             borderRadius: 5,
//             marginVertical: 10,
//             paddingLeft: 10,
//           }}>
//           <AntDesign name="search1" color={colors.black} size={20} />

// <TextInput
//   contextMenuHidden
//   style={{
//     marginLeft: 10,
//     flex: 1,
//     color: colors.black3,
//     fontWeight: '400',
//     fontSize: 16,
//   }}
//   placeholderTextColor={colors.black4}
//   placeholder="Search help articles"
//   onChangeText={onChangeText}
//   value={text}
// />
//         </Hstack>
//         <View style={{marginLeft: -15}}>
//           <Customheader size nested title="Booking" />
//           <Endalign light size title="Experience duration & start time" />
//           <Endalign light size title="Inclusions & Exclusions" />
//           <Endalign light size title="Meeting point & pick-up directions" />
//           <Endalign light size title="Meeting point information" />
//           <Cayntext style={{marginLeft: 15}} text="Show all" />

//           <Customheader size nested title="Payment" />
//           <Endalign light size title="best Price Gaurantee" />
//           <Endalign light size title="Conversion Fee" />
//           <Endalign light size title="Payment Currencies" />
//           <Endalign light size title="Payment Methods" />
//           <Cayntext style={{marginLeft: 15}} text="Show all" />

//           <Customheader size nested title="Cancillation & Refunds" />
//           <Endalign light size title="Coronavirus Outbreak" />
//           <Endalign light size title="Cancel Reservation" />
//           <Endalign light size title="Cancillation Deadline" />
//           <Endalign light size title="Refund Information" />

//           <Customheader size nested title="Booking Modification" />
//           <Endalign light size title="Add/Remove Participant" />
//           <Endalign light size title="Changing tour options" />
//           <Endalign light size title="Rescheduling a reservation" />
//           <Endalign light size title="Update Participant Information" />
//           {/* <Endalign light size title='City' /> */}

//           <Customheader size nested title="Coupons & Cashback" />
//           <Endalign light size title="Using Coupon Code" />
//           <Endalign light size title="Coupon Code Not Working" />
//           <Endalign light size title="Getting Cashback" />
//           <Endalign light size title="Using Cashback" />
//           {/* <Endalign light size title='City' /> */}

//           <Customheader size nested title="General Queries" />
//           <Endalign light size title="Group. Bookingd" />
//           <Endalign light size title="Gift experience" />
//           <Endalign light size title="Headout in different languagses" />
//           {/* <Endalign size title='City' /> */}
//           {/* <Endalign size title='City' /> */}
//         </View>

//         <Text
//           style={[
//             h1Regular,
//             {
//               fontSize: 28,
//               lineHeight: 28,
//               color: colors.black,
//               opacity: 0.8,
//               alignSelf: 'center',
//               marginVertical: 30,
//             },
//           ]}>
//           Still need help?
//         </Text>
//         <View
//           style={{
//             paddingBottom: 30,
//             alignItems: 'center',
//             // backgroundColor: 'red',
//           }}>
//           <NeedHelpComponent title="Email us" />
//           <NeedHelpComponent title="Chat with us" />
//           <NeedHelpComponent title="Call us" />
//         </View>
//         {/* <Endalign size title='City' /> */}
//         {/* <Endalign size title='City' /> */}

//         {/* <Text>Alertscreen</Text> */}
//       </View>
//     </ScrollView>
//   );
// }


const InfoScreenText = (title) => {
  <TouchableOpacity style={{ backgroundColor: 'red', marginTop: 30 }}>
    <Text
      style={{
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: colors.primary,
        marginTop: 12
      }}>
      {title}vsd
    </Text>
  </TouchableOpacity>
}

const SubItem = ({ title }) => {

  return (
    <TouchableOpacity>
      <Text
        style={[{
          fontSize: 12,
          fontWeight: '400',
          fontFamily: 'Inter-Regular',
          color: '#E5006E',
          // textDecorationLine: 'underline',
          marginVertical: 4,
        }]}>
        {title ? title : 'Title content here'}
      </Text>
    </TouchableOpacity>
  )
}

const AlertScreenButton = ({ title }) => {
  return (
    <TouchableOpacity style={{
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.black2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
      marginVertical: 8
    }}>
      <Text
        style={[{
          fontSize: 12,
          fontWeight: '400',
          fontFamily: 'Inter-Regular',
          color: colors.black1,
          // textDecorationLine: 'underline',
          // marginVertical: 4,
        }, h1]}>
        {title ? title : 'Title content here'}
      </Text>
    </TouchableOpacity>
  )
}

export default function Alertscreen() {
  const [text, onChangeText] = React.useState('');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        // flex: 1,
        backgroundColor: colors.white,
        // padding: 16
      }}>
      <View style={{
        backgroundColor: `${colors.primary}10`,
        padding: 20,
      }}>
        <Text
          style={[{
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'Inter-Medium',
            color: colors.black,
            marginTop: 8
          }, innerText]}>
          Do you need help with an existing booking
        </Text>
        <Text
          style={[{
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20,
            fontFamily: 'Inter-Medium',
            color: colors.mytext,
          }, h1Regular]}>
          Booking ID
        </Text>
        <TextInput
          contextMenuHidden
          style={{
            // marginLeft: 10,
            flex: 1,
            color: colors.black3,
            fontWeight: '400',
            fontSize: 16,
            borderWidth: 1,
            backgroundColor: colors.white,
            borderColor: colors.black6,
            height: 40,
            borderRadius: 6,
            marginTop: 12
          }}
          placeholderTextColor={colors.black4}
          onChangeText={onChangeText}
          value={text}
        />
        <Text
          style={[{
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20,
            fontFamily: 'Roboto',
            color: colors.mytext,
          }, h1Regular]}>
          Email
        </Text>
        <TextInput
          contextMenuHidden
          style={{
            // marginLeft: 10,
            flex: 1,
            color: colors.black3,
            fontWeight: '400',
            fontSize: 16,
            borderWidth: 1,
            backgroundColor: colors.white,
            borderColor: colors.black6,
            height: 40,
            borderRadius: 6,
            marginTop: 12
          }}
          placeholderTextColor={colors.black4}
          onChangeText={onChangeText}
          value={text}
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            zIndex: 600,
            flex: 1,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 16,
          }}>
          <Text
            style={[
              {
                color: colors.white,
              },
              h1,
            ]}>
            Manage Booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: 'rgb(102, 0, 204)',
              textDecorationLine: 'underline',
              marginTop: 12
            }}>
            Can't find booking ID? Chat with us
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        padding: 20,
      }}>

        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.black,
            marginTop: 8
          }}>
          FAQ's
        </Text>
        <Hstack
          styles={{
            borderWidth: 1,
            // backgroundColor: 'green',
            alignItems: 'center',
            borderColor: colors.black6,
            borderRadius: 8,
            marginVertical: 10,
            paddingLeft: 10,
          }}>
          <AntDesign name="search1" color={colors.black2} size={20} />

          <TextInput
            contextMenuHidden
            style={{
              marginLeft: 10,
              flex: 1,
              color: colors.black3,
              fontWeight: '400',
              fontSize: 16,
            }}
            placeholderTextColor={colors.black4}
            placeholder="What can we help you with"
            onChangeText={onChangeText}
            value={text}
          />
        </Hstack>

      </View>
      <Accordion title="Highlights" Opened withLine>
        <SubItem title='Experience duration & start time' />
        <SubItem title='Inclusions & exclusions' />
        <SubItem title='Instant confirmation' />
        <SubItem title='Experience duration & start time' />
        <SubItem title='Inclusions & exclusions' />
        <SubItem title='Instant confirmation' />
        <SubItem title='Experience duration & start time' />
        <SubItem title='Inclusions & exclusions' />
        <SubItem title='Instant confirmation' />
        <SubItem title='Experience duration & start time' />
        <SubItem title='Inclusions & exclusions' />
        <SubItem title='Instant confirmation' />

      </Accordion>
      <Accordion title="Payment" withLine>
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
      </Accordion>
      <Accordion title="Cancellation & refunds" withLine>
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
      </Accordion>
      <Accordion title="Booking modification" withLine>
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
      </Accordion>
      <Accordion title="Coupons & cashback" withLine>
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
      </Accordion>
      <Accordion title="General queries" withLine>
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
        <SubItem title='vds9' />
      </Accordion>
      <View style={{ paddingHorizontal: 16 }}>
        <Text
          style={[{
            fontSize: 24,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.black,
            marginTop: 8,
            marginBottom: 12
          }, titleText]}>
          Still need help?
        </Text>

        <AlertScreenButton title='Email' />
        <AlertScreenButton title='Chat' />
        <AlertScreenButton title='Call' />

      </View>
    </ScrollView>
  )
}

// const styles = StyleSheet.create({})