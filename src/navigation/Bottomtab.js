/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { Animated, TouchableOpacity, View, Text, Pressable } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { h1Regular } from '../assets/fontStyles';
import { colors } from '../constants';
import {
  Explorestack,
  Searchscreen,
  Profilescreen,
  Categoriesstack,
} from '../screens';
import { styles } from './navigationStyles';
// import { useNavigation } from '@react-navigation/native';

export default function Bottomtab() {
  const tabBarRef = useRef(null);
  const hideTabBar = value => {
    tabBarRef.current?.setVisible(!value);
  };

  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let iconcategory = '';
    let inactiveicon = '';
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
                style={{ marginTop: 5 }}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            ) : (
              <Ionicons
                name={inactiveicon}
                size={18}
                style={{ marginTop: 5 }}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            )}
          </>
        )}
        {iconcategory === 'AntDesign' && (
          <>
            {routeName === selectedTab ? (
              <AntDesign
                style={{ marginTop: 4, marginBottom: 4 }}
                name={icon}
                size={17}
                color={routeName === selectedTab ? colors.black : colors.black2}
              />
            ) : (
              <AntDesign
                style={{ marginTop: 4, marginBottom: 4 }}
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
            styles.routeNameText,
            routeName === selectedTab
              ? { color: colors.black }
              : { color: colors.black2 },
            ,
          ]}>
          {routeName}
        </Text>
      </View>
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <Pressable
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </Pressable>
    );
  };
  // const navigation = useNavigation();


  return (
    <NavigationContainer independent>
      <CurvedBottomBar.Navigator
        type="DOWN"
        ref={tabBarRef}
        // style={styles.bottomBar}
        strokeWidth={2}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={35}
        bgColor="white"
        initialRouteName="Explore"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.black,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,
        })}
        setVisible={false}
        // borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View
            style={[
              {
                bottom: 14,
                alignItems: 'center',
                marginHorizontal: 15, 
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,
              },
            ]}>
            <TouchableOpacity
              onPress={() => navigate('ARscreen')}
              // onPress={() => console.log('navigation', navigation)}
              style={styles.explorebutton}>
              <FontAwesome
                name={'location-arrow'}
                color={colors.primary}
                size={25}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.exploreText,
                { color: colors.black1, },
              ]}>
              Experience
            </Text>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="Explore"
          position="LEFT"
          options={({ route }) => ({
            tabBarStyle: (route => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? '';
              if (route.name === 'Explore') {
                if (
                  routeName === 'Categoriesdetails' ||
                  routeName === 'Categoriesall' ||
                  routeName === 'Exploredetails' ||
                  routeName === 'ExploreAll' ||
                  routeName === 'Seeall' ||
                  routeName === 'ARscreen' ||
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
          options={({ route }) => ({
            tabBarStyle: (route => {
              const routeName2 = getFocusedRouteNameFromRoute(route) ?? '';
              if (route.name === 'Explore') {
                if (
                  routeName2 === 'Categoriesdetails' ||
                  routeName2 === 'Categoriesall' ||
                  routeName2 === 'Exploredetails' ||
                  routeName2 === 'ExploreAll' ||
                  routeName2 === 'Seeall' ||
                  routeName2 === 'ARscreen' ||
                  routeName2 === 'Alertscreen'
                ) {
                  return hideTabBar(true);
                }
                return hideTabBar(true);
              }
              if (route.name === 'Categories') {
                if (
                  routeName2 === 'Categoriesdetails' ||
                  routeName2 === 'Categoriesall' ||
                  routeName2 === 'Exploredetails' ||
                  routeName2 === 'ExploreAll' ||
                  routeName2 === 'Seeall' ||
                  routeName2 === 'ARscreen' ||
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
