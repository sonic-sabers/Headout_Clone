/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Explorescreen,
  ExploreAll,
  Alertscreen,
  Exploredetails,
} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../constants';
import {StackActions} from '@react-navigation/native';
const Stack = createStackNavigator();

let Logo1 = 105;

export const Myheaderleft = () => {
  return (
    <Image
      source={require('./../assets/Image/Logo.png')}
      style={{
        width: Logo1 + 5,
        height: (Logo1 * 120) / 768,
        zIndex: 300,
        margin: 5,
        marginLeft: 20,
        resizeMode: 'contain',
      }}
    />
  );
};
export const MyheaderRight = ({nested}) => {
  const navigation = useNavigation();
  return (
    <Ionicons
      onPress={() =>
        nested
          ? navigation.navigate('Explorestack', {
              screen: 'Alertscreen',
              from: nested,
            })
          : navigation.navigate('Alertscreen')
      }
      name="help-circle-outline"
      style={{
        marginRight: 15,
      }}
      size={20}
      color={colors.black3}
    />
  );
};

export default function Explorestack({navigation}) {
  const popAction = StackActions.pop(1);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Explorescreen"
        options={{
          headerTitle: () => '',
          headerStyle: {
            backgroundColor: colors.white,
            shadowColor: '#00000040',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
          headerLeft: props => <Myheaderleft {...props} />,
          headerRight: () => <MyheaderRight />,
        }}
        component={Explorescreen}
      />
      <Stack.Screen
        name="Exploredetails"
        options={{
          headerTitle: () => '',
          headerStyle: {
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
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.dispatch(popAction)}
              // name="chevron-left"
              name="chevron-thin-left"
              size={28}
              color={colors.black4}
              style={{
                marginLeft: 6,
              }}
            />
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
          headerStyle: {
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
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.navigate('Explorescreen')}
              // name="chevron-left"
              name="chevron-thin-left"
              size={28}
              color={colors.black4}
              style={{
                marginLeft: 6,
              }}
            />
          ),
        }}
        component={ExploreAll}
      />
      <Stack.Screen
        name="Alertscreen"
        options={{
          headerShown: true,
          headerTitle: () => '',
          headerStyle: {
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
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.navigate('Explorescreen')}
              // name="chevron-left"
              name="chevron-thin-left"
              
              size={28}
              color={colors.black4}
              style={{
                marginLeft: 6,
              }}
            />
          ),
        }}
        component={Alertscreen}
      />
    </Stack.Navigator>
  );
}
