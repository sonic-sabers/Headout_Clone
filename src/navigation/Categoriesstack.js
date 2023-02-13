/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import StackN from './src/navigator/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Alertscreen,
  Categoriesscreen,
  ExploreAll,
  Exploredetails,
} from '../screens';
import {Myheaderleft, MyheaderRight} from './Explorestack';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackActions} from '@react-navigation/native';
import {colors} from '../constants';
const Stack = createStackNavigator();

export default function Categoriesstack({navigation}) {
  // const navigation = useNavigation();

  const popAction = StackActions.pop(1);
  return (
    <Stack.Navigator independent>
      <Stack.Screen
        name="Categoriesscreen"
        options={{
          headerTitle: props => '',
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
          headerLeft: props => <Myheaderleft {...props} />,
          headerRight: () => <MyheaderRight />,
        }}
        component={Categoriesscreen}
      />
      <Stack.Screen
        name="Categoriesall"
        options={{
          headerTitle: props => '',
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
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: props => (
            <Entypo
              onPress={() => navigation.navigate('Categoriesscreen')}
              name="chevron-thin-left"
              size={16.5}
              color={colors.black}
              style={{
                opacity: 0.6,
                marginLeft: 15,
              }}
            />
          ),
        }}
        component={ExploreAll}
      />
      <Stack.Screen
        name="Exploredetails"
        options={{
          headerTitle: props => '',
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
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },

          headerLeft: props => (
            <Entypo
              // onPress={() => navigation.navigate('Categoriesall', { itemId: 10 })}
              // onPress={() => navigation.goBack()}
              // onPress={() => navigation.pop()}
              onPress={() => navigation.dispatch(popAction)}
              name="chevron-thin-left"
              size={16.5}
              color={colors.black}
              style={{
                opacity: 0.6,
                marginLeft: 15,
              }}
            />
          ),
          headerRight: () => <MyheaderRight />,
        }}
        // initialParams={{ itemId: 42 }}
        // initialParams={{ screenname: 'Explorescreen' }}
        component={Exploredetails}
        // children={() => <Exploredetails setScreen={setScreen} />}
      />
      <Stack.Screen
        name="Alertscreen"
        options={{
          headerShown: true,
          headerTitle: props => '',
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
            // borderBottomWidth: 1,
            // borderBottomColor: colors.white3
          },
          headerLeft: () => (
            <Entypo
              onPress={() => navigation.navigate('Categoriesscreen')}
              name="chevron-thin-left"
              size={16.5}
              color={colors.black}
              style={{
                opacity: 0.6,
                marginLeft: 15,
              }}
            />
          ),
        }}
        component={Alertscreen}
      />

      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}
