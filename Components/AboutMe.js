import React from 'react';
import { asset, Image, View } from 'react-vr';

class AboutMe extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.AboutMePosition
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

export default AboutMe;
