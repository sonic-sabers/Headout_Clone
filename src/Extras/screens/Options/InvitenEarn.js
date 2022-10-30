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
  Share,


} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
// import Clipboard from '@react-native-clipboard/clipboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import Clipboard from '@react-native-clipboard/clipboard';


export default function InvitenEarn() {

  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'ScaleRich | You Are Sharing the Referal Link of ScaleRich App',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ScrollView
        contentContainerStyle={{

          paddingBottom: 30,
        }}>

        <View
          style={{
            backgroundColor: colors.primary,
            paddingBottom: 20,
            // borderBottomEndRadius:20,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}>
          <View style={{
            // flex: 1,
            padding: 10,
            paddingLeft: 15
          }}>
            <View style={styles.headerstyle}>

              <Hstack centered between>
                <TouchableOpacity
                  onPress={() =>
                    navigation.goBack()
                  }
                >

                  <MaterialIcons
                    name='chevron-left'
                    size={35}
                    color={colors.white}
                    style={{
                      marginLeft: -5,
                    }}

                  />
                </TouchableOpacity>

                <View style={{
                  flex: 1,
                  // backgroundColor: 'green'
                }}
                >

                  <Text
                    style={styles.headertext}>
                    Invite & Earn
                  </Text>
                </View>

              </Hstack>
            </View>
            {/* <TouchableOpacity onPress={copyToClipboard}>
              <Text>Click here to copy to Clipboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fetchCopiedText}>
              <Text>View copied text</Text>
            </TouchableOpacity> */}
            {/* <Transaction setTransactions={setTransactions}/> */}
            <View style={{

              // backgroundColor: 'green',
              alignItems: 'center',

            }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  color: colors.white,
                  marginVertical: 20,
                  maxWidth: 120,
                  textAlign: 'center',

                }}>
                Refer To Your Friends and Earn
              </Text>
              <Image
                source={require('../../assets/images/Celebration.png')}
                style={{
                  width: 137,
                  height: 92,
                  resizeMode: 'contain',
                  // alignSelf:'center',

                }} />

              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: colors.white,
                  marginVertical: 20,
                  // maxWidth: 120,
                  textAlign: 'center',

                }}>
                25₹ Cash Reward
              </Text>
            </View>
          </View>
        </View>
        {/* 

Feather share-2
Ionicons ios-cloud-download-outline
FontAwesome5 medal
*/}
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
            marginHorizontal: 20,

          }}>
          <View>
            <View
              style={styles.buttonstyle}>
              <Feather name='share-2' size={27} color={colors.primary} />
            </View>
            <Text
              style={styles.invitetext}>
              Invite Your Friends to Sign UP
            </Text>
          </View>
          <View style={{
            backgroundColor: colors.primary,
            height: 2.5,
            flex: 1,
            marginTop: 27.5
          }} />
          <View>
            <View
              style={styles.buttonstyle}>
              <Ionicons name='ios-cloud-download-outline' size={27} color={colors.primary} />
            </View>
            <Text
              style={styles.invitetext}>
              Invite Your Friends to Sign UP
            </Text>
          </View>

          <View style={{
            backgroundColor: colors.primary,
            height: 2.5,
            flex: 1,
            marginTop: 27.5
          }} />
          <View>
            <View
              style={styles.buttonstyle}>
              <FontAwesome5 name='medal' size={24} color={colors.primary} />
            </View>
            <Text
              style={styles.invitetext}>
              Invite Your Friends to Sign UP
            </Text>
          </View>

        </View>
        <TouchableOpacity style={{

          width: 150,
          backgroundColor: '#00000005',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'center',

        }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.secondary,
            }}>
            NIT232
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}
        // onPress={() => Clipboard.setString('NIT232')}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.lightblack,
            }}>
            Copy Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare} style={{
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
            borderRadius: 10,
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.white,
            }}>
            Refer Now
          </Text>
        </TouchableOpacity>

      </ScrollView>
      <View
        style={{
          backgroundColor: '#00000005',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: 60,

        }}>
        <TouchableOpacity
        // onPress={() => Clipboard.setString('mail@mail.com')}
        // onPress={()=>Clipboard.setString('mail@mail.com')}
        // onPress={copyToClipboard}
        >
          <Hstack centered>
            <Feather name='link' size={20} color={colors.primary} />

            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.lightblack,
                marginLeft: 5,
              }}>
              Copy Link
            </Text>
          </Hstack>

        </TouchableOpacity>
        <TouchableOpacity>
          <Hstack centered>
            <FontAwesome5 name='medal' size={20} color={colors.primary} />

            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.lightblack,
                marginLeft: 5,
              }}>

              Rewards
            </Text>
          </Hstack>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  headertext: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: colors.white,
    marginLeft: -15,
    flex: 1,
    alignSelf: 'center',
  },
  headerstyle: {
    margin: 5,
    borderBottomWidth: 2,
    borderRadius: 5,
    // paddingHorizontal: 5,
    borderColor: colors.white,
    paddingBottom: 10,
    marginVertical: 10,
  },
  buttonstyle: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  invitetext: {
    fontSize: 8,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.lightblack,
    // marginVertical: 20,
    maxWidth: 55,
    textAlign: 'center',
    marginTop: 10,

  },
})