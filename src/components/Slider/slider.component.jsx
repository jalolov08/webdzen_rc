import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import fourth from "../../assets/4.jpg";

export default function SliderComponent() {
    const PrevArrow = (props) => (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: "block",
             
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                zIndex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
            onClick={props.onClick}
        >
            <span >&#8592;</span>
        </div>
    );

    const NextArrow = (props) => (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: "block",
             
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "10px",
                zIndex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
            onClick={props.onClick}
        >
            <span>&#8594;</span>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, 
        zIndex: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings} touchMove={true}>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
                <img src={first} style={{ width: "100%", height: "100%", borderRadius: "5px" }} alt="First" />
            </div>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
                <img src={second} style={{ width: "100%", height: "100%", borderRadius: "5px" }} alt="Second" />
            </div>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
                <img src={third} style={{ width: "100%", height: "100%", borderRadius: "5px" }} alt="Third" />
            </div>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
                <img src={fourth} style={{ width: "100%", height: "100%", borderRadius: "5px" }} alt="Fourth" />
            </div>
        </Slider>
    );
}
