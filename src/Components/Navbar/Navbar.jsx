import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import 'react-toastify/dist/ReactToastify.css';

import React, {useState, useRef} from 'react'
import './navbar.css'

import { Link} from "react-router-dom";

import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDotsCircleHorizontal} from 'react-icons/tb'
import {BiError} from 'react-icons/bi'
import {SiGnuprivacyguard} from 'react-icons/si'


const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //MOdal
    /** const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);
    const handleModals = (e) =>{
        if (e.target.id == "register"){
            setSignInModal(false);
            setSignUpModal(true);
        }else if (e.target.id == "login"){
            setSignUpModal(false);
            setSignInModal(true);
        }
    }*/

    const [active, setActive] = useState('navBar')

    //fonction pour toggle le navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    //fonction pour ferme le navBar
    const removeNavBar = ()=>{
        setActive('navBar')
    }

return (

<section className='navBarSection'>
   <header className="header flex">

      <div className="logoDiv">
        <Link to="/" className="logo flex">
          <h1><SiYourtraveldottv/>Voyage</h1>
        </Link>
      </div>
      <div className={active}>
  <ul className="navLists flex">

        <li className="navItem">
            <Link to="/" id="navLink">Acceuil</Link>
        </li>
        <li className="navItem">
            <Link to="/forms" id="navLink">Reservation</Link>
        </li>
        <li className="navItem">
          <Link to="/main" id="navLink">Promotion</Link>
        </li>
        <li className="navItem">
            <Link to="/footer" id="navLink">Contact</Link>
        </li>
                    
        <Button variant="primary" onClick={handleShow}>
            <SiGnuprivacyguard size={25} title="ESPACE PRIVE" />
        </Button>

        <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >

        <Modal.Header closeButton>
            <Modal.Title className='title' >Se connecter</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form action="" id="sign-In-form">
                <Form.Group className="mb-3">
                <Form.Label htmlFor='username'>Nom d'utilisateur</Form.Label>
                <br />
                  <Form.Control
                    name='username'
                    id='username'
                    onChange={(e) => setUsername(e.target.value)}
                   
                    type="text"
                    placeholder="username"
                    
                    required
                    autoFocus
                  />
                <br />

                <Form.Label htmlFor='password'>Mot de passe</Form.Label>
                <br />
                <Form.Control
                    name='password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    
                    type="password"
                    placeholder="password"
                    
                    required
                    autoFocus
                  />
                <br/>
                <div className="searchOptions form-group d-flex justify-content-center mt-4 justify-content-md-end gap-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Connexion
                  </button>
						    </div>
                </Form.Group>
          </Form>

        </Modal.Body>
           <Modal.Footer>
            <br />
        
          </Modal.Footer>
    </Modal>
  </ul>

    <div onClick={removeNavBar} className="closeNavbar">
       <AiFillCloseCircle className="icon"/>
    </div>

    </div>
      <div onClick={showNav} className="toggleNavbar">
        <TbDotsCircleHorizontal className="icon"/>
      </div>

  </header>
</section>

)
}

export default Navbar