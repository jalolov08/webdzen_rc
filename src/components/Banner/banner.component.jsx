import React, { useState , useEffect } from "react";
import "./banner.style.css";
import { Link } from "react-router-dom";

export default function Banner() {
  const floors = [
    {
      id:1,
      apartmentsAvailable:10,
      area:"43m-78m",
      image:
      "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
     {
      id:2,
      apartmentsAvailable:1,
      area:"60m",
      image:
      "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id:3,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:4,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:5,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:6,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:7,
      apartmentsAvailable:4,
      area:"43m-78m",
      image:
      "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",
    },
    {
      id:8,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:9,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:10,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:11,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:12,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:13,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:14,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:15,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:16,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:17,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:18,
      apartmentsAvailable:3,
      area:"38m-59m",
      image:
      "https://b-72.ru/upload/resize_cache/iblock/369/250_250_1/369d30054c17fe31d59ea72f32f532a8.png",    },
    {
      id:19,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:20,
      apartmentsAvailable:0,
      area:0,
    },
    {
      id:21,
      apartmentsAvailable:0,
      area:0,
    },
    

  ]
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateSelectedFloor = (floor) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedFloor(floor);
      setIsAnimating(false);
    }, 200); 
  };

  const handleFloorClick = (event) => {
    const selectedId = event.target.dataset.id;
    const floor = floors.find((floor) => floor.id == selectedId);
    updateSelectedFloor(floor);
  };

  useEffect(() => {
    if (selectedFloor) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); 
    }
  }, [selectedFloor]);

  return (
    <div className={`bannercont ${isAnimating ? "animating" : ""}`}>
    <div className="wrapper">
        <div className="home">
    <svg width="373" height="794" className="build" viewBox="0 0 373 794" fill="none" xmlns="http://www.w3.org/2000/svg">
<path data-id="21" onClick={handleFloorClick}  d="M4.55225 132.713L149.94 7.40459L176.115 27.34L211.111 0L367.31 137.839V180.273L211.111 62.3694H149.94L4.55225 171.16V132.713Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="20" onClick={handleFloorClick}  d="M4.55225 171.16L149.94 62.3694H211.111L367.31 180.273V210.461L211.111 98.8228H149.94L4.55225 201.917V171.16Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="19" onClick={handleFloorClick}  d="M4.55225 201.917L149.94 98.8228H211.111L367.31 210.461V240.364L211.111 132.713H149.94L4.55225 230.681V201.917Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="18" onClick={handleFloorClick}  d="M149.94 132.713H211.111L367.31 240.364V268.559L211.111 171.16H149.94L4.55225 261.439V230.681L149.94 132.713Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="17" onClick={handleFloorClick}  d="M149.94 171.16L4.55225 261.439V291.058L149.94 205.905H211.111L367.31 298.177V268.559L211.111 171.16H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="16" onClick={handleFloorClick}  d="M149.94 205.905L4.55225 291.058V320.961L149.94 237.517H211.111L367.31 326.657V298.177L211.111 205.905H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="15" onClick={handleFloorClick}  d="M149.94 237.517L4.55225 320.961V349.44L149.94 268.559H211.111L367.31 356.275V326.657L211.111 237.517H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="14" onClick={handleFloorClick}  d="M149.94 268.559L4.55225 349.44V380.482L149.94 302.734H198.876L367.31 385.609V356.275L211.111 268.559H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="13" onClick={handleFloorClick}  d="M149.94 302.734L4.55225 380.482V408.392L149.94 338.618H198.876L367.31 415.797V385.609L198.876 302.734H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="12" onClick={handleFloorClick}  d="M149.94 338.618L4.55225 408.392V438.58L149.94 374.502H198.876L367.31 443.991V415.797L198.876 338.618H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="11" onClick={handleFloorClick}  d="M149.94 374.502L4.55225 438.58V468.198L149.94 408.392H198.876L367.31 473.325V443.991L198.876 374.502H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="10" onClick={handleFloorClick}  d="M149.94 408.392L4.55225 468.198V498.956L149.94 443.421L198.876 442.282L367.31 502.373V473.325L198.876 408.392H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="9"  onClick={handleFloorClick} d="M149.94 443.421L4.55225 498.956V529.713L149.94 481.583H198.876L367.31 531.137V502.373L198.876 442.282L149.94 443.421Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="8"  onClick={handleFloorClick} d="M149.94 481.583L4.55225 529.713V557.908L149.94 514.619H198.876L367.31 560.756V531.137L198.876 481.583H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="7"  onClick={handleFloorClick} d="M149.94 514.619L4.55225 557.908V586.102L149.94 547.655H198.876L367.31 588.381V560.756L198.876 514.619H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="6"  onClick={handleFloorClick} d="M4.55225 586.102L149.94 547.655H198.876L367.31 588.381L373 589.805V619.423L198.876 584.963H149.94L4.55225 616.624V616.86L0.853546 617.429L4.55225 616.624L4.55225 586.102Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="5"  onClick={handleFloorClick} d="M149.94 584.963L0.853546 617.429V648.472L4.83677 647.772L149.94 622.271H198.876L373 650.18V619.423L198.876 584.963H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="4"  onClick={handleFloorClick} d="M198.876 622.271H149.94L4.83677 647.772L4.83676 676.951L149.94 656.161H198.876L373 678.375V650.18L198.876 622.271Z" fill="#fff" fill-opacity="0.5"/>
<path data-id="3"  onClick={handleFloorClick} d="M149.94 656.161L4.83676 676.951L0 676.666L0.853547 707.424L149.94 692.33H198.876L373 708.563V678.375L198.876 656.161H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="2"  onClick={handleFloorClick} d="M149.94 692.33L0.853547 707.424L0.853546 736.757L149.94 729.637H198.876L373 738.181V708.563L198.876 692.33H149.94Z" fill="#fff" fillOpacity="0.5"/>
<path data-id="21"  onClick={handleFloorClick} d="M149.94 729.637L0.853546 736.757V794H373V738.181L198.876 729.637H149.94Z" fill="#fff" fillOpacity="0.5"/>
</svg>



    </div>
    <div className="content">
        {selectedFloor ? (
          <>
            <p className="floor_number">Этаж: {selectedFloor.id}</p>
            {selectedFloor.apartmentsAvailable > 0 ? (
              <>
               {selectedFloor.image && (
                  <img
                    src={selectedFloor.image}
                    alt={`Фото этажа ${selectedFloor.id}`}
                    className="floor_image"
                  />
                )}
                <p className="floor_num">Этаж: {selectedFloor.id}</p>
                <p className="floor_apartaments">Количество доступных квартир: {selectedFloor.apartmentsAvailable}</p>
                <p className="floor_area">Площадь квартир: {selectedFloor.area}</p>
                <Link to={'/floors'} style={{textDecoration: "none"}}>
                  <button className="see_floors">Посмотреть Квартиры</button>
                </Link>
               
              </>
            ) : (
              <p className="zero_apartaments">К сожалению, в этом этаже не осталось квартир</p>
            )}
          </>
        ) : (
          <p className="select_floor">Выберите этаж</p>
        )}
      </div>
    </div>
    </div>
  );
}
