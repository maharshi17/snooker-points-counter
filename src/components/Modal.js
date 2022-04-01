import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddPlayerModal(props) {

    const [playerName, setPlayerName] = useState("");
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Player
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            id="playerName"
            autoFocus
            placeholder="Enter Player's Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {props.onAdd(playerName); setPlayerName("")}} disabled={playerName.length === 0}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default AddPlayerModal;