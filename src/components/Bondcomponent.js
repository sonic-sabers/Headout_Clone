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
    Pressable,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hstack, KeyboardavoidingWrapper, Rewardcarousel } from './';
import { colors } from '../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Bondcomponent(props, { data }) {
    // console.log(props.data)
    return (
        <View>
            <View
                style={[{
                    backgroundColor: colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    elevation: 3,
                    padding: 5,
                    borderRadius: 10,
                    // margin: 5,
                    // height: 100,
                    // marginHorizontal: 15,
                    // zIndex: 400,
                    overflow: 'hidden',
                    paddingLeft: 10,
                    paddingBottom: 10,
                    // marginHorizontal: 20,
                }, props.bottom ? { marginBottom: 0, } : { marginBottom: 15, }, props.style]}
            >
                <Hstack centered between>
                    <View style={{
                        borderColor: colors.lightblack,
                        borderWidth: 1.5,
                        borderRadius: 30,
                        padding: 2,
                        paddingHorizontal: 10,
                    }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '500',
                                fontFamily: 'Roboto',
                                color: '#00000090',
                            }}>
                            {props.data ? props.data.category : 'NBFC Housing'}
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: "#d4e1ed",
                        padding: 14,
                        borderRadius: 80,
                        marginTop: -10,
                        marginRight: -10,
                        // overflow: 'hidden',
                        // zIndex: 100,

                    }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '500',
                                fontFamily: 'Roboto',
                                color: '#7b9ebe',
                            }}>
                            {props.data ? props.data.rating.slice(0, 3) : 'AA'}

                        </Text>
                    </View>
                </Hstack>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        fontFamily: 'Roboto',
                        color: '#00000099',
                        // marginLeft: 5,
                    }}>
                    {props.data ?

                        props.data.security.length > 25 ?
                            ` ${props.data.security.toUpperCase().slice(0, 25)}...`
                            : `${props.data.security.toUpperCase()}`
                        // + props.data.category.slice(0, 3) 
                        : 'The South Indian Bank ...'}

                </Text>
                <View style={{
                    borderColor: '#00000025',
                    borderWidth: 0.9,
                    // marginHorizontal: 5,
                    borderRadius: 30,
                    marginVertical: 8,
                }} />
                <Hstack between>
                    <View>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '600',
                                fontFamily: 'Roboto',
                                color: '#00000099',
                                // marginLeft: 5,
                            }}>
                            Min. Investment
                        </Text>
                        {/* {props.data ?
                            <Text
                                style={styles.miminv}>
                                {props.data.fv}
                            </Text>
                            :
                            <Text
                                style={styles.miminv}>
                                <MaterialCommunityIcons name='lock-outline' size={14} color='#eca032' />
                                {' '} Signup
                            </Text>
                        } */}
                        <Text
                            style={styles.miminv}>
                            {props.data ?
                                props.data.fv
                                : '1000'
                            } ₹
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '600',
                                fontFamily: 'Roboto',
                                color: '#00000099',
                                // marginLeft: 5,
                            }}>
                            Yield
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '700',
                                fontFamily: 'Roboto',
                                color: '#00000092',
                                // marginLeft: 5,
                                alignSelf: 'center',
                            }}>
                            {props.data ? props.data.coupon : '10.5%'}

                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '600',
                                fontFamily: 'Roboto',
                                color: '#00000099',
                                marginRight: 5,
                            }}>
                            Maturity Date
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '700',
                                fontFamily: 'Roboto',
                                color: '#00000092',
                                marginRight: 5,
                                alignSelf: 'center',
                                maxWidth: 50,
                                textAlign: 'left'
                            }}>
                            {props.data ?
                                props.data.maturity.includes('Call')
                                    ?
                                    // props.data.maturity.replace('Call :', '')
                                    // + props.data.maturity.slice(0, 1)
                                    // + '20' +
                                    // props.data.maturity.slice(7, 7) 
                                    props.data.maturity.slice(7, props.data.maturity.length - 2)
                                    + '20' +
                                    props.data.maturity.slice(props.data.maturity.length - 2, props.data.maturity.length)
                                    :

                                    props.data.maturity.length == 9
                                        ?
                                        props.data.maturity.slice(0, 7)
                                        + '20' +
                                        props.data.maturity.slice(7, 11)
                                        : props.data.maturity.slice(0, 11)
                                : '8-Sep-2027'}
                        </Text>
                    </View>
                </Hstack>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({

    miminv: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#eca032',
        marginTop: 3,
        alignSelf: 'center',
    },
})