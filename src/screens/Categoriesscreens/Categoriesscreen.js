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
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';
import { Hstack, Loadingscreen } from '../../components';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Customheader, Headercomponent, Topattractions } from '../Explorescreens/Explorescreen';


let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);
let imageWidth = dimensions.width - 20;
let categoriesWidth = dimensions.width / 2 - 20;
// let imageHeight = dimensions.height;
let itemwidth = imageWidth / 2 - 20

let Logo1 = 160;
let images = 320;

export const Categoriesdata = ([
  { title: 'Tickets', key: '1' },
  { title: 'Tours', key: '2' },
  { title: 'Transportation', key: '3' },
  { title: 'Travel Services', key: '4' },
  { title: 'Cruises', key: '5' },
  { title: 'Food & Drink', key: '6' },
  { title: 'Day Trips', key: '7' },
  { title: 'Entertainment', key: '8' },
  { title: 'Adventure', key: '9' },
  { title: 'Areial Sightseeing', key: '10' },
  { title: 'Water Sports', key: '11' },
  { title: 'Nature & Wildlife', key: '12' },
  { title: 'Wellness', key: '13' },
  { title: 'Classes', key: '14' },
  { title: 'Specials', key: '15' },
  { title: 'Staycations', key: '16' },
  // { title: 'Entertainment', key: '17' },
  // { title: ' bdbfb bb', key: '9' },
]);


const Datacomponent = ({ data }) => {

  const navigation = useNavigation();

  return (
    <Pressable

      onPress={() =>
        // navigation.navigate('Explorestack', {
        //   screen: 'ExploreAll',
        //   params: {
        //     title: data.title,
        //     // itemId: 30
        //   }
        // })
        navigation.navigate('Categoriesall', {
          title: data.title,
        })
      }

      key={data.key}
      style={{
        backgroundColor: colors.white,
        borderColor: colors.white4,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: categoriesWidth,
        marginHorizontal: 5,
        paddingVertical: 14,
        marginVertical: 5,

      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          fontFamily: 'Roboto',
          color: '#00000095',
          marginLeft: 10,

        }}>
        {data.title}
      </Text>
    </Pressable>
  )
}


export default function Categoriesscreen() {
  const [show, setShow] = React.useState(false);
  const [dataRestored, setDataRestored] = React.useState(false);
  const delay = 1.5;

  const ratio = 120 / 786;
  const logowidth = dimensions.width / 2
  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);
      return () => {
        clearTimeout(timer1);
      };
    },
    [],
  );
  let rating = '4k';
  return (
    <>
      {!show ?
        <Loadingscreen />
        :

        <View style={{
          flex: 1,
          backgroundColor: colors.white,


        }}>
          {/* <Headercomponent /> */}
          <ScrollView style={{
            flex: 1,

          }}
            showsVerticalScrollIndicator={false}

            contentContainerStyle={{
              paddingBottom: 80,

            }}
          >
            <View
              style={{
                // marginBottom: 30,
                backgroundColor: colors.white,
                flex: 1,
                paddingVertical: 30
              }}
            >
              <Customheader nested seeall title='Top Attractions in New York' />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  // backgroundColor: colors.black2,
                  // flex: 1,

                }}
                style={{
                  paddingHorizontal: 10,
                  paddingRight: 20,
                  marginTop: 20
                }}
              >
                <Topattractions Categoriesdetails nested />
                <Topattractions Categoriesdetails nested />
                <Topattractions Categoriesdetails nested />
                <Topattractions Categoriesdetails nested />
                <Topattractions Categoriesdetails nested />
              </ScrollView>
            </View>

            <View style={{

            }}>
              <Customheader title='Categories in New York' />
              <View style={{
                // backgroundColor: "green",
                flex: 1,
                flexDirection: 'row',
                flexWrap: "wrap",
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 10,

              }}>
                {Categoriesdata.map((data, index) => {
                  return (
                    <View key={data.key}>
                      <Datacomponent data={data} />
                    </View>
                  )
                })}
              </View>
              <Customheader category title='Categories Worldwide' />
              <View style={{
                // backgroundColor: "green",
                flex: 1,
                flexDirection: 'row',
                flexWrap: "wrap",
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 10,

              }}>
                {Categoriesdata.map((data, index) => {
                  return (
                    <View key={data.key}>
                      <Datacomponent data={data} />
                    </View>
                  )
                })}
              </View>
            </View>
          </ScrollView>

        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({})