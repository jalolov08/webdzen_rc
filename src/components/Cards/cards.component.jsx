import React from "react";
import "./cards.style.css";
import { Link } from "react-router-dom";
export default function Cards() {
  const cardsData = [
    {
      id: 1,
      title: "Студия",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "III кв. 2026",
      price: "4 200 000₽",
      square: "42m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 2,
      title: "Студия",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "II кв. 2025",
      price: "3 500 000₽",
      square: "40m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 3,
      title: "Студия",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "IV кв. 2027",
      price: "4 000 000₽",
      square: "45m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 4,
      title: "Студия",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "III кв. 2025",
      price: "3 900 000₽",
      square: "39m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 5,
      title: "Студия",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "II кв. 2026",
      price: "3 750 000₽",
      square: "41m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 6,
      title: "Квартира",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "I кв. 2024",
      price: "11 500 000₽",
      square: "80m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 7,
      title: "Квартира 3-комнатная",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "IV кв. 2024",
      price: "8 200 000₽",
      square: "60m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id: 8,
      title: "Квартира 3-комнатная",
      desc: "Жилой комплекс «Отличие»",
      ready_date: "III кв. 2024",
      price: "7 900 000₽",
      square: "62m",
      image: "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
  ];
  
  return (
   <div className="cards_main">
     <div className="container ">
      <div className="row">
        {cardsData.map((el) => (
          <div className="col-md-3 mb-4" key={el.id}>
            <div className="card card_cont">
              <img src={el.image} className="card-img-top card_img" alt={el.title} />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text card_desc">{el.desc}</p>
                <p className="card-text card_date">{el.ready_date}</p>
                <p className="card-text card_square">{el.square}</p>
                <p className="card-text card_price">{el.price}</p>
                <div className="show_others">
                  <Link to={"/floors"} style={{ textDecoration: "none" }}>
                    <button className="btn btn-primary">Посмотреть</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
