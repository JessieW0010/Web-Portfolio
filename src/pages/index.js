import React from 'react';

import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Project from '../components/Projects';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';

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
