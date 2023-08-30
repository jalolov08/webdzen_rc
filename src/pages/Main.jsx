import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Header from '../components/Header/header.component'
import Banner from '../components/Banner/banner.component'
import Footer from '../components/Footer/footer.component'
import AboutRc from '../components/AboutRC/aboutrc.component'
import SliderComponent from '../components/Slider/slider.component'



export default function Main() {
  document.title = "Главная"
  return (
    <div >
      <Header />


      <Banner />
      <AboutRc />
    <div style={{width:"100%" , padding:"80px"}}>
    <SliderComponent />
    </div>
      <Footer />
    {/* <Canvas>
      
<Suspense fallback={null}>
  <ambientLight />
  
  <OrbitControls />

</Suspense>
    </Canvas>
      */}
    </div>
  )
}
