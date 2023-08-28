import React from 'react'
import './header.style.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
   <ul className='nav'>
    
   <Link to={"/"} style={{textDecoration:"none"}}> <li className='nav_item'>Главная</li></Link>
    <li className='nav_item'>Посмотреть 3д</li>
    <li className='nav_item'>Контакты</li>


   </ul>
           
         
                <div className='contacts'>
                   
                    <p>Dev by <a href="https://dreamparkpro.com">DreamParkPro.com</a></p>

        </div>
    </div>
  )
}
