/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, FlatList, Image, Keyboard, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro360Image,
  ViroAmbientLight,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroSpotLight,
} from '@viro-community/react-viro';
import { ViroTrackingStateConstants } from '@viro-community/react-viro/components/ViroConstants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Hstack } from '../components';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../constants';
import { ActivityIndicator } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { Glass, Museum1, Museum2, Museum3 } from '../components/ExperienceComponent';
import { topText } from '../assets/fontStyles';

const Nearbydata = [
  { City: 'Dubai', Country: 'United Arab Emirates', key: '1' },
  { City: 'New York', Country: 'United States Of America', key: '9' },
  { City: 'Merida', Country: 'Mexico', key: '2' },
  { City: 'Muscat', Country: 'Oman', key: '3' },
  { City: 'Fujairah', Country: 'United Arab Emirates', key: '4' },
  { City: 'Pattaya', Country: 'Thailand', key: '5' },
  { City: 'Delhi', Country: 'India', key: '6' },
  { City: 'Ras Al khaimah', Country: 'United Arab Emirates', key: '7' },
  { City: 'Malé', Country: 'Maldives', key: '8' },
];
const mainimageURl = 'https://c7.alamy.com/360/PN3TWE/lagoon-ducks-at-eiffel-tower-in-champ-de-mars-garden-PN3TWE.jpg'
const mainimageURl2 = 'https://images.pond5.com/rome-italy-outside-colosseum-360-090404970_prevstill.jpeg'

let dimensions = Dimensions.get('window');
let imageWidth2 = dimensions.width - 20;
let imageHeight = dimensions.height;
const { width, height } = Dimensions.get('screen');

const ITEM_WIDTH = width - 80;
const ITEM_HEIGHT = (width * 315) / 504 - 40;

const images = [Glass, Museum1, Museum2, Museum3];

const NewImages = [
  { City: 'The Colosseum', Country: Glass, key: '1', active: 'Skull' },
  { City: 'Leaning Tower', Country: Museum1, key: '2', active: 'Car' },
  { City: 'Boating', Country: Museum2, key: '3', active: 'Skull' },
  { City: 'Milan Cathedral', Country: Museum3, key: '4', active: 'Car' }
]
const DOT_SPACING = 8;
const DOT_SIZE = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
const CONTENT_OFFSET_THRESHOLD = ITEM_HEIGHT;



// let dimensions = Dimensions.get('window');
let imageWidth = dimensions.width - 40;


// export default ARscreen () => {
export default function ARscreen() {
  const [object, setObject] = useState('Car');

  const [value, setValue] = useState(false);
  const [toRotate, setToRotate] = useState(false);

  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [Loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textInputRef = useRef(null);
  const move = useRef(new Animated.Value(0)).current;
  let RenderOpacity = new Animated.Value(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isARSceneMounted, setARSceneMounted] = useState(true);

  const opacityAnimation = useRef(new Animated.Value(0)).current;


  const opacityStyle = { opacity: opacityAnimation };

  useEffect(() => {
    setLoading(true);
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(() => {
    //     setFilteredDataSource(Nearbydata);
    //     setMasterDataSource(Nearbydata);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    setTimeout(() => {
      setFilteredDataSource(Nearbydata);
      setMasterDataSource(Nearbydata);
      setLoading(false);
    }, 1000);
  }, []);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);


  const HandleShowAnimation = () => {
    // console.log('move', move.)
    // Animated.spring(move, {
    //   toValue: 1,
    //   friction: 3,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(opacityAnimation, {
      toValue: 20,
      duration: 1500,
      useNativeDriver: true
    }).start()
  };

  // const HandleShowAnimation = easing => {
  //   RenderOpacity.setValue(0);
  //   Animated.timing(RenderOpacity, {
  //     toValue: 1,
  //     duration: 1200,
  //     easing,
  //     useNativeDriver: true,
  //   }).start();
  // };
  const HandleHideAnimation = () => {
    // console.log('move', move.)
    // Animated.spring(move, {
    //   toValue: 2,
    //   friction: 3,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start()
  };


  const navigation = useNavigation();
  const Searchcomonent = ({ items }) => {
    const { item } = items;
    return (
      <TouchableOpacity
        onPress={() =>
        (setSearchValue(item.City),
          HandleShowAnimation())
        }
        key={item.key}>
        <Hstack
          centered
          key={item.key}
          styles={{
            marginBottom: 15,
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: colors.black7,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: colors.black6,
              opacity: 0.9,
            }}>
            <Feather name="map-pin" color={colors.black2} size={20} />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 13,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Inter-SemiBold',
                color: colors.black,
                opacity: 0.8,
              }}>
              {item.City}
            </Text>
            <Text
              style={{
                fontSize: 11,
                // fontWeight: '500',
                fontFamily: 'Inter-Medium',
                color: colors.black2,
                marginTop: 2,
                opacity: 0.7,
              }}>
              {item.Country}
            </Text>
          </View>
        </Hstack>
      </TouchableOpacity>
    );
  };

  const ListHeader = () => {
    if (!filteredDataSource?.length) return <></>
    return (
      <>
        <Text
          style={{
            fontSize: 11,
            fontFamily: 'Inter-Medium',
            color: colors.black2,
            marginBottom: 15,
          }}>
          Nearby Destinations
        </Text>
      </>
    );
  };


  useEffect(() => {
    if (isKeyboardVisible) {
      HandleShowAnimation()
    } else {
      HandleHideAnimation()
      // console.log('456')
    }
  }, [isKeyboardVisible])

  const searchFilterFunction = text => {
    setSearchValue(text)
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.City ? item.City.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(masterDataSource);
    }
  };
  const RenderMissingPlave = () => {
    return (
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          fontFamily: 'Inter-Bold',
          color: '#000',
          textAlign: 'center',
          // marginTop: 150,
          padding: 30,
          // maxWidth: '90%'
        }}>
        {searchValue}
      </Text>
    )
  }
  const _listEmptyComponent = () => {
    if (!isKeyboardVisible) return <></>
    return (
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'Inter-Regular',
            color: '#000',
            textAlign: 'center',
            // marginTop: 150,
            padding: 30,
            // maxWidth: '90%'
          }}>
          Hey,<RenderMissingPlave /> is not availale at our platform as on now
        </Text>
      </View>
    );
  };

  const HandleClearText = () => {
    if (textInputRef.current) {
      textInputRef.current.focus()
    }
    searchFilterFunction('')
  }

  const HandleInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus()
    }

  }

  const HandleDismissKeyboard = () => {
    // if (isKeyboardVisible) 
    HandleHideAnimation()
    Keyboard.dismiss()
  }

  const handleResetARSession = () => {
    setARSceneMounted(false);
    setTimeout(() => {
      setARSceneMounted(true);
    }, 0.0000001);
  };

  var mystars = [];

  for (let i = 0; i < 5; i++) {
    mystars.push(
      <View key={i}>
        <FontAwesome
          name="star"
          size={15}
          color={'gold'}
          style={{
            marginHorizontal: 2,
          }}
        />
      </View>,
    );
  }

  const ItemButton = ({ title, color, onPressFun, children }) => {
    return (
      <View
        // style={{ borderRadius: 20, overflow: 'hidden' }}>
        style={[{ overflow: 'hidden', borderRadius: 20, height: 40, marginRight: 10 },]}>
        <Pressable
          hitSlop={10}
          onPress={() => onPressFun ? onPressFun() : null}
          android_ripple={{ color: '#8000FF20', borderless: false }}
          style={[{ backgroundColor: colors.primary, overflow: 'hidden', borderRadius: 20, justifyContent: "center", alignItems: "center", padding: 5, paddingHorizontal: 40, height: 40, },
          color ? { backgroundColor: colors.white, borderColor: colors.black5, borderWidth: 1 } : {}]}>
          <Hstack centered>
            <Text
              style={[{
                fontSize: 15,
                // fontWeight: '400',
                fontFamily: 'Inter-SemiBold',
                color: colors.white,

              }, color ? { color: colors.primary, } : {}]}>
              {title ? title : 'Book'}
            </Text>
            {children &&
              <Text>{'  '}
                {children}
              </Text>
            }
          </Hstack>
        </Pressable>
      </View>
    )
  }

  const renderViewItem = ({ item }) => {
    return (
      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Pressable
          android_ripple={{ color: '#8000FF10', borderless: false }}
          onPress={() => setObject(item.active)}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: 'hidden',
            marginHorizontal: 10,
            alignSelf: 'center',
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            padding: 10
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  // fontWeight: '900',
                  fontFamily: 'Inter-Regular',
                  color: '#000',
                  // alignSelf: 'center',
                  // marginTop: 5
                }}>
                {item.City}
              </Text>
              <Hstack centered>
                <Text
                  style={{
                    fontSize: 15,
                    // fontWeight: '400',
                    fontFamily: 'Inter-Light',
                    color: '#000',
                    alignItemsx: 'center',
                  }}>
                  5.0 <Hstack>{mystars}</Hstack> (3,908)
                </Text>
              </Hstack>
              <Text
                style={{
                  fontSize: 15,
                  // fontWeight: '400',
                  fontFamily: 'Inter-Light',
                  color: '#000',
                  alignItemsx: 'center',
                }}>
                Italian • 20$-30$ • 0.1...
              </Text>
              <Hstack>
                <Text
                  style={{
                    fontSize: 15,
                    // fontWeight: '400',
                    fontFamily: 'Inter-SemiBold',
                    color: 'green',
                    alignItemsx: 'center',
                  }}>
                  Open
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    // fontWeight: '400',
                    fontFamily: 'Inter-Medium',
                    color: colors.black1,
                    alignItemsx: 'center',
                  }}> • Closes 11 pm
                </Text>
              </Hstack>
            </View>
            <Image source={item.Country} style={[{ height: 100, width: 100, borderRadius: 10 }]} />
          </View>

          <Hstack centered></Hstack>
          <Text
            style={{
              fontSize: 15,
              // fontWeight: '400',
              fontFamily: 'Inter-Medium',
              color: colors.black1,
              alignItemsx: 'center',
            }}>
            Similar location nearby also available ...
          </Text>
          <ScrollView
            // contentContainerStyle={{ marginHorizontal: -30 }}
            style={{ marginHorizontal: -10, paddingLeft: 10, paddingRight: 20 }}
            horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop: 10 }}>
            <ItemButton title='Book' >
              <MaterialCommunityIcons name="ticket-percent" color={colors.white} size={18} />
            </ItemButton>
            {/* <ItemButton color title='Directions' >
              <MaterialCommunityIcons name="directions" color={colors.primary} size={18} />
            </ItemButton> */}
            <ItemButton color title='Details' />

          </ScrollView>
        </Pressable>
      </View>

    )
  }


  const HelloWorldSceneAR = props => {
    let data = props.sceneNavigator.viroAppProps.object;
    let rotate = props.sceneNavigator.viroAppProps.rotate;
    let opacityStyle = props.sceneNavigator.viroAppProps.opacityStyle;
    console.log('opacityStyle', opacityStyle)
    const [text, setText] = useState('Initializing AR...');
    const [Tracked, setTracked] = useState(false);
    // console.log('data', data);

    const [carPosition, setcarPosition] = useState([0, -0.5, -3]);
    const [carRotation, setcarRotation] = useState([0, 0, 180]);
    const [skullPosition, setskullPosition] = useState([0, 0, -10]);
    const [skullRotation, setskullRotation] = useState([270, 0, 0]);


    const onTrackingUpdated = (state, _reason) => {
      if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        setTracked(false);
        setText('Tracking unavailable');
      }
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setText('Headout Explore');
        setTracked(true);
      }
    };

    ViroMaterials.createMaterials({
      wood: {
        diffuseTexture: require('../assets/Image/Wood.jpeg'),
      },
      skull: {
        diffuseTexture: require('../assets/skull-downloadable/difuso_flip_oscuro.jpg'),
      },
      Colosseum: {
        normalTexture: require('../assets/colosseum_V1_L3.123c2773f870-bad9-4e17-a968-d9325de39e7e/10064_colosseum_v1_Iteration0.obj'),
        diffuseTexture: require('../assets/colosseum_V1_L3.123c2773f870-bad9-4e17-a968-d9325de39e7e/10064_colosseum_diffuse.jpg'),
      },
      LeaningTower: {
        normalTexture: require('../assets/leaningTowerP/Tower.obj'),
        diffuseTexture: require('../assets/leaningTowerP/Tower.jpg'),
      },

      car: {
        diffuseTexture: require('../assets/Car/carPimpMobile_base_color.png'),
      },
    });

    ViroAnimations.registerAnimations({
      rotate: {
        duration: 2500,
        properties: {
          rotateY: '+=90',
        },
      },
    });

    const moveObjectSkull = newposition => {
      setskullPosition(newposition)
      // console.log('newposition', newposition);
    };
    const moveObjectCar = newposition => {
      setcarPosition(newposition)
      // console.log('newposition', newposition);
    };
    const onRotateObjectSkull = newposition => {
      setcarPosition(newposition)
      // console.log('newposition', newposition);
    };
    return (
      <ViroARScene onTrackingUpdated={onTrackingUpdated}>
        <ViroAmbientLight color="#fff" />
        {/* <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -3]}
          style={styles.helloWorldTextStyle}
        />
    */}
        {/* {!Tracked ? (
          <ViroText
            text={text}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, -3]}
            style={styles.helloWorldTextStyle}
          />
        ) : data === 'Skull' ? (
          <Viro3DObject
            source={require('../assets/colosseum_V1_L3.123c2773f870-bad9-4e17-a968-d9325de39e7e/10064_colosseum_v1_Iteration0.obj')}
            // source={require('../assets/skull-downloadable/source/craneo.OBJ')}
            scale={[0.00008, 0.00008, 0.00008]}
            position={[0, -0.8, -1.5]}
            type="OBJ"
            materials={['Colosseum']}
            dragType="FixedToWorld"
            // onDrag={() => { }}

            // animation={{ name: 'rotate', loop: true, run: true }}
            // onDrag={moveObject}
            rotation={skullRotation}
            onRotate={onRotateObjectSkull}
            onDrag={moveObjectSkull}
            animation={rotate ? { name: 'rotate', loop: true, run: true } : null}


          />
        ) : (
          <Viro3DObject
            dragType="FixedToWorld" onDrag={() => { }}
            source={require('../assets/skull-downloadable/source/craneo.OBJ')}

            // source={require('../assets/leaningTowerP/Tower.obj')}
            // source={require('../assets/Car/carPimpMobile.obj')}
            scale={[0.00006, 0.00006, 0.00006]}
            position={carPosition}
            type="OBJ"
            materials={['skull']}
            rotation={carRotation}
            onRotate={rotate => setcarRotation(rotate)}
            // onDrag={moveObjectCar}

            animation={rotate ? { name: 'rotate', loop: true, run: true } : null}
          />
        )} */}
        <ViroSpotLight
          innerAngle={5}
          outerAngle={45}
          direction={[0, -1, -.2]}
          position={[0, 7, 0]}
          color="#ffffff"
          castsShadow={true}
          influenceBitMask={2}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={.7}
        />

        <Viro3DObject
          source={require('../assets/colosseum_V1_L3.123c2773f870-bad9-4e17-a968-d9325de39e7e/10064_colosseum_v1_Iteration0.obj')}
          // source={require('../assets/skull-downloadable/source/craneo.OBJ')}
          scale={[0.002, 0.002, 0.002]}
          position={[0, -0.8, -2.5]}
          type="OBJ"
          materials={['Colosseum']}
          dragType="FixedToWorld"
          // onDrag={() => { }}

          // animation={{ name: 'rotate', loop: true, run: true }}
          // onDrag={moveObject}
          rotation={skullRotation}
          onRotate={onRotateObjectSkull}
          onDrag={moveObjectSkull}
          animation={rotate ? { name: 'rotate', loop: true, run: true } : null}


        />
        {(Tracked && opacityStyle) ? <Viro360Image source={{ uri: mainimageURl2 }}
          rotation={[0, 90, 0]}
        /> : null}
      </ViroARScene>
    );
  };
  return (
    <Pressable onPress={() => HandleDismissKeyboard()} style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />

      {/* <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        viroAppProps={{ object: object, opacityStyle: value }}
        style={styles.f1}
      /> */}


      {isARSceneMounted ?
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{ scene: HelloWorldSceneAR }}
          viroAppProps={{ object: object, opacityStyle: value, rotate: toRotate }}

          onTrackingUpdated={({ tracking }) => handlePointerVisibility(tracking.isInitialized && tracking.isEnabled)}
          onCameraARHitTest={({ results }) => {
            if (results.length > 0) {
              const [result] = results;
              handleHandMove(result.position);
            }
          }}
        />
        : <View style={{ flex: 1, backgroundColor: "#7F00FF20" }} />}
      {/* <View style={{ flex: 1, backgroundColor: "#bc34ca60" }} /> */}
      <SafeAreaView style={styles.controlView}>
        <View style={{ flexDirection: 'row', justifyContent: "center", }}>

          <Pressable onPress={() => navigation.goBack()}
            style={{
              height: 45,
              width: 45,
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8
            }}>
            <AntDesign
              // onPress={() => navigation.dispatch(StackActions.pop(1))}
              name="arrowleft"
              size={23}
              color={colors.black}
            // style={{
            //   opacity: 0.6,
            // }}
            />
          </Pressable>
          <Pressable
            onPress={() => HandleInput()
            }
            style={{
              marginBottom: 4,
              // backgroundColor: 'green',
              // padding: 5,
              borderWidth: 0.7,
              borderColor: colors.white,
              // paddingHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
              backgroundColor: colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              // width: imageWidth,
              height: 45,
              zIndex: 5000,
              flex: 1,
              marginHorizontal: 5
              // flex: 1
            }}>
            <AntDesign name="search1" color={colors.black2} size={22} />

            <TextInput
              // autoFocus={true}
              ref={textInputRef}
              contextMenuHidden
              selectTextOnFocus
              style={{
                // backgroundColor: 'blue',
                marginLeft: 10,
                flex: 1,
                color: colors.black2,
                // fontWeight: '400',
                // fontSize: 16,
                fontSize: 14,
                fontFamily: 'Inter-Regular',

              }}
              placeholderTextColor={colors.black4}
              placeholder="Where are you heading?"
              // onChangeText={onChangeText}
              onChangeText={text => searchFilterFunction(text)}
              value={searchValue}
            />
            {searchValue?.length > 0 && <Pressable onPress={() => HandleClearText()}>
              <MaterialIcons name="clear" color={colors.black2} size={20} />
            </Pressable>}

          </Pressable>
          <View>
            <Pressable
              // onPress={() => handleResetARSession()}
              onPress={() => value ? (handleResetARSession(), setValue(false)) : setValue(true)}
              style={[{
                height: 45,
                width: 45,
                // backgroundColor: "red"
                borderRadius: 10,
                // borderWidth: 2,
                // borderColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }, !value ? { backgroundColor: colors.primary } : { backgroundColor: colors.black, borderWidth: 0 }]}>
              {/* <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  fontFamily: 'Inter-Bold',
                  color: '#000'
                }}>
                AR
              </Text> */}
              <MaterialCommunityIcons name="augmented-reality" color={colors.white2} size={58} style={{ marginTop: -7, marginLeft: -7 }} />

            </Pressable>
            {/* <Pressable
              // onPress={() => handleResetARSession()}
              onPress={() => toRotate ? setToRotate(false) : setToRotate(true)}
              style={[{
                height: 22,
                width: 45,
                // backgroundColor: "red"
                borderRadius: 10,
                borderWidth: 2,
                borderColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 3
              }, toRotate ? { backgroundColor: "pink" } : { backgroundColor: "transparent" }]}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  fontFamily: 'Inter-Bold',
                  color: '#000'
                }}>
                Rotate
              </Text>
            </Pressable> */}
          </View>
        </View>
        {/* <Pressable style={{
          height: 30,
          width: imageWidth, backgroundColor: 'red'
        }}>
        </Pressable> */}

        <View
          style={{
            flex: 1,
            paddingBottom: 20
          }}>
          <View
            contentContainerStyle={{
              flex: 1,
              paddingBottom: 50,
              // backgroundColor: 'red'
            }}
            style={{
              // backgroundColor: 'red',
              flex: 1,
              // flexDirection: 'row',
              // justifyContent: "space-between"
            }}>

            <Animated.View style={[{
              height: 300,
              width: imageWidth,
              alignSelf: 'center',
              flex: 1
            },
              , opacityStyle
            ]}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredDataSource}
                ListHeaderComponent={ListHeader}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => <Searchcomonent items={item} />}
                decelerationRate="normal"
                // keyboardShouldPersistTaps="handled"
                removeClippedSubviews={true}
                contentContainerStyle={[{
                  // paddingBottom: 100,
                  // padding: 10,
                  backgroundColor: colors.white,
                  borderRadius: 10,
                  maxHeight: 300
                }, { padding: 10, },]}
                style={{
                }}
                ListEmptyComponent={_listEmptyComponent}
              />
            </Animated.View>
          </View>
          <View
            style={[{
              height: ITEM_HEIGHT + 40,
              width: ITEM_WIDTH + 80,
              // overflow: 'hidden',
              // marginLeft: -20
              // alignSelf: 'center',
              justifyContent: 'flex-end',
              // backgroundColor: "pink",
              marginLeft: -20,
              // paddingLeft: 20
            }, isKeyboardVisible && { display: 'none' }]}>
            <View style={styles.pagination}>
              {NewImages.map((_, index) => {
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
            <View style={{}}>
              <Pressable
                // onPress={() => handleResetARSession()}
                onPress={() => handleResetARSession()}
                style={[{
                  height: 45,
                  width: 45,
                  // backgroundColor: "red"
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -30,
                  alignSelf: 'flex-start',
                  marginLeft: 20,
                  // marginBottom: 20,
                  backgroundColor: 'white'
                },
                  // toRotate ? { backgroundColor: "pink", borderWidth: 0 } : { backgroundColor: colors.white }
                ]}>
                {/* <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  fontFamily: 'Inter-Bold',
                  color: '#000'
                }}>
                Rotate
              </Text> */}
                <Entypo name="align-horizontal-middle" color={colors.primary} size={24} />

              </Pressable>
              <Pressable
                // onPress={() => handleResetARSession()}
                onPress={() => toRotate ? setToRotate(false) : setToRotate(true)}
                style={[{
                  height: 45,
                  width: 45,
                  // backgroundColor: "red"
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -50,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginBottom: 20,
                  backgroundColor: 'white'
                }, toRotate ? { backgroundColor: "pink", borderWidth: 0 } : { backgroundColor: colors.white }]}>
                {/* <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  fontFamily: 'Inter-Bold',
                  color: '#000'
                }}>
                Rotate
              </Text> */}
                <MaterialCommunityIcons name="rotate-3d" color={colors.primary} size={24} />

              </Pressable>
            </View>
            <Animated.FlatList
              data={NewImages}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => (item.key)}
              snapToInterval={ITEM_WIDTH + 20}
              decelerationRate={0}
              showVerticalIndicator={false}
              bounces={false}
              scrollToIndex={currentIndex}
              onScroll={
                Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: true },
                )}
              // onScroll={onScroll}
              showHorizontalIndicator={false}
              horizontal
              contentContainerStyle={{ paddingLeft: 40, paddingRight: 40 }}
              renderItem={renderViewItem}
            // renderItem={({ item }) => {
            // return (
            //   <TouchableOpacity
            //     onPress={() => setObject(item.active)}
            //     style={{
            //       backgroundColor: "red",
            //       borderRadius: 10,
            //       overflow: 'hidden',
            //       marginHorizontal: 10,
            //       alignSelf: 'center',
            //     }}>
            //     <Text
            //       style={{
            //         fontSize: 20,
            //         fontWeight: '400',
            //         fontFamily: 'Roboto',
            //         color: '#000',
            //         alignSelf: 'center',
            //         marginVertical: 5
            //       }}>
            //       {item.City}
            //     </Text>
            //     <Image source={item.Country} style={[styles.image,]} />
            //   </TouchableOpacity>
            // );
            // }}
            />
            {/* <Animated.FlatList
              data={images}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              horizontal
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true },
              )}
              renderItem={({ item }) => (
                <Animated.Image source={item} style={[styles.image,]} />
              )}
            /> */}

          </View>
        </View>
        {/* <TouchableOpacity
          onPress={() => setObject('Car')}
          style={styles.switch}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: '#000',
            }}>
            Display Car
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setObject('Skull')}
          style={styles.switch}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: '#000',
            }}>
            Display Skull
          </Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </Pressable>
  );
}

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  controlView: {
    width: '100%',
    // backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 44,
    padding: 20,
    paddingBottom: 0,
    zIndex: 1000
  },
  switch: {
    padding: 10,
    margin: 20,
    backgroundColor: '#9a9a9a',
    borderRadius: 5,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    top: ITEM_HEIGHT + 40,
    left: ITEM_WIDTH / 2,
    flexDirection: 'row',
    // marginLeft: -30,
    zIndex: 5000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.white1,
    marginBottom: DOT_SPACING,
    marginHorizontal: 4,
    // marginTop: -10,
  },
  dotIndicator: {
    width: DOT_SIZE + 10,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: colors.primary,
    // borderWidth: 1,
    position: 'absolute',
    // top: -DOT_SIZE / 2,
    // left: -DOT_SIZE / 2,
    marginLeft: -2,
    // marginTop: -10,
  },
});
