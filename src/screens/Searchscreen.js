/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../constants';
import {Hstack} from '../components';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Nearbydata = [
  {City: 'Dubai', Country: 'United Arab Emirates', key: '1'},
  {City: 'Merida', Country: 'Mexico', key: '2'},
  {City: 'Muscat', Country: 'Oman', key: '3'},
  {City: 'Fujairah', Country: 'United Arab Emirates', key: '4'},
  {City: 'Pattaya', Country: 'Thailand', key: '5'},
  {City: 'Delhi', Country: 'India', key: '6'},
  {City: 'Ras Al khaimah', Country: 'United Arab Emirates', key: '7'},
  {City: 'Malé', Country: 'Maldives', key: '8'},
];

const Searchcomonent = ({item}) => {
  return (
    <TouchableOpacity key={item.key}>
      <Hstack
        centered
        key={item.key}
        styles={{
          marginBottom: 15,
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: colors.black7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.black6,
            opacity: 0.9,
          }}>
          <Feather name="map-pin" color={colors.black2} size={20} />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 13,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Inter-SemiBold',
              color: colors.black,
              opacity: 0.8,
            }}>
            {item.City}
          </Text>
          <Text
            style={{
              fontSize: 11,
              // fontWeight: '500',
              fontFamily: 'Inter-Medium',
              color: colors.black2,
              marginTop: 2,
              opacity: 0.7,
            }}>
            {item.Country}
          </Text>
        </View>
      </Hstack>
    </TouchableOpacity>
  );
};

const ListHeader = () => {
  return (
    <Text
      style={{
        fontSize: 11,
        fontFamily: 'Inter-Medium',
        color: colors.black2,
        marginBottom: 15,
      }}>
      Nearby Destinations
    </Text>
  );
};

export default function Searchscreen() {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(() => {
        setFilteredDataSource(Nearbydata);
        setMasterDataSource(Nearbydata);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.City ? item.City.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(masterDataSource);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 25,
        paddingTop: 15,
      }}>
      <Hstack
        centered
        styles={{
          marginBottom: 4,
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
            color: colors.black2,
            // fontWeight: '400',
            // fontSize: 16,
            fontSize: 14,
            fontFamily: 'Inter-Regular',
          }}
          placeholderTextColor={colors.black4}
          placeholder="Where are you heading?"
          // onChangeText={onChangeText}
          onChangeText={text => searchFilterFunction(text)}
          // value={text}
        />
      </Hstack>

      <View
        style={{
          flex: 1,
        }}>
        <View
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // flex: 1,
            paddingBottom: 50,
          }}
          style={{
            flex: 1,
          }}>
          {!Loading ? (
            <FlatList
              // initialNumToRender={4}
              data={filteredDataSource}
              ListHeaderComponent={ListHeader}
              keyExtractor={(item, index) => index.toString()}
              renderItem={Searchcomonent}
              keyboardDismissMode="onDrag"
              decelerationRate="normal"
              keyboardShouldPersistTaps="handled"
              pagingEnabled
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              removeClippedSubviews={true}
              contentContainerStyle={{
                paddingBottom: 100,
                paddingTop: 10,
                backgroundColor: colors.white,
              }}
            />
          ) : (
            <ActivityIndicator animating color={colors.primary} />
          )}
        </View>
      </View>
    </View>
  );
}
