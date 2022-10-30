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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HelpnSupport from '../Options/HelpnSupport';
import { Header2 } from './Securityscreen';

export default function HelpnSupportRequest({ navigation }) {
  const [EmailId, setEmailId] = useState('')
  const [Detail, setDetail] = useState('')

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,

      }}>
      <Header2 title='Help & Support' />

      <View style={{

        padding: 15,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightblack,
        borderRadius: 20,
        marginTop: 10,

      }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.white,
            // marginTop: 10,

          }}>
          Make A Request
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'Roboto',
          color: colors.lightblack,
          marginTop: 10,
          marginLeft: 10,

        }}>
        Please Select On Of The Following To Sumbit Your Request
      </Text>



      <TouchableOpacity style={{

        padding: 15,
        marginVertical: 10,
        marginHorizontal:5,
        
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.white,
            // marginTop: 10,

          }}>
          Mobile App Issue ?
        </Text>
        <AntDesign name='caretright' size={13} color={colors.white} />

      </TouchableOpacity>

      <View style={{

        backgroundColor: '#00000005',
        marginVertical: 10,
        marginHorizontal:5,
        
        padding: 10,
        minHeight: 50,
        borderRadius: 20,
        paddingLeft: 20,

      }}>
        <TextInput
          style={styles.inputtext}
          placeholder='Email'
          placeholderTextColor={colors.lightblack}
          autoCapitalize="none"
          onChangeText={setEmailId}
          value={EmailId}
          keyboardType='default'
          selectionColor={colors.primary}
          multiline
        />
      </View>
      <View style={{

        backgroundColor: '#00000005',
        marginVertical: 10,
        marginHorizontal:5,
        
        padding: 10,
        minHeight: 120,
        borderRadius: 20,
        paddingLeft: 20,

      }}>
        <TextInput
          style={styles.inputtext}
          placeholder='Details'
          placeholderTextColor={colors.lightblack}
          autoCapitalize="none"
          onChangeText={setDetail}
          value={Detail}
          keyboardType='default'
          selectionColor={colors.primary}
          multiline
        />
      </View>

      <TouchableOpacity style={{

        backgroundColor: '#00000005',
        margin: 10,
        padding: 10,
        // minHeight: 120,
        borderRadius: 20,
        // paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

      }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.lightblack,
            // marginTop: 10,
            marginRight: 10,

          }}>
          Add File
        </Text>
        <Ionicons name='add-circle-outline' size={13} color={colors.primary} />

      </TouchableOpacity>

      <TouchableOpacity style={{

        paddingVertical: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'flex-start',
        paddingHorizontal: 40,

      }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.white,
            // marginTop: 10,

          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})