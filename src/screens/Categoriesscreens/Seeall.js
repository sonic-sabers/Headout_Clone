/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {colors} from '../../constants';
import {Topattractions} from '../../components';

import {Categoriesdata} from '../Categoriesscreens/Categoriesscreen';
import {innerText} from '../../assets/fontStyles';
import {Museum1, Museum2, Museum3} from '../Explorescreens/Explorescreen';

export default function Seeall({route}) {
  const {title} = route?.params;
  const [updatedcategories, setUpdatedcategories] = useState(Categoriesdata);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 0,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        style={{
          flex: 1,
        }}>
        <Text
          style={[
            {
              fontSize: 23,
              color: colors.black,
              paddingHorizontal: 22,
              marginTop: 20,
            },
            innerText,
            !title && {marginLeft: -8},
          ]}>
          {title ? title : ' Broadway Tickets'}
        </Text>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginLeft: 10,
              marginVertical: 25,
            }}>
            {updatedcategories.map(data => {
              return (
                data.key % 2 == 1 && (
                  <Topattractions
                    nested
                    style={{marginVertical: 10}}
                    title={data.title}
                    price={data.key + 30}
                    imageStyle={{
                      borderRadius: 5,
                      width: 160,
                      height: 230,
                    }}
                    img={
                      data.key % 3 == 1
                        ? Museum1
                        : data.key % 3 == 0
                        ? Museum2
                        : Museum3
                    }
                  />
                )
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
