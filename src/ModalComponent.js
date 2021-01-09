import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edittask } from "./js/action/ActionTask";

const ModalComponent = ({ handleClose, show, id }) => {
  const [taskModified, setTaskModified] = useState(" ");
  const handleChange = (e) => {
    setTaskModified(e.target.value);
  };
  const edit = (id) => {
    dispatch(edittask({id:id, taskModified:taskModified }))
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Edit Your Task Here"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              edit(id);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
