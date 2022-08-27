import {React, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateForm from '../../forms/CreateForm'; 

const CreateModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button variant="outline-secondary" type="submit" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal;
