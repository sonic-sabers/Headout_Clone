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
import { Bondcomponent, Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const SLIDER_WIDTH = Dimensions.get('window').width - 15;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const Notificationitem = () => {
    return (
        <View style={{
            borderRadius: 40,
            backgroundColor: colors.lightblack,
            height: 5,
            width: 5,
            padding: 4,
            marginVertical: 20,
        }} />
    )
}

export const Header = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <View style={{
                        flex: 1,
                        padding: 10,
                        paddingLeft: 15
                    }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{
                                backgroundColor: colors.primary,
                                height: 36,
                                width: 36,
                                borderRadius: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Octicons name='arrow-left'
                                size={27} color={colors.white} />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 27,
                                fontWeight: '700',
                                fontFamily: 'Roboto',
                                color: colors.prlightblackimary,
                                marginTop: 5,
                            }}>
                            Notifications


                        </Text>
                        <View style={{
                            marginVertical: 5,
                            borderBottomWidth: 2,
                            borderColor: colors.lightblack,
                            paddingBottom: 5,
                            // marginTop: 10,
                            borderRadius: 5,
                            // paddingHorizontal: 10,
                        }} />
                        <View>
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                            <Notificationitem />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{
                margin: 5,
                borderBottomWidth: 2,
                borderColor: colors.lightblack,
                paddingBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingHorizontal: 10,
            }}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '600',
                        fontFamily: 'Roboto',
                        color: colors.lightblack
                    }}>
                    {props.text ? props.text : 'Hi,Welcome'}
                </Text>
                <Hstack centered between>
                    <Text
                        style={{
                            fontSize: 27,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.primary,
                            marginTop: -5,
                        }}>
                        {props.title ? props.title : 'Lorem Ipsum'}
                    </Text>
                    <Hstack>
                        <TouchableOpacity
                            onPress={() =>
                                setModalVisible(true)
                            }
                        >
                            <MaterialIcons
                                name='notifications-none'
                                size={25}
                                style={{
                                    marginRight: 5,
                                }}
                                color={colors.lightblack}

                            />
                        </TouchableOpacity>

                    </Hstack>
                </Hstack>
            </View>
        </>
    )
}
export const Headertext = ({ title }) => {
    return (
        <View style={{
            // height: 30,
            backgroundColor: colors.primary,
            paddingHorizontal: 18,
            marginLeft: 5,
            paddingBottom: 20,
            marginBottom: -22,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: 3,

        }}>
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: '700',
                    fontFamily: 'Roboto',
                    color: colors.white,

                }}>
                {title ? title : 'New Listing'}
            </Text>
        </View>
    )
}

const Commoncomponent = ({ title, type, Image, children, data }) => {
    return (
        <View
            style={{
                marginTop: 10,
            }}>

            <Hstack centered between>
                <Headertext title={title} />
            </Hstack>
            <View style={[{
                backgroundColor: colors.white,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,
                elevation: 16,

                borderRadius: 15,
                margin: 5,
            },
            data ? children :
                Image ? null : { padding: 10, }]}>

                {data ? children : Image ?
                    <>
                        {children}
                    </>
                    :
                    <>
                        {Array.from(Array(4).keys()).map((i) => (
                            <View
                                key={i}
                                style={{ padding: 15, justifyContent: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '400',
                                        fontFamily: 'Roboto',
                                        color: '#000'
                                    }}>
                                    {type} {i + 1}
                                </Text>
                            </View>
                        ))}
                    </>}
            </View>
        </View>
    )
}

export const Watchlist = () => {
    return (
        <View
            style={{
                marginTop: -40,
                paddingHorizontal: 10,
                backgroundColor: colors.white,
            }}
        >

            <Commoncomponent type='Bond' data >
                <Bondcomponent />
                <Bondcomponent bottom />
            </Commoncomponent >
            <Commoncomponent type='Reward' title='Rewards' Image >
                <Image
                    // source={}
                    source={require('../../assets/images/Rewards.png')}
                    style={{
                        width: SLIDER_WIDTH - 15,
                        height: 120,
                        // paddingBottom: -40,
                        borderRadius: 10,

                        // margin: 10,

                    }} />
            </Commoncomponent>
        </View>
    )
}

const Searchcomponent = ({ item }) => {
    return (
        <></>
    )
}

export default function Homescreen({ route, navigation, EmailId3 }) {
    // const { EmailId, otherParam } = route.params;
    const [EmailIds, setEmailIds] = useState('1234@gmail.com')
    // useEffect(() => {
    //     if (route.params?.EmailId3) {
    //         setEmailIds(route.params.EmailId3)
    //     }
    // }, []);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,

                    // paddingHorizontal: 10,
                }}>

                <Header />
                <Rewardcarousel />
                <Watchlist />
                <View style={{ paddingBottom: 60 }} />
            </ScrollView>
            {/* <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})