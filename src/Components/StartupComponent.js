import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import LandingBlocComponent from './LandingBlocComponent';
import AboutBlocComponent from './AboutBlocComponent';
import ExperienceBlocComponent from './ExperienceBlocComponent';
import ProjectsBlocComponent from './ProjectsBlocComponent';
import ProjectsTestBlocComponent from './ProjectsTestBlocComponent';

function HomeComponent() {
    return (
      <ParallaxProvider>
        <LandingBlocComponent />
        <AboutBlocComponent />
        <ExperienceBlocComponent />
        <ProjectsBlocComponent />
        <ProjectsTestBlocComponent />
        <LandingBlocComponent />
      </ParallaxProvider>
    )
}

export default HomeComponent;
