/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ScrollView, Dimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Customheader, Loadingscreen, Topattractions} from '../../components';

import {colors} from '../../constants';

let dimensions = Dimensions.get('window');
let categoriesWidth = dimensions.width / 2 - 35;

export const Categoriesdata = [
  {title: 'Tickets', key: '1'},
  {title: 'Tours', key: '2'},
  {title: 'Transportation', key: '3'},
  {title: 'Travel Services', key: '4'},
  {title: 'Cruises', key: '5'},
  {title: 'Food & Drink', key: '6'},
  {title: 'Day Trips', key: '7'},
  {title: 'Entertainment', key: '8'},
  {title: 'Adventure', key: '9'},
  {title: 'Areial Sightseeing', key: '10'},
  {title: 'Water Sports', key: '11'},
  {title: 'Nature & Wildlife', key: '12'},
  {title: 'Wellness', key: '13'},
  {title: 'Classes', key: '14'},
  {title: 'Specials', key: '15'},
  {title: 'Staycations', key: '16'},
  {title: 'Sports', key: '17'},
];

const Datacomponent = ({data}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Categoriesall', {
          title: data.title,
        })
      }
      key={data.key}
      style={{
        backgroundColor: colors.white,
        borderColor: colors.white4,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: categoriesWidth,
        marginHorizontal: 7,
        paddingVertical: 13,
        marginVertical: 5,
      }}>
      <Text
        style={{
          fontSize: 13,
          // fontWeight: '600',
          fontFamily: 'Inter-Regular',
          color: colors.black,
          marginLeft: 12,
          opacity: 0.8,
        }}>
        {data.title}
      </Text>
    </Pressable>
  );
};

export default function Categoriesscreen() {
  const [show, setShow] = React.useState(false);
  const delay = 1.5;

  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <>
      {!show ? (
        <Loadingscreen />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
          }}>
          <ScrollView
            style={{
              flex: 1,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 40,
            }}>
            <View
              style={{
                backgroundColor: colors.white,
                flex: 1,
                paddingBottom: 20,
              }}>
              <Customheader nested seeall title="Top Attractions in New York" />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: 15,
                }}
                style={{
                  paddingHorizontal: 10,
                  paddingRight: 20,
                  marginTop: 10,
                }}>
                <Topattractions
                  title="Broadway Tickets"
                  price="46.5"
                  Categoriesdetails
                  nested
                />
                <Topattractions
                  title="Empire State Building Tickets"
                  price="44"
                  Categoriesdetails
                  nested
                />
                <Topattractions
                  title="One World Observatory Tickets"
                  price="40.82"
                  Categoriesdetails
                  nested
                />
                <Topattractions
                  title="Top of the Rock Tickets"
                  price="74"
                  Categoriesdetails
                  nested
                />
                <Topattractions
                  title="Statue Of Liberty Tickets"
                  price="29"
                  Categoriesdetails
                  nested
                />
              </ScrollView>
            </View>

            <View style={{}}>
              <Customheader title="Categories in New York" />
              <View
                style={{
                  // backgroundColor: "green",
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginTop: 10,
                }}>
                {Categoriesdata.map(data => {
                  return (
                    <View key={data.key}>
                      <Datacomponent data={data} />
                    </View>
                  );
                })}
              </View>
              <Customheader title="Categories Worldwide" />
              <View
                style={{
                  // backgroundColor: "green",
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginTop: 10,
                }}>
                {Categoriesdata.map(data => {
                  return (
                    <View key={data.key}>
                      <Datacomponent data={data} />
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
