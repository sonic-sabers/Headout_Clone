import React, { useState } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Explorescreen, ExploreAll, Alertscreen, Exploredetails } from '../screens';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { colors } from '../constants';
import { Headercomponent } from '../screens/Explorescreens/Explorescreen';
import { StackActions } from '@react-navigation/native';
const Stack = createStackNavigator();

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);
let imageWidth = dimensions.width - 20;
// let imageHeight = dimensions.height;
let itemwidth = imageWidth / 2 - 20

let Logo1 = 160 - 40;
let images = 320;

export const Myheaderleft = () => {
  return (
    <Image
      source={require('./../assets/Image/Logo.png')}
      style={{
        width: Logo1 + 5, height: Logo1 * 120 / 768,
        zIndex: 300,
        margin: 5,
        marginLeft: 15,
        resizeMode: 'contain',

      }} />
  )
}
export const MyheaderRight = ({ nested }) => {

  const navigation = useNavigation();
  return (
    <Ionicons
      onPress={() => nested ? navigation.navigate('Explorestack', {
        screen: 'Alertscreen',
        from: nested
      }) : navigation.navigate('Alertscreen')}
      name='help-circle-outline' style={{
        marginRight: 15,
      }} size={20} color={colors.black1} />
  )
}

export default function Explorestack({ navigation }) {
  const popAction = StackActions.pop(1);
  const [Screendetails, setScreendetails] = useState('Explorescreen')
  const [Screenexplore, setScreenexplore] = useState('Explorescreen')
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Explorescreen"
        options={{
          headerTitle: (props) => '',
          headerStyle: {
            backgroundColor: colors.white,
            shadowColor: "#00000050",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: (props) => (
            <Myheaderleft {...props} />
          ),
          headerRight: () => (
            <MyheaderRight />

          ),
        }}
        component={Explorescreen} />
      <Stack.Screen name="Exploredetails"
        options={{
          headerTitle: (props) => '',
          headerStyle: {
            backgroundColor: colors.white,
            shadowColor: "#00000050",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: (props) => (
            <Entypo
              // onPress={() => navigation.navigate(Screendetails)}
              onPress={() => navigation.dispatch(popAction)}
              
              name='chevron-left' size={28} color={colors.lightblack} style={{
                // marginHorizontal: 2, ExploreAll
                marginLeft: 6,

              }} />
          ),
          headerRight: () => (
            <MyheaderRight />

          ),
        }}
        // initialParams={{ screenname: 'Explorescreen' }}
        component={Exploredetails}
      // children={() => <Exploredetails setScreen={setScreen} />}
      />
      <Stack.Screen name="ExploreAll"
        options={{
          headerShown: true,
          headerTitle: (props) => '',
          headerStyle: {
            backgroundColor: colors.white,
            shadowColor: "#00000050",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.navigate(Screenexplore)}

              name='chevron-left' size={28} color={colors.lightblack} style={{
                // marginHorizontal: 2, ExploreAll
                marginLeft: 6,

              }} />
          ),
        }}
        component={ExploreAll}
      // children={() => <ExploreAll setScreenexplore={setScreenexplore} />}
        
        />
      <Stack.Screen name="Alertscreen"
        options={{
          headerShown: true,
          headerTitle: (props) => '',
          headerStyle: {
            backgroundColor: colors.white,
            shadowColor: "#00000050",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.navigate('Explorescreen')}
              name='chevron-left' size={28} color={colors.lightblack} style={{
                // marginHorizontal: 2, ExploreAll
                marginLeft: 6,

              }} />
          ),
        }} component={Alertscreen} />
      {/* <Stack.Screen
        <Image
        source={require('./../assets/Image/Logo.png')}
        style={{
          width: Logo1, height: Logo1 * 120 / 768,
          zIndex: 300,
          marginTop: 5
        }} />
      
      name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}
