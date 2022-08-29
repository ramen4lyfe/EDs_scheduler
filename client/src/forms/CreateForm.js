import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import TimePicker from 'react-time-picker'

const CreateForm = () => {

    const [gameName, setGameName] = useState("")
    const [date, setDate] = useState("")
    const [startTime, setStartTime] = useState("")
    const [hostEmployee, setHostEmployee] = useState("")
    const [gmEmployee, setGmEmployee] = useState("")
    const [userList, setUserList] = useState([])
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/schedule", {
        gameName, 
        date, 
        startTime, 
        hostEmployee, 
        gmEmployee})
    .then(response => {
        console.log('Event Created Succesfully', response);
        setGameName("");
        setDate("");
        setStartTime("");
        setHostEmployee("");
        setGmEmployee("");
        navigate("/schedule/view");
        window.location.reload(false)
    })
    .catch((err) => {
        console.log(err)
        setErrors(err.response.data.error.errors);
    });
    }

    const [value, setValue] = useState([1, 3]);
    const handleChange = (val) => setValue(val);
    

return (
    <div>
    <InputGroup className="mb-3" controlId="gameName">
        <InputGroup.Text id="Game">Game</InputGroup.Text>
        <Form.Select value={gameName} onChange={(e) => setGameName(e.target.value)} aria-label="Select a game">
        <option defaultValue>Select a game</option>
        <option value="Hostage">Hostage</option>
        <option value="B.O.X">B.O.X</option>
        <option value="Nursery">Nursery</option>
        </Form.Select>
        {errors.gameName ? <p className="text-danger">{errors.gameName.message}</p> : null}
    </InputGroup>

    <InputGroup className="mb-3" controlId="date" >
        <InputGroup.Text id="date">Date</InputGroup.Text>
        <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Enter Date" />
        {errors.date ? <p className="text-danger">{errors.date.message}</p> : null}
    </InputGroup>
    
    <InputGroup className="mb-3" controlId="startTime" >
        <InputGroup.Text id="startTime">Time</InputGroup.Text>
        <Form.Control value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" placeholder="Enter start time" />
        {errors.startTime ? <p className="text-danger">{errors.startTime.message}</p> : null}
    </InputGroup>
    
    <InputGroup className="mb-3" controlId="host">
        <InputGroup.Text id="host" >Host</InputGroup.Text>
        <Form.Select value={hostEmployee} onChange={(e) => setHostEmployee(e.target.value)} aria-label="Select a Host">
        <option defaultValue>Select a Host</option>
        <option value="Quang">Quang</option>
        <option value="Peter">Peter</option>
        <option value="HHH">HHH</option>
        {/* {userList.map((user, index) => (
            <option value={`${user._id}`}>{user.name}</option>
        ))} */}
        </Form.Select>
        {errors.hostEmployee ? <p className="text-danger">{errors.hostEmployee.message}</p> : null}
    </InputGroup>
    
    <InputGroup className="mb-3" controlId="gm">
        <InputGroup.Text id="gm">GM</InputGroup.Text>
        <Form.Select value={gmEmployee} onChange={(e) => setGmEmployee(e.target.value)} aria-label="Select a Game Master">
        <option defaultValue>Select a Game Master</option>
        <option value="Quang">Quang</option>
        <option value="Peter">Peter</option>
        <option value="HHH">HHH</option>
        {/* {userList.map((user, index) => (
            <option value={`${user._id}`}>{user.name}</option>
        ))} */}
        </Form.Select>
        {errors.gmEmployee ? <p className="text-danger">{errors.gmEmployee.message}</p> : null}
    </InputGroup>
    {/* this div is for block button */}
    <div className="d-grid gap-2">
    <Button variant="primary" type="submit" onClick={handleSubmit} id="createForm" >
        Create
    </Button>
    </div>
    </div>
)
}

export default CreateForm