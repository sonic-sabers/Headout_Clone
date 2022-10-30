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
  TouchableWithoutFeedback,
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


let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 768) / 120);
let imageWidth = dimensions.width - 20;
// let imageHeight = dimensions.height;
let itemwidth = imageWidth / 2 - 20

let Logo1 = 160;
let images = 320;



export const Customheader = ({ title, seeall, style,nested }) => {
  const navigation = useNavigation();

  return (
    <Hstack centered between styles={[{
      marginTop: 10.

    }, style]}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: '700',
          fontFamily: 'Roboto',
          color: colors.black,
          // marginTop: 10,
          marginLeft: 10,
        }}>
        {title ? title : 'Title'}
      </Text>
      {seeall && <TouchableOpacity
        onPress={() => nested ? navigation.navigate('Explorestack', { screen: 'Exploredetails' }) :navigation.navigate('Exploredetails')}
      >
        <Hstack centered styles={{
          marginTop: 0,

        }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Roboto',
              color: colors.black1,
            }}>
            See All
          </Text>
          <Entypo name='chevron-right' size={17} color={colors.black1} style={{
            // marginHorizontal: 2, Exploredetails
            marginRight: 6,

          }} />
        </Hstack>
      </TouchableOpacity>}
    </Hstack>
  )
}
export const Museum1 = require('./../assets/Image/Museum1.png');
export const Museum2 = require('./../assets/Image/Museum2.png');
export const Museum3 = require('./../assets/Image/Museum3.png');
export const Glass = require('./../assets/Image/Glass.png');
export const NewYork = require('./../assets/Image/NewYork.png');
export const Helicopter = require('./../assets/Image/Helicopter.png');

export const ExperienceComponent = (props) => {
  const { free, img, center, style, title, Category, rate, discount, about, reviewcount } = props;


  let imgSource = Museum1;

  if (img) {
    imgSource = img;
  }

  return (
    <TouchableOpacity style={[{


    }, style,
    center ? { alignSelf: 'center' } : { marginRight: 10, },
      // !about && {
      //   borderWidth: 1,
      //   borderColor: colors.black2,
      //   padding: 15,

      // },
    ]}>
      <ImageBackground

        // source={require(Museum1)}

        source={imgSource}
        style={[{
          height: images * 315 / 504,
          marginTop: 20,
          borderRadius: 7,
          padding: 10
        },
        center ? {
          width: images + 50,
          height: (images + 50) * 315 / 504,

        } : {
          width: images
        }
        ]}
        imageStyle={{
          borderRadius: 7,

        }}
      >
        {free && <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 5,
            borderRadius: 5,
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.black1,
            }}>
            Free Cancillation
          </Text>
        </TouchableOpacity>}
      </ImageBackground>
      <Hstack
        centered between styles={[{
          marginTop: 5,
          width: images
          // width:images
        }, center && {
          width: images + 50,
        }]}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            maxWidth: images - 20,
            // backgroundColor: 'green' Category
          }}>
          {Category ? Category : 'Museum of Modern Art(MoMA) Tickets'}

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
            ({reviewcount ? reviewcount : '2k'})
          </Text>
        </Hstack>
      </Hstack>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          fontFamily: 'Roboto',
          color: colors.black1,
          maxWidth: images - 20,
          // marginBottom:2,
          marginTop: 3,

        }}>
        {title ? title : 'Museum of Modern Art(MoMA) Tickets'}

      </Text>
      <Hstack centered styles={{
        marginLeft: -2,
        marginTop: 5,

      }}>
        <Ionicons name='flash-outline' size={13} color={colors.lightblack} />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
          }}>
          Instant Confirmation
        </Text>
      </Hstack>
      <Hstack
        styles={{
          marginTop: 5,

        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.black2,
            marginTop: 2,

          }}>
          ${rate ? rate : '25'}
        </Text>
        {discount && <View style={{
          marginLeft: 5,
          backgroundColor: '#DCFBDB',
          padding: 4,
          borderRadius: 5,
          paddingVertical: 2,
          marginTop: 2,
        }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              fontFamily: 'Roboto',
              color: '#367D4F',

            }}>
            {discount}% Cashback
          </Text>
        </View>}
      </Hstack>
      {about && <>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.black1,
            lineHeight: 20,
            marginVertical: 10,

          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Text>
        <TouchableOpacity style={{
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          padding: 14
        }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.white,
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </>}

    </TouchableOpacity>
  )
}

export const Topattractions = () => {
  return (
    <View>
      <Image
        source={require('./../assets/Image/NewYork.png')}
        style={{
          width: 160, height: 220,
          borderRadius: 6,
          marginRight: 14,

        }} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          fontFamily: 'Roboto',
          color: colors.black2,
          maxWidth: 200,
          // marginBottom:2,
          marginTop: 5,

        }}>
        One World {'\n'}Observatory{'\n'}Tickets
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          fontFamily: 'Roboto',
          color: colors.lightblack,
          maxWidth: 200,
          // marginBottom:2,
          // marginTop: 3,

        }}>
        From $94
      </Text>
    </View>
  )
}

