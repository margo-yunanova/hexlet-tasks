import React from 'react';
import { Modal, FormGroup, Form, Button } from 'react-bootstrap';

const Remove = ({ showRemoveModal, setShowRemoveModal, indexTask, setTasks}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTasks(tasks => tasks.filter((_, i) => i !== indexTask ));
    setShowRemoveModal(false)
  }

  return (
    <Modal show={showRemoveModal} onHide={() => setShowRemoveModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to remove the task?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formAddTask">
          <Button
            variant="danger"
            type="submit"
            onClick={handleSubmit}
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
