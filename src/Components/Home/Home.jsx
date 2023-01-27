import React, {useEffect} from 'react'
import './home.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {AiFillGooglePlusCircle} from 'react-icons/ai'
import {AiOutlineAmazon} from 'react-icons/ai'
import { Link} from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  
  //react hook, scrol animation
  useEffect(()=>{
    Aos.init({duration : 2000})
 }, [])

  return (
    <section id='menu'>

        <h2 data-aos="fade-right">Bienvenue</h2>
        <h4 data-aos="fade-left">Voyagez en securite</h4>
        <p data-aos="fade-up">Nous vous offrons des services fiable et rapide avec des equipes specialisees </p>
        <p data-aos="fade-up">et des materieles de luxe</p>
        <Link to="/forms" data-aos="fade-up" className='btn-reservation'>Reserver Maintenant</Link>
        <br/>
        <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <SiGmail className="icon"/>
            </div>
            <div className="leftIcons">
            <AiFillGooglePlusCircle className="icon"/>
            <AiOutlineAmazon className="icon"/>
            </div>
          </div>
    </section>
    
  )
}

export default Home