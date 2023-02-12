import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Categoriesscreen,
  Explorescreen,
  Explorestack,
  Searchscreen,
  Profilescreen,
  Categoriesstack,
} from '../screens';
// import { colors } from '../src/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);

const Tab = createBottomTabNavigator();
export default function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="Explorescreen"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        style: {
          height: 50,
          width: 300,
          flexDirection: 'column',
          alignSelf: 'center',
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          marginTop: 3,
        },
        activeTintColor: '#845EC2',
        tabBarItemStyle: {
          // backgroundColor: 'green',
          flex: 1,
          paddingVertical: 4,
          // paddingBottom: 6,
          height: 45,
        },
      }}
      barStyle={{
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: 'green',
        height: 45,
        // flex:1,
      }}>
      <Tab.Screen
        name="Explorestack"
        component={Explorestack}
        // options={{  }}
        options={({route}) => ({
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Ionicons name="compass" color={color} size={18} />
            ) : (
              <Ionicons name="compass-outline" size={18} color={color} />
            ),

          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (
              routeName === 'ExploreAll' ||
              routeName === 'Alertscreen' ||
              routeName === 'Exploredetails'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Categories"
        component={Categoriesstack}
        options={({route}) => ({
          tabBarLabel: 'Categories',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <AntDesign name="appstore1" size={18} color={colors.black} />
            ) : (
              <AntDesign name="appstore-o" color={color} size={18} />
            ),
          tabBarStyle: (route => {
            // console.log(route)
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (
              routeName === 'Categoriesdetails' ||
              routeName === 'Categoriesall' ||
              routeName === 'Exploredetails' ||
              routeName === 'Alertscreen'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <MaterialCommunityIcons name="account" color={color} size={20} />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={20}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
