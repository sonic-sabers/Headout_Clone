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
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import { Hstack } from '../components';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Customheader, Headercomponent, Topattractions } from './Explorescreen';

const Nearbydata = ([
  { City: 'Dubai', Country: 'United Arab Emirates', key: '1' },
  { City: 'Abu Dhabi', Country: 'United Arab Emirates', key: '2' },
  { City: 'Chiang Mai', Country: 'Thailand', key: '3' },
  { City: 'Bangkok', Country: 'Thailand', key: '4' },
  { City: 'Pattaya', Country: 'Thailand', key: '5' },
  { City: 'Delhi', Country: 'India', key: '6' },
  { City: 'Beijing', Country: 'China', key: '7' },
  { City: 'Malé', Country: 'Maldives', key: '8' },
  // { title: ' bdbfb bb', key: '9' },
]);



const Searchcomonent = ({ item }) => {
  return (
    <TouchableOpacity key={item.key}>
      <Hstack
        centered
        key={item.key} styles={{
          // backgroundColor: '#9bacb2',
          marginBottom: 15,

        }}>
        {/* Feather map-pin */}
        <View style={{
          height: 55,
          width: 55,
          backgroundColor: colors.black3,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: colors.black4,

        }}>
          <Feather name="map-pin" color={colors.black2} size={22} />

        </View>
        <View style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'center',

        }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              fontFamily: 'Roboto',
              color: colors.black2,
            }}>
            {item.City}
            {/* dsc */}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              fontFamily: 'Roboto',
              color: colors.black2,
              marginTop: 4,

            }}>
            {item.Country}
          </Text>
        </View>
      </Hstack>
    </TouchableOpacity>

  )
}

export default function Searchscreen() {
  const [text, onChangeText] = React.useState("");



  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      // console.log(Data)
      // console.log(Data.bonds)
      .then((responseJson) => {
        setFilteredDataSource(Nearbydata);
        setMasterDataSource(Nearbydata);
        console.log('masterDataSource', masterDataSource)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        // alert(error);
        // setLoading(false)
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSourceCity
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.City
            ? item.City.toUpperCase()
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

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 15,
      paddingTop: 15,
    }}>

      <Hstack centered styles={{
        marginBottom: 10,
        // backgroundColor: 'green',
        // padding: 5,
        borderWidth: 0.7,
        borderColor: '#00000095',
        paddingLeft: 10,
        borderRadius: 10,

      }}>
        <AntDesign name="search1" color={colors.black2} size={22} />

        <TextInput
          autoFocus={true}
          contextMenuHidden
          selectTextOnFocus
          style={{
            // backgroundColor: 'blue',
            marginLeft: 10,
            flex: 1,
            color: colors.black1,
            fontWeight: '400',
            fontSize: 16,

          }}
          placeholderTextColor={colors.lightblack}

          placeholder='Where are you heading ?'
          // onChangeText={onChangeText}
          onChangeText={(text) => searchFilterFunction(text)}
        // value={text}
        />
      </Hstack>

      <View style={{
        flex: 1,

      }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '600',
            fontFamily: 'Roboto',
            color: colors.black2,
            marginBottom: 15,

          }}>
          Nearby Destinations
        </Text>
        <View
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{

            // flex: 1,
            paddingBottom: 50,

          }}
          style={{
            flex: 1,

          }}>

          {!(Loading) ?
            <FlatList
              // initialNumToRender={4}
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              renderItem={Searchcomonent}
              keyboardDismissMode='onDrag'
              decelerationRate='normal'
              keyboardShouldPersistTaps='handled'
              pagingEnabled
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              removeClippedSubviews={true}
              contentContainerStyle={{
                paddingBottom: 100,
                paddingTop: 10,
                backgroundColor: colors.white
              }}
            /> :
            <ActivityIndicator
              animating
              color={colors.primary}
            />
          }
          {/* {Nearbydata.map((data, index) => {
            return (
              <TouchableOpacity key={data.key}>
                <Hstack
                  centered
                  key={data.key} styles={{
                    // backgroundColor: '#9bacb2',
                    marginBottom: 15,

                  }}>
                  <View style={{
                    height: 55,
                    width: 55,
                    backgroundColor: colors.black3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.black4,

                  }}>
                    <Feather name="map-pin" color={colors.black2} size={22} />

                  </View>
                  <View style={{
                    flex: 1,
                    marginLeft: 10,
                    justifyContent: 'center',

                  }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Roboto',
                        color: colors.black2,
                      }}>
                      {data.City}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '500',
                        fontFamily: 'Roboto',
                        color: colors.black2,
                        marginTop: 4,

                      }}>
                      {data.Country}
                    </Text>
                  </View>
                </Hstack>
              </TouchableOpacity>

            )
          })} */}
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})