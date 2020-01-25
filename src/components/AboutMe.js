import React from 'react';

export default function AboutMe() {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="about-image">
        <img src={require('../assets/images/avatar.png')} />
      </div>
      <div className="inner">
        <header className="major">
          <h2>Hi! I'm Jessie!</h2>
          <p>
            I was previously working as a researcher studying organic polymers
            before making the transition into web and mobile development.
            Currently I work as a backend developer at Groupdesk in Toronto.
            <br />
            In my spare time I love to experiment with cooking; anything from
            making my own kimchi to fermenting my own beer. Otherwise, I'm
            contributing to open-source projects or working on my app, 
            PlanIt.
          </p>
        </header>
      </div>
    </section>
  );
}
