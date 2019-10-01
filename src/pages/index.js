import React from 'react';

import Layout from '../components/Layout';

import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Project from '../components/Projects';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';

const IndexPage = () => (
  <Layout>
    <Intro />

    <AboutMe />

    <Project />

    <Skills />

    <ContactMe />
  </Layout>
);

export default IndexPage;
