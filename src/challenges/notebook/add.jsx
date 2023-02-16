import { useState } from "react";
import { Modal, FormGroup, FormControl, Button, Form } from "react-bootstrap";

const Add = ({ showAddModal, setShowAddModal, addTask }) => {
  const [task, setTask] = useState('');

  const closeModal = (evt) => {
    evt.preventDefault();
    addTask(task);
    setTask('');
    setShowAddModal(false);
  };

  return (
    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={closeModal}>
          <FormGroup className="mb-3" controlId="formAddTask">
            <FormControl value={task} onChange={e => setTask(e.target.value)} autoFocus={true} />
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
          >
            OK
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
