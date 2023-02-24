/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useMemo} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Platform,
  Pressable,
  Animated,
} from 'react-native';
import Bottomsheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {colors} from '../../constants';
import {
  Customheader,
  ExperienceComponent,
  Hstack,
  Loadingscreen,
  Detailsheader,
} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  // Customheader,
  // ExperienceComponent,
  Glass,
  Museum1,
  Museum2,
  Museum3,
} from './Explorescreen';
import {Hline} from '../Profilescreen';
import MapView, {Marker} from 'react-native-maps';
import {Cayntext} from '../Alertscreen';
import {innerText, h2, h1, topText} from '../../assets/fontStyles';

let dimensions = Dimensions.get('window');
let imageWidth = dimensions.width - 20;
// let imageHeight = dimensions.height;
const {width, height} = Dimensions.get('screen');
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

const Accordion = ({title, children, Opened}) => {
  const [isOpen, setIsOpen] = useState(Opened ? true : false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View
      style={{
        // backgroundColor: colors.white,
        marginHorizontal: 15,
        marginVertical: 15,
      }}>
      <Pressable onPress={toggleOpen}>
        <Hstack centered between styles={{}}>
          <Text style={[innerText, {color: colors.black, opacity: 0.8}]}>
            {title}
          </Text>
          <Entypo
            name={isOpen ? 'chevron-thin-up' : 'chevron-thin-down'}
            size={19}
            color={colors.black}
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
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

const Reviewcomponent = ({Nmae, stars}) => {
  var mystars = [];

  for (let i = 0; i < stars; i++) {
    mystars.push(
      <View key={i}>
        <FontAwesome
          name="star"
          size={17}
          color={colors.color1}
          style={{
            marginHorizontal: 2,
          }}
        />
      </View>,
    );
  }
  return (
    <View
      style={{
        marginVertical: 10,
      }}>
      <Hstack between centered>
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
              style={[
                {
                  // fontSize: 22,
                  // fontWeight: '800',
                  // fontFamily: 'Roboto',
                  color: colors.black,
                },
                topText,
              ]}>
              {Nmae ? Nmae : ' Lorem Ipsum'}
            </Text>
            <Hstack>{mystars}</Hstack>
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
        // marginHorizontal: 10,
        marginTop: 10,
      }}>
      <View
        style={[
          {
            height: 5,
            borderRadius: 30,
            backgroundColor: '#ffffff00',
            margin: 10,
            marginTop: 8,
            marginLeft: 0,
          },
          !nodot && {
            backgroundColor: colors.black3,
            width: 5,
            marginLeft: 5,
          },
        ]}
      />
      <Text
        style={[
          {
            maxWidth: '90%',
            lineHeight: 22,
            color: colors.black,
            opacity: 0.7,
          },
          h2,
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
          {
            maxWidth: '90%',
            lineHeight: 22,
            color: colors.black,
            opacity: 0.7,
          },
          h2,
        ]}>
        {title ? title : null}
      </Text>
    </Hstack>
  );
};

const Renderitem = ({title, Costings, Reviewcount}) => {
  return (
    <View
      style={{
        backgroundColor: colors.white3,
        position: 'relative',
        flex: 1,
        // maxWidth: '90%',
      }}>
      <View style={{padding: 15}}>
        <Detailsheader
          title={title ? title : 'Lorem Ipsum'}
          styles={{
            fontSize: 23,
            maxWidth: '90%',
          }}
        />
        <Hstack
          centered
          between
          styles={[
            {
              marginVertical: 10,
              marginLeft: 10,
              marginBottom: 15,
              // width:images
            },
          ]}>
          <Hstack centered>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                color: colors.black,
                opacity: 0.7,
              }}>
              $
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Inter-SemiBold',
                color: colors.black,
                opacity: 0.7,
              }}>
              {Costings ? Costings : '25'}
            </Text>
          </Hstack>
          <Hstack centered styles={{}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Roboto',
                color: colors.color1,
              }}>
              4.3
            </Text>

            <FontAwesome
              name="star"
              size={12}
              color={colors.color1}
              style={{
                marginHorizontal: 2,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Inter-Regular',
                color: colors.black2,
                opacity: 0.7,
              }}>
              ({Reviewcount ? Reviewcount : 9})
            </Text>
          </Hstack>
        </Hstack>
        <Aboutexplore title="Skip the line and save time">
          <MaterialCommunityIcons
            name="run"
            style-={{
              color: colors.black,
              opacity: 0.4,
            }}
            size={20}
            color={colors.black4}
          />
        </Aboutexplore>
        <Aboutexplore title="Show tickets on your phone">
          <Feather
            name="smartphone"
            style={{
              color: colors.black,
              opacity: 0.4,
            }}
            size={20}
            color={colors.black}
          />
        </Aboutexplore>
        <Aboutexplore title="Instant Confirmation">
          <Ionicons
            name="flash-outline"
            style={{
              color: colors.black,
              opacity: 0.4,
            }}
            size={20}
            color={colors.black}
          />
        </Aboutexplore>
        <Aboutexplore title="Free Cancillation">
          <Ionicons
            name="shield-checkmark-outline"
            style={{
              color: colors.black,
              opacity: 0.5,
            }}
            size={18}
            color={colors.black}
          />
        </Aboutexplore>
        <Aboutexplore title="Flexible Hours">
          <Feather
            name="clock"
            style={{
              color: colors.black,
              opacity: 0.4,
            }}
            size={17}
            color={colors.black4}
          />
        </Aboutexplore>
        <Hline />
        <Text
          style={[
            {
              maxWidth: '90%',
              lineHeight: 22,
              color: colors.black,
              opacity: 0.7,
              marginHorizontal: 10,
            },
            h2,
          ]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Hline />

        <Accordion title="Highlights" Opened>
          <Points text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Points text="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five " />
        </Accordion>

        <Hline />
        <Accordion title="Inclusions" Opened>
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
        <Accordion title="Ratings & Reviews" Opened>
          <View
            style={
              {
                // marginHorizontal: 15,
              }
            }>
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
                  <FontAwesome
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

              <Reviewcomponent stars="4" Nmae="Daria Borntrager" />
              {/* <Reviewcomponent star="2" Nmae="Dona mason" /> */}
            </View>
          </View>
        </Accordion>

        <Hline />
      </View>

      <Customheader
        innerTexts
        style={{
          marginTop: 0,
        }}
        title="Where?"
      />

      <View
        style={{
          marginHorizontal: 20,
          // overflow: 'hidden',
          width: imageWidth,
          alignSelf: 'center',
          marginLeft: 45,
        }}>
        <Cayntext
          text="34 E 42nd street"
          left
          style={{
            margiBottom: 10,
          }}>
          <Ionicons
            // onPress={() => navigation.goBack()}
            name="map-outline"
            size={18}
            color="#008b8b"
          />
        </Cayntext>

        <MapView
          userInteraction={false}
          pitchEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          style={styles.map}
          region={tokyoRegion}
          initialRegion={tokyoRegion}>
          <Marker
            userInteraction={false}
            pitchEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
            zoomEnabled={false}
            coordinate={tokyoRegion}
            pinColor="#7F00FF"
          />
        </MapView>
      </View>
      <Hline style={{marginHorizontal: 20, marginTop: 30, marginBottom: 0}} />

      <View
        style={{
          marginHorizontal: -20,
          marginBottom: 100,
        }}>
        <Customheader
          title="Similar Experiences"
          style={{
            marginLeft: 28,
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
            paddingLeft: 40,
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
    </View>
  );
};

const ITEM_WIDTH = width;
const ITEM_HEIGHT = (width * 315) / 504;

const images = [
  Glass,
  Museum1,
  Museum2,
  Museum3,
  // 'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
  // 'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
  // 'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
  // 'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
  // 'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
];

const DOT_SPACING = 8;
const DOT_SIZE = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

export default function Exploredetails({route}) {
  const {title, Reviewcount, Costings} = route?.params;

  const [show, setShow] = React.useState(false);
  const delay = 1;
  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  const scrollX = useRef(new Animated.Value(0)).current;
  let rating = '4k';
  const snapPoints = useMemo(
    () => [height - ITEM_HEIGHT - 100, '75%', '80%', '85%', '90%', height],
    [],
  );
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
          <View
            style={{
              height: ITEM_HEIGHT,
              width: ITEM_WIDTH,
              overflow: 'hidden',
            }}>
            <Animated.FlatList
              data={images}
              keyExtractor={(_, index) => index.toString()}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              showVerticalIndicator={false}
              bounces={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
              showHorizontalIndicator={false}
              horizontal
              renderItem={({item}) => {
                return (
                  <View>
                    <Image source={item} style={styles.image} />
                  </View>
                );
              }}
            />
            <View style={styles.pagination}>
              {images.map((_, index) => {
                return <View key={index} style={styles.dot} />;
              })}
              <Animated.View
                style={[
                  styles.dotIndicator,
                  {
                    transform: [
                      {
                        translateX: Animated.divide(
                          scrollX,
                          ITEM_WIDTH,
                        ).interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, DOT_INDICATOR_SIZE],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </View>
          <Bottomsheet
            initialSnapIndex={0}
            showVerticalIndicator={false}
            // showVerticalIndicator={false}
            // enableOverDrag={false}
            enablePanDownToClose={false}
            overDragResistanceFactor={100}
            snapPoints={snapPoints}
            // snapPoints={[height - ITEM_HEIGHT - 100, height]}
            enableOverDrag={false}
            handleIndicatorStyle={{
              backgroundColor: '#00000000',
              marginTop: -20,
            }}
            handleStyle={{
              marginTop: -20,
            }}
            backgroundStyle={{
              marginTop: -20,
            }}>
            <BottomSheetScrollView
              showVerticalIndicator={false}
              enableOverDrag={false}
              enablePanDownToClose={false}
              overDragResistanceFactor={100}
              // animateOnMount
            >
              <Renderitem
                rating={rating}
                title={title}
                Costings={Costings}
                Reviewcount={Reviewcount}
              />
            </BottomSheetScrollView>
          </Bottomsheet>
          <View
            style={{
              padding: 10,
              backgroundColor: colors.white,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                zIndex: 600,
                flex: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                margin: 10,
              }}>
              <Text
                style={[
                  {
                    color: colors.white,
                  },
                  h1,
                ]}>
                Check Availability
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    top: ITEM_HEIGHT - 50,
    left: ITEM_WIDTH / 2,
    flexDirection: 'row',
    marginLeft: -30,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.white1,
    marginBottom: DOT_SPACING,
    marginHorizontal: 4,
  },
  dotIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.white,
    // borderWidth: 1,
    position: 'absolute',
    // top: -DOT_SIZE / 2,
    // left: -DOT_SIZE / 2,
    marginLeft: 4,
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
    width: imageWidth - 25,
    // alignSelf: 'center',
    marginTop: 10,
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: 17,
    // fontWeight: '700',
    fontFamily: 'Roboto',
    // color: '#000000',
    ...innerText,
  },
});
