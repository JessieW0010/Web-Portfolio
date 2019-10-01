import React from 'react';
import Scroll from '../components/Scroll';
import config from '../../config';

export default function Intro() {
  return (
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
  );
}
