/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Alertscreen,
  Categoriesscreen,
  ExploreAll,
  Exploredetails,
  Seeall,
} from '../screens';
import {Myheaderleft, MyheaderRight} from './Explorestack';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackActions} from '@react-navigation/native';
import {colors} from '../constants';
import {Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();

export default function Categoriesstack({navigation}) {
  const popAction = StackActions.pop(1);

  const HeadLeft = () => {
    return (
      <Pressable>
        <Entypo
          onPress={() => navigation.navigate('Categoriesscreen')}
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
    <Stack.Navigator independent>
      <Stack.Screen
        name="Categoriesscreen"
        options={{
          headerTitle: props => '',
          headerStyle: styles.header,
          headerLeft: props => <Myheaderleft {...props} />,
          headerRight: () => <MyheaderRight />,
        }}
        component={Categoriesscreen}
      />
      <Stack.Screen
        name="Categoriesall"
        options={{
          headerTitle: props => '',
          headerStyle: styles.header,
          headerLeft: props => <HeadLeft />,
        }}
        component={ExploreAll}
      />
      <Stack.Screen
        name="Exploredetails"
        options={{
          headerTitle: props => '',
          headerStyle: styles.header,

          headerLeft: props => (
            <Pressable onPress={() => navigation.goBack()}>
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
          headerRight: () => <MyheaderRight />,
        }}
        component={Exploredetails}
      />
      <Stack.Screen
        name="Alertscreen"
        options={{
          headerShown: true,
          headerTitle: props => '',
          headerStyle: styles.header,
          headerLeft: props => <HeadLeft />,
        }}
        component={Alertscreen}
      />
      <Stack.Screen
        name="Seeall"
        options={{
          headerShown: true,
          headerTitle: props => '',
          headerStyle: styles.header,
          headerLeft: () => <HeadLeft />,
        }}
        component={Seeall}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
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
});
