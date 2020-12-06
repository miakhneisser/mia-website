import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import LandingBlocComponent from './LandingBlocComponent';
import AboutBlocComponent from './AboutBlocComponent';
import ExperienceBlocComponent from './ExperienceBlocComponent';

function HomeComponent() {
    return (
      <ParallaxProvider>
        <LandingBlocComponent />
        <AboutBlocComponent />
        <ExperienceBlocComponent />
        <LandingBlocComponent />
      </ParallaxProvider>
    )
}

export default HomeComponent;
