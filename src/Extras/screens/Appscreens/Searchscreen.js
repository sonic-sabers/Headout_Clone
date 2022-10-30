import React,
{
	Component,
	useState,
	useEffect,
} from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	TextInput,
	FlatList,
	KeyboardAvoidingView,
	ActivityIndicator,
	Keyboard,
	TouchableWithoutFeedback,


} from 'react-native';
import { Bondcomponent, Hstack, KeyboardavoidingWrapper, Rewardcarousel } from '../../components';
import { colors } from '../../constants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Data } from './../../services/Data';

const Searchcomponent = ({ item }) => {
	let text = "Hello world!";
	let result = text.slice(0, 5);
	// console.log(item)
	return (
		<>
			<Bondcomponent data={item} style={{
				marginHorizontal: 10,
			}} />
		</>
	)
}

const Searchbutton = (props) => {
	// const [text, onChangeText] = React.useState("");
	return (
		<View style={{
			margin: 12,
		}}>

			<View style={{
				flexDirection: 'row',
				alignItems: 'center',
				// justifyContent: 'center',

				borderWidth: 1.5,
				paddingHorizontal: 15,
				borderRadius: 25,
				borderColor: colors.primary,
				height: 45,
				paddingRight: 15,
			}}>
				<TextInput
					style={{
						flex: 1,
						fontWeight: '600',
						fontSize: 16,
						color: '#999',
					}}
					autoCapitalize="none"
					// onChangeText={onChangeText}
					// value={text}
					placeholderTextColor={colors.lightblack}
					placeholder='Search'
					onPressOut={() => Keyboard.dismiss}
					selectionColor={colors.primary}
					selectTextOnFocus
					{...props}

				/>
				{/* value */}
				{props.value ?
					<TouchableOpacity
						onPress={() => props.setSearch('')}
					>
						<Entypo name='cross' size={22} color={colors.lightblack} />
					</TouchableOpacity>
					:
					<TouchableOpacity
						onPress={Keyboard.dismiss}
					>
						<AntDesign name='search1' size={22} color={colors.lightblack} />
					</TouchableOpacity>
				}
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					marginTop: 10,

				}}>
				<TouchableOpacity>
					<Hstack centered>
						<AntDesign name='filter' size={15} color={colors.lightblack} />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								fontFamily: 'Roboto',
								marginLeft: 5,
								color: colors.lightblack
							}}>
							Filter
						</Text>
					</Hstack>
				</TouchableOpacity>
				<TouchableOpacity>
					<Hstack centered>
						<FontAwesome
							name='sort-amount-desc' size={15} color={colors.lightblack} />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '600',
								fontFamily: 'Roboto',
								color: colors.lightblack,
								marginLeft: 5,
							}}>
							Sort
						</Text>
					</Hstack>
				</TouchableOpacity>
			</View>
		</View>
	)
}




const getItem = (item) => {
	// Function for click on an item
	alert('Id : ' + item.id + ' Title : ' + item.title);
};


export default function Searchscreen() {
	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
	const [Loading, setLoading] = useState(false);

	const fetchdata = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			// console.log(Data)
			// console.log(Data.bonds)
			.then((responseJson) => {
				setFilteredDataSource(Data.bonds);
				setMasterDataSource(Data.bonds);
				setLoading(false)
			})
			.catch((error) => {
				console.error(error);
				// alert(error);
				// setLoading(false)
			});
	}

	useEffect(() => {
		setLoading(true)
		fetchdata();
	}, []);
	const onRefresh = () => {
		//set isRefreshing to true
		setLoading(true)
		fetchdata()
		// and set isRefreshing to false at the end of your callApiMethod()
	}
	const searchFilterFunction = (text) => {
		// Check if searched text is not blank
		if (text) {
			// Inserted text is not blank
			// Filter the masterDataSource
			// Update FilteredDataSource
			const newData = masterDataSource.filter(
				function (item) {
					const itemData = item.isin
						? item.security.toUpperCase()
						: ''.toUpperCase();
					const textData = text.toUpperCase();
					return itemData.indexOf(textData) > -1;
				});
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			// Inserted text is blank
			// Update FilteredDataSource with masterDataSource
			setFilteredDataSource(masterDataSource);
			setSearch(text);
		}
	};


	const ItemView = ({ item }) => {
		return (
			// Flat List Item
			<Text
				style={{
					fontSize: 15,
					fontWeight: '400',
					fontFamily: 'Roboto',
					color: '#000',
					margin: 10,
				}}
				onPress={() => getItem(item)}>
				{/* {item.id} */}
				{'.'}
				{/* {item.title.toUpperCase().slice(1, -3)}+... */}
				{result}
			</Text>
		);
	};


	return (
		<KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.white }}>
			<TouchableWithoutFeedback style={{ flex: 1, }} onPress={Keyboard.dismiss} >
				<>
					<View
						scrollEnabled={false}
						style={{
							paddingTop: 10,
							backgroundColor: colors.white
						}}>
						<Searchbutton
							onChangeText={(text) => searchFilterFunction(text)}
							value={search}
							underlineColorAndroid="transparent"
							autoFocus
							autoCapitalize='sentences'
							// caretHidden
							contextMenuHidden
							returnKeyType={search}
							selectTextOnFocus
							search
							editable
							enablesReturnKeyAutomatically
							setSearch={setSearch}

						// onEndEditing={searchFilterFunction('')}
						/>
						{/* <TextInput
				style={styles.textInputStyle}
				onChangeText={(text) => searchFilterFunction(text)}
				value={search}
				underlineColorAndroid="transparent"
				placeholder="Search Here"
			/> */}
						{!(Loading) ?
							<FlatList
								// initialNumToRender={4}
								data={filteredDataSource}
								keyExtractor={(item, index) => index.toString()}
								renderItem={Searchcomponent}
								keyboardDismissMode='onDrag'
								// decelerationRate='fast'
								keyboardShouldPersistTaps='handled'
								// pagingEnabled
								initialNumToRender={10}
								maxToRenderPerBatch={10}
								// onRefresh={onRefresh()}
								onRefresh={onRefresh}
								refreshing={Loading}
								removeClippedSubviews={true}
								contentContainerStyle={{
									paddingBottom: 150,
									paddingTop: 10,
									backgroundColor: colors.white,
									// flex: 1,
								}}
							/> :
							<ActivityIndicator
								animating
								color={colors.primary}
							/>
						}
						{/* {Array.from(Array(10).keys()).map((i) => (
				<View
					key={i}
				>
					<Searchcomponent />
				</View>
			))} */}

						{/* <View style={{ paddingBottom: 100 }} /> */}

					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
	itemStyle: {
		padding: 10,
	},
	textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: '#009688',
		backgroundColor: '#FFFFFF',
	},
});