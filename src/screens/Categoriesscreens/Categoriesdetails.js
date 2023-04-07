/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {colors} from '../../constants';
import {Loadingscreen} from '../../components';
import * as Exploredetails from '../Explorescreens/Exploredetails';
import {
  ExperienceComponent,
  Glass,
  Museum1,
  Museum2,
  Museum3,
} from '../Explorescreens/Explorescreen';
import {Categoriesdata} from './Categoriesscreen';

export default function Categoriesdetails({route}) {
  const {title} = route?.params;
  const [show, setShow] = React.useState(false);
  const delay = 1;

  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  const [Active, setActive] = useState(Object.values(Categoriesdata)[0].title);

  return (
    <>
      {!show && show ? (
        <Loadingscreen />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingHorizontal: 10,
            paddingBottom: 0,
          }}>
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
              style={{
                fontSize: 23,
                fontWeight: '600',
                fontFamily: 'Roboto',
                color: colors.black,
              }}>
              {title ? title : ' Broadway Tickets'}
            </Text>
            {title ? (
              <>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{
                    height: 40,
                    // flex: 1,

                    // backgroundColor: 'green',
                    marginTop: 10,
                  }}
                  style={
                    {
                      // marginLeft: -10,
                    }
                  }>
                  {Categoriesdata.map(data => {
                    return (
                      <TouchableOpacity
                        onPress={() => setActive(data.title)}
                        style={[
                          {
                            marginRight: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 9,
                            height: 35,
                            borderColor: colors.black4,
                          },
                          Active == data.title && {
                            backgroundColor: '#ebeaff',
                          },
                          ,
                        ]}>
                        <Text
                          style={[
                            {
                              fontSize: 17,
                              fontWeight: '500',
                              fontFamily: 'Roboto',
                              color: colors.black4,
                            },

                            Active == data.title && {
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
                  style={[
                    Exploredetails.styles.Abouttext,
                    {
                      marginTop: 20,
                    },
                  ]}>
                  Showing 1390 experiences
                </Text>
              </>
            ) : (
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  fontFamily: 'Roboto',
                  color: colors.black1,
                  marginTop: 15,
                  marginLeft: 5,
                }}>
                Explore Options
              </Text>
            )}
            <ExperienceComponent
              free
              img={Museum3}
              center
              title="Chicago"
              Category="Entertainment"
              rate="67"
              discount="10"
            />
            <ExperienceComponent
              img={Glass}
              center
              title="The Lion King"
              Category="Entertainment"
              rate="95.5"
            />
            <ExperienceComponent
              free
              img={Museum2}
              center
              title="A Strange Loop"
              Category="Entertainment"
              rate="60"
              discount="10"
            />
            <ExperienceComponent
              img={Museum1}
              center
              title="The Music Man"
              Category="Entertainment"
              rate="292.2"
            />
            <ExperienceComponent
              img={Glass}
              center
              title="Aladdin"
              Category="Entertainment"
              rate="69"
              discount="10"
              Full
            />
          </ScrollView>
        </View>
      )}
    </>
  );
}
