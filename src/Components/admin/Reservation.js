import React, {useState, useEffect} from 'react'
import "./styles.css";
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import { Table, Row, Col, DeleteButton, Popconfirm } from 'antd';
import Button from 'antd/lib/button';
import axios, { Axios } from 'axios'
import DeleteOutlined from '@mui/icons-material/DeleteOutline'

import {useParams} from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';

import {FcSmartphoneTablet} from 'react-icons/fc'


 

const Reservation = () =>{
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [reservations, setReservations] = useState([])

    const {id}=useParams
    const columns =[
        {
            title:'email',
            dataIndex:'email',
            key:'email'
    
        } ,
        {
            title:'destination',
            dataIndex:'destination',
            key:'destination'
    
        },
        {
          title:'classe',
          dataIndex:'classe',
          key:'classe'
    
        },
        {
            title:'nombre',
            dataIndex:'nombre',
            key:'nombre'
    
        },
        {
            title:'name',
            dataIndex:'name',
            key:'name'
    
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

              <Popconfirm title="Sure to delete?" onConfirm={() => deleteReservation(record._id)}>
                <Button>Annuler</Button>
              </Popconfirm>

          </span>
        }
        
    ];

    const deleteReservation = async (_id) => {
       await axios.delete(`http://127.0.0.1:8000/delete_reservation/${_id}`)
       getData()
      };

        useEffect(() => {
            getData() 
        }
        , [])

    const getData = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/get_all_reservations/')
        setloading(false)
        setdata(  res.data.map(row =>({
          email:row.email,
          destination:row.destination,
          nombre:row.nombre,
          classe:row.classe,
          name:row.name,
          date:row.date,
          _id:row._id,
        })) );     
    }

    return (
        
                <Content  style={{padding:50}}>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                            <h2 style={{posision : "center", color:'white'}}>Liste des Reservations</h2>
                            <br/>
                            <br/>
                            <br/>
                            <Table dataSource={data} columns={columns} pagination={{ pageSize: 50 }} scroll={{ x: "10vh"}}/>
                            Delete
                        </Col>
                        <Col span={3}/>
                    </Row>
                </Content>
        
    )
}

export default Reservation