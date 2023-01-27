import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import SignUpForm from '../Log/SignUpForm';
//import SignInForm from '../Log/SignInForm';
//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
//import AccountCircle from '@mui/icons-material/AccountCircle';

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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState(false);

    const userRef = useRef();
    const passwordRef = useRef();

    const register = (e) => {
      e.preventDefault();
      axios.post(
        "http://127.0.0.1:8000/register", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      ).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    };

    const login = (e) => {
      e.preventDefault();
      const usernameError = document.querySelector('.username.error');
      const passwordError = document.querySelector('.password.error');

      let data = new FormData()
      data.append("username", userRef.current.value);
      data.append("password", passwordRef.current.value);

      axios
        .post("http://127.0.0.1:8000/login", data)
        .then((res) => {
          console.log(res);
          if(res.data.errors){
            usernameError.innerHTML = res.data.errors.username
            passwordError.innerHTML = res.data.errors.password
          } else {
            window.location = "dashboard/reservation"
          }
          
      }).catch((err) => {
        setLoginError(true)
        setTimeout(() => {
          setLoginError(false)
        }, 2000)
        console.log(err);
      });
      
    };

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

          <Form action="" onSubmit={login} id="sign-In-form">
                <Form.Group className="mb-3">
                <Form.Label htmlFor='username'>Nom d'utilisateur</Form.Label>
                <br />
                  <Form.Control
                    name='username'
                    id='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="username"
                    ref={userRef}
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
                    value={password}
                    type="password"
                    placeholder="password"
                    ref={passwordRef}
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
           {loginError ? <p className='error'><BiError />Mot de passe/Nom d'utilisateur incorrect<BiError /></p> : ""}
          </Modal.Footer>
    </Modal>
    <ToastContainer />
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