import React, { useEffect } from 'react';
import './home.css';
import video from '../../Assets/video.mp4'; 
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import AOS from 'aos'; // Import AOS (Animate On Scroll) library
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  // Initialize AOS (Animate On Scroll) library for animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className='home'>
      {/* Overlay for darkening the background */}
      <div className='overlay'></div>
      
      {/* Background video */}
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        {/* Section for introductory text */}
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
          Search Your Holiday
          </h1>
        </div>

        {/* Card section for input fields and filters */}
        <div data-aos="fade-up" className="cardDiv grid">
          {/* Destination search input */}
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here' />
              <GrLocation className="icon" />
            </div>
          </div>    

          {/* Date selection input */}
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* Price range input */}
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          {/* More filters button */}
          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>More Filters</span>
          </div>
        </div>

        {/* Footer section with social media and other icons */}
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <FaInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
