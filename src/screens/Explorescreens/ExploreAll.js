/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { colors } from '../../constants';
import {
  ExperienceComponent,
  Customheader,
  Loadingscreen,
  Hstack,
} from '../../components';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  // Customheader,
  // ExperienceComponent,
  Glass,
  Museum1,
  Museum2,
  Museum3,
} from './Explorescreen';
import { Categoriesdata } from '../Categoriesscreens/Categoriesscreen';
import { innerText, topText } from '../../assets/fontStyles';

export default function ExploreAll({ route }) {
  const { title } = route?.params;
  const [show, setShow] = React.useState(false);
  const delay = 1;

  const [updatedcategories, setUpdatedcategories] = useState(Categoriesdata);
  const [Active, setActive] = useState(Object.values(Categoriesdata)[0].title);
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    const newFirstElement = { title: 'All', key: '0' };
    const newCategoriesdata = [newFirstElement].concat(Categoriesdata); // [ 4, 3, 2, 1 ]
    setUpdatedcategories(newCategoriesdata);
    setActive(Object.values(newCategoriesdata)[0].title);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {!show && show ? (
        <Loadingscreen />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            // paddingHorizontal: 20,
            paddingBottom: 0,
          }}>
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 10,
            marginBottom: 40,
            // 
            // flex: 1,
            width: '95%',
            // backgroundColor: 'red',
            zIndex: 400
          }}>
            <TouchableOpacity style={{
              backgroundColor: colors.white,
              alignSelf: 'center',
              borderRadius: 4,
              padding: 6,
              paddingHorizontal: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
              <Hstack centered>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Inter-Bold',
                    color: colors.black2,
                    marginRight: 4,
                  }}>
                  Filter
                </Text>
                <Entypo name='sound-mix' size={15} color={colors.black2} />
              </Hstack>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingBottom: 40,
            }}
            style={{
              // backgroundColor: 'green',
              flex: 1,
            }}>
            <Text
              style={[
                {
                  fontSize: 23,
                  // fontFamily: 'Roboto',
                  color: colors.black,
                  paddingHorizontal: 22,
                  // marginLeft: 52,
                  marginTop: 20,
                },
                innerText,
                !title && { marginLeft: -8 },
              ]}>
              {title ? title : ' Broadway Tickets'}
            </Text>
            {title ? (
              <>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{
                    height: 40,
                    marginTop: 10,
                    paddingLeft: 20,
                  }}>
                  {updatedcategories.map(data => {
                    return (
                      <TouchableOpacity
                        key={data.key}
                        onPress={() => setActive(data.title)}
                        style={[
                          {
                            marginRight: 10,
                            borderWidth: 0.6,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 13,
                            height: 32,
                            borderColor: colors.black5,
                          },
                          Active === data.title && {
                            backgroundColor: '#ebeaff',
                            borderWidth: 0,
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color: colors.black,
                              fontSize: 13,
                              fontFamily: 'Inter-Regular',
                              lineHeight: 28,
                              opacity: 0.7,
                            },
                            Active === data.title && {
                              color: colors.primary,
                            },
                          ]}>
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                <Text
                  style={{
                    fontSize: 11,
                    // fontWeight: '500',
                    fontFamily: 'Inter-Medium',
                    color: colors.black2,
                    opacity: 0.8,
                    paddingHorizontal: 20,
                    marginTop: 20,
                  }}>
                  {/* Museum of Modern Art(MoMA) Tickets */}
                  Showing 20 experiences
                </Text>
              </>
            ) : (
              <Text
                style={[
                  topText,
                  {
                    color: colors.black,
                    marginTop: 15,
                    marginLeft: 18,
                    opacity: 0.75,
                  },
                ]}>
                Explore Options
              </Text>
            )}
            <View
              style={{
                flex: 1,
              }}>
              <ExperienceComponent
                free
                img={Museum3}
                center
                title="Chicago"
                Category="Entertainment"
                rate="67"
                discount="10"
                reducewidth
              />
              <ExperienceComponent
                img={Glass}
                center
                title="The Lion King"
                Category="Entertainment"
                rate="95.5"
                reducewidth
              />
              <ExperienceComponent
                free
                img={Museum2}
                center
                title="A Strange Loop"
                Category="Entertainment"
                rate="60"
                discount="10"
                reducewidth
              />
              <ExperienceComponent
                img={Museum1}
                center
                title="The Music Man"
                Category="Entertainment"
                rate="292.2"
                reducewidth
              />
            </View>
            <Customheader
              style={{
                marginLeft: 10,
                marginTop: 20,
              }}
              title="Headout Picks"
            />
            <ExperienceComponent
              img={Glass}
              center
              title="Aladdin"
              Category="Entertainment"
              rate="69"
              discount="10"
              Full
              reducewidth
            />
            <ExperienceComponent
              img={Glass}
              center
              title="Chicago"
              Category="Entertainment"
              rate="67"
              discount="10"
              Full
              reducewidth
            />
          </ScrollView>
        </View>
      )}
    </>
  );
}
