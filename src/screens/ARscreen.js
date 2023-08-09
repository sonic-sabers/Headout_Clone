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
  Viro3DObject,
} from '@viro-community/react-viro';
import { ViroTrackingStateConstants } from '@viro-community/react-viro/components/ViroConstants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const HelloWorldSceneAR = props => {
  let data = props.sceneNavigator.viroAppProps.object;
  const [text, setText] = useState('Initializing AR...');
  const [Tracked, setTracked] = useState(false);
  console.log('data', data);
  
  const [carPosition, setcarPosition] = useState([1, -1.4, -2]);
  const [carRotation, setcarRotation] = useState([0, 0, 180]);
  const [skullPosition, setskullPosition] = useState([0, 0, -0.5]);
  const [skullRotation, setskullRotation] = useState([0, 0, 0]);
  
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
    skull: {
      diffuseTexture: require('../assets/skull-downloadable/difuso_flip_oscuro.jpg'),
    },
    car: {
      diffuseTexture: require('../assets/Car/carPimpMobile_base_color.png'),
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

  const moveObjectSkull = newposition => {
    setskullPosition(newposition)
    console.log('newposition', newposition);
  };
  const moveObjectCar = newposition => {
    setcarPosition(newposition)
    // console.log('newposition', newposition);
  };
  const onRotateObjectSkull = newposition => {
    setcarPosition(newposition)
    // console.log('newposition', newposition);
  };
  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroAmbientLight color="#fff" />
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -3]}
        style={styles.helloWorldTextStyle}
      />
  */}
      {!Tracked ? (
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -3]}
          style={styles.helloWorldTextStyle}
        />
      ) : data === 'Skull' ? (
        <Viro3DObject
          source={require('../assets/skull-downloadable/source/craneo.OBJ')}
          scale={[0.3, 0.3, 0.3]}
          position={skullPosition}
          type="OBJ"
          materials={['skull']}
          // animation={{ name: 'rotate', loop: true, run: true }}
          // onDrag={moveObject}
          // rotation={skullRotation}
          onRotate={onRotateObjectSkull}
          onDrag={moveObjectSkull}
        />
      ) : (
        <Viro3DObject
          source={require('../assets/Car/carPimpMobile.obj')}
          scale={[0.00006, 0.00006, 0.00006]}
          position={carPosition}
          type="OBJ"
          materials={['car']}
          rotation={carRotation}
          // onRotate={rotate => setcarRotation(rotate)}
          onDrag={moveObjectCar}

        // animation={{ name: 'rotate', loop: true, run: true }}
        />
      )}
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
        viroAppProps={{ object: object }}
        style={styles.f1}
      />
      <View style={styles.controlView}>
        <TouchableOpacity
          onPress={() => setObject('Car')}
          style={styles.switch}>
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
        <TouchableOpacity
          onPress={() => setObject('Skull')}
          style={styles.switch}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Roboto',
              color: '#000',
            }}>
            Display Skull
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
  },
});
