import React from "react";
import "./aboutrc.style.css";
export default function AboutRc() {
    const benefits = [
        {id:1 ,  text:"Комарово парк — перспективный развивающийся район "},
        {id:2 ,  text:"Комплекс состоит из 14 домов"},
        {id:3 ,  text:"5 минут пешком до будущих школ, детских садов и больницы  "},
        {id:4 ,  text:"Подземный паркинг — авто в тепле 24/7 "},
        {id:5 ,  text:"Красивая архитектура "},
        {id:6 ,  text:"37 Га парков и скверов "},


        

    ]
  return (
    <div className="aboutrc">
      <div className="texts">
        <h1 className="about_heading">
          Жилой комплекс в сердце нового района «Комарово парк»{" "}
        </h1>
        <div className="benefits_cont">
    {benefits.map(el => (
        <div key={el.id} className="benefit_card">
            <i class="fa-solid fa-square-check chck"></i>
            <p>{el.text}</p>
            </div>
    ))}
        </div>
      </div>
      <img className="aboutrc_img" src="https://b-72.ru/upload/resize_cache/iblock/ff9/1200_1200_1/ff966e37555c885ce0c1e0dc50979999.jpg" />
    </div>
  );
}
