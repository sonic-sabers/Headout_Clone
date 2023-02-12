/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect, useRef} from 'react';
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
  LayoutAnimation,
  UIManager,
  Platform,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants';
import {
  Customheader,
  ExperienceComponent,
  Hstack,
  Loadingscreen,
} from '../../components';
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
import {
  // Customheader,
  // ExperienceComponent,
  Glass,
  Museum1,
  Museum2,
  Museum3,
} from './Explorescreen';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {Hline} from '../Profilescreen';
import {List} from 'react-native-paper';
import MapView, {Marker} from 'react-native-maps';
import {Cayntext} from '../Alertscreen';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);
let imageWidth = dimensions.width - 20;
// let imageHeight = dimensions.height;
let itemwidth = imageWidth / 2 - 20;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const tokyoRegion = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const Accordion = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View
      style={{
        // backgroundColor: colors.white,
        marginHorizontal: 15,
        marginVertical: 10,
      }}>
      <Pressable onPress={toggleOpen}>
        <Hstack centered between styles={{}}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Entypo
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={colors.black1}
            style={{
              marginRight: 5,
            }}
          />
        </Hstack>
      </Pressable>
      <View
        style={[
          !isOpen
            ? styles.hidden
            : {
                marginTop: 10,
              },
          {
            flex: 1,
            overflow: 'hidden',
            zIndex: 500,
            // marginBottom: 10,
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

const Reviewcomponent = ({Nmae}) => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}>
      <Hstack between>
        <Hstack>
          <View
            style={{
              backgroundColor: colors.black6,
              width: 50,
              height: 50,
              borderRadius: 60,

              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '800',
                fontFamily: 'Roboto',
                color: colors.black5,
              }}>
              D
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '800',
                fontFamily: 'Roboto',
                color: colors.black3,
              }}>
              {Nmae ? Nmae : ' Lorem Ipsum'}
            </Text>
            <Hstack>
              <AntDesign
                name="star"
                size={15}
                color={colors.color1}
                style={{
                  marginHorizontal: 2,
                }}
              />
              <AntDesign
                name="star"
                size={15}
                color={colors.color1}
                style={{
                  marginHorizontal: 2,
                }}
              />
              <AntDesign
                name="star"
                size={15}
                color={colors.color1}
                style={{
                  marginHorizontal: 2,
                }}
              />
              <AntDesign
                name="star"
                size={15}
                color={colors.color1}
                style={{
                  marginHorizontal: 2,
                }}
              />
              <AntDesign
                name="star"
                size={15}
                color={colors.color1}
                style={{
                  marginHorizontal: 2,
                }}
              />
            </Hstack>
          </View>
        </Hstack>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.black3,
          }}>
          Apr,2022
        </Text>
      </Hstack>

      <Text
        style={[
          {
            lineHeight: 22,
            marginVertical: 10,
          },
          styles.Abouttext,
        ]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Text>
    </View>
  );
};

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const Points = ({text, nodot}) => {
  return (
    <Hstack
      styles={{
        marginBottom: 10,
        marginHorizontal: 10,
      }}>
      <View
        style={[
          {
            height: 5,
            borderRadius: 30,
            backgroundColor: '#ffffff00',
            margin: 10,
            marginTop: 8,
          },
          !nodot && {
            backgroundColor: colors.black3,
            width: 5,
            marginLeft: 15,
          },
        ]}
      />
      <Text
        style={[
          {
            maxWidth: '85%',
            // marginRight: 40,
            lineHeight: 22,
            fontSize: 17,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: colors.black3,
            // backgroundColor: 'green',
            // flex: 1,
          },
        ]}>
        {text ? text : '214'}
      </Text>
    </Hstack>
  );
};

const Aboutexplore = ({children, title}) => {
  return (
    <Hstack
      centered
      styles={{
        marginLeft: 10,
        marginTop: 10,
      }}>
      <View
        style={{
          width: 20,
        }}>
        {children}
      </View>
      <Text
        style={[
          {
            marginLeft: 10,
          },
          styles.Abouttext,
        ]}>
        {title ? title : null}
      </Text>
    </Hstack>
  );
};

