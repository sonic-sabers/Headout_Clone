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
  TouchableHighlight,
  Pressable,
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



export const Customheader = ({ title, seeall, style, nested, category, size, styles, }) => {
  const navigation = useNavigation();
  let details = 'details'
  return (
    <Hstack centered between styles={[{
      marginTop: 10,

    }, category && {
      marginLeft: 5
    }, style]}>
      <Text
        style={[{
          fontSize: 17,
          fontWeight: '700',
          fontFamily: 'Inter-Thin',
          color: '#000000',
          // marginTop: 10,
          marginLeft: 10,
          opacity: 0.9
        }, size && {
          fontSize: 25,
          marginTop: 20,

        }, styles]}>
        {title ? title : 'Title'}
      </Text>
      {seeall && <TouchableOpacity
        // onPress={() => nested ? navigation.navigate('Explorestack', { screen: 'ExploreAll' }) : navigation.navigate('ExploreAll')}
        onPress={() => nested ? navigation.navigate('Explorestack', { screen: 'ExploreAll', params: { itemId: 120, details } }) :

          // navigation.navigate('ExploreAll',{itemId: 120 })
          navigation.push('ExploreAll', {
            itemId: 86,
            otherParam: 'anything you want here',
            details,
            title: 'New York Tours'
          })
        }

      >
        <Hstack centered styles={{
          marginTop: 0,

        }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Inter-Medium',
              color: colors.black1,
            }}>
            See All
          </Text>
          <Entypo name='chevron-right' size={17} color={colors.black1} style={{
            // marginHorizontal: 2, ExploreAll
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
  const { free, img, center, style, title, Category, rate, discount, about, reviewcount, N, Full } = props;
  const [itemtitle, setitemtitle] = useState('Museum of Modern Art(MoMA) Tickets');
  const [Costings, setCostings] = useState('25')
  const [Reviewcount, setReviewcount] = useState('4')

  const navigation = useNavigation();
  let imgSource = Museum1;

  if (img) {
    imgSource = img;
  }
  // onPress={() => navigation.push('Explorestack', { rate
  //   screen: 'Exploredetails' reviewcount
  // })}
  // 
  // console.log(Costings)
  useEffect(() => {
    (title && setitemtitle(title));
    (rate && setCostings(rate));
    (reviewcount && setReviewcount(reviewcount));

  }, [])
  return (
    <Pressable
      onPress={() => navigation.push('Exploredetails', {
        screenname: 'Explorescreen',
        title: itemtitle,
        Costings,
        Reviewcount
      })}
      style={[{
        overflow: 'hidden'
      }, style,
      center ? { alignSelf: 'center' } : { marginRight: 10, },
      ]}>
      <ImageBackground

        // source={require(Museum1)}

        source={imgSource}
        style={[{
          height: images * 315 / 504,
          marginTop: 20,
          borderRadius: 7,
          padding: 10,
          // overflow: 'hidden',
          zIndex: 600,

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
              fontFamily: 'Inter-Medium',
              color: colors.black1,
            }}>
            Free Cancillation
          </Text>
        </TouchableOpacity>}
      </ImageBackground>
      <View style={[
        Full &&
        {
          // flex: 1,
          // backgroundColor: 'blue',
          padding: 15,
          paddingBottom: 20,
          borderWidth: 1,
          borderColor: colors.black4,
          borderTopColor: colors.white,
          borderTopWidth: 0,
          borderRadius: 5,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          marginTop: -10,
          paddingTop: 20,
          marginRight: 3,

        }
      ]}>
        <Hstack
          centered between styles={[{
            marginTop: 5,
            width: images
            // width:images
          }, center && {
            width: images + 50,
          },
          Full && {
            width: images,
            // justifyContent: 'space-between',
            // backgroundColor: 'green'
          }




          ]}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Inter-Medium',
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
                fontFamily: 'Inter-Medium',
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
                fontFamily: 'Inter-Medium',
                color: colors.lightblack,
              }}>
              {Reviewcount}{!N && 'k'}
            </Text>
          </Hstack>
        </Hstack>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            fontFamily: 'Inter-Medium',
            color: colors.black1,
            maxWidth: images - 20,
            // marginBottom:2,
            marginTop: 3,

          }}>
          {/* {title ? title : 'Museum of Modern Art(MoMA) Tickets'} */}
          {itemtitle}
        </Text>
        {!Full && <Hstack centered styles={{
          marginLeft: -2,
          marginTop: 5,

        }}>
          <Ionicons name='flash-outline' size={13} color={colors.lightblack} />

          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Inter-Medium',
              color: colors.lightblack,
            }}>
            Instant Confirmation
          </Text>
        </Hstack>}
        <Hstack
          styles={{
            marginTop: 5,

          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              fontFamily: 'Inter-Medium',
              color: colors.black2,
              marginTop: 2,

            }}>
            ${Costings}
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
                fontFamily: 'Inter-Medium',
                color: '#367D4F',

              }}>
              {discount}% Cashback
            </Text>
          </View>}
        </Hstack>
        {Full &&
          <View style={{
            // backgroundColor: 'green',


          }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Inter-Medium',
                color: colors.black1,
                lineHeight: 20,
                marginVertical: 10,

              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Text>
            {Full && <Hstack centered styles={{
              marginLeft: -2,
              marginTop: 5,
              // marginVertical: 10,
              marginBottom: 15,

            }}>
              <Ionicons name='flash-outline' size={13} color={colors.lightblack} />

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Inter-Medium',
                  color: colors.lightblack,
                }}>
                Instant Confirmation
              </Text>
            </Hstack>}
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
                  fontFamily: 'Inter-Medium',
                  color: colors.white,
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
            {Full && <Hstack centered styles={{
              marginLeft: -2,
              marginTop: 10,
              // marginVertical: 10,
              marginBottom: 15,
              alignSelf: "center",

            }}>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Inter-Medium',
                  color: colors.black1,
                }}>
                More details
              </Text>
              <Entypo name='chevron-right' size={13} color={colors.black1} />
            </Hstack>}
          </View>}
      </View>

    </Pressable>
  )
}

export const Topattractions = ({ nested, details, Categoriesdetails }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      // onPress={() => nested ? navigation.navigate('Explorestack', { screen: 'ExploreAll' }) : navigation.navigate('ExploreAll')}
      onPress={() =>
        Categoriesdetails ? navigation.navigate('Categoriesall', {
          itemId: 86,
          otherParam: 'anything you want here',
          details
        }) :
          nested ? navigation.navigate('Explorestack', { screen: 'ExploreAll', params: { itemId: 120, details } }) :

            // navigation.navigate('ExploreAll',{itemId: 120 })
            navigation.push('ExploreAll', {
              itemId: 86,
              otherParam: 'anything you want here',
              details
            })
      }
    >
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
          fontFamily: 'Inter-Medium',
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
          fontWeight: '200',
          fontFamily: 'Inter-Light',


          color: colors.lightblack,
          maxWidth: 200,
          // opacity: 0.5

          // marginBottom:2,
          // marginTop: 3,

        }}>
        From $94
      </Text>
    </Pressable>
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
                  fontFamily: 'Inter-Medium',
                  color: colors.white,
                  marginTop: 10,
                  marginLeft: 10,

                }}>
                New York's best experiences are waiting for you
              </Text>
            </ImageBackground>
          </View>
          <Pressable
            onPress={() => navigation.navigate('Search')}

            style={{
              // backgroundColor:colors.primary
              // backgroundColor: colors.white
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
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
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
                placeholderTextColor={colors.lightblack}
                placeholder='Where you are heading?'
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
          </Pressable>

        </View>
        <Customheader
          style={{
            paddingLeft: 15,
            marginTop: 20,

          }}
          title='Top Experience in New York' />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            color: colors.color2,

            // paddingBottom: 80,
          }}
          style={{
            paddingLeft: 25,

            marginBottom: 25,

          }}
        >
          {/* <ExperienceComponent /> */}
          <ExperienceComponent img={Glass} title='SUMMIT One Vanderbilt' Category='SUMMIT One Vanderbilt' rate='42.46' discount='10' reviewcount='346' />
          <ExperienceComponent free Category='SUMMIT Two Vanderbilt' rate='40.46' discount='20' reviewcount='10' N />
          <ExperienceComponent img={Museum3} Category='SUMMIT Two Vanderbilt' rate='20' discount='10' reviewcount='93' />
          <ExperienceComponent img={Museum2} title='Emipre Sate Building Observatory Tickets' Category='Emipre Sate Building Tickets' rate='43.46' discount='10' reviewcount='1.9' />

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
            paddingLeft: 15,

          }} title='Top Attractions in New York' />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              // backgroundColor: colors.black2,
              // flex: 1,

              paddingLeft: 15,
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
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Bestsellers' />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,

              // paddingBottom: 80,
            }}
            style={{
              paddingLeft: 25,

              marginBottom: 25,

            }}
          >
            <ExperienceComponent img={Museum3} Category='SUMMIT Two Vanderbilt' rate='20' discount='10' reviewcount='93' />
            <ExperienceComponent img={Museum2} title='Emipre Sate Building Observatory Tickets' Category='Emipre Sate Building Tickets' rate='43.46' discount='10' reviewcount='1.9' />

            <ExperienceComponent img={Glass} free />
            <ExperienceComponent img={Museum3} />
            <ExperienceComponent free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>
        <View>
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Tickets in New York' seeall />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 25,

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
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Entertainment in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 25,

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
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Aerial Sightseeing in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 25,

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
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Specials in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 25,

              // marginBottom: 25,

            }}
          >
            <ExperienceComponent img={NewYork} free />
            <View style={{
              paddingRight: 30,
            }} />
          </ScrollView>
        </View>
        <View>
          <Customheader

            style={{
              paddingLeft: 15,

            }}
            title='Cruises in New York' />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              color: colors.color2,
            }}
            style={{
              paddingLeft: 25,

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