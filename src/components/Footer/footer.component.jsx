import React from 'react'
import './footer.style.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer_item'>
<ul className='footer_nav'>
<Link to={'/home'} style={{textDecoration:"none"}}><li className='footer_nav_item'>Главная</li></Link>
<Link  style={{textDecoration:"none"}} to={"/floors"}><li className='footer_nav_item'>Выбор квартиры</li></Link>
<li className='footer_nav_item'>Контакты</li>

</ul>
<ul className='footer_contact'>
    <li className='footer_contact_item'>gk-b72@mail.ru</li>
    <li className='footer_contact_item'>+7 (3452) 533-799</li>
    <li className='footer_contact_item'>Ботаническая, 1, к1, Тюмень, Россия, 625001</li>


</ul>

    </div>
    <p className='devby'>Dev by <a href="https://dreamparkpro.com">DreamParkPro.com</a></p>
    </div>
  )
}
