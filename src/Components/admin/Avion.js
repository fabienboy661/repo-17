import React, {useState, useEffect, useRef} from 'react'
import "./styles.css";
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Table, Row, Col, Popconfirm } from 'antd';
import Button from 'antd/lib/button';
import axios from 'axios'

import {FcSmartphoneTablet} from 'react-icons/fc'

const Avion = () =>{

    function refreshPage() {
        window.location.reload(false);
    }

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [numberplc, setNumberplc] = useState('');
    const [numbre, setNumbre] = useState('');

    const nameRef = useRef();
    const typeRef = useRef();
    const numberplcRef = useRef();
    const numbreRef = useRef();

    const handleForm = (e) => {
        e.preventDefault();
          axios.post(
            "http://127.0.0.1:8000/create_avion", 
            {
              name: nameRef.current.value,
              type: typeRef.current.value,
              numberplc: numberplcRef.current.value,
              numbre: numbreRef.current.value,
            },
          )
      };

    const columns =[
        {
            title:'Nom de l avion',
            dataIndex:'name',
            key:'name'
    
        } ,
        {
            title:'Type',
            dataIndex:'type',
            key:'type'
    
        } ,

        {
            title:'Nombre de place',
            dataIndex:'numberplc',
            key:'numberplc'
    
        } ,
        {
            title:'Numero',
            dataIndex:'numbre',
            key:'numbre'
    
        },
        {
            title:'_id',
            dataIndex:'_id',
            key:'_id'
    
        },
    
        {
            title: 'Sr. #',
            width: 150,
            
            render: (text, record, index) => <span style={{fontWeight: 'bold'}}>
            {index+1}. &nbsp;
    
              <Popconfirm title="Sure to delete?" onConfirm={() => deleteAvion(record._id)}>
                <Button>Annuler</Button>
              </Popconfirm>
    
          </span>
        }
    ];
    
    const deleteAvion = async (_id) => {
        await axios.delete(`http://127.0.0.1:8000/delete_avion/${_id}`)
        getData()
       };

    useEffect(() => {
        getData() }
    , [])

    const getData = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/get_all_avions')
        setloading(false)
        setdata(  res.data.map(row =>({
          name:row.name,
          type:row.type,
          numberplc:row.numberplc,
          numbre:row.numbre,
          _id:row._id,
        })) );
                
    }

    return (
        
            
                <Content  style={{padding:50}}>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                             <h2 style={{posision : "center", color:'white'}}>Liste des Avions disponible</h2>
                        
                            <Button className='retour' type="primary" onClick={handleShow}><LocalAirportIcon />Ajout avion</Button>

                            <Modal show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >

                <Modal.Header closeButton>
                    <Modal.Title className='title' >Ajout avion</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                <Form action="" onSubmit={handleForm} id="sign-In-form">
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor='name'>Nom de l'avion</Form.Label>
                        <br />
                        <Form.Control
                            name='name'
                            id='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="name"
                            ref={nameRef}
                            required
                            autoFocus
                        />
                        <br />

                        <Form.Label htmlFor='type'>Type</Form.Label>
                        <br />
                        <Form.Control
                            name='type'
                            id='type'
                            onChange={(e) => setType(e.target.value)}
                            value={type}
                            type="text"
                            placeholder="type"
                            ref={typeRef}
                            required
                            autoFocus
                        />
                        <br />

                        <Form.Label htmlFor='type'>Nombre de place</Form.Label>
                        <br />
                        <Form.Control
                            name='numberplc'
                            id='numberplc'
                            onChange={(e) => setNumberplc(e.target.value)}
                            value={numberplc}
                            type="text"
                            placeholder="numberplc"
                            ref={numberplcRef}
                            required
                            autoFocus
                        />
                        <br />

                        <Form.Label htmlFor='numbre'>Numero de l'avion</Form.Label>
                        <br />
                        <Form.Control
                            name='numbre'
                            id='numbre'
                            onChange={(e) => setNumbre(e.target.value)}
                            value={numbre}
                            type="text"
                            placeholder="numbre"
                            ref={numbreRef}
                            required
                            autoFocus
                        />
                        <br />
                        <div className="searchOptions form-group d-flex justify-content-center mt-4 justify-content-md-end gap-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={refreshPage}
                        >
                            Ajouter
                        </button>
                                    </div>
                    
                        </Form.Group>
                </Form>

                    </Modal.Body>
                    <Modal.Footer>
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

export default Avion