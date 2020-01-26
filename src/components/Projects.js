import React from 'react';
import pic2 from '../assets/images/schedulermockup.jpg';
import pic3 from '../assets/images/geopinmockup.jpg';
import video from '../assets/files/mock.mp4';
import schedulerGif from '../assets/files/scheduler.gif'
import geopinHome from '../assets/images/geopinHome.png';
import geopinMap from '../assets/images/geopinMap.png';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  return (
    <section id="two" className="wrapper alt style2">
      <header
        className="major"
        style={{ textAlign: 'center', paddingTop: '10%' }}
      >
        <h2>My Projects</h2>
        <p style={{width: '100%', paddingLeft: '0%'}}>Click the title to go to the deployed site</p>
      </header>
      <section className="spotlight">
        <video className="image" style={{margin: '2%'}} width="450" height="300" controls>
          <source src={video} type="video/mp4">
          </source>
        </video>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://plan-it-app.netlify.com/" target="_blank">Plan It</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/JessieW0010/Plan-It"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li style={{textAlign: 'left'}}>A two person project built over 2 weeks time.</li>
              <li style={{textAlign: 'left'}}>This mobile application allows users to collaboratively plan a group trip.</li>
              <li style={{textAlign: 'left'}}>Built using React Native and Redux for state management and a Ruby on Rails api server. Firebase used for image storage.</li>
              <li style={{textAlign: 'left'}}>This app is still in development and preparing for Apple store deployment in Spring 2020.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="spotlight">
      <Carousel interval="100000" className="image">
          <Carousel.Item>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{width: '450px', height: '300px'}} src={pic2} alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{width: '450px', height: '300px'}} src={schedulerGif} alt="" />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://interview-scheduler.netlify.com/" target="_blank">Interview Scheduler</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/JessieW0010/scheduler"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li style={{textAlign: 'left'}}>A React-based responsive web application in which users can book/cancel interviews.</li>
              <li style={{textAlign: 'left'}}>Built using a concise API and WebSocket server to build a real-time experience.</li>
              <li style={{textAlign: 'left'}}>Practiced continuous integration and deployment using CircleCI and Netlify.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="spotlight">
      <Carousel className="image">
          <Carousel.Item>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{width: '450px', height: '300px'}} src={geopinHome} alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{width: '450px', height: '300px'}} src={geopinMap} alt="" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{width: '450px', height: '300px'}} src={pic3} alt="" />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="content">
          <div style={{display: 'flex', paddingBottom: '2%'}}>
            <h2><a style={{borderBottom: "none"}} href="https://geopin.ca" target="_blank">GeoPin</a></h2>
            <a style={{display: 'flex', alignItems: 'center', borderBottom: 'none', paddingLeft: '5%', textDecoration: 'none'}} href="https://github.com/t5krishn/GeoPin"><i className="fab fa-github-alt" style={{padding: '1%', color: 'white', fontSize: '30px'}}></i></a>
          </div>
          <p>
            <ul>
              <li style={{textAlign: 'left'}}>A three person group project built over a week.</li>
              <li style={{textAlign: 'left'}}>Uses Google Map's api to build a responsive web application that allows users to collaborate and share maps of different interests.</li>
              <li style={{textAlign: 'left'}}>Built on RESTful Express architecture, PostgreSQL, jQuery, and deployed to Heroku.</li>
            </ul>
          </p>
        </div>
      </section>
    </section>
  );
}
