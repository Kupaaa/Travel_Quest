/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './footer.css'
import video from '../../Assets/video1.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import AOS from 'aos'; // Import AOS (Animate On Scroll) library
import 'aos/dist/aos.css'; // Import AOS styles



const Footer = () => {
    // Initialize AOS (Animate On Scroll) library for animations
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);


  return (
    <section className='footer'>
    <div className="videoDiv">
      <video src={video} loop autoPlay muted type="video/mp4"></video>
    </div>

    <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCT</small>
          <h1>Travel with US</h1>
        </div>

        <div data-aos="fade-up" className="inputDiv flex">
          <input type="text" placeholder='Enter Email Address' />
          <button data-aos="fade-up" className='btn flex' type='submit'>
          SEND <FiSend className='icon' />
          </button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
            <MdOutlineTravelExplore className="icon" />Travel Quest.
            </a>
          </div>

          <div data-aos="fade-up" className="footerPragraph">
          Explore the world with us. From stunning landscapes to rich cultures, we offer adventures, relaxation, and history. 
          Our curated destinations promise unforgettable experiences. 
          Begin your journey today and discover the wonders of our planet.
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          <FaTripadvisor className="icon"/>
          </div>
        </div>

        <div className="footerLinks grid">

          {/* Group One */}

          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Services
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Insurance
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Agency
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Tourism
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Payment
            </li>
          </div>

          {/* Group Two */}

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
            PARTNERS
            </span>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Booking
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            RentCar
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            HostelWorld
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Trivago
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            TripAdvisor
            </li>

          </div>

          {/* Group Three */}

          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Paris
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Canada
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Spain
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Peru
            </li>

            <li className="footerList flex">
            <FiChevronRight className='icon'/>
            New Zealand
            </li>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website</small>
            <small>All Rights Reserved © 2024 Asanga.
            </small>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer