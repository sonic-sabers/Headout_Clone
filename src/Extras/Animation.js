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
import { colors } from '../constants';

export default function Animation() {
	const [animation, setanimation] = useState(new Animated.Value(0))
	useEffect(() => {
		setTimeout(() => {
			Animated.timing(animation, {
				toValue: 90,
				duration: 2000,
				useNativeDriver: true
			}).start(() => {
				setanimation(90);
			});
		}, 1000);
		console.log(animation)
	}, [1000]);
	const transformStyle = {
		transform: [{
			translateY: animation,
		}],
	}
	console.log(animation)
	return (
		<View style={{ flex: 1, backgroundColor: '#fff', padding: 15 }}>
			<View style={{
				flex: 1, justifyContent: 'center',
				// backgroundColor: 'green',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Image
					source={require('../../assets/images/logo2.png')}
					style={{
						width: 130,
						height: 130,
						alignSelf: 'center',
					}} />

				<Animated.View style={[{}, transformStyle]} >
					<Text
						style={{
							fontSize: 16,
							fontWeight: '700',
							fontFamily: 'Roboto',
							textAlign: 'center',
							alignSelf: 'center',
							color: colors.mytext,
							marginTop: 10,
						}}>
						Scaler is a transformative tech school, helping working
					</Text>
				</Animated.View >
			</View>

			{animation == 90
				?
				<View style={{ height: 128 }}>
					<TouchableOpacity style={{
						borderRadius: 20,
						borderWidth: 3,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 14,
						borderColor: colors.primary
					}}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: '800',
								fontFamily: 'Roboto',
								color: colors.primary
							}}>
							Login In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{
						borderRadius: 20,
						// borderWidth:3,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 14,
						backgroundColor: colors.primary,
						marginTop: 10,
					}}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: '800',
								fontFamily: 'Roboto',
								color: colors.white
							}}>
							Register
						</Text>
					</TouchableOpacity>
				</View>
				:
				<View style={{ height: 128 }} />
			}
		</View >
	)
}

const styles = StyleSheet.create({})