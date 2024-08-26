import React, { useEffect } from 'react';
import './main.css'
import img2 from '../../Assets/img2.jpg'
import img1 from '../../Assets/img1.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import AOS from 'aos'; // Import AOS (Animate On Scroll) library
import 'aos/dist/aos.css'; // Import AOS styles


const Data = [
  {
    id: 1,
    imgSrc: img1, 
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURE RELAX',
    fees: '$700',
    description: 'The serene beauty of Bora Bora, a peaceful retreat for relaxation and cultural experiences.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'HISTORY SCENERY',
    fees: '$850',
    description: 'Explore the breathtaking views of Santorini, where history meets stunning landscapes.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURE TRADITION',
    fees: '$600',
    description: 'Experience the rich cultural heritage and serene temples of Kyoto, Japan.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Maui',
    location: 'Hawaii, USA',
    grade: 'NATURE ADVENTURE',
    fees: '$900',
    description: 'Dive into adventure in Maui with its stunning beaches, lush landscapes, and outdoor activities.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Paris',
    location: 'France',
    grade: 'ROMANCE HISTORY',
    fees: '$1200',
    description: 'Fall in love with Paris, the city of romance, rich in history, culture, and stunning architecture.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Banff',
    location: 'Canada',
    grade: 'NATURE SCENERY',
    fees: '$650',
    description: 'Explore the breathtaking beauty of Banff, surrounded by mountains, lakes, and pristine wilderness.'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'CULTURE ADVENTURE',
    fees: '$800',
    description: 'Discover Cape Town, a vibrant city where adventure meets rich cultural heritage.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'ART ARCHITECTURE',
    fees: '$750',
    description: 'Immerse yourself in the art and architecture of Barcelona, a city bursting with creativity.'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Queenstown',
    location: 'New Zealand',
    grade: 'ADVENTURE NATURE',
    fees: '$900',
    description: 'Get your adrenaline fix in Queenstown, the adventure capital of New Zealand.'
  },

  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'HISTORY ADVENTURE',
    fees: '$1100',
    description: 'Explore the ancient wonders of Machu Picchu, a journey through history and breathtaking landscapes.'
  }

];


const Main = () => {
    // Initialize AOS (Animate On Scroll) library for animations
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Top-Rated Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;