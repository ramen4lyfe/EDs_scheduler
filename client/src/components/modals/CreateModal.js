import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateForm from '../../forms/CreateForm'; 

const CreateModal = () => {
  // const [gameName, setGameName] = useState("")
  // const [date, setDate] = useState("")
  // const [startTime, setStartTime] = useState("")
  // // const [endTime, setEndTime] = useState("")
  // const [hostEmployee, setHostEmployee] = useState("")
  // const [gmEmployee, setGmEmployee] = useState("")

  // const [userList, setUserList] = useState([])

  // const [errors, setErrors] = useState("");
  // const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   useEffect(() =>{
//     axios.get("http://localhost:8000/api/user/")
//     .then((res=>{
//         console.log(res);
//         console.log(res.data);
//         setUserList(res.data);
//     }))
//     .catch((err)=>console.log(err))
// }, [])

  // const handleSubmit = (e) => {
  //   // e.preventDefault()
  //   axios.post("http://localhost:8000/schedule", {
  //     gameName, 
  //     date, 
  //     startTime, 
  //     // endTime, 
  //     hostEmployee, 
  //     gmEmployee})
  //   .then(response => {
  //     console.log('Event Created Succesfully', response);
  //     setGameName("");
  //     setDate("");
  //     setStartTime("");
  //     // setEndTime("");
  //     setHostEmployee("");
  //     setGmEmployee("");
  //     navigate("/schedule/view");
  //     setShow(false);
  //     // window.location.reload(false)
  // })
  // .catch((err) => {
  //     console.log(err)
  //     setErrors(err.response.data.error.errors);
  // });
  // }


  return (
    <>
        <IconButton aria-label="create event" onClick={handleShow}>
            <AddBoxIcon color='success'/>
        </IconButton>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm />
        
        </Modal.Body>
        <Modal.Footer>
        {/* <Button variant="primary" type="submit" onClick={handleSubmit} id="createForm">
            Create
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal;
