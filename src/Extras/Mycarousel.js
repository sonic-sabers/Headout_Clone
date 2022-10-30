import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors} from '../Constants';
import {Mybutton3} from './';
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const widths = width / 1.4;
const ratio = 310 / 460;

const images = [
  {
    id: 1,
    image: require('../assets/img/img1.png'),
    header: 'Manage Assets',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut erat justo, ac enim non vehicula sit. At elementum tincidunt habitasse in adipiscing blandit amet. Mauris amet, egestas quisque nunc vel. Diam amet velit in mi egestas dignissim ultrices interdum massa. ',
  },
  {
    id: 2,
    image: require('../assets/img/img2.png'),
    header: 'Easily buy and Sell',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut erat justo, ac enim non vehicula sit. At elementum tincidunt habitasse in adipiscing blandit amet. Mauris amet, egestas quisque nunc vel. Diam amet velit in mi egestas dignissim ultrices interdum massa. ',
  },
  {
    id: 3,
    image: require('../assets/img/img3.png'),
    header: 'Manage Utilities',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ut erat justo, ac enim non vehicula sit. At elementum tincidunt habitasse in adipiscing blandit amet. Mauris amet, egestas quisque nunc vel. Diam amet velit in mi egestas dignissim ultrices interdum massa. ',
  },
];

const renderItem = ({item}) => {
  return (
    <View
      // onPress={() => navigation.navigate('Offerscreen')}
      // onPress={()=>alert('Its an alert')}
      keyExtractor={item => item.id}
      style={{
        // borderWidth: 1,
        paddingTop: 10,
        // borderRadius: 20,
        alignItems: 'center',
        // backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
      }}>
      <View
        style={{
          padding: 15,
          // backgroundColor: 'green',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <Image
          source={item.image}
          style={{
            width: widths,
            height: width * ratio * 1.5,
            borderRadius: 10,
          }}
        />
      </View>

      {/* <Text style={{ fontSize: 26, fontWeight: '500' }}>
                {item.name}
            </Text> */}
      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 26,
            fontWeight: '700',
            textAlign: 'center',
            alignSelf: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Roboto-Regular',
          }}>
          {item.header}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center',
            lineHeight: 15,
            letterSpacing: 1.1,
            fontFamily: 'Roboto-Regular',
          }}>
          {item.para}
        </Text>
      </View>
    </View>
  );
};

const Mycarousel = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 20,
      }}>
      <Carousel
        ref={isCarousel}
        data={images}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        autoplayInterval={3000}
        autoplay
        enableMomentum={false}
        // loop
        // style={{
        //   alignSelf: 'center',
        // }}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 19 / 2,
          backgroundColor: colors.white,
          borderColor: colors.primary,
          borderWidth: 4,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      {/* <TouchableOpacity onPress={() => console.log(index)}><Text>svdegrdf</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(images.length)}><Text>images.length</Text></TouchableOpacity>
            {images.length < index ? <Text>ggrsgsrgsrg</Text> : <Text>sdegrhntfght</Text>} */}
      {index < images.length - 1 ? (
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 25}}
          onPress={() => navigation.navigate('Loginscreen')}>
          <Text
            style={{
              // marginTop: 10,
              fontSize: 14,
              fontWeight: '700',
              textAlign: 'center',
              textAlignVertical: 'center',
              color: colors.primary,
              fontFamily: 'Roboto-Regular',
            }}>
            Skip Tour
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={{paddingHorizontal: 10}}>
          <Mybutton3 myfont={18} text="Get Started" mynavigator="Loginscreen" />
        </View>
      )}
    </View>
  );
};

export default Mycarousel;
