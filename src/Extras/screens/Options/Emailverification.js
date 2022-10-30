// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Emailverification() {
//   return (
//     <View>
//       <Text>Emailverification</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header2 } from './Securityscreen';
import { ColorSpace } from 'react-native-reanimated';
import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

export const Styledtextinput = (props) => {
    const [text, onChangeText] = React.useState("");
    // https://godconnect.online/api/UserMgmtAPI/ProfileCheck
    const [hidePass, setHidePass] = React.useState(true);
    const navigation = useNavigation();

    return (
        <View>
            <Hstack
                centered
                between
                styles={styles.inputholder}>
                <TextInput
                    style={styles.inputtext}
                    placeholder={props.lable}
                    placeholderTextColor={colors.lightblack}
                    autoCapitalize="none"
                    {...props}
                />
                {props.notext ? null :
                    <TouchableOpacity>
                        <Text
                            style={styles.inputendtext}>
                            {props.gettext ? props.gettext : 'Get SMS'}
                        </Text>
                    </TouchableOpacity>}
            </Hstack>
        </View>
    )
}

export const Custombutton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress ? onPress() : null}
            style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.secondary,
                borderRadius: 15,
                marginVertical: 10,

            }}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Roboto',
                    color: colors.white
                }}>
                {title ? title : 'Confirm'}
            </Text>
        </TouchableOpacity>
    )
}

export default function Emailverification() {
    const [EmailId, setEmailId] = useState('')
    // const [countryCode, setCountryCode] = useState<CountryCode>('FR')
    // const onSelect = (country: Country) => {
    //     setCountryCode(country.cca2)
    //     setCountry(country)
    //   }
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <Header2 title='Email Verification' />
            <View style={{
                flex: 1,
                padding: 10
            }}>
                <Styledtextinput
                    onChangeText={setEmailId}
                    title='Enter your Email/Phone'
                    placeholder='Enter Email'
                    value={EmailId}
                    autoCapitalize="none"
                    icon='email'
                    keyboardType='number-pad'
                    MaterialCommunityIcons
                    selectionColor={colors.primary}
                    notext
                />
                <Styledtextinput
                    onChangeText={setEmailId}
                    title='Enter your Email/Phone'
                    value={EmailId}
                    placeholder='Enter Code'

                    autoCapitalize="none"
                    icon='email'
                    keyboardType='number-pad'
                    MaterialCommunityIcons
                    selectionColor={colors.primary}
                    gettext='Get Code'

                />

                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '400',
                        fontFamily: 'Roboto',
                        color: colors.lightblack,
                        // marginLeft: 5,
                        marginBottom: 5,
                    }}>
                    Code Will Be Send To 7*****564
                </Text>
                <Styledtextinput
                    onChangeText={setEmailId}
                    title='Enter your Email/Phone'
                    placeholder='Enter SMS'

                    value={EmailId}
                    autoCapitalize="none"
                    icon='email'
                    keyboardType='number-pad'
                    MaterialCommunityIcons
                    selectionColor={colors.priamey}
                />
                <Custombutton title='Confirm' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputholder: {
        // height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#00000010',
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 10,
        
    },
    inputtext: {
        marginLeft: 5,
        fontWeight: '400',
        fontSize: 15,
        color: colors.lightblack,
        // marginBottom: -10,
        flex: 1,
    },
    inputendtext: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Roboto',
        color: colors.primary,
        marginRight: 10,
    },
})