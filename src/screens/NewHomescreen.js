import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Video from 'react-native-video';
import {
  Customheader,
  ExperienceComponent,
  Hstack,
  Topattractions,
} from '../components';
import {
  Helicopter,
  Museum1,
  Museum2,
  Museum3,
} from '../components/ExperienceComponent';
import { MyheaderRight, Myheaderleft } from '../navigation/Explorestack';
import { colors } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { innerText } from '../assets/fontStyles';
import AnimatedLottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native';

const ratio = 720 / 1280;
let deviceWidth = Dimensions.get('window').width;

const VideoWidth = deviceWidth + 160;
const VideoHeight = VideoWidth * ratio;
const CONTENT_OFFSET_THRESHOLD = VideoHeight;

export default function NewHomescreen(route) {
  const scale = useRef(new Animated.Value(1)).current;
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const scrollY = new Animated.Value(0);
  const handleScroll = event => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const scaleOffset = Math.max(0, yOffset) / 300; // Adjust the zoom level as needed
    setContentVerticalOffset(event.nativeEvent.contentOffset.y);

    Animated.spring(scale, {
      toValue: 1 + scaleOffset,
      useNativeDriver: true,
    }).start();

    Animated.event(
      [{ nativeEvent: { contentOffset: { y: yOffset } } }],
      { useNativeDriver: true }
    )
  };
  // const handleScroll = Animated.event(
  //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //   { useNativeDriver: true }
  // );

  useEffect(() => {
    // Attach scroll listener
    scrollY.addListener(({ value }) => {
      // Check scroll position and update item's opacity and transform
      if (value >= 100) {
        // Scroll position is greater than or equal to 100
        // Set your item's opacity and scale to 1
        // Update your item's style accordingly
      } else {
        // Scroll position is less than 100
        // Calculate opacity and scale values based on scroll position
        const opacity = value.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        });

        const scale = value.interpolate({
          inputRange: [0, 100],
          outputRange: [0.5, 1],
          extrapolate: 'clamp'
        });

        // Update your item's style with the calculated opacity and scale values
      }
    });

    // Clean up the scroll listener
    return () => {
      scrollY.removeAllListeners();
    };
  }, []);
  const [City, onChangeCity] = useState('New York');
  const [onLoad, setOnLoad] = useState(true);
  useEffect(() => {
    const CurrentCity = route?.route?.params?.City;
    onChangeCity(CurrentCity?.length ? CurrentCity : 'New York');
    setOnLoad(false);
  }, [route?.route?.params?.City]);

  useEffect(() => {
    handleButtonPress()
  }, [contentVerticalOffset])


  const HelpIcon = () => {
    return (
      <MyheaderRight
        style={{
          height: 40,
          marginLeft: -50,
          marginTop: 16,
        }}
        color={
          contentVerticalOffset > CONTENT_OFFSET_THRESHOLD
            ? colors.black1
            : colors.white2
        }
      />
    )
  }
  const [showComponentA, setShowComponentA] = React.useState(true);
  const fadeAnimationA = React.useRef(new Animated.Value(1)).current;
  const fadeAnimationB = React.useRef(new Animated.Value(0)).current;


  const handleButtonPress = () => {
    if (contentVerticalOffset > CONTENT_OFFSET_THRESHOLD - 40) {
      hideComponentA();
    } else {
      showComponentAAnimation();
    }
  };

  const showComponentAAnimation = () => {
    Animated.timing(fadeAnimationA, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowComponentA(true);
    });

    Animated.timing(fadeAnimationB, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const hideComponentA = () => {
    Animated.timing(fadeAnimationA, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowComponentA(false);
    });

    Animated.timing(fadeAnimationB, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  var mystars = [];

  for (let i = 0; i < 4; i++) {
    mystars.push(
      <View key={i}>
        <FontAwesome
          name="star"
          size={14}
          color={colors.color1}
          style={{
            marginHorizontal: 2,
          }}
        />
      </View>,
    );
  }
  for (let i = 0; i < 1; i++) {
    mystars.push(
      <View key={i}>
        <FontAwesome
          name="star-o"
          size={14}
          color={colors.color1}
          style={{
            marginHorizontal: 2,
          }}
        />
      </View>,
    );
  }

  const PlaceRatingView = () => {
    return (

      <View style={{
        height: 440,
        width: 270,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: colors.white1,
        overflow: 'hidden',
        marginRight: 15
      }}>
        <Image
          source={require('../assets/Image/Tower.png')}
          style={{ width: 270, height: 170, resizeMode: 'cover' }}
        />
        <View style={{ flexDirection: 'row', height: 80, width: '100%', padding: 15, alignItems: 'center' }}>
          <Image
            source={require('../assets/Image/Liberty2.png')}
            style={{ width: 35, height: 35, resizeMode: 'cover', borderRadius: 70, marginRight: 8 }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 13,
                // fontWeight: '400',
                fontFamily: 'Inter-Bold',
                color: colors.white
              }}>
              Ashish Gupta...
            </Text>
            <Text
              style={{
                fontSize: 14,
                // fontWeight: '400',
                fontFamily: 'Inter-Light',
                color: colors.white
              }}>
              🇮🇳 India
            </Text>
          </View>
          {mystars}
        </View>
        <Text
          style={{
            fontSize: 13,
            // fontWeight: '400',
            fontFamily: 'Inter-Regular',
            color: colors.white,
            paddingHorizontal: 15,
            flex: 1
          }}>
          It was enjoyable, educational as well. I learned more than I would have thought. I'm 20 and remember watching on tv the moon landing.
        </Text>
        <View style={{ height: 55, paddingLeft: 20 }}>
          <View style={{ height: 1, width: 230, backgroundColor: colors.white1, marginBottom: 10 }} />
          <Text
            style={{
              fontSize: 10,
              // fontWeight: '400',
              fontFamily: 'Inter-Regular',
              color: colors.white3,
              textDecorationLine: 'underline',

              // paddingHorizontal: 15
              // flex: 1
            }}>
            Indian Space Center Admission Ticket
          </Text>
        </View>
      </View>
    )
  }
  return (
    <>
      <View
        style={[
          {
            height: 60,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            top: 0,
            left: 0,
            position: 'absolute',
            zIndex: 900,
            paddingHorizontal: 4,
            Color: 'red'
            // flex: 1,
          },
          contentVerticalOffset > CONTENT_OFFSET_THRESHOLD - 40 ? {
            backgroundColor: colors.white,
            paddingVertical: 20,
          } : {
            // backgroundColor: '#00000040',
            // paddingVertical: 10,
            // height: 60,
            // marginTop: -30,
            // marginTop: 20,
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 5,
            // },

            // shadowOpacity: 0.34,
            // shadowRadius: 6.27,

            // elevation: 10,
            // marginRight: 30,
          },
        ]}>
        {/* {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD - 40 ? (
          <Myheaderleft />
        ) : (
          <Myheaderleft white={true} />
        )} */}
        {showComponentA ? (
          <LinearGradient colors={['#00000099', '#00000001']} style={{
            flex: 1, justifyContent: 'center', marginTop: -10, height: 60, marginLeft: -5, paddingTop: 16,
            paddingLeft: 8
          }}>
            <Animated.View style={{ opacity: fadeAnimationA, marginTop: -5 }}>
              <Myheaderleft white={true} />
            </Animated.View>
          </LinearGradient>
        ) : (
          <Animated.View style={{ opacity: fadeAnimationB }}>
            <Myheaderleft />
          </Animated.View>
        )}
        <HelpIcon />
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 700 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}>
          <View>
            <Animated.View
              style={{
                transform: [{ scale: scale }],
              }}>
              <Video
                source={require('../../src/assets/Video.mp4')}
                resizeMode="contain"
                repeat={true}
                muted={true}
                style={{
                  width: VideoWidth,
                  height: VideoHeight,
                  marginLeft: -80,
                  marginTop: -20,
                }}
              />
            </Animated.View>
            <View style={styles.overlay} />
          </View>

          <View style={{ marginTop: -VideoHeight / 2.5 - 10 }}>
            <Text
              style={[
                innerText,
                { color: colors.white, zIndex: 400, paddingHorizontal: 30 },
              ]}>
              The world's best experiences curated just for you
            </Text>
            <Pressable onPress={() => navigation.navigate('Search')}>
              <Hstack
                styles={{
                  height: 50,
                  margin: 12,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 1.5,
                  elevation: 1,
                  marginHorizontal: 30,
                  borderRadius: 8,
                  marginTop: 20,
                  padding: 4,
                  backgroundColor: colors.white,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                centered
                between>
                <Text
                  style={{
                    color: colors.black4,
                    fontSize: 13.5,
                    flex: 1,
                    marginLeft: 8,
                    fontFamily: 'Inter-Regular',
                  }}>
                  Where you are heading?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 8,
                    height: 43,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 43,
                  }}>
                  <Feather name="search" size={20} color={colors.white} />
                </TouchableOpacity>
              </Hstack>
            </Pressable>
          </View>
        </View>

        {/*    <View style={{ flex: 1, }}>
          <LinearGradient
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            colors={['#ffffff60', '#00C4EB09', '#00C4EB09', '#ffffff60']}
            style={{
              flex: 1,
              height: 100,
              width: 70,
              borderRightColor: 30,
              shadowColor: "#00C4EB09",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              backgroundColor: '#00C4EB09',
              elevation: 14,
              transform: [{ rotate: '45deg' }],
            }}>
          </LinearGradient>
        </View> */}
        <View style={{ flex: 1, height: 1000 }}>
          {/* <Hstack>
            <AnimatedLottieView
              source={require('../../src/assets/lottie/gem.json')}
              style={{ height: 40, width: 40 }}
              autoPlay
              loop
            />
            <AnimatedLottieView
              source={require('../../src/assets/lottie/heart.json')}
              style={{ height: 40, width: 40 }}
              autoPlay
              loop
            />
            <AnimatedLottieView
              source={require('../../src/assets/lottie/money.json')}
              style={{ height: 40, width: 40 }}
              autoPlay
              loop
            />
            <AnimatedLottieView
              source={require('../../src/assets/lottie/sunglasses.json')}
              style={{ height: 40, width: 40 }}
              autoPlay
              loop
            />
          </Hstack> */}


          <View style={{}}>

            <Customheader seeall title="Explore World's Top Destination" style={{ marginBottom: 20 }} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 25,

                marginBottom: 25,
              }}>
              <Topattractions
                title="Things to do in New York"
                Location='United States'
                SmallSize
              />
              <Topattractions
                SmallSize
                img={Museum1}
                title="Things to do in London"
                Location='United Kingdom'

              />
              <Topattractions
                SmallSize
                img={Museum3}
                title="Things to do in Dubai"
                Location='United Arab Emirates'

              />
              <Topattractions
                SmallSize
                img={Museum3}
                title="Things to do in Romei"
                Location='Italy'

              />
            </ScrollView>
          </View>
          <View>
            <Customheader title="Headout’s Top Recommendations" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 25,

                marginBottom: 25,
              }}>
              <ExperienceComponent
                free
                title="Skip-the-Line Tickets to Athens Acropolis & Parthenon with Optional"
                Category="Athens"
                rate="1994"
                reviewcount="13k"
                rating="4.53"
                discount="18"
                from='2248'
                noInstant
                img={Helicopter}
              />
              <ExperienceComponent
                free
                title="East Bali Small-Group Tour: Traditional Salt Making, Tenganan Ancient Village and Taman Ujung"
                Category="Bali"
                rate="98.94"
                reviewcount="78"
                rating="4.51"
                noInstant
                // discount="5"
                img={Museum2}
              />
              <ExperienceComponent
                free
                title="Helicopter 1-on-1 Flying Lession"
                Category="Aerial Sightseeing"
                rate="540"
                rating="New"
                noRating
              />
            </ScrollView>
          </View>
          <View>
            <Customheader title="Top things to do Worldwide" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 25,

                marginBottom: 25,
              }}>
              <Topattractions
                title="Disney on Broadway Shows"
                price="46.5"
                Categoriesdetails
                nested
                img={Helicopter}
                MediumSize
              />
              <Topattractions
                title="Dubai Desert Safari Tours"
                price="44"
                Categoriesdetails
                nested
                img={Museum1}
                MediumSize
              />
              <Topattractions
                title="Vatican Tickets"
                price="40.82"
                Categoriesdetails
                nested
                img={Museum2}
                MediumSize
              />
              <Topattractions
                title="Disneyland® Paris Ticketss"
                price="74"
                Categoriesdetails
                nested
                img={Museum3}
                MediumSize
              />

            </ScrollView>
          </View>

          {/* <PlaceRatingView /> */}
          <ImageBackground
            style={{
              width: '100%',
              height: 900,
              // paddingBottom: 100
              // marginHorizontal: -10
              // flex: 1,
              // position: 'relative',
              // padding: 12
            }}
            // resizeMode='cover'
            source={require('../assets/Image/FooterBackground.png')} >
            <View style={{
              flex: 1, paddingVertical: 30
            }}>
              <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 30, paddingHorizontal: 20 }} >
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'Inter-Bold',
                    color: colors.white,
                    // opacity: 0.8,
                    width: 220
                  }}>Millions love heading out with us
                </Text>
                <AnimatedLottieView
                  source={require('../../src/assets/lottie/heart.json')}
                  style={{ height: 40, width: 40 }}
                  autoPlay
                  loop
                />
              </View>
              <ScrollView style={{ paddingHorizontal: 20 }} horizontal>
                <PlaceRatingView />
                <PlaceRatingView />
                <PlaceRatingView />
                <PlaceRatingView />
              </ScrollView>
            </View>

          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}
// source={require('../../src/assets/Video.mp4')}
//
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  linearGradient: { flex: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 5 },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
