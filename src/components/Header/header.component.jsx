import React from 'react'
import './header.style.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header container-fluid'>
        <div className="row justify-content-between align-items-center" >
            <div className="col-auto">
      <Link to={'/floors'} >       <button className='seebtn'>Выбрать квартиру</button></Link>
            </div>
            <div className="col-auto">
                <p className='logo'>LOGO</p>
            </div>
            <div className="col-auto">
                <div className='contacts'>
                    {/* <i class="fa-solid fa-phone phico"   /> */}
                    <p>Dev by <a href="https://dreamparkpro.com">DreamParkPro.com</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
