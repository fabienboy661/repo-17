import React, {useEffect, useState, useRef} from 'react'
import './form.css'
import img from '../../Assets/img.jpg'
import {ImLocation} from 'react-icons/im'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import {AiFillGooglePlusCircle} from 'react-icons/ai'
import {AiOutlineAmazon} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {FcBusinessman} from 'react-icons/fc'
import {MdOutlineClass} from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

const Forms = () => {
   //react hook, scrol animation
   useEffect(()=>{
      Aos.init({duration : 2000})
   }, [])
   
   function refreshPage() {
    window.location.reload(false);
  }

  //recuperation des donnees
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [classe, setClasse] = useState('');
  const [nombre, setNumber] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const emailRef = useRef();
  const destinationRef = useRef();
  const classeRef = useRef();
  const nombreRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.Clipboard;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
        e.preventDefault();
    }
};

const preventMinus = (e) => {
  if (e.code === 'Minus') {
      e.preventDefault();
  }
};

  const handleForm = (e) => {
    e.preventDefault();
      axios.post(
        "http://127.0.0.1:8000/create_reservation", 
        {
          email: emailRef.current.value,
          destination: destinationRef.current.value,
          classe: classeRef.current.value,
          nombre: nombreRef.current.value,
          name: nameRef.current.value,
          date: dateRef.current.value,
        },
      )
  };
   

  return (
    <>
    <form className='home' action="" onSubmit={handleForm}
    id="form"
    >
    <div className="overlay"></div>
     <img src={img} type="image/jpg" alt="" />

     <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-left" className="smallText">
            SERVICE RAPIDE ET FIABLE
          </span>
        <br/>
        <br/>
        
          <h1 data-aos="fade-up" className="homeTitle">
          "Il faut voyager pour apprendre"
          </h1>

        </div>

          <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
              <label htmlFor='email'>Email</label>
                <div className="input flex">
                <input
                  name='email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder='@gmail.com'
                  ref={emailRef}
                  required
                  autoFocus
                />
                <MdOutlineAlternateEmail className="icon"/>
              </div>
            </div>
            <div className="destinationInput">
              <label htmlFor='destination'>Destination</label>
                <div className="input flex">
                <input
                  name='destination'
                  id='destination'
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                  type="text"
                  maxLength={15}
                  placeholder='Où allez-vous ?'
                  ref={destinationRef}
                  autoFocus
                  required
                  className="option">
                </input>
                <ImLocation className="icon"/>
              </div>
            </div>

            <div className="destinationInput">
              <label htmlFor='name'>Nom complet</label>
                <div className="input flex">
                <input 
                  maxLength={30}
                  type="text" 
                  placeholder='Votre nom complet'
                  name='name'
                  id='name'
                  onChange={(e) => setName(e.target.value.replace(/[^a-z ]/gi, ''))}
                  value={name}
                  ref={nameRef}
                  required
                  autoFocus
                  />
                <BsPersonCircle className="icon"/>
              </div>
            </div>

            <div className="destinationInput">
              <label htmlFor='nombre'>Passagers</label>
                <div className="input flex">
                <input
                  name='nombre'
                  id='nombre'
                  onChange={(e) => setNumber(e.target.value)}
                  value={nombre}
                  type="number"
                  min="1"
                  max={10}
                  step={1}
                  onPaste={preventPasteNegative}
                  onKeyPress={preventMinus}
                  ref={nombreRef}
                  required
                  autoFocus
                  />
                <FcBusinessman className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor='date'>Départ le</label>
                <div className="input flex">
                <input 
                  type='date' 
                  name='date'
                  id='date'
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  ref={dateRef}
                  required
                  autoFocus
                  />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor='classe'>Classe de siège</label>
                <div className="input flex">
                <select
                  name='classe'
                  id='classe'
                  onChange={(e) => setClasse(e.target.value)}
                  value={classe}
                  type="classe"
                  placeholder='classe'
                  ref={classeRef}
                  required
                  autoFocus  
                  className="option">
                <option>Classe économique</option>
                <option>Classe économique premium</option>
                <option>Classe affaire</option>
                <option>Première classe</option>
                </select>
                <MdOutlineClass className="icon"/>
              </div>
            </div>
            
            <div className="searchOptions flex">
                <button
								type="submit"
								className="btn btn-primary"
                onClick={refreshPage}
							>
								Valide reservation
							</button>
            </div>
            <div className="form-group d-flex justify-content-center mt-4 justify-content-md-end gap-3">
							
						</div>          
          </div>

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
     </div>

    </form>
    </>
  )
}

export default Forms