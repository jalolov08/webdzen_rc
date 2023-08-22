import React from 'react'
import './header.style.css'
export default function Header() {
  return (
    <div className='header container-fluid'>
        <div className="row justify-content-between align-items-center" >
            <div className="col-auto">
                <button className='seebtn'>Подбор по параметрам</button>
            </div>
            <div className="col-auto">
                <p className='logo'>LOGO</p>
            </div>
            <div className="col-auto">
                <div className='contacts'>
                    <i class="fa-solid fa-phone phico"   />
                    <p>+7 812 566 56 86</p>
                </div>
            </div>
        </div>
    </div>
  )
}
