import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdateModal from './modals/UpdateModal';
import moment from 'moment';


const EventList = () => {

    const [eventList, setEventList] = useState([]);
    let events = [];
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/schedule")
        .then((res=>{
            console.log(res);
            console.log(res.data);

            // for(let i=0; i < res.data.length;i++){
            //     let d = new Date(res.data[i].date);
            //     res.data[i].date = d.toDateString();
            //     console.log(res.data[i].date);
            // }
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
            <Card className="text-center shadow-sm m-5" >
                <Card.Body>
                    <Card.Title>Daily Work Schedule</Card.Title>
                    <Table striped hover>
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
                                <tr>
                                    <th>{moment(event.date).format('dddd, MMM Do')}</th>
                                    <th>{moment(event.startTime).format('h:mm A zz')} - {moment(event.endTime).format('h:mmAZ')}</th>
                                    <th>{event.gameName}</th>
                                    <th>{event.hostEmployee}</th>
                                    <th>{event.gmEmployee}</th>
                                    <th className="btn-group" role="group" aria-label="Action Buttons">
                                        <UpdateModal id={event._id}/>
                                        <Button variant="primary" type="submit" onClick={() => handleDelete(event._id)}>Delete</Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                    
                </Card.Body>
            </Card>
        </div>  )
}

export default EventList;