import React, { Component, useState, useEffect, useRef } from 'react';
import { StyleSheet, Button, Image, Text, TouchableOpacity, View, TextInput, ScrollView, KeyboardAvoidingView, SafeAreaView, ImageBackground, FlatList, ViewPropTypes, Switch, Dimensions, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from '../constants';


export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const images = [
    {
        id: 1,
        image: require('../assets/images/Banner1.png'),
        header: 'Better way to learning  \n is calling you!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 2,
        image: require('../assets/images/Banner2.png'),
        header: 'Find yourself  by doing  \n whatever you do !',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 3,
        image: require('../assets/images/Banner3.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 4,
        image: require('../assets/images/Banner4.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
    {
        id: 5,
        image: require('../assets/images/Banner5.png'),
        header: 'It’s not just learning, \n It’s a promise!',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec neque mauris eget.',
    },
];

const Offercomponent = ({ source }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            key={source.id}
            // onPress={() => alert('You Are Looking for Great Deals')}
            // onPress={() => navigation.navigate('Offersscreen')}
            // onPress={() => console.log(source)}
            style={{
                // borderWidth: 1,
                // padding: 20,
                // borderRadius: 20, 
                alignItems: 'center',
                borderRadius: 10,

                backgroundColor: 'white',
                // borderColor: colors.google,
                // borderWidth: 2,
                // borderRadius: 10,
                // backgroundColor: 'pink',
                margin: 10,

                shadowColor: "#000",
                shadowOffset: {
                    width: 5,
                    height: 5,
                },
                shadowOpacity: 0.44,
                shadowRadius: 6.32,
                elevation: 7,
                // elevation: 9,

                // marginLeft: 40,
                // marginRight: 20,
            }}>
            <Image
                source={source.image}
                style={{
                    width: SLIDER_WIDTH - 15,
                    height: 120,
                    // paddingBottom: -40,
                    borderRadius: 10,


                    // margin: 10,
                    // shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 8,
                    // },
                    // shadowOpacity: 0.44,
                    // shadowRadius: 10.32,
                    // elevation: 16,
                }}
            />
        </TouchableOpacity>
    )
}

const RenderItem = (props) => {
    // const navigation = useNavigation();
    return (
        // <View style={{
        //     backgroundColor: 'white',
        //     // backgroundColor: 'pink',
        //     borderRadius: 10,

        //     // margin: 10,
        //     shadowColor: "#000",
        //     shadowOffset: {
        //         width: 0,
        //         height: 8,
        //     },
        //     shadowOpacity: 0.44,
        //     shadowRadius: 10.32,
        //     elevation: 10,

        // }}>
        <Offercomponent
            source={props.item}
        />

        // </View>
    );
};

const Rewardcarousel = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    return (
        <View style={{
            // marginTop: 10,
            // marginHorizontal: -10,
            // paddingLeft: 10,

        }} >
            <Carousel
                ref={isCarousel}
                data={images}
                renderItem={RenderItem}
                sliderWidth={SLIDER_WIDTH - 0}
                itemWidth={SLIDER_WIDTH - 0}
                onSnapToItem={index => setIndex(index)}
                autoplayInterval={3500}
                autoplay
                enableMomentum={false}
                loop
                style={{
                    // backgroundColor: 'pink',
                    // flex: 1,
                    // marginBottom: -20,
                    marginTop: 10
                }}
            />
            <Pagination
                dotsLength={images.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotContainerStyle={{
                    marginTop: -30,
                }}
                dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 10,
                    backgroundColor: colors.white,
                    borderColor: colors.primary,
                    borderWidth: 4,
                    marginHorizontal: -15,
                    marginLeft: -20,
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: 'black',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

export default Rewardcarousel;
