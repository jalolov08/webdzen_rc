import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from "./1.jpg"
import second from "./2.jpg"
import third from "./3.jpg"
import fourth from "./4.jpg"


export default function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
        zIndex:1,
        arrows:true
      
      
    };
   

    return (
        <Slider {...settings} touchMove={true}>
        <img src={first} style={{width:"200px" , height:"200px"}} /> 
        <img src={second} style={{width:"200px" , height:"200px"}} /> 
        <img src={third} style={{width:"200px" , height:"200px"}} /> 
        <img src={fourth} style={{width:"200px" , height:"200px"}} /> 

             
        </Slider>
    );
}