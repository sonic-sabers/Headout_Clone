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
  Modal,
  PermissionsAndroid,
  Alert,
  TouchableWithoutFeedback,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel, ImagePicker } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { Custombutton, } from './Emailverification';
import { RollInRight } from 'react-native-reanimated';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickerCropper from 'react-native-image-crop-picker';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const Styledtextinput = (props) => {
  const [text, onChangeText] = React.useState("");

  // const [text, onChangeText] = React.useState("");
  // https://godconnect.online/api/UserMgmtAPI/ProfileCheck
  const [hidePass, setHidePass] = React.useState(true);
  const navigation = useNavigation();
  const inputRef = React.useRef()



  return (
    <View>

      <View style={{
        flexDirection: 'row',
        width: '100%',
        // height: 40,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: colors.lightblack,
        alignItems: 'center',
        marginTop: 10,
        // paddingBottom:10,

      }}>
        <FontAwesome name='user-circle' size={22} color={colors.primary} style={{
          // marginBottom: -10
        }} />

        <TextInput
          style={{
            // marginLeft: 5,
            fontWeight: '600',
            fontSize: 19,
            // marginBottom: -10,
            color: colors.lightblack,
            flex: 1,
            marginLeft: 10,
            marginTop: 5,

          }}
          ref={inputRef}

          value={text}
          // secureTextEntry={hidePass ? true : false}

          placeholder={props.lable}
          // placeholderTextColor={colors.lightblack}
          placeholderTextColor="#000"
          autoCapitalize="none"
          {...props}
        />
        {props.edit &&
          <TouchableOpacity
            onPress={() => inputRef.current.focus()}
          >
            <Feather name='edit' size={20} color={colors.primary} style={{
              marginLeft: 0
            }} />
          </TouchableOpacity>}
      </View>
      <Hstack between>


      </Hstack>
    </View>
  )
}


export default function Userprofile() {
  const [Value, setValue] = useState('')
  const [Id, onChangeId] = React.useState("");
  const [Name, onChangeName] = React.useState("");
  const [Phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [HelpnSupports, setHelpnSupports] = useState(false);

  const takePhotoFromCamera = async () => {

    const granted = await await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert('Insufficient permissions!', 'You need to grant camera permissions to use this.', [{ text: "Ok" }]);
      return;
    }

    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
    }).then(imageResp => {
      let availableImage = image ? image : [];
      //  console.log(imageResp);
      availableImage.push(imageResp.path);
      setImage(availableImage);
      toggleModal();
      if (bs && bs.current) bs.current.snapTo(0);
    });
  };

  const choosePhotoFromLibrary = async () => {

    const granted = await await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert('Insufficient permissions!', 'You need to grant Image Library permissions to use this.', [{ text: "Ok" }]);
      return;
    }

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      multiple: true,
      compressImageQuality: 0.7,
    }).then(imageResp => {
      // console.log('img', imageResp);
      let availableImage = image ? image : [];
      imageResp.map(imageResp => {
        availableImage.push(imageResp.path);
      });
      setImage(availableImage);
      //setEdit_images(availableImage)
      // setImage(image.path);
      toggleModal();
      if (bs && bs.current) bs.current.snapTo(0);
    }).catch((ex) => {
      console.log("ex: ", ex);
    });
  };


  const options = [
    {
      name: 'Take from camera',
      icon: <Ionicons color={colors.white} size={21} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            setHelpnSupports(false),
              onFileSelected(images);
          })
          .catch((error) => {
            console.log(error)
          });
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Ionicons name="image" color={colors.white} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log(error)

          })
      },
    },
  ];



  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={HelpnSupports}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setHelpnSupports(!HelpnSupports);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#33333370',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableWithoutFeedback
            style={{
              flex: 1,
              backgroundColor: 'green',

            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 20,

              }}>
              {options.map(({ name, onPress, icon }) => (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    marginVertical: 10,
                    borderRadius: 10,
                    padding: 15,


                  }}
                  key={name}>
                  {icon}
                  {/* <Text style={styles.text}>{name}</Text> */}
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      fontFamily: 'Roboto',
                      color: colors.white,
                    }}>
                    {name}
                  </Text>

                </TouchableOpacity>
              ))}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: colors.white,
          // marginBottom: 70
        }}
      >
        <Header2 noline title='Profile' />
        <View style={{

          flex: 1,

          marginTop: 60,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 20,
          backgroundColor: '#00000005'
        }}>
          <View style={{
            alignItems: 'center',
            marginTop: -35
          }}>
            <Hstack styles={{
              alignItems: 'flex-end',

            }}>
              <View style={{
                height: 80,
                width: 80,
                borderRadius: 90,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primary,
                borderWidth: 5,
                borderColor: colors.white
              }}>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'cover',
                  }}
                  source=
                  {require('../../assets/images/Logo2.png')}
                />
              </View>
              <TouchableOpacity onPress={() => setHelpnSupports(true)}>
                <Feather name='edit' size={22} color={colors.primary} style={{
                  marginLeft: 0
                }} />
              </TouchableOpacity>
            </Hstack>
          </View>
          <Styledtextinput
            value={Name}
            placeholder='Nitin Shankhwar'
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            edit
            onChangeText={onChangeName}
          />
          <Styledtextinput
            value={Id}
            placeholder='nitinshankhwar01 '
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            edit
            onChangeText={onChangeId}
          />
          <Styledtextinput
            value={Value}
            placeholder='sclrch82638'
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            edit
            onChangeText={setValue}
          />
          <Styledtextinput
            value={Phone}
            placeholder='+918957548362'
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            edit
            onChangeText={onChangePhone}
          />
          <Styledtextinput
            value={email}
            placeholder='nitzexbusiness@gmail.com '
            placeholderTextColor={colors.lightblack}
            autoCapitalize="none"
            edit
            onChangeText={onChangeEmail}
          />

          <TouchableOpacity
            // onPress={onShare}
            style={{
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
              borderRadius: 20,
              // margin: 10,
              marginTop: 20,

            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Roboto',
                color: colors.white,
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})