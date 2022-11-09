import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Alertscreen, Categoriesscreen, ExploreAll, Exploredetails } from '../screens';
import Categoriesdetails from '../screens/Categoriesdetails';
import { Myheaderleft, MyheaderRight } from './Explorestack';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
const Stack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
};


function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function Categoriesstack({navigation}) {
  // const navigation = useNavigation();

  const popAction = StackActions.pop(1);
  return (

    <Stack.Navigator independent screenOptions={screenOptionStyle}>
      <Stack.Screen name="Categoriesscreen"
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
        }} component={Categoriesscreen} />
      <Stack.Screen name="Categoriesall"

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
              onPress={() => navigation.navigate('Categoriesscreen')}
              name='chevron-left' size={28} color={colors.lightblack} style={{
                // marginHorizontal: 2, ExploreAll
                marginLeft: 6,

              }} />
          ),
          headerRight: () => (
            <MyheaderRight />

          ),
        }}
        component={ExploreAll} />
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
              // onPress={() => navigation.navigate('Categoriesall', { itemId: 10 })}
              // onPress={() => navigation.goBack()}
              // onPress={() => navigation.pop()}
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
        // initialParams={{ itemId: 42 }}
        // initialParams={{ screenname: 'Explorescreen' }}
        component={Exploredetails}
      // children={() => <Exploredetails setScreen={setScreen} />}
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
              onPress={() => navigation.navigate('Categoriesscreen')}
              name='chevron-left' size={28} color={colors.lightblack} style={{
                // marginHorizontal: 2, ExploreAll
                marginLeft: 6,

              }} />
          ),
        }} component={Alertscreen} />

      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}
