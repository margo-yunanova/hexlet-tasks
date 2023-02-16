import { useRef } from "react";
import { Modal, FormGroup, FormControl, Button, Form } from "react-bootstrap";

const Add = ({ showAddModal, setShowAddModal, setTasks }) => {
  const inputRef = useRef(null);

  const addTask = (evt) => {
    evt.preventDefault();
    setTasks(tasks => [...tasks, inputRef.current.value]);
    setShowAddModal(false);
  };

  return (
    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formAddTask">
            <FormControl ref={inputRef} autoFocus={true} />
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={addTask}
          >
            OK
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
