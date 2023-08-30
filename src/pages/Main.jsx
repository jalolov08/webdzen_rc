import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Header from '../components/Header/header.component'
import Banner from '../components/Banner/banner.component'
import Footer from '../components/Footer/footer.component'



export default function Main() {
  document.title = "Главная"
  return (
    <div >
      <Header />


      <Banner />
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
