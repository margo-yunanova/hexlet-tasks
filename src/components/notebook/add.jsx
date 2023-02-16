import { Modal, FormGroup, FormControl, Button, Form } from "react-bootstrap";

const Add = ({ show, setShow, addTasks, inputRef }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
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
            onClick={(evt) => addTasks(evt)}
          >
            OK
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Add;
