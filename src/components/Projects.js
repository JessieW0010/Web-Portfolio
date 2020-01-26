import React from 'react';
import pic1 from '../assets/images/planitmockup.jpg';
import pic2 from '../assets/images/schedulermockup.jpg';
import pic3 from '../assets/images/geopinmockup.jpg';
import Carousel from 'react-bootstrap/Carousel';

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
        <Carousel interval="0" className="image">
          <Carousel.Item>
            <img src={pic1} alt="" />
            <Carousel.Caption>
              <p>hi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic2} alt="" />
          </Carousel.Item>
        </Carousel>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://plan-it-app.netlify.com/" target="_blank">Plan It</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/JessieW0010/Plan-It"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li>A two person project built over 2 weeks time.</li>
              <li>This mobile application allows users to collaboratively plan a group trip.</li>
              <li>Built using React Native and Redux for state management and a Ruby on Rails api server. Firebase used for image storage.</li>
              <li>This app is still in development and preparing for Apple store deployment in Spring 2020.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="spotlight">
      <Carousel interval="0" className="image">
          <Carousel.Item>
            <img src={pic2} alt="" />
            <Carousel.Caption>
              <p>hi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic2} alt="" />
          </Carousel.Item>
        </Carousel>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://interview-scheduler.netlify.com/" target="_blank">Interview Scheduler</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/JessieW0010/scheduler"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li>A React-based responsive web application in which users can book/cancel interviews.</li>
              <li>Built using a concise API and WebSocket server to build a real-time experience.</li>
              <li>Practiced continuous integration and deployment using CircleCI and Netlify.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="spotlight">
      <Carousel interval="0" className="image">
          <Carousel.Item>
            <img src={pic3} alt="" />
            <Carousel.Caption>
              <p>hi</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic2} alt="" />
          </Carousel.Item>
        </Carousel>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://geopin.ca" target="_blank">GeoPin</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/t5krishn/GeoPin"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li>A three person group project built over a week.</li>
              <li>Uses Google Map's api to build a responsive web application that allows users to collaborate and share maps of different interests.</li>
              <li>Built on RESTful Express architecture, PostgreSQL, jQuery, and deployed to Heroku.</li>
            </ul>
          </p>
        </div>
      </section>
    </section>
  );
}
