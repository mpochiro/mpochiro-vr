import React from 'react';
import { Text, View } from 'react-vr';

class WelcomeBlurb2 extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.WelcomeBlurbPosition2
    return (
          <View
            style={{
              opacity: 1,
              layoutOrigin: [0.5, 0.5],
              fontSize: 8,
              transform: [{translate: [translateX, translateY, translateZ]}, {rotateY: rotateY}]
            }}
            >
            <Text
              style={{
                fontSize: 8,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Or don't, I'm a website, not a cop...
            </Text>
          </View>
    );
  }
};

export default WelcomeBlurb2;
