import React,
{
    useState,
    useEffect,
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Dimensions,
    Animated,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants'

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 431) / 360);
let imageWidth = dimensions.width;

export default function Onboardingscreen({ route }) {
    const navigation = useNavigation();
    const [animation, setanimation] = useState(new Animated.Value(0))

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                // 
            }}>
                <ImageBackground
                    style={{
                        height: imageHeight,
                        width: imageWidth,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    source={require('../../assets/images/Obbg.png')}
                >
                    <Image
                        source={require('../../assets/images/Logo2.png')}
                        style={{
                            width: 140,
                            height: 140,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            // marginBottom: -30
                        }} />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.white,
                            marginTop: 10,
                        }}>
                        ScaleRich1
                    </Text>
                    {/* <Animated.View style={[{}, transformStyle]} > */}
                    <Text
                        style={styles.minitext}>
                        Bonds  Investment Simple And Easy For Everyone
                    </Text>
                    {/* </Animated.View > */}
                </ImageBackground>
            </View>
            <View
                style={{
                    height: 130,
                    paddingHorizontal: 15,
                    paddingBottom: 10,
                    marginBottom: 10,
                }}>
                <TouchableOpacity style={styles.loginbutton}
                    onPress={() => navigation.navigate('Loginscreen')}
                >
                    <Text
                        style={styles.logintext}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signupscreen')}
                    style={styles.registerbutton}>
                    <Text
                        style={styles.registertext}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    minitext: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Comfortaa',
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.white,
        marginTop: 10,
        maxWidth: '60%',
    },
    registerbutton: {
        padding: 14,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.primary,
        marginTop: 10,
    },
    registertext: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Comfortaa',
        color: colors.primary
    },
    loginbutton: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderWidth: 2,
        borderColor: colors.primary
    },
    logintext: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Comfortaa',
        color: colors.primary
    },
})