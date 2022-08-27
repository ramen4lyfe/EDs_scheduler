import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'


export default class TestModal extends Component {
    state = {name: null}
    handleChange = (e) => this.setState({name: e.target.value})

    render(){
        return(
    <>
        <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
        >
        </div>

    <Modal 
        show={isOpen} 
        onHide={closeModal}
        backdrop="static"
    >
    <Modal.Header closeButton>
    <Modal.Title>Modal Form Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form.Group >
            <Form.Label>Name: </Form.Label>
            <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input"/>           
        </Form.Group>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => handleSubmit(this.state.name)}>
            Submit
        </Button>
    </Modal.Footer>
</Modal>
</>
)
}
}