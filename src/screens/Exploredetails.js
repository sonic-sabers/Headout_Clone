import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ViewPropTypes,
  Switch,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import { Hstack } from '../components';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Customheader, ExperienceComponent, Glass, Museum1, Museum2, Museum3 } from './Explorescreen';

import ReactNativeParallaxHeader from 'react-native-parallax-header';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;



const Renderitem = ({ rating }) => {
  return (
    <View style={{

      padding: 15,
      backgroundColor: colors.primary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 29,
      // marginTop: -10,
      // position: 'absolute',

    }}>
      <Customheader title='Museum of Modern Art(MOMA) Tickets' />
      <Hstack
        centered between styles={[{
          marginTop: 5,
          // width:images
        }]}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            // maxWidth: images - 20,
            // backgroundColor: 'green' Category
          }}>
          Museum of Modern Art(MoMA) Tickets

        </Text>
        <Hstack centered>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.color1,
            }}>
            4.3
          </Text>
          <AntDesign name='star' size={11} color={colors.color1} style={{
            marginHorizontal: 2,
          }} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.lightblack,
            }}>
            ({rating ? rating : '2k'})
          </Text>
        </Hstack>
      </Hstack>
      {Array.from(Array(30).keys()).map((i) => (
        <View
          key={i}
          style={{ padding: 15, justifyContent: 'center' }}>
          <Text>Item {i + 1}</Text>
        </View>
      ))}
    </View>
  );
};

const Title = () => {
  return (
    <View style={styles.body}>
      <Text style={{ color: 'white', fontSize: 25 }}>Parallax Header</Text>
    </View>
  );
};

export default function Exploredetails() {

  let rating = 4.1;
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
      // paddingHorizontal: 10,
      paddingBottom: 0,
    }}
    >
      <ReactNativeParallaxHeader

        headerMinHeight={0}
        headerMaxHeight={250}
        extraScrollHeight={20}
        navbarColor="#ffffff01"
        // titleStyle={styles.titleStyle}
        // title={title()}
        backgroundImage={Museum1}
        backgroundImageScale={1.2}
        // renderNavBar={renderNavBar}
        // renderContent={renderContent}
        renderContent={() => (<Renderitem rating={rating} />)}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
