import React from 'react';
import NonVrLink from './Components/NonVrLink';
import ProfilePic from './Components/ProfilePic';
import WelcomeBlurb from './Components/WelcomeBlurb';
import WelcomeBlurb2 from './Components/WelcomeBlurb2';
import LinkedInProfile from './Components/LinkedInProfile';
import ContactMe from './Components/ContactMe';
import AboutMe from './Components/AboutMe';
import ResumeBlurb from './Components/ResumeBlurb';
import Resume from './Components/Resume';
import Resume2 from './Components/Resume2';
import Resume3 from './Components/Resume3';
import Github from './Components/Github';
import GithubBlurb from './Components/GithubBlurb';


import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Initial_Project extends React.Component {
  constructor(){
    super()

    this.state = {
      NonVrLinkPosition: {
        width: 40,
        height: 3,
        translateX: 0,
        translateY: -40,
        translateZ: -95.0,
        rotateY: 0,
      },
      ProfilePicPosition: {
        width: 50,
        height: 50,
        translateX: 27.5,
        translateY: 17.0,
        translateZ: 1.0,
        rotateY: 45.0,
        image:'profilePic.jpg'
      },
      WelcomeBlurbPosition: {
        width: 40,
        height: 3,
        translateX: 0,
        translateY: 120.0,
        translateZ: -150.0,
        rotateY: 0,
      },
      WelcomeBlurbPosition2: {
        width: 40,
        height: 3,
        translateX: 0,
        translateY: -100.0,
        translateZ: -300.0,
        rotateY: 0,
      },
      LinkedInProfilePosition: {
        width: 40,
        height: 40.0,
        translateX: 10,
        translateY: 95.0,
        translateZ: -75,
        rotateY: 0,
        image: 'LinkedInProfilePic.jpg',
        url: 'https://www.linkedin.com/in/michael-pochiro/',
      },
      ContactMePosition: {
        width: 80,
        height: 77.0,
        translateX: -50.0,
        translateY: 76.5,
        translateZ: -75,
        rotateY: 0,
        image:'ContactMePic.jpg',
      },
      AboutMePosition: {
        width: 75,
        height: 72.5,
        translateX: -25.0,
        translateY: 119.0,
        translateZ: 90.0,
        rotateY: 130.0,
        image:'AboutMePic.jpg',
      },
      ResumeBlurbPosition: {
        width: 20,
        height: 10.0,
        translateX: -80.0,
        translateY: 330.0,
        translateZ: 95,
        rotateY: 138,
      },
      ResumePosition: {
        width: 70,
        height: 77.0,
        translateX: -80.0,
        translateY: 164.5,
        translateZ: 40,
        rotateY: 90,
        image:'ResumePic.jpg',
      },
      Resume2Position: {
        width: 70,
        height: 67,
        translateX: -80.0,
        translateY: 200.0,
        translateZ: 0,
        rotateY: 70,
        image:'Resume2.jpg',
      },
      Resume3Position: {
        width: 70,
        height: 77.0,
        translateX: -80.0,
        translateY: 236.5,
        translateZ: -30,
        rotateY: 50,
        image:'Resume3.jpg',
      },
      GithubPosition: {
        width: 20,
        height: 20.0,
        translateX: -150.0,
        translateY: 555.5,
        translateZ: -75,
        rotateY: 50,
        image: 'Github.jpg',
        url: 'https://www.github.com/mpochiro/',
      },
      GithubBlurbPosition: {
        width: 10,
        height: 3,
        translateX: -140.0,
        translateY: 590.0,
        translateZ: -75.0,
        rotateY: 50,
      },

     }
    }



  render() {
    return (
      <View>
        <Pano source={asset('background.jpg')}/>
        <NonVrLink
           NonVrLinkPosition={this.state.NonVrLinkPosition} />
        <ProfilePic
           ProfilePicPosition={this.state.ProfilePicPosition} />
        <WelcomeBlurb
           WelcomeBlurbPosition={this.state.WelcomeBlurbPosition} />
        <WelcomeBlurb2
           WelcomeBlurbPosition2={this.state.WelcomeBlurbPosition2} />
        <LinkedInProfile
           LinkedInProfilePosition={this.state.LinkedInProfilePosition} />
        <ContactMe
           ContactMePosition={this.state.ContactMePosition} />
        <AboutMe
           AboutMePosition={this.state.AboutMePosition} />
        <ResumeBlurb
           ResumeBlurbPosition={this.state.ResumeBlurbPosition} />
        <Resume
           ResumePosition={this.state.ResumePosition} />
        <Resume2
           Resume2Position={this.state.Resume2Position} />
        <Resume3
           Resume3Position={this.state.Resume3Position} />
        <Github
           GithubPosition={this.state.GithubPosition} />
        <GithubBlurb
           GithubBlurbPosition={this.state.GithubBlurbPosition} />
      </View>
    );
  }
};

AppRegistry.registerComponent('Initial_Project', () => Initial_Project);
