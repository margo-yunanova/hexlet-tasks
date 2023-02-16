import { useRef } from "react";
import { Modal, FormGroup, FormControl, Button, Form } from "react-bootstrap";

const Rename = ({ showRenameModal, setShowRenameModal, renameTask, tasks, indexTask }) => {
  const inputRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    renameTask(inputRef.current.value);
    setShowRenameModal(false);
  }

  return (
    <Modal show={showRenameModal} onHide={() => setShowRenameModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rename task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formRenameTask">
            <FormControl ref={inputRef} defaultValue={tasks[indexTask]} autoFocus={true}/>
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            OK
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
