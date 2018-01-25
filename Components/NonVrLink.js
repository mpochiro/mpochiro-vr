import React from 'react';
import { Text, View } from 'react-vr';

class NonVrLink extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.NonVrLinkPosition
    return (
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: '#000000',
              opacity: 0.6,
              layoutOrigin: [0.5, 0.5],
              borderRadius:2,


              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
            >
            <Text
              style={{
                fontSize: 2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
             Non-360 webpage coming soon!
            </Text>
          </View>
    );
  }
};

export default NonVrLink;
