{/* <>
  
  const Contactus = ()=> {
    return (
    <View>
      <Text>Contactus</Text>
    </View>
    )
  }

    <Text
      style={{
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.lightblack,
      }}>
      ScaleRic
    </Text>

  <AntDesign name='star' size={20} color={colors.primary} />

  source={require('./../assets/Image/Liberty.png')}
              style={{
                width: imageWidth, height: imageWidth * 600 / 527,
                marginTop: 20,
                flex: 1,
                padding: 15,

              }}
              imageStyle={{
                borderRadius: 15,

              }}
              resizeMode='cover'

</> */}
import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Categoriesscreen, Explorescreen, Explorestack, Searchscreen, Profilescreen } from './src/screens';
import { colors } from './src/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Myheaderleft, MyheaderRight } from './src/navigation/Explorestack';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);



const Tab = createBottomTabNavigator();

function MyTabs() {
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
          elevation: 2,
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,

          shadowColor: "#000",
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
          // flex: 1,
          paddingVertical: 4,
          // paddingBottom: 6,

        },
      }}
      barStyle={{
        marginLeft: 10, marginRight: 10,
        backgroundColor: 'green'
      }}


    >
      <Tab.Screen
        name="Explorestack"
        component={Explorestack}
        // options={{  }}
        options={({ route }) => ({
          tabBarLabel: 'Explore',
          // headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            if (routeName === 'ExploreAll' || routeName === 'Alertscreen' || routeName === 'Exploredetails') {
              return { display: "none" }
            }
            return
          })(route),
        })}

      />
      <Tab.Screen
        name="Categories"
        component={Categoriesscreen}
        options={{
          tabBarLabel: 'Categories',
          headerShown: true,

          headerTitle: (props) => '',
          headerStyle: {
            backgroundColor: colors.white,
            backgroundColor: colors.white,
            shadowColor: "#00000050",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          headerLeft: (props) => (
            <Myheaderleft {...props} />
          ),
          headerRight: () => (
            <MyheaderRight nested='Categoriesscreen' />

          ),
          tabBarIcon: ({ focused, color }) => (

            focused ?
              <AntDesign name="appstore1" size={21} color={colors.black} /> :
              <AntDesign name="appstore-o" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profilescreen"
        component={Profilescreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size, focused }) => (
            focused ?
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              /> :
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
