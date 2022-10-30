import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import StackN from './src/navigator/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
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

export default function Appnavigator() {
  return (

    <NavigationContainer independent>
      <Stack.Navigator independent screenOptions={screenOptionStyle}>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileScreen1" component={ProfileScreen} />

        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
