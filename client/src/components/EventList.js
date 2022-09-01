import { React, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CreateModal from './modals/CreateModal';
import UpdateModal from './modals/UpdateModal';
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtonGroup from '@mui/material/ButtonGroup'
import { EventContext } from './context/EventContext';

const EventList = () => {

    // const {}

    const [eventList, setEventList] = useState([]);
    let events = [];
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/schedule")
        .then((res=>{
            console.log(res);
            console.log(res.data);

            setEventList(res.data);            
        }))
        .catch((err)=>console.log(err))
    }, [])

    const handleDelete = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/schedule/${idFromBelow}`)
        .then((res)=>{
            console.log(res.data);
            const deletedEvent = eventList.filter((event) => {
                return event._id !== idFromBelow
            })
            setEventList(deletedEvent)
        })
        .catch((err)=>console.log(err))
    }
    

    return (
        <div className="App">
            <Card className="text-center shadow-sm m-2 p-2" >
                <Card.Body>
                    <div className="d-flex justify-content-between m-2 align-items-center">
                    <Card.Title>Daily Work Schedule</Card.Title>
                    <CreateModal handleSubmit/>
                    </div>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Game Time</th>
                                <th>Game Name</th>
                                <th>Host</th>
                                <th>Game Master</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventList.map((event, index) => (
                                <tr key={event._id}>
                                    <td>{moment(event.date).format('dddd, MMM Do')}</td>
                                    <td>{moment(event.startTime).format("hh:mm A")}</td>
                                    <td>{event.gameName}</td>
                                    <td>{event.hostEmployee}</td>
                                    <td>{event.gmEmployee}</td>
                                    <td>
                                        <UpdateModal id={event._id}/>
                                        <IconButton type="submit" onClick={() => handleDelete(event._id)}>
                                        <DeleteForeverIcon color='error' />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                    
                </Card.Body>
            </Card>
        </div>  )
}

export default EventList;