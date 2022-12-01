import React from 'react'
import Footer from '../Components/Footer'
import AboutUs from '../Components/HomePage/AboutUs'
import ContactUs from '../Components/HomePage/ContactUs'
import FetchDampakSinopsis from '../Components/HomePage/FetchDampakSinopsis'
import HomePageBG from '../Components/HomePage/HomePageBG'
import PenanggulanganSinopsis from '../Components/HomePage/PenanggulanganSinopsis'
import Navbar from '../Components/Navbar'


function HomePage() {
  return (
    <div id="HomePagee">
      <Navbar/>
        <HomePageBG/>
        <FetchDampakSinopsis/>
        <AboutUs/>
        <ContactUs/>
        <PenanggulanganSinopsis/>
        <Footer/>
    </div>    
  )
}

export default HomePage