import React from "react";
import { useSpring, animated } from "react-spring";
import "./aboutrc.style.css";
import rc from '../../assets/rc.jpg';
import RcText from "../RCText/rctext.component";

export default function AboutRc() {
  const benefits = [
    { id: 1, text: "Комарово парк — перспективный развивающийся район" },
    { id: 2, text: "Комплекс состоит из 14 домов" },
    { id: 3, text: "5 минут пешком до будущих школ, детских садов и больницы" },
    { id: 4, text: "Подземный паркинг — авто в тепле 24/7" },
    { id: 5, text: "Красивая архитектура" },
    { id: 6, text: "37 Га парков и скверов" },
  ];

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideIn = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-200%)" },
    config: { tension: 200, friction: 20 }, 
  });

  return (
    <animated.div className="aboutrc" style={slideIn}>
      <animated.div className="texts" style={fade}>
        <div>
        <h1 className="about_heading">
          Жилой комплекс в сердце нового района «Комарово парк»
        </h1>

    <div style={{display:"flex" , flexWrap:"wrap" , height:"500px", maxHeight:"590px"  }}>
    <div className="benefits_cont">
          {benefits.map((el) => (
            <div key={el.id} className="benefit_card" style={fade}>
              <i className="fa-solid fa-square-check chck"></i>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      <RcText /> 
    </div>
        </div>
      </animated.div>
      <animated.img className="aboutrc_img" src={rc} style={fade} />
    </animated.div>
  );
}
