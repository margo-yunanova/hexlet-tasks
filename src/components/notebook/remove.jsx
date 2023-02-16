import React from 'react';
import { Modal, FormGroup, Form, Button } from 'react-bootstrap';

const Remove = ({ show, setShow, indexTask, tasks, setTasks}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTasks(tasks.filter((task, i) => i !== indexTask ));
    setShow(false)
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to remove the task?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formAddTask">
          <Button
            variant="danger"
            type="submit"
            onClick={(evt) => handleSubmit(evt)}
          >
            Yes
          </Button>
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
