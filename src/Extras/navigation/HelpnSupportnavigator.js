
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HelpnSupport,
  Helpnsupportdetails,
  HelpnSupportRequest,
  HelpnSupportchat,
  
  
} from '../screens';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function HelpnSupportnavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HelpnSupport" component={HelpnSupport} />
      <Stack.Screen name="HelpnSupportRequest" component={HelpnSupportRequest} />
      <Stack.Screen name="Helpnsupportdetails" component={Helpnsupportdetails} />
      <Stack.Screen name="HelpnSupportchat" component={HelpnSupportchat} />
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}