export const Headercomponent = () => {
  return (
    <Hstack centered between styles={{

      padding: 10,
      backgroundColor: colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
      paddingLeft: 15,
      // backgroundColor:'green'
      // marginBottom: 5,
      height: 50

    }}>
      <Image
        source={require('./../assets/Image/Logo.png')}
        style={{
          width: Logo1, height: Logo1 * 120 / 768,
          zIndex: 300,
          marginTop: 5
        }} />
      <Ionicons name='help-circle-outline' size={20} color={colors.lightblack} />

    </Hstack>
  )
}


export default function Explorescreen() {
  const [text, onChangeText] = React.useState("");
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      {/* <Headercomponent /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        style={{
          flex: 1,
          backgroundColor: colors.white,
          // padding: 10,

        }}>

        <View style={{
          paddingHorizontal: 10,
        }}>

          <View style={{
            // borderRadius: 15,
            overflow: 'hidden',

          }}>
            <ImageBackground
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
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: colors.white,
                  marginTop: 10,
                  marginLeft: 10,

                }}>
                New York's best experiences are waiting for you
              </Text>
            </ImageBackground>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}

            style={{
              // backgroundColor:colors.primary
              backgroundColor: colors.white
            }}
          >
            <Hstack
              styles={{
                height: 50,
                margin: 12,
                // borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
                // // padding: 10,
                marginHorizontal: 20,
                borderRadius: 10,
                marginTop: -25,
                paddingHorizontal: 10,
                backgroundColor: colors.white,
                // backgroundColor: colors.primary

              }}
              centered between
            >
              <TextInput
                style={{
                  color: colors.lightblack,
                  fontSize: 16,
                  flex: 1,

                }}
                placeholder='Where you are heading'
                onChangeText={onChangeText}
                value={text}
                editable={false}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}

                style={{
                  // padding: 10,
                  backgroundColor: colors.primary,
                  marginRight: -7,
                  // flex:1,

                  borderRadius: 10,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // flex: 1,
                  width: 45,


                }}
              >
                <Feather name='search' size={20} color={colors.white} />

              </TouchableOpacity>
            </Hstack>
          </TouchableOpacity>

        </View>
        <Customheader title='Top Experience in New York' />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            color: colors.color2,

            // paddingBottom: 80,
          }}
          style={{
            paddingLeft: 10,
            marginBottom: 25,

          }}
        >
          {/* <ExperienceComponent /> */}
          <ExperienceComponent img={Museum2} title='Emipre Sate Building Observatory Tickets' Category='Emipre Sate Building Tickets' rate='43.46' discount='10' reviewcount='1.9k' />
          <ExperienceComponent free />

          <ExperienceComponent img={Glass} title='SUMMIT One Vanderbilt' Category='SUMMIT One Vanderbilt' rate='42.46' discount='10' reviewcount='346' />
          <ExperienceComponent img={Museum3} />
          <ExperienceComponent img={Glass} free />
          <ExperienceComponent free />
          <View style={{
            paddingRight: 30,
          }} />
        </ScrollView>

        <View
          style={{
            // marginBottom: 30,
            backgroundColor: colors.black3,
            flex: 1,
            paddingVertical: 30,

          }}
        >
          <Customheader style={{
            paddingLeft: 20,

          }} title='Top Attractions in New York' />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              // backgroundColor: colors.black2,
              // flex: 1,

              paddingLeft: 20,
            }}
            style={{
              paddingHorizontal: 10,
              paddingRight: 20,
              marginTop: 20
            }}
          >
            <Topattractions />
            <Topattractions />
            <Topattractions />
            <Topattractions />
            <Topattractions />
          </ScrollView>
        </View>
        <View>
          <Customheader title='Bestsellers' />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,

              // paddingBottom: 80,
            }}
            style={{
              paddingLeft: 10,
              marginBottom: 25,

            }}
          >
            <ExperienceComponent img={Glass} free />
            <ExperienceComponent />
            <ExperienceComponent img={Museum3} />
            <ExperienceComponent />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>
        <View>
          <Customheader title='Tickets in New York' seeall />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 10,
              marginBottom: 25,

            }}
          >
            <ExperienceComponent />
            <ExperienceComponent img={Glass} free />
            <ExperienceComponent img={Museum3} />
            <ExperienceComponent />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>
        <View>
          <Customheader title='Entertainment in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 10,
              marginBottom: 25,

            }}
          >
            <ExperienceComponent img={Museum2} free />
            <ExperienceComponent img={Museum3} />
            <ExperienceComponent />
            <ExperienceComponent />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>

        <View>
          <Customheader title='Aerial Sightseeing in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 10,
              marginBottom: 25,

            }}
          >
            <ExperienceComponent img={Helicopter} free />
            <ExperienceComponent img={Museum3} />
            <ExperienceComponent />
            <ExperienceComponent />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>
        <View>
          <Customheader title='Cruises in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 10,
              // marginBottom: 25,

            }}
          >
            <ExperienceComponent img={NewYork} />
            <ExperienceComponent free />
            <ExperienceComponent />
            <ExperienceComponent />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>

      </ScrollView>
    </View>

  )
}