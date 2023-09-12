import React from 'react'
import Banner from '../components/Banner/banner.component';
import Footer from '../components/Footer/footer.component';
import AboutRc from '../components/AboutRC/aboutrc.component';
import SliderComponent from '../components/Slider/slider.component';
import VideoPlayer from '../components/VideoPlayer/videoplayer.component';
import RcText from '../components/RCText/rctext.component';
import Header from '../components/Header/header.component';
import Cards from '../components/Cards/cards.component';
export default function Content() {
  return (
    <div>
        <Header />
     <AboutRc />
         <div style={{padding:"25px 80px"}}>
      
       
        <SliderComponent />
     </div>
     <RcText />
     <Cards />
     <Banner />
      <Footer />
    </div>
  )
}
