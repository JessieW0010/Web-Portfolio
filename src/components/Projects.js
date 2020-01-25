import React from 'react';
import pic1 from 'src/assets/images/planitmockup.jpg';
import pic2 from 'src/assets/images/schedulermockup.jpg';
import pic3 from 'src/assets/images/geopinmockup.jpg';

export default function Projects() {
  return (
    <section id="two" className="wrapper alt style2">
      <header
        className="major"
        style={{ textAlign: 'center', paddingTop: '10%' }}
      >
        <h2>My Projects</h2>
      </header>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Plan It</h2>
          <p>
            A mobile application that allows users to collaboratively plan a
            group trip. Built using React Native and Redux for state management
            on the front-end and a Ruby on Rails api server on the back-end.
            Firebase used for image storage. Still in development, preparing for
            App store deployment in Spring 2020
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Interview Scheduler</h2>
          <p>
            A React-based responsive web application in which users can book/
            cancel interviews. Built using a concise API and WebSocket server to
            build a real-time experience. Deployed using CircleCI and Netlify.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>GeoPin</h2>
          <p>
            A group project which uses the Google Maps api to build a responsive
            web application that allows users to collaborate and share maps of
            different interests. Built on RESTful Express architecture,
            PostgreSQL, jQuery, and deployed to Heroku.
          </p>
        </div>
      </section>
    </section>
  );
}
