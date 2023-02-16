import { useRef } from "react";
import { Modal, FormGroup, FormControl, Button, Form } from "react-bootstrap";

const Rename = ({ show, setShow, changedTask, tasks, setTasks }) => {
  const formRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTasks(tasks.map(task => task === changedTask ? formRef.current.value : task ));
    setShow(false)
  }


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rename task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-3" controlId="formRenameTask">
            <FormControl ref={formRef} defaultValue={changedTask} />
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
