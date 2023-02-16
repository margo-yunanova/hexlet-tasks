import React, { useState, useRef } from "react";
import { Button, ListGroup, ButtonGroup } from "react-bootstrap";
import getModal from "./index";

const Task = () => {
  const Add = getModal("adding");
  const Rename = getModal('renaming');
  const Remove = getModal('removing');

  const [showAddModal, setShowAddModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [indexTask, setIndexTask] = useState('');

  const inputRef = useRef(null);

  const addTask = (evt) => {
    evt.preventDefault();
    setTasks([...tasks, inputRef.current.value]);
    setShowAddModal(false);
  };

  const renameTask = (index) => {
    setShowRenameModal(true)
    setIndexTask(index);
  }

  const removeTask = (index) => {
    setShowRemoveModal(true)
    setIndexTask(index);
  }

  return (
    <>
      <Button variant="primary" className='mb-3' onClick={() => setShowAddModal(true)}>
        Add task
      </Button>
      {tasks.length > 0 && (
        <ListGroup as="ul" numbered>
          {tasks.map((task, i) => (
            <ListGroup.Item as="li" key={i}>
              {task}
              <ButtonGroup className="ml-5" aria-label="Basic example">
                <Button variant="secondary" onClick={() => renameTask(i)}>Rename</Button>
                <Button variant="secondary" onClick={() => removeTask(i)}>Remove</Button>
              </ButtonGroup>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Add
        show={showAddModal}
        setShow={setShowAddModal}
        addTasks={addTask}
        inputRef={inputRef}
      />
      <Rename
        show={showRenameModal}
        setShow={setShowRenameModal}
        renameTask={renameTask}
        indexTask={indexTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Remove
        show={showRemoveModal}
        setShow={setShowRemoveModal}
        indexTask={indexTask}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};

export default Task;
