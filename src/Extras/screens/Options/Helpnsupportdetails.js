import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
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
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';
import { Header2 } from './Securityscreen';
import { ScrollView } from 'react-native-gesture-handler';

const Customquestions = ({ title, Activehelp, setActivehelp, active }) => {
  // console.log(Activehelp)
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          setActivehelp(active)
          // null
        }
        style={styles.supportstyle}>
        <MaterialIcons
          name='chevron-right'
          size={25}
          color={Activehelp == active ? colors.primary : colors.lightblack}
        />
        <Text
          style={[styles.supporttext,
          {
            color: Activehelp == active ? colors.primary : colors.lightblack
          }
          ]}>
          {title ? title : 'Title'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export const Headertext = ({ title }) => {
  return (
    <View style={{
      // height: 30,
      backgroundColor: colors.primary,
      paddingHorizontal: 40,
      marginLeft: 10,
      paddingTop: 35,
      marginTop: -30,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      paddingBottom: 10,

      alignSelf: 'flex-start',
      // paddingHorizontal: 20,

    }}>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.white,

          }}>
          {title ? title : 'Title'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default function Helpnsupportdetails() {
  const [Activehelp, setActivehelp] = useState('')

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Header2 title='Help & Support' />

      <Text
        style={styles.toptext}>
        Most Asked Questions !
      </Text>
      <View
        style={styles.containertstyle}>
        <Customquestions title='What should I ask about a bond?' Activehelp={Activehelp} active='WhatshouldIaskaboutabond' setActivehelp={setActivehelp} />
        <Customquestions title='What kind of bonds are there? ' Activehelp={Activehelp} active='Whatkindofbondsarethere' setActivehelp={setActivehelp} />
        <Customquestions title='How do bonds fit into my portfolio?' Activehelp={Activehelp} active='Howdobondsfitintomyportfolio' setActivehelp={setActivehelp} />
        <Customquestions title='What happens to bonds in a rising' Activehelp={Activehelp} active='Whathappenstobondsinarising' setActivehelp={setActivehelp} />
        <Customquestions title='How do I know which bonds to buy?' Activehelp={Activehelp} active='HowdoIknowwhichbondstobuy' setActivehelp={setActivehelp} />
      </View>
      <Headertext title='More' />
      <View>
        <Text
          style={styles.toptext}>
          Help !
        </Text>
        <View
          style={styles.containertstyle}>
          <Customquestions title='What should I ask about a bond?' Activehelp={Activehelp} active='WhatshouldIaskaboutabond' setActivehelp={setActivehelp} />
          <Customquestions title='What kind of bonds are there? ' Activehelp={Activehelp} active='Whatkindofbondsarethere' setActivehelp={setActivehelp} />
          <Customquestions title='How do bonds fit into my portfolio?' Activehelp={Activehelp} active='Howdobondsfitintomyportfolio' setActivehelp={setActivehelp} />
          <Customquestions title='What happens to bonds in a rising' Activehelp={Activehelp} active='Whathappenstobondsinarising' setActivehelp={setActivehelp} />
          <Customquestions title='How do I know which bonds to buy?' Activehelp={Activehelp} active='HowdoIknowwhichbondstobuy' setActivehelp={setActivehelp} />

        </View>
        <Headertext title='More' />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  supporttext: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.lightblack,
  },
  supportstyle: {
    // height: 90,
    // backgroundColor: '#00000005',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    // marginTop: 20,
  },
  containertstyle: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    zIndex: 300,
  },
  toptext: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: colors.lightblack,
    marginLeft: 10,
    marginTop: 10,

  },
})