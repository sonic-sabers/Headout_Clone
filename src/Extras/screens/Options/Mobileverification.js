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

const Styledtextinput = (props) => {
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
                <TouchableOpacity>
                    <Text
                        style={styles.inputendtext}>
                        {props.gettext ? props.gettext : 'Get SMS'}
                    </Text>
                </TouchableOpacity>
            </Hstack>
        </View>
    )
}

export const Custombutton = ({ title }) => {
    return (
        <TouchableOpacity style={{
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
                {title ? title : 'text'}
            </Text>
        </TouchableOpacity>
    )
}

export default function Mobileverification() {
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
            <Header2 title='Mobile Verification' />
            <View style={{
                flex: 1,
                padding: 10
            }}>
                <Hstack
                    centered
                    between
                    styles={styles.inputholder}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRightWidth: 1.5,
                            borderColor: colors.lightblack,
                            height: 30,
                            borderRadius: 2
                        }}>
                        <Text
                            style={[
                                styles.inputendtext,
                                {
                                    marginRight: 5,
                                    // backgroundColor: '#90238430',
                                    // alignSelf: 'center',
                                }]}>
                            🇮🇳{' '}
                            +91
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Mobile Number '
                        placeholderTextColor={colors.lightblack}
                        autoCapitalize="none"
                        onChangeText={setEmailId}
                        title='Enter your Email/Phone'
                        value={EmailId}
                        keyboardType='number-pad'
                        MaterialCommunityIcons
                        selectionColor={colors.primary}
                    />
                </Hstack>
                <Styledtextinput
                    onChangeText={setEmailId}
                    title='Enter your Email/Phone'
                    placeholder='Enter SMS'
                    value={EmailId}
                    autoCapitalize="none"
                    icon='email'
                    keyboardType='number-pad'
                    MaterialCommunityIcons
                    selectionColor={colors.primary}
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
                    Code Will Be Send To Lo*****@gmail.com
                </Text>
                <Styledtextinput
                    onChangeText={setEmailId}
                    title='Enter your Email/Phone'
                    placeholder='Enter Code'
                    value={EmailId}
                    autoCapitalize="none"
                    icon='email'
                    keyboardType='number-pad'
                    MaterialCommunityIcons
                    selectionColor={colors.priamey}
                    gettext='Get Code'
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
    },
    inputtext: {
        marginLeft: 5,
        fontWeight: '400',
        fontSize: 15,
        color: colors.lightblack,
        // marginBottom: -10,
        flex: 1,
        // backgroundColor: 'green'
    },
    inputendtext: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Roboto',
        color: colors.primary,
        marginRight: 10,
    },
})