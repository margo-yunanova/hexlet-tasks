import React, { useState } from "react";
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

  const addTask = (newTask) => {
    setTasks(tasks => [...tasks, newTask]);
  };

  const renameTask = (renameTask) => {
    setTasks(tasks.map((task, i) => i === indexTask ? renameTask : task ))
  };

  const removeTask = () => {
    setTasks(tasks => tasks.filter((_, i) => i !== indexTask ))
  };

  const openRenameModal = (index) => {
    setShowRenameModal(true)
    setIndexTask(index);
  }

  const openRemoveModal = (index) => {
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
                <Button variant="secondary" onClick={() => openRenameModal(i)}>Rename</Button>
                <Button variant="secondary" onClick={() => openRemoveModal(i)}>Remove</Button>
              </ButtonGroup>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Add
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        addTask={addTask}
      />
      <Rename
        showRenameModal={showRenameModal}
        setShowRenameModal={setShowRenameModal}
        renameTask={renameTask}
        tasks={tasks}
        indexTask={indexTask}
        setTasks={setTasks}
      />
      <Remove
        showRemoveModal={showRemoveModal}
        setShowRemoveModal={setShowRemoveModal}
        removeTask={removeTask}
      />
    </>
  );
};

export default Task;
