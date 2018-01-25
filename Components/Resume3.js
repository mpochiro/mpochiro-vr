import React from 'react';
import { asset, Image, View } from 'react-vr';

class Resume3 extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.Resume3Position
    return (
          <View
            style={{
              width: width,
              height: height,
              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}>
            <Image
            style={{
              width: width,
              height: height,
              borderRadius: 1,
              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
          source={asset(image)}
          >
          </Image>
          </View>
    );
  }
};

export default Resume3;
