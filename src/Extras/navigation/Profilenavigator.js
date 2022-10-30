import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	Securityscreen,
	Mobileverification,
	Profilescreen,
	Emailverification,
	AdvanceKYC,
	KYCwaiting,
	Addmoney,
	Appfeedback,
	Aboutus,
	Contactus,
	Orders,
	Profile,
	InvitenEarn,
	Profilemain,
	Userprofile,
	Demataccount,
	Bankdetails,
	HelpnSupport,

	
} from '../screens';
import HelpnSupportnavigator from './HelpnSupportnavigator';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Profilenavigator() {
const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);
	return (
		<NavigationContainer independent>
			<Stack.Navigator
			
				screenOptions={{
					headerShown: false,
					// tabBarStyle: { display: "none" },
				}}>
				<Stack.Screen name="ProfileScreen" component={Profilescreen} />
				<Stack.Screen name="Userprofile" component={Userprofile} />
				<Stack.Screen name="Profilemain" component={Profilemain} />
				<Stack.Screen name="Orders" component={Orders} />
				<Stack.Screen name="Contactus" component={Contactus} />
				<Stack.Screen name="Aboutus" component={Aboutus} />
				<Stack.Screen name="Appfeedback" component={Appfeedback} />
				<Stack.Screen name="Addmoney" component={Addmoney} />
				<Stack.Screen name="KYCwaiting" component={KYCwaiting} />
				<Stack.Screen name="AdvanceKYC" component={AdvanceKYC} />
				<Stack.Screen name="Emailverification" component={Emailverification} />
				<Stack.Screen name="Mobileverification" component={Mobileverification} />
				<Stack.Screen name="Securityscreen" component={Securityscreen} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="InvitenEarn" component={InvitenEarn} />
				<Stack.Screen name="Demataccount" component={Demataccount} />
				<Stack.Screen name="Bankdetails" component={Bankdetails} />
				<Stack.Screen name="HelpnSupport" component={HelpnSupport} />
				<Stack.Screen name="HelpnSupportnavigator" component={HelpnSupportnavigator} />
				{/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
