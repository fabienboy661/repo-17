import React, {useEffect} from 'react'
import './footer.css'
import footer1 from '../../Assets/footer1.jpg'
import img10 from '../../Assets/img10.jpg'
import { FiSend } from 'react-icons/fi'
import {SiYourtraveldottv} from 'react-icons/si'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs' 
import { FiChevronRight } from 'react-icons/fi'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  //react hook, scrol animation
  useEffect(()=>{
    Aos.init({duration : 2000})
  }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
      <img src={footer1} type="image/jpg" alt="" />
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>CONTACT NOUS</small>
              <h2>Voyagons ensemble</h2>
            </div>

            <div className="inputDiv Grid">
              <input data-aos="fade-up" type="text" placeholder='Adresse email' />
              <input data-aos="fade-up" type="text" placeholder='Nom complet' />
              <input data-aos="fade-up" type="text" placeholder='Objet' />
              <textarea data-aos="fade-up" name="" id='' cols='' rows='' placeholder='Message'  />
              <button data-aos="fade-up" className='btn flex' type='submit'>
                 <FiSend className='icon'/>
              </button>
            </div>
        </div>
        
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/d" className='logo flex'>
               <SiYourtraveldottv/> .Fabien
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Je suis un edudiant en 3 eme Annee en Licence 
              Professinnel a L'Ecole National d'Informatique FIANARANTSOA
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillTwitterCircle className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <BsFacebook className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            
            {/*Groupe 1*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                 NOTRE AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Assurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agences
              </li>
            </div>

            {/*Groupe 2 */}
            <div data-aos="fade-up" 
            data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                 NOTRE AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Assurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agences
              </li>
            </div>

            {/*Groupe 3 */}
            <div data-aos="fade-up" 
            data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                 NOTRE AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Assurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agences
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Elia" src={img10} type="image/jpg"/>
            </Stack>
            <small>Meuilleur site de voyage</small>
            <small>COPYRIGTHS - Fabien 2022</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer