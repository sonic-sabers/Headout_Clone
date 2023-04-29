/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro360Image,
  ViroAmbientLight,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
} from '@viro-community/react-viro';
import { ViroTrackingStateConstants } from '@viro-community/react-viro/components/ViroConstants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const mainimageURl =
  'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [Tracked, setTracked] = useState(false);

  const onTrackingUpdated = (state, _reason) => {
    if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setTracked(false);
      setText('Tracking unavailable');
    }
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Headout Explore');
      setTracked(true);
    }
  };

  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('../assets/Image/Wood.jpeg'),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });
  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -3]}
        style={styles.helloWorldTextStyle}
      />
      <ViroBox
        height={2}
        length={2}
        width={2}
        position={[0, -0.5, -1]}
        scale={[0.3, 0.3, 0.3]}
        materials={['wood']}
        animation={{ name: 'rotate', loop: true, run: true }}
      />
      {/* {Tracked ? <Viro360Image source={{ uri: mainimageURl }} /> : null} */}
    </ViroARScene>
  );
};

// export default ARscreen () => {
export default function ARscreen() {
  const [object, setObject] = useState('Car');
  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
      <View style={styles.controlView}>
        <TouchableOpacity onPress={() => setObject('Car')} style={styles.switch}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: '#000',
            }}>
            Display Car
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject('Police')} style={styles.switch}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: '#000',
            }}>
            Display Police
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  controlView: {
    width: '100%',
    backgroundColor: 'white',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switch: {
    padding: 10,
    margin: 20,
    backgroundColor: '#9a9a9a',
    borderRadius: 5,
  }
});
