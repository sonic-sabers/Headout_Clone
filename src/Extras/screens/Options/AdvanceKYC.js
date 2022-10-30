import React,
{
    Component,
    useState,
    useEffect,
    useRef,
    useCallback
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
import { Custombutton, Styledtextinput } from './Emailverification';
import DocumentPicker, { types } from 'react-native-document-picker';

const Pdatacomponent = () => {
    const [EmailId, setEmailId] = useState('')

    return (
        <View style={{
            flex: 1,
            // paddingTop: 10,
            // padding: 10,
        }}>
            <Styledtextinput
                onChangeText={setEmailId}
                title='Enter your Email/Phone'
                placeholder='Full Name'
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
                placeholder='DOB'
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
                placeholder='Address'
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
                placeholder='Pin Code'
                value={EmailId}
                autoCapitalize="none"
                icon='email'
                keyboardType='number-pad'
                MaterialCommunityIcons
                selectionColor={colors.primary}
                notext
            />
            <Custombutton />
        </View>

    )
}

const Proofcomponent = () => {
    const [EmailId, setEmailId] = useState('')
    const [active, setactive] = useState('NationalID')
    const [proofactive, setproofactive] = useState('Front')
    const [fileResponse, setFileResponse] = useState([]);
    const addDoc = async docType => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            if (docType === 'pass') {
                setDocPass(res[0].uri);
            }
            if (docType === 'adangal') {
                setDocAdangal(res[0].uri);
            }
            if (docType === 'letter') {
                setDocLetter(res[0].uri);
            }
            if (docType === 'p_letter') {
                setDocP_letter(res[0].uri);
            }
            if (docType === 'noc') {
                setNoc(res[0].uri);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    };
    const handleDocumentSelection = useCallback(async () => {
        // try {
        //     const response = await DocumentPicker.pick({
        //         presentationStyle: 'fullScreen',
        //     });
        //     setFileResponse(response);
        // } catch (err) {
        //     console.warn(err);
        // }
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
            //Setting the state to show single file attributes
            this.setState({ singleFile: res });
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                alert('Canceled from single doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }, []);
    return (
        <View style={{
            flex: 1,
            // paddingTop: 10,
            // padding: 10,
        }}>

            <Text
                style={styles.componenttext}>
                Choose Document Type
            </Text>
            <Hstack
                styles={{
                    flex: 1,
                    marginHorizontal: -5,

                }}
                centered between>
                <TouchableOpacity
                    onPress={() => setactive('NationalID')}
                    style={[active == 'NationalID' ? styles.activecomponent : styles.custombuttonunactive]}
                // style={styles.activecomponent}
                >
                    <Text
                        style={styles.customtext}>
                        National ID
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setactive('Passport')}
                    style={[active == 'Passport' ? styles.activecomponent : styles.custombuttonunactive]}>
                    <Text
                        style={styles.customtext}>
                        Passport
                    </Text>
                </TouchableOpacity>
            </Hstack>
            <Hstack
                styles={{
                    flex: 1,
                    marginHorizontal: -5,

                }}
                centered between>
                <TouchableOpacity
                    onPress={() => setactive('DrivingL')}
                    style={[active == 'DrivingL' ? styles.activecomponent : styles.custombuttonunactive]}>
                    <Text
                        style={styles.customtext}>
                        Driving License
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setactive('PanC')}
                    style={[active == 'PanC' ? styles.activecomponent : styles.custombuttonunactive]}>

                    <Text
                        style={styles.customtext}>
                        Pan Card
                    </Text>
                </TouchableOpacity>
            </Hstack>

            <Text
                style={styles.componenttext}>
                Uploaded ID Proof
            </Text>
            <Hstack
                styles={{
                    flex: 1,
                    marginHorizontal: -5,

                }}
                centered between>
                <View style={{
                    flex: 1,
                }}>
                    <TouchableOpacity
                        onPress={() => setproofactive('Front')}
                        style={[proofactive == 'Front' ? styles.activecomponent : styles.custombuttonunactive]}>
                        <Feather name='camera' size={22} color={colors.primary} />
                        <Text
                            style={styles.customtext}>
                            Front
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => handleDocumentSelection()}
                    
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '500',
                                fontFamily: 'Roboto',
                                color: colors.primary,
                                alignSelf: 'center',

                            }}>
                            Upload Manually
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <TouchableOpacity
                        onPress={() => setproofactive('Back')}
                        style={[proofactive == 'Back' ? styles.activecomponent : styles.custombuttonunactive]}>
                        <Feather name='camera' size={22} color={colors.primary} />

                        <Text
                            style={styles.customtext}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => addDoc()}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '500',
                                fontFamily: 'Roboto',
                                color: colors.primary,
                                alignSelf: 'center',

                            }}>
                            Upload Manually
                        </Text>
                    </TouchableOpacity>
                </View>
            </Hstack>
            <Custombutton />

        </View>

    )
}



export default function AdvanceKYC() {
    const [active, setactive] = useState('Personaldata')
    const [EmailId, setEmailId] = useState('')

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <Header2 title='Advance KYC' />
            <Hstack centered between styles={{
                paddingHorizontal: 10,
                marginTop: 10,
            }}>
                <TouchableOpacity
                    onPress={() => setactive('Personaldata')}
                    style={[active == 'Personaldata' ? styles.activeStyle : styles.inactivestyle]}>
                    <Text
                        // style={styles.activetext}
                        style={[active == 'Personaldata' ? styles.activetext : styles.inactivetext]}>
                        Personal Data
                    </Text>
                </TouchableOpacity>
                <View style={{
                    padding: 5
                }} />
                <TouchableOpacity
                    onPress={() => setactive('Proof')}
                    style={[active == 'Proof' ? styles.activeStyle : styles.inactivestyle]}>
                    <Text
                        style={[active == 'Proof' ? styles.activetext : styles.inactivetext]}>

                        Proof
                    </Text>
                </TouchableOpacity>
            </Hstack>
            <View style={{
                flex: 1,
                // paddingTop: 10,
                padding: 10,
            }}>
                {
                    active == 'Personaldata' ?
                        <Pdatacomponent /> :
                        <Proofcomponent />

                }
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    activeStyle: {
        flex: 1,
        backgroundColor: colors.lightblack,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        borderWidth: 2,
        borderColor: colors.lightblack,
    },
    activetext: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.white
    },
    inactivestyle: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        borderWidth: 2,
        borderColor: colors.lightblack,

    },
    inactivetext: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.lightblack
    },
    custombuttonunactive: {
        backgroundColor: '#00000005',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        paddingVertical: 35,
    },
    customtext: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto',
        color: colors.lightblack,
    },
    activecomponent: {
        backgroundColor: '#00000005',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        paddingVertical: 31,
        borderWidth: 2,
        borderColor: colors.lightblack,

    },
    componenttext: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: colors.lightblack,
        // marginLeft: 8,

    },
})