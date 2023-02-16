import React from 'react';
import { Modal, FormGroup, Form, Button } from 'react-bootstrap';

const Remove = ({ showRemoveModal, setShowRemoveModal, removeTask }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    removeTask();
    setShowRemoveModal(false);
  }

  return (
    <Modal show={showRemoveModal} onHide={() => setShowRemoveModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to remove the task?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formRemoveTask">
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