const Renderitem = ({rating, title, Costings, Reviewcount}) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.white3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 29,
        // marginTop: -10,
        // position: 'absolute',
        position: 'relative',
        flex: 1,
      }}>
      <View>
        <Customheader
          title={title}
          styles={{
            fontSize: 23,
          }}
        />
        <Hstack
          centered
          between
          styles={[
            {
              marginVertical: 15,
              marginLeft: 10,

              // width:images
            },
          ]}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.black,
              // maxWidth: images - 20,
              // backgroundColor: 'green' Category
            }}>
            ${Costings ? Costings : 28}
          </Text>
          <Hstack centered styles={{}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                fontFamily: 'Roboto',
                color: colors.color1,
              }}>
              4.3
            </Text>
            <AntDesign
              name="star"
              size={11}
              color={colors.color1}
              style={{
                marginHorizontal: 2,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.black4,
              }}>
              {Reviewcount}k
            </Text>
          </Hstack>
        </Hstack>
        <Aboutexplore title="Skip the line and save time">
          <MaterialCommunityIcons name="run" size={20} color={colors.black4} />
        </Aboutexplore>
        <Aboutexplore title="Show tickets on your phone">
          <Feather name="smartphone" size={20} color={colors.black4} />
        </Aboutexplore>
        <Aboutexplore title="Instant Confirmation">
          <Ionicons name="flash-outline" size={20} color={colors.black4} />
        </Aboutexplore>
        <Aboutexplore title="Free Cancillation">
          <Ionicons
            name="shield-checkmark-outline"
            size={18}
            color={colors.black4}
          />
        </Aboutexplore>
        <Aboutexplore title="Flexible Hours">
          <Feather name="clock" size={20} color={colors.black4} />
        </Aboutexplore>
        <Hline />
        <Text
          style={[
            {
              marginHorizontal: 10,
            },
            styles.Abouttext,
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Hline />

        <Accordion title="Highlights">
          <Points text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Points text="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five " />
        </Accordion>

        <Hline />
        <Accordion title="Inclusions">
          <Points text="Lorem Ipsum is simply dummy " />
          <Points text="when an unknown " />
          <Points text="when an unknown Lorem" />
        </Accordion>

        <Hline />
        <Accordion title="Exclusions">
          <Points text="Lorem Ipsum is simply dummy " />
          <Points text="when an unknown Lorem" />
        </Accordion>

        <Hline />
        <Accordion title="Cancellation Policy">
          <Points nodot text="Lorem Ipsum is simply dummy " />
          <Points nodot text="Lorem Ipsum is simply dummy " />
        </Accordion>

        <Hline />
        <Accordion title="Your Experience">
          <Points nodot text="Lorem Ipsum is simply dummy " />
          <Points nodot text="when an unknown Lorem" />
        </Accordion>

        <Hline />

        <Accordion title="Know Before you Go">
          <Points text="Lorem Ipsum is simply dummy " />
          <Points text="when an unknown Lorem" />
        </Accordion>

        <Hline />
        <Accordion title="Ratings & Reviews">
          <View
            style={{
              marginHorizontal: 15,
            }}>
            <View>
              <Hstack between centered styles={{}}>
                <Hstack centered styles={{}}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: '700',
                      fontFamily: 'Roboto',
                      color: colors.color1,
                    }}>
                    4.3
                  </Text>
                  <AntDesign
                    name="star"
                    size={21}
                    color={colors.color1}
                    style={{
                      marginHorizontal: 2,
                    }}
                  />
                </Hstack>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    fontFamily: 'Roboto',
                    color: colors.black3,
                  }}>
                  2k Ratings
                </Text>
              </Hstack>

              <Reviewcomponent Nmae="Daria Borntrager" />
              <Reviewcomponent Nmae="Dona mason" />
            </View>
          </View>
        </Accordion>

        <Hline />
      </View>

      <Customheader nested title="Where?" />

      <View
        style={{
          marginHorizontal: 10,
          overflow: 'hidden',
        }}>
        <Cayntext
          text="Museum of Modern Art 11 West 53rd street"
          left
          style={{
            marginVertical: 10,
          }}>
          <Ionicons
            // onPress={() => navigation.goBack()}
            name="map-outline"
            size={18}
            color="#008b8b"
          />
        </Cayntext>

        <MapView
          style={styles.map}
          region={tokyoRegion}
          initialRegion={tokyoRegion}>
          <Marker coordinate={tokyoRegion} pinColor="#7F00FF" />
        </MapView>
      </View>

      <Hline />
      <View
        style={{
          marginHorizontal: -20,
          marginBottom: 30,
        }}>
        <Customheader
          title="Similar Experiences"
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            color: colors.color2,
          }}
          style={{
            paddingLeft: 30,
            marginBottom: 25,
          }}>
          <ExperienceComponent />
          <ExperienceComponent img={Glass} free />
          <ExperienceComponent img={Museum3} />
          <ExperienceComponent />
          <ExperienceComponent free />
          <View
            style={{
              paddingRight: 30,
            }}
          />
        </ScrollView>
      </View>

      <TouchableOpacity
        style={{
          // position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.primary,
          zIndex: 600,
          flex: 1,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: colors.white,
          }}>
          Check Availability
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Exploredetails({route}) {
  // const { itemId } =  route.params;
  const {title, Reviewcount, Costings} = route?.params;

  // const { title } = route?.params;
  // console.log(title)
  // console.log(screenname)
  const [show, setShow] = React.useState(false);
  const [dataRestored, setDataRestored] = React.useState(false);
  const delay = 1;

  const ratio = 120 / 786;
  const logowidth = dimensions.width / 2;
  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  let rating = '4k';
  return (
    <>
      {!show ? (
        <Loadingscreen />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            // paddingHorizontal: 10,
            paddingBottom: 0,
          }}>
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
            renderContent={() => (
              <Renderitem
                rating={rating}
                title={title}
                Costings={Costings}
                Reviewcount={Reviewcount}
              />
            )}
            containerStyle={styles.container}
            contentContainerStyle={styles.contentContainer}
            innerContainerStyle={styles.container}
            scrollViewProps={{
              onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
              onScrollEndDrag: () => console.log('onScrollEndDrag'),
            }}
          />
        </View>
      )}
    </>
  );
}

export const styles = StyleSheet.create({
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
  // titleStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   fontSize: 18,
  // },
  Abouttext: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: colors.black3,
  },
  container2: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: (imageWidth * 9) / 16,
    width: imageWidth,
    alignSelf: 'center',
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#000000',
  },
});
