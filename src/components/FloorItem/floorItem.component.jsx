import React, { useRef, useState } from "react";
import "./floorItem.style.css";
import { Link } from "react-router-dom";


export default function FloorItem() {
  const firstBlock = useRef(null);
  const secondBlock = useRef(null);
  const [floorSrc, setFloorSrc] = useState("");
  const [floorSold, setFloorSold] = useState(false);
  const [floorId , setFloorId ] = useState()
  const [isPhotoChanging, setIsPhotoChanging] = useState(false);
  const schemref = useRef(null)

  function changeTop() {
    console.log("changed");
    firstBlock.current.style.transform = "translateY(-100vh)";
    secondBlock.current.style.transform = "translateY(-100vh)";
    schemref.current.style.display = "flex"
  }

  const floorsSchem = [
    {
      id: 1,
      src: "https://i.ibb.co/k9VJ07G/image-2.png",
    },
    {
      id: 2,
      src: "https://i.ibb.co/Jxf9FSR/image-1.png",
    },
    {
      id: 3,
      src: "https://i.ibb.co/q5GzqkR/image-3.png",
    },
    {
      id: 4,
      src: "https://i.ibb.co/k9VJ07G/image-2.png",
    },
    {
      id: 5,
      src: "https://i.ibb.co/q5GzqkR/image-3.png",
    },
    {
      id: 6,
      src: "https://i.ibb.co/Jxf9FSR/image-1.png",
    },
    {
      id: 7,
      src: "https://i.ibb.co/q5GzqkR/image-3.png",
    },
    {
      id: 8,
      src: "",
    },
    {
      id: 9,
      src: "",
    },
    {
      id: 10,
      src: "",
    },
    {
      id: 11,
      src: "",
    },
    {
      id: 12,
      src: "",
    },
    {
      id: 13,
      src: "",
    },
    {
      id: 14,
      src: "",
    },
    {
      id: 15,
      src: "",
    },
    {
      id: 16,
      src: "",
    },
    {
      id: 17,
      src: "",
    },
    {
      id: 18,
      src: "",
    },
    {
      id: 19,
      src: "",
    },
    {
      id: 20,
      src: "",
    },
    {
      id: 21,
      src: "",
    },
    
  ];

  function showFloorPhoto(event) {
    const floorId = event.target.dataset.id;
    setFloorId(floorId);
  
    setIsPhotoChanging(true);
  
    const floorSchem = floorsSchem.find((floor) => floor.id === parseInt(floorId));
    if (floorSchem.src === "") {
      setFloorSrc("Продано");
      setFloorSold(true);
    } else {
      setFloorSrc(floorSchem.src);
      setFloorSold(false);
    }
  
    setTimeout(() => {
      setIsPhotoChanging(false);
    }, 300);
  }
  
  return (
    <div className="floor_container">
      <div className="first_block" ref={firstBlock}>
        <Link to={"/"}>
          <div className="back">
            <i className="fa-solid fa-circle-arrow-left arico" />
            <p>Назад</p>
          </div>
        </Link>
        <div className="slidedown">
          <h1>ВЫБЕРИ КВАРТИРУ МЕЧТЫ</h1>
          <div onClick={changeTop}>
            <i className="fa-solid fa-circle-arrow-down downico"></i>
          </div>
        </div>
      </div>

      <div className="second_block" ref={secondBlock}>
        <Link to={"/"}>
          <div className="back">
            <i className="fa-solid fa-circle-arrow-left arico" />
            <p>Назад</p>
          </div>
        </Link>

        <div className="schem_cont" ref={schemref}>
         
          <div
            className="floors"
            data-id="21"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="20"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="19"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="18"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="17"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="16"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="15"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="14"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="13"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="12"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="11"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="10"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="9"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="8"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="7"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="6"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="5"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="4"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="3"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="2"
            onClick={showFloorPhoto}
          ></div>
          <div
            className="floors"
            data-id="1"
            onClick={showFloorPhoto}
          ></div>
        </div>
        <div className="floor_num">{floorId}</div>
    <h1 style={{textAlign:"center"}}>Выберите Этаж</h1>
      <div className="schemas_content">
      {floorSold ? (
          <p className="sold">{floorSrc}</p>
        ) : (
        <img
  src={floorSrc}
  alt=""
  className={`floor_photo ${isPhotoChanging ? 'changing' : ''}`}
  style={{ height: isPhotoChanging ? 0 : 'auto' }}
/>

        )}
      </div>
      </div>
    </div>
  );
}