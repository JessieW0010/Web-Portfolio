import React from 'react';
import resume from '../assets/files/resume.pdf';

export default function Skills() {
  return (
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>My Skill Set</h2>
          <a href={resume} target="_blank" style={{textAlign: 'center', paddingLeft: 0, display: 'block', borderBottom: 'none', cursor: 'pointer', color: 'white'}}>Resume</a>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Frontend</h3>
            <p>
              React
              <br />
              React Native
              <br />
              Angular
              <br />
              AngularJS
              <br />
              Redux
              <br />
              JQuery
              <br />
              JavaScript ES6
              <br />
              CSS3
              <br />
              SASS
              <br />
              HTML5
            </p>
          </li>
          <li className="icon solid fa-server">
            <h3>Backend</h3>
            <p>
              Node.js
              <br />
              Express.js
              <br />
              Ruby on Rails
              <br />
              Golang
            </p>
          </li>
          <li className="icon solid fa-database">
            <h3>Database</h3>
            <p>
              Postgres
              <br />
              Active Records
              <br />
              MongoDB
            </p>
          </li>
          <li className="icon solid fa-clipboard-check">
            <h3>Testing Tools</h3>
            <p>
              Mocha/ Chai
              <br />
              Jest
              <br />
              Cypress
              <br />
              Capybara/ Poltergeist
              <br />
              RSpec
            </p>
          </li>
          <li className="icon solid fa-rocket">
            <h3>Deployment Tools</h3>
            <p>
              CircleCI
              <br />
              Netlify
              <br />
              Heroku
              <br />
              Github Pages
            </p>
          </li>
          <li className="icon solid fa-code-branch">
            <h3>Others</h3>
            <p>
              Git
              <br />
              TDD
              <br />
              BDD
              <br />
              RESTful Architechture
              <br />
              Baking cookies
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
