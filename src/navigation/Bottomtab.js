/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Explorestack,
  Searchscreen,
  Profilescreen,
  Categoriesstack,
} from '../screens';
// import { colors } from '../src/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();
export default function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="Explorescreen"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        style: {
          height: 50,
          width: 300,
          flexDirection: 'column',
          alignSelf: 'center',
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          marginTop: 3,
        },
        activeTintColor: '#845EC2',
        tabBarItemStyle: {
          // backgroundColor: 'green',
          flex: 1,
          paddingVertical: 4,
          // paddingBottom: 6,
          height: 45,
        },
      }}
      barStyle={{
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: 'green',
        height: 45,
        // flex:1,
      }}>
      <Tab.Screen
        name="Explorestack"
        component={Explorestack}
        // options={{  }}
        options={({route}) => ({
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Ionicons name="compass" color={color} size={18} />
            ) : (
              <Ionicons name="compass-outline" size={18} color={color} />
            ),

          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (
              routeName === 'ExploreAll' ||
              routeName === 'Alertscreen' ||
              routeName === 'Exploredetails'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Categories"
        component={Categoriesstack}
        options={({route}) => ({
          tabBarLabel: 'Categories',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <AntDesign name="appstore1" size={18} color={colors.black} />
            ) : (
              <AntDesign name="appstore-o" color={color} size={18} />
            ),
          tabBarStyle: (route => {
            // console.log(route)
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (
              routeName === 'Categoriesdetails' ||
              routeName === 'Categoriesall' ||
              routeName === 'Exploredetails' ||
              routeName === 'Alertscreen'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <MaterialCommunityIcons name="account" color={color} size={20} />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={20}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// import React from 'react';
// import {
//   Alert,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Text,
// } from 'react-native';
// import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {NavigationContainer} from '@react-navigation/native';

// const Customcomponent = () => {
//   return <View style={{backgroundColor: '#BFEFFF', flex: 1}} />;
// };

// // export const tabBar = () => {
// export default function Bottomtab() {
//   const _renderIcon = (routeName, selectedTab) => {
//     let icon = '';
//     let iconcategory = '';

//     console.log('routeName === selectedTab', routeName === selectedTab);
//     switch (routeName) {
//       case 'Explore':
//         icon = 'compass';
//         iconcategory = 'Ionicons';
//         break;
//       case 'Categories':
//         icon = 'settings-outline';
//         iconcategory = 'Ionicons';
//         break;
//       case 'Search':
//         icon = 'search1';
//         iconcategory = 'AntDesign';
//         break;
//       case 'Account':
//         icon = 'account';
//         iconcategory = 'MaterialCommunityIcons';
//         break;
//     }

//     return (
//       <View style={{height: 50}}>
//         {iconcategory == 'Ionicons' && (
//           <Ionicons
//             name={icon}
//             size={25}
//             color={routeName === selectedTab ? 'black' : 'green'}
//           />
//         )}
//         {iconcategory == 'AntDesign' && (
//           <AntDesign
//             name={icon}
//             size={25}
//             color={routeName === selectedTab ? 'black' : 'green'}
//           />
//         )}
//         {iconcategory == 'MaterialCommunityIcons' && (
//           <MaterialCommunityIcons
//             name={icon}
//             size={25}
//             color={routeName === selectedTab ? 'black' : 'green'}
//           />
//         )}
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: '400',
//             fontFamily: 'Roboto',
//             color: '#000',
//           }}>
//           text
//         </Text>
//       </View>
//     );
//   };
//   const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
//     return (
//       <TouchableOpacity
//         onPress={() => navigate(routeName)}
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {_renderIcon(routeName, selectedTab)}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <NavigationContainer independent>
//         <CurvedBottomBar.Navigator
//           type="UP"
//           // style={styles.bottomBar}
//           strokeWidth={0.5}
//           strokeColor="#DDDDDD"
//           height={55}
//           circleWidth={55}
//           bgColor="white"
//           initialRouteName="Explore"
//           // borderTopLeftRight
//           renderCircle={({selectedTab, navigate}) => (
//             <Animated.View style={styles.btnCircleUp}>
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                 }}
//                 onPress={() => Alert.alert('Click Action')}>
//                 <Ionicons name={'apps-sharp'} color="gray" size={25} />
//               </TouchableOpacity>
//             </Animated.View>
//           )}
//           tabBar={renderTabBar}>
//           <CurvedBottomBar.Screen
//             name="Explore"
//             position="LEFT"
//             component={Customcomponent}
//           />
//           <CurvedBottomBar.Screen
//             name="Categories"
//             position="LEFT"
//             // component={() => (
//             //   <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
//             // )}
//             component={Customcomponent}
//           />
//           <CurvedBottomBar.Screen
//             name="Search"
//             component={Customcomponent}
//             position="RIGHT"
//           />
//           <CurvedBottomBar.Screen
//             name="Account"
//             component={Customcomponent}
//             position="RIGHT"
//           />
//         </CurvedBottomBar.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   button: {
//     marginVertical: 5,
//   },
//   bottomBar: {
//     backgroundColor: 'red',
//     borderRadius: 20,
//   },
//   btnCircleUp: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8E8E8',
//     bottom: 18,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });
