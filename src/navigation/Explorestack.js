/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Explorescreen,
  ExploreAll,
  Alertscreen,
  Exploredetails,
  Seeall,
} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../constants';
import {StackActions} from '@react-navigation/native';
const Stack = createStackNavigator();

let Logo1 = 105;

export const Myheaderleft = () => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => Navigation.navigate('Explore')}>
      <Image
        source={require('./../assets/Image/Logo.png')}
        style={styles.logoStyle}
      />
    </TouchableOpacity>
  );
};
export const MyheaderRight = ({nested}) => {
  const navigation = useNavigation();
  // const HeadLeft = () => {
  //   return (
  //     <Pressable onPress={() => navigation.navigate('Explorescreen')}>
  //       <Entypo
  //         onPress={() => navigation.dispatch(popAction)}
  //         name="chevron-thin-left"
  //         size={16.5}
  //         color={colors.black}
  //         style={{
  //           opacity: 0.6,
  //           marginLeft: 15,
  //         }}
  //       />
  //     </Pressable>
  //   );
  // };
  return (
    <Pressable
      onPress={() =>
        nested
          ? navigation.navigate('Explore', {
              screen: 'Alertscreen',
              from: nested,
            })
          : navigation.navigate('Alertscreen')
      }>
      <Ionicons
        name="help-circle-outline"
        style={{
          marginRight: 20,
        }}
        size={22}
        color={colors.black1}
      />
    </Pressable>
  );
};

export default function Explorestack({}) {
  const popAction = StackActions.pop(1);
  const navigation = useNavigation();

  const HeadLeft = () => {
    return (
      <Pressable>
        <Entypo
          onPress={() => navigation.goBack()}
          name="chevron-thin-left"
          size={16.5}
          color={colors.black}
          // color="black"
          style={{
            opacity: 0.6,
            marginLeft: 15,
          }}
        />
      </Pressable>
    );
  };
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Explorescreen"
        options={{
          headerTitle: () => '',
          headerStyle: styles.HeaderStyle,
          headerLeft: props => <Myheaderleft {...props} />,
          headerRight: () => <MyheaderRight />,
        }}
        component={Explorescreen}
      />
      <Stack.Screen
        name="Exploredetails"
        options={{
          headerTitle: () => '',
          headerStyle: styles.HeaderStyle,
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('Explorescreen')}>
              <Entypo
                onPress={() => navigation.dispatch(popAction)}
                name="chevron-thin-left"
                size={16.5}
                color={colors.black}
                style={{
                  opacity: 0.6,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
          headerRight: () => <MyheaderRight />,
        }}
        component={Exploredetails}
      />
      <Stack.Screen
        name="ExploreAll"
        options={{
          headerShown: true,
          headerTitle: () => '',
          headerStyle: styles.HeaderStyle,
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('Explorescreen')}>
              <Entypo
                name="chevron-thin-left"
                size={16.5}
                color={colors.black}
                style={{
                  opacity: 0.6,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
        component={ExploreAll}
      />
      <Stack.Screen
        name="Seeall"
        options={{
          headerShown: true,
          headerTitle: () => '',
          headerStyle: styles.HeaderStyle,
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('Explorescreen')}>
              <Entypo
                name="chevron-thin-left"
                size={16.5}
                color={colors.black}
                style={{
                  opacity: 0.6,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
        component={Seeall}
      />
      <Stack.Screen
        name="Alertscreen"
        options={{
          headerShown: true,
          headerTitle: () => '',
          headerStyle: styles.HeaderStyle,
          headerLeft: props => <HeadLeft />,
        }}
        component={Alertscreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: colors.white,
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  logoStyle: {
    width: Logo1 + 5,
    height: (Logo1 * 120) / 768,
    zIndex: 300,
    margin: 5,
    marginLeft: 20,
    resizeMode: 'contain',
  },
});
