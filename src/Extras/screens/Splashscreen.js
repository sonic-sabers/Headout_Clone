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
import { colors } from '../constants';

export default function Splashscreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                source={require('../assets/images/Logo2.png')}
                style={{
                    width: 130,
                    height: 130
                }} />
            <Text
                style={{
                    fontSize: 35,
                    fontWeight: '800',
                    fontFamily: 'Roboto',
                    color: colors.primary,
                    // marginTop: 10,
                }}>
                SCALER
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Roboto',
                    color: '#333',
                    textAlign: 'center',
                    maxWidth: '60%',
                    marginTop: 10,
                    alignSelf: 'center',
                }}>
                Scaler is a transformative tech school, helping working
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})