// import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated, } from 'react-native'
// import React, { Component } from 'react'
// import { colors } from '../../constants';

// // export default function Animation() {

// //   return (
// //     <View>
// //       <Text>Animation</Text>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({})
// export default class Animation extends Component {

//     constructor() {
//         super();
//         this.state = {
//             animation: new Animated.Value(-130),
//         }
//     }

//     startAnimation = () => {
//         Animated.timing(this.state.animation, {
//             toValue: 100,
//             duration: 2000,
//             useNativeDriver: true
//         }).start(() => {
//             this.state.animation.setValue(100);
//             //If you remove above line then it will stop the animation at toValue point
//         });

//     }

//     render() {
//         const transformStyle = {
//             transform: [{
//                 translateY: this.state.animation,
//             }]
//         }

//         return (

//             <View style={styles.MainContainer}>
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                     <Image
//                         source={require('../../assets/images/logo.png')}
//                         style={{
//                             width: 130,
//                             height: 130
//                         }} />
//                 </View>
//                 <TouchableWithoutFeedback onPress={this.startAnimation}>
//                     <Animated.View style={[styles.animatedBox, transformStyle]} >
//                         <Text
//                             style={{
//                                 fontSize: 16,
//                                 fontWeight: '700',
//                                 fontFamily: 'Roboto',
//                                 textAlign: 'center',
//                                 maxWidth: '60%',
//                                 marginTop: 10,
//                                 alignSelf: 'center',
//                                 color: colors.mytext
//                             }}>
//                             Scaler is a transformative tech school, helping working
//                         </Text>
//                     </Animated.View >

//                 </TouchableWithoutFeedback>

//             </View>
//         );
//     }
// };

// const styles = StyleSheet.create({
//     MainContainer: {
//         flex: 1,
//         backgroundColor: '#fff',
//         // justifyContent: 'center',
//         alignItems: 'center',
//     },
//     animatedBox:
//     {
//         width: 190,
//         height: 190,
//         backgroundColor: ('#2E7D32')
//     },

// });


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
	Animated,
	TouchableWithoutFeedback,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants';

export default function Animation() {
	const opacity = new Animated.Value(0);
	const [animation, setanimation] = useState(new Animated.Value(0))
	useEffect(() => {
		const timer = setTimeout(() => {
			Animated.timing(opacity, {
				toValue: 1,
				duration: 2000,
				useNativeDriver: true
			}).start(),
				Animated.timing(animation, {
					toValue: 100,
					duration: 2000,
					useNativeDriver: true
				}).start(() => {
					// setanimation(200);
				});
		}, 1000);
		// console.log('This will run after 1 second!')
	}, [1000]);
	const startAnimation = () => {
		Animated.timing(animation, {
			toValue: 100,
			duration: 2000,
			useNativeDriver: true
		}).start(() => {
			// setanimation(200);
		});
	}
	const transformStyle = {
		transform: [{
			translateY: animation,
		}]
	}
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Image
					source={require('../../assets/images/logo.png')}
					style={{
						width: 130,
						height: 130
					}} />
				<Animated.View style={[styles.animatedBox, transformStyle]} >
					<Text
						style={{
							fontSize: 16,
							fontWeight: '700',
							fontFamily: 'Roboto',
							textAlign: 'center',
							maxWidth: '60%',
							marginTop: 10,
							alignSelf: 'center',
							color: colors.mytext
						}}>
						Scaler is a transformative tech school, helping working
					</Text>
				</Animated.View >

			</View>
			<Animated.Text style={{ opacity }}>Example text</Animated.Text>
		</View>
	)
}

const styles = StyleSheet.create({})