import React, {useState, useEffect, useRef} from 'react'
import "./styles.css";
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Table, Row, Col, Popconfirm } from 'antd';
import Button from 'antd/lib/button';
import axios from 'axios'
import {MdDoneOutline} from 'react-icons/md'

const User = () =>{


    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [RegisterError, setRegisterError] = useState(false)
    const [RegisterSuccess, setRegisterSuce] = useState(false)

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
          setRegisterSuce(true);
          setTimeout(() => {
            setRegisterSuce(false);
          }, 1500);
          console.log(res.data)
        })
        .catch((err) => {
            setRegisterError(true);
            setTimeout(() => {
                setRegisterError(false);
            }, 2000)
          console.log(err)
        })
      };

    const columns =[
        {
            title:'username',
            dataIndex:'username',
            key:'username'
    
        } ,
        {
            title:'password',
            dataIndex:'password',
            key:'password'
    
        } ,
    
        {
            title: 'Sr. #',
            width: 150,
            
            render: (text, record, index) => <span style={{fontWeight: 'bold'}}>
            {index+1}. &nbsp;
    
              <Popconfirm title="Sure to delete?" onConfirm={() => deleteReservation(record.username)}>
                <Button>Annuler</Button>
              </Popconfirm>
    
          </span>
        }
    ];
    
    const deleteReservation = async (username) => {
        await axios.delete(`http://127.0.0.1:8000/delete_user/${username}`)
        getData()
       };

    useEffect(() => {
        getData() }
    , [])

    const getData = async () =>{
        const res = await axios.get('http://localhost:8000/get_all_users/')
        setloading(false)
        setdata(  res.data.map(row =>({
          username:row.username,
          password:row.password
        })) );
                
    }

    return (
        
            
                <Content  style={{padding:50}}>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                             <h2 style={{posision : "center", color:'white'}}>Liste des utilisateurs</h2>
                        
                            <Button className='retour' type="primary" onClick={handleShow}><PersonAddIcon />Ajout utilisateur</Button>

                            <Modal show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >

                <Modal.Header closeButton>
                    <Modal.Title className='title' >Se connecter</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                <Form action="" onSubmit={register} id="sign-In-form">
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
                            Ajouter
                        </button>
                    </div>
                    
                        </Form.Group>
                </Form>
                </Modal.Body>
                <br />
                    <Modal.Footer>
                    {RegisterError ? (
                        <p className='error'>Utilisateur deja existe</p>
                    ) : (
                      ""  
                    )}
                    {RegisterSuccess ? (
                        <p className='succes'><MdDoneOutline />Ajout avec succces<MdDoneOutline /></p>
                    ) : (
                      ""  
                    )}
                    </Modal.Footer>
                </Modal>
                            <br/>
                            <br/>
                            <br/>
                            <Table dataSource={data} columns={columns} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                            Delete
                        </Col>
                        <Col span={3}/>
                    </Row>


                </Content>
        
    )
}

export default User