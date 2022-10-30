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

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 431) / 360);
let imageWidth = dimensions.width;
let itemwidth = imageWidth / 2 - 20

export const Header = (props) => {
    return (
        <View style={{
            margin: 5,
            borderBottomWidth: 2,
            borderColor: colors.lightblack,
            paddingBottom: 10,
            marginTop: 10,
            borderRadius: 5,
            paddingHorizontal: 10,
        }}>

            <Hstack centered between>
                <View>

                    <Text
                        style={{
                            fontSize: 27,
                            fontWeight: '700',
                            fontFamily: 'Roboto',
                            color: colors.primary,
                            marginTop: -5,
                        }}>
                        Lorem Ipsum
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: '400',
                            fontFamily: 'Roboto',
                            color: colors.lightblack
                        }}>
                        ID : 060696962
                    </Text>
                </View>
                <Hstack>
                    <Feather
                        name='headphones'
                        size={20}
                        style={{
                            marginRight: 5,
                        }}
                        color={colors.lightblack}
                        onPress={() =>
                            alert('Help...')
                        }
                    />

                </Hstack>
            </Hstack>
        </View>
    )
}

const Settingsoption = ({ title, icon, type, onPress, customPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => customPress ? customPress() : onPress ? navigation.navigate(onPress) : null}
            style={{
                marginVertical: 7,
                // marginHorizontal: 5,
                padding: 9,
                marginRight: 13,
                backgroundColor: '#00000005',
                borderRadius: 10,

            }}>
            <Hstack centered>
                <View style={{ width: 25, }}>
                    {type == 'material' && <MaterialCommunityIcons name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                    {type == 'Octicons' && <Octicons name={icon ? icon : 'account-circle-outline'} size={18} color={colors.primary} />}
                    {type == 'Ionicons' && <Ionicons name={icon ? icon : 'account-circle-outline'} size={18} color={colors.primary} />}
                    {type == 'FontAwesome' && <FontAwesome name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                    {type == 'FontAwesome5' && <FontAwesome5 name={icon ? icon : 'account-circle-outline'} size={18} color={colors.primary} />}
                    {type == 'Feather' && <Feather name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                    {type == 'Foundation' && <Foundation name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                    {type == 'MaterialIcons' && <MaterialIcons name={icon ? icon : 'account-circle-outline'} size={20} color={colors.primary} />}
                </View>

                <Text
                    style={{
                        fontSize: 19,
                        fontWeight: '600',
                        fontFamily: 'Roboto',
                        color: colors.lightblack,
                        marginLeft: 8,
                        flex: 1,
                    }}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <MaterialIcons
                        name='chevron-right'
                        size={23}
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </Hstack>
        </TouchableOpacity>
    )
}

const Wishlistcomponent = (item, { title, status, qty, unit }) => {
    // <Ordercomponent title='sdvdsv' status='sdv' qty='sdv' unit='sdv'   />
    // console.log(item)
    return (
        <TouchableOpacity style={{
            borderRadius: 10,
            // marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 20,
            overflow: 'hidden',
            width: itemwidth,
            minWidth: 170,

        }}>
            <Hstack
                centered
                between
                styles={{
                    // height: 30,
                    backgroundColor: '#00000080',
                    padding: 10,

                }}>
                <Hstack centered>
                    <Text
                        style={{
                            fontSize: 8,
                            fontWeight: '500',
                            fontFamily: 'Roboto',
                            color: colors.twitter,
                            backgroundColor: 'white',
                            borderRadius: 90,
                            padding: 6,
                            paddingVertical: 9,

                        }}>
                        Logo
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '500',
                            fontFamily: 'Roboto',
                            color: colors.white,
                            marginLeft: 10,
                        }}>
                        {item.title ? item.title : ' India Bulls'}
                    </Text>
                </Hstack>
                {/* <View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '500',
                            fontFamily: 'Roboto',
                            color: colors.white,
                        }}>
                        02/07/2022
                    </Text>
                    <Text
                        style={{
                            fontSize: 8,
                            fontWeight: '400',
                            fontFamily: 'Roboto',
                            color: colors.white,
                            alignSelf: 'flex-end',
                        }}>
                        02:17 am
                    </Text>
                </View> */}
            </Hstack>
            <Hstack
                centered
                between
                styles={{
                    // height: 30,
                    backgroundColor: '#f2f2f2',
                    padding: 10,

                }}>
                <View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Roboto',
                            color: colors.lightblack,
                        }}>
                        Price:{item.Price ? item.Price : '12000'} / unit
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: 'Roboto',
                            color: colors.lightblack,
                        }}>
                        Qty : {item.Quantity ? item.Quantity : '13'} unit
                    </Text>
                </View>
            </Hstack>
        </TouchableOpacity>

    )
}


const Wishlists = ([
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '1' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '2' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '3' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '4' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '5' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '6' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '7' },
    { title: 'India Bulls', Price: 1000, Quantity: 5, key: '8' },
]);


const Wishlist = (props) => {
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 10,
                paddingLeft: 15
            }}>
            <View style={styles.headerstyle}>
                <Hstack centered between>
                    <TouchableOpacity onPress={() => props.setWishList(false)}>
                        <MaterialIcons
                            name='chevron-left'
                            size={35}
                            color={colors.primary}
                            style={{
                                marginLeft: -5,
                            }} />
                    </TouchableOpacity>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text
                            style={styles.headertext}>
                            WishList
                        </Text>
                    </View>
                </Hstack>
            </View>
            <View
                style={{

                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    flexGrow: 2,
                    flexShrink: 1,
                    justifyContent: 'space-between'
                }}
            >
                {
                    Wishlists.map((item, index) => (
                        <View key={item.key} style={styles.item}>
                            <Wishlistcomponent item={item} />
                            {/* <Text>{item.title}</Text> */}
                        </View>
                    ))
                }
            </View>
        </ScrollView>

    )
}


const Vline = () => {
    return (
        <View
            style={styles.vline}
        />
    )
}

const Taskscreen = ({ setTransactions }) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.headerstyle}>
                <Hstack centered between>
                    <TouchableOpacity
                        onPress={() => setTransactions(false)}>
                        <MaterialIcons
                            name='chevron-left'
                            size={35}
                            color={colors.primary}
                            style={{
                                marginLeft: -5,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text
                            style={styles.headertext}>
                            Tasks
                        </Text>
                    </View>

                </Hstack>
            </View>
            {/* <View style={{
                flex: 1,
                backgroundColor:'red',
                
            }}>
                <Text
                    style={styles.headertext}>
                    Tasks
                </Text>
            </View> */}
            <View style={{
                marginTop: 10,
                // backgroundColor: 'blue',
                flex: 1,

            }}>
                <Hstack centered styles={{
                }}>
                    <View
                        style={styles.buttonstyle}>
                        <Octicons name='checklist' size={25} color={colors.primary} />
                    </View>
                    <Hstack centered between>
                        <Text
                            style={styles.invitetext}>
                            Complete kyc & bought your first bond and get upto 100% cashback
                        </Text>
                        <Ionicons name='checkmark-circle' size={23} color={colors.primary} />
                    </Hstack>
                </Hstack>
                <Vline />
                <Hstack centered>
                    <View
                        style={styles.buttonstyle}>
                        <Feather name='share' size={27} color={colors.primary} />
                    </View>
                    <Hstack centered between>
                        <Text
                            style={styles.invitetext}>
                            Invite your 5 friends and help him to purchase their first bond & earn up to 1000Rs
                        </Text>
                        <Ionicons name='checkmark-circle' size={23} color={colors.primary} />
                    </Hstack>
                </Hstack>
                <Vline />
                <Hstack centered>
                    <View
                        style={styles.buttonstyle}>
                        <Feather name='shopping-bag' size={27} color={colors.primary} />
                    </View>
                    <Hstack centered between>
                        <Text
                            style={styles.invitetext}>
                            Purchase 5 bonds & get a chance to win a bond
                        </Text>
                        <Ionicons name='checkmark-circle-outline' size={23} color={colors.primary} />
                    </Hstack>
                </Hstack>
                <Vline />
                <Hstack centered>
                    <View
                        style={styles.buttonstyle}>
                        <Feather name='star' size={27} color={colors.primary} />
                    </View>
                    <Hstack centered between>
                        <Text
                            style={styles.invitetext}>
                            Give us a review on Play store/ App store and win upto 100 rs promo code
                        </Text>
                        <Ionicons name='checkmark-circle-outline' size={23} color={colors.primary} />
                    </Hstack>
                </Hstack>
                <Vline />
                <Hstack centered>
                    <View
                        style={styles.buttonstyle}>
                        <AntDesign name='tagso' size={27} color={colors.primary} />
                    </View>
                    <Hstack centered between>
                        <Text
                            style={styles.invitetext}>
                            Invest Rs 2 lakh in a month and get up to 10% cashback
                        </Text>
                        <Ionicons name='checkmark-circle-outline' size={23} color={colors.primary} />
                    </Hstack>
                </Hstack>
            </View>
            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                }}>
                    Sign in with Facebook
                </Text>
            </LinearGradient> */}
            <TouchableOpacity
                // onPress={onShare} 
                style={{
                    height: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    margin: 10,
                }}>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '500',
                        fontFamily: 'Roboto',
                        color: colors.white,
                    }}>
                    Complete Your Next Task
                </Text>
            </TouchableOpacity>

        </View>

    )
}


export default function Profilescreen() {
    const [Transactions, setTransactions] = useState(false)
    const [InviteEarn, setInviteEarn] = useState(false)
    const [HelpnSupports, setHelpnSupports] = useState(false)
    const [WishList, setWishList] = useState(false)
    const [Activehelp, setActivehelp] = useState('MakeARequest')

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={Transactions}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={{
                            flex: 1,
                        }}
                        style={{
                            flex: 1,
                            padding: 10,
                            paddingLeft: 15
                        }}>
                        <Taskscreen setTransactions={setTransactions} />
                    </ScrollView>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={InviteEarn}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setInviteEarn(!InviteEarn);
                }}
            >
                <View
                    style={{ backgroundColor: '#fff', flex: 1 }}>
                    <View style={{
                        flex: 1,
                        padding: 10,
                        paddingLeft: 15
                    }}>
                        <View style={styles.headerstyle}>

                            <Hstack centered between>
                                <TouchableOpacity
                                    onPress={() =>
                                        setInviteEarn(false)
                                    }
                                >

                                    <MaterialIcons
                                        name='chevron-left'
                                        size={35}
                                        color={colors.primary}
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
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={HelpnSupports}
                onRequestClose={() => {
                    setHelpnSupports(!HelpnSupports);
                }}
            >
                <View
                    style={{ backgroundColor: '#fff', flex: 1 }}>
                 <HelpnSupport setHelpnSupports={setHelpnSupports}/>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={WishList}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setWishList(!WishList);
                }}
            >
                <View
                    style={{ backgroundColor: '#fff', flex: 1 }}>

                    <Wishlist setWishList={setWishList} />
                </View>
            </Modal>
            <View
                style={{
                    backgroundColor: colors.white,
                    flex: 1,
                }}>
                <Header />
                <ScrollView
                    style={{flex: 1,}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        backgroundColor: colors.white,
                        marginLeft: 10,
                        paddingBottom: 60,
                        }}>
                    <Settingsoption onPress='Profilemain' screen='Account' title='Profile' type='material' icon='account-circle-outline' />
                    <Settingsoption customPress={() => setWishList(true)} screen='Wish' title='Wish List' type='material' icon='star-plus' />
                    <Settingsoption onPress='Orders' screen='Orders' title='All Orders' type='Ionicons' icon='newspaper-outline' />
                    <Settingsoption customPress={() => setTransactions(true)} screen='Tasks' title='Tasks' type='Octicons' icon='checklist' />
                    <Settingsoption onPress='Securityscreen' screen='Security' title='Security ' type='Foundation' icon='shield' />
                    <Settingsoption onPress='InvitenEarn' screen='Invite' title='Invite And Earn ' type='Ionicons' icon='ios-cash-outline' />
                    <Settingsoption onPress='Aboutus' screen='About' title='About Us ' type='MaterialIcons' icon='help-center' />
                    <Settingsoption onPress='Contactus' screen='Contact' title='Contact Us On Social ' type='Ionicons' icon='globe-outline' />
                    <Settingsoption onPress='HelpnSupportnavigator'  screen='Help' title='Help And Support ' type='Feather' icon='help-circle' />
                    <Settingsoption onPress='Appfeedback' screen='Feedback' title='App Feedback ' type='FontAwesome' icon='braille' />
                    <Settingsoption screen='Rate' title='Rate Us ' type='FontAwesome' icon='star-o' />
                    <Settingsoption screen='Logout' title='Log Out' type='Ionicons' icon='exit-outline' />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    headertext: {
        fontSize: 25,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: colors.lightblack,
        marginLeft: -15,
        flex: 1,
        alignSelf: 'center',
    },
    headerstyle: {
        margin: 5,
        borderBottomWidth: 2,
        borderRadius: 5,
        // paddingHorizontal: 5,
        borderColor: colors.lightblack,
        paddingBottom: 10,
        marginVertical: 10,
    },
    supporttext: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.lightblack,
    },
    supportstyle: {
        height: 90,
        backgroundColor: '#00000005',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 20,
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
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.lightblack,
        // marginVertical: 20,
        maxWidth: '70%',
        textAlign: 'left',
        // marginTop: 10,
        flex: 1,
        marginLeft: 20
    },
    vline: {
        backgroundColor: colors.primary,
        width: 2.5,
        height: 40,
        marginLeft: 27.5
    },
})