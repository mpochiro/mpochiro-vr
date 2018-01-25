import React from 'react';
import { Text, View } from 'react-vr';

class GithubBlurb extends React.Component {
  render () {
    let {  width, height, translateX, translateY, translateZ, rotateY, image, body } = this.props.GithubBlurbPosition
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
                fontSize: 4,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              For source code
            </Text>
            <Text
              style={{
                fontSize: 4,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              and my projects
            </Text>
            <Text
              style={{
                fontSize: 4,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              check out my Github
            </Text>
          </View>
    );
  }
};

export default GithubBlurb;
