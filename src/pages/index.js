import React from 'react';

import Layout from 'src/components/Layout';

import Intro from 'src/components/Intro';
import AboutMe from 'src/components/AboutMe';
import Project from 'src/components/Projects';
import Skills from 'src/components/Skills';
import ContactMe from 'src/components/ContactMe';

const IndexPage = () => (
  <Layout>
    <Intro />

    <AboutMe />

    <Skills />

    <Project />

    <ContactMe />
  </Layout>
);

export default IndexPage;
