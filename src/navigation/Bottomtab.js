/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-shadow */
// /* eslint-disable react-native/no-inline-styles */
// import * as React from 'react';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   Explorestack,
//   Searchscreen,
//   Profilescreen,
//   Categoriesstack,
// } from '../screens';
// // import { colors } from '../src/constants';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {colors} from '../constants';

// const Tab = createBottomTabNavigator();
// export default function Bottomtab() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Explorescreen"
//       screenOptions={{
//         tabBarActiveTintColor: colors.black,
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         unmountOnBlur: true,
//         style: {
//           height: 50,
//           width: 300,
//           flexDirection: 'column',
//           alignSelf: 'center',
//           borderTopStartRadius: 5,
//           borderTopEndRadius: 5,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,

//           elevation: 5,
//           marginTop: 3,
//         },
//         activeTintColor: '#845EC2',
//         tabBarItemStyle: {
//           // backgroundColor: 'green',
//           flex: 1,
//           paddingVertical: 4,
//           // paddingBottom: 6,
//           height: 45,
//         },
//       }}
//       barStyle={{
//         marginLeft: 10,
//         marginRight: 10,
//         // backgroundColor: 'green',
//         height: 45,
//         // flex:1,
//       }}>
//       <Tab.Screen
//         name="Explorestack"
//         component={Explorestack}
//         // options={{  }}
// options={({route}) => ({
//   tabBarLabel: 'Explore',
//   tabBarIcon: ({focused, color}) =>
//     focused ? (
//       <Ionicons name="compass" color={color} size={18} />
//     ) : (
//       <Ionicons name="compass-outline" size={18} color={color} />
//     ),

//   tabBarStyle: (route => {
//     const routeName = getFocusedRouteNameFromRoute(route) ?? '';
//     if (
//       routeName === 'ExploreAll' ||
//       routeName === 'Alertscreen' ||
//       routeName === 'Exploredetails'
//     ) {
//       return {display: 'none'};
//     }
//     return;
//   })(route),
// })}
//       />
//       <Tab.Screen
//         name="Categories"
//         component={Categoriesstack}
//         options={({route}) => ({
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({focused, color}) =>
//             focused ? (
//               <AntDesign name="appstore1" size={18} color={colors.black} />
//             ) : (
//               <AntDesign name="appstore-o" color={color} size={18} />
//             ),
//           tabBarStyle: (route => {
//             // console.log(route)
//             const routeName = getFocusedRouteNameFromRoute(route) ?? '';
//             if (
//               routeName === 'Categoriesdetails' ||
//               routeName === 'Categoriesall' ||
//               routeName === 'Exploredetails' ||
//               routeName === 'Alertscreen'
//             ) {
//               return {display: 'none'};
//             }
//             return;
//           })(route),
//         })}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Searchscreen}
//         options={{
//           tabBarLabel: 'Search',

//           tabBarIcon: ({color}) => (
//             <AntDesign name="search1" color={color} size={18} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profilescreen"
//         component={Profilescreen}
//         options={{
//           tabBarLabel: 'Account',
//           tabBarIcon: ({color, focused}) =>
//             focused ? (
//               <MaterialCommunityIcons name="account" color={color} size={20} />
//             ) : (
//               <MaterialCommunityIcons
//                 name="account-outline"
//                 color={color}
//                 size={20}
//               />
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {h1Regular} from '../assets/fontStyles';
import {colors} from '../constants';
import {
  Explorestack,
  Searchscreen,
  Profilescreen,
  Categoriesstack,
} from '../screens';

