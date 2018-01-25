import React from 'react';
import { Text, View } from 'react-vr';

class ResumeBlurb extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.ResumeBlurbPosition
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
              My Resume
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              Zoom in on an image to enhance
            </Text>
          </View>
    );
  }
};

export default ResumeBlurb;