export default function Bottomtab() {
  const tabBarRef = useRef(null);
  const hideTabBar = value => {
    tabBarRef.current?.setVisible(!value);
  };

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let iconcategory = '';
    let inactiveicon = '';
    // console.log('routeName === selectedTab', routeName === selectedTab);
    switch (routeName) {
      case 'Explore':
        icon = 'compass';
        inactiveicon = 'compass-outline';
        iconcategory = 'Ionicons';
        break;
      case 'Categories':
        icon = 'md-grid';
        inactiveicon = 'md-grid-outline';
        iconcategory = 'Ionicons';
        break;
      case 'Search':
        icon = 'search1';
        inactiveicon = 'search1';
        iconcategory = 'AntDesign';
        break;
      case 'Account':
        icon = 'account';
        inactiveicon = 'account-outline';
        iconcategory = 'MaterialCommunityIcons';
        break;
    }

    return (
      <View
        style={[
          {
            height: 50,
            alignItems: 'center',
            // margiHorizontal: 14,
          },
        ]}>
        {iconcategory === 'Ionicons' && (
          <>
            {routeName === selectedTab ? (
              <Ionicons
                name={icon}
                size={18}
                style={{marginTop: 5}}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            ) : (
              <Ionicons
                name={inactiveicon}
                size={18}
                style={{marginTop: 5}}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            )}
          </>
        )}
        {iconcategory === 'AntDesign' && (
          <>
            {routeName === selectedTab ? (
              <AntDesign
                style={{marginTop: 4, marginBottom: 4}}
                name={icon}
                size={17}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            ) : (
              <AntDesign
                style={{marginTop: 4, marginBottom: 4}}
                name={inactiveicon}
                size={17}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            )}
          </>
        )}
        {iconcategory === 'MaterialCommunityIcons' && (
          <>
            {routeName === selectedTab ? (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                style={{
                  marginBottom: 2,
                  marginTop: 3,
                }}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            ) : (
              <MaterialCommunityIcons
                name={inactiveicon}
                size={20}
                style={{
                  marginBottom: 2,
                  marginTop: 3,
                }}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            )}
          </>
        )}
        <Text
          style={[
            h1Regular,
            {
              fontSize: 10.5,
              fontFamily: 'Inter-Regular',
              lineHeight: 14,
              flex: 1,
              alignSelf: 'center',
              marginTop: 3,
            },
            routeName === selectedTab
              ? {color: colors.black}
              : {color: colors.black2},
            ,
          ]}>
          {routeName}
        </Text>
      </View>
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer independent>
      <CurvedBottomBar.Navigator
        type="UP"
        ref={tabBarRef}
        // style={styles.bottomBar}
        strokeWidth={1}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={40}
        bgColor="white"
        initialRouteName="Explore"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: colors.black,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,
        })}
        setVisible={false}
        // borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View
            style={[
              {
                bottom: 20,
                alignItems: 'center',
                marginHorizontal: 15,
              },
            ]}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                width: 45,
                height: 45,
                borderRadius: 25,
                alignItems: 'center',
                backgroundColor: '#E8E8E8',

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 1,
              }}
              onPress={() => console.log('selectedTab', selectedTab)}>
              <FontAwesome
                name={'location-arrow'}
                color={colors.primary}
                size={25}
              />
            </TouchableOpacity>
            <Text
              style={[
                {
                  fontSize: 10.5,
                  fontFamily: 'Inter-Regular',
                  lineHeight: 14,
                  alignSelf: 'center',
                  marginTop: 5,
                  color: colors.black1,
                },
              ]}>
              Experience
            </Text>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="Explore"
          position="LEFT"
          setVisible="false"
          options={({route}) => ({
            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              // if (route.name === 'Categories') {
              //   if (
              //     routeName === 'Categoriesdetails' ||
              //     routeName === 'Categoriesall' ||
              //     routeName === 'Exploredetails' ||
              //     routeName === 'ExploreAll' ||
              //     routeName === 'Alertscreen'
              //   ) {
              //     return hideTabBar(true);
              //   }
              // }
              if (route.name === 'Explore') {
                // if (routeName === 'Categoriesscreen') {
                //   return hideTabBar(false);
                // }
                if (
                  routeName === 'Categoriesdetails' ||
                  routeName === 'Categoriesall' ||
                  routeName === 'Exploredetails' ||
                  routeName === 'ExploreAll' ||
                  routeName === 'Seeall' ||
                  routeName === 'Alertscreen'
                ) {
                  return hideTabBar(true);
                }
                return hideTabBar(false);
              }
            })(route),
          })}
          component={Explorestack}
          initialParams={{ City: 'New York' }}
        />
        <CurvedBottomBar.Screen
          name="Categories"
          position="LEFT"
          options={({route}) => ({
            tabBarStyle: (route => {
              const routeName2 = getFocusedRouteNameFromRoute(route) ?? '';
              if (route.name === 'Explore') {
                if (
                  routeName2 === 'Categoriesdetails' ||
                  routeName2 === 'Categoriesall' ||
                  routeName2 === 'Exploredetails' ||
                  routeName2 === 'ExploreAll' ||
                  routeName2 === 'Seeall' ||
                  routeName2 === 'Alertscreen'
                ) {
                  return hideTabBar(true);
                }
                return hideTabBar(false);
              }
              if (route.name === 'Categories') {
                if (
                  routeName2 === 'Categoriesdetails' ||
                  routeName2 === 'Categoriesall' ||
                  routeName2 === 'Exploredetails' ||
                  routeName2 === 'ExploreAll' ||
                  routeName2 === 'Seeall' ||
                  routeName2 === 'Alertscreen'
                ) {
                  return hideTabBar(true);
                }
              }
            })(route),
          })}
          component={Categoriesstack}
        />
        <CurvedBottomBar.Screen
          name="Search"
          position="RIGHT"
          component={Searchscreen}
        />
        <CurvedBottomBar.Screen
          name="Account"
          position="RIGHT"
          component={Profilescreen}
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  btnCircleUp: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 25,
    height: 25,
    tintColor: 'gray',
  },
  img: {
    width: 25,
    height: 25,
  },
});
