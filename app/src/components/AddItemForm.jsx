import React, { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";

function AddItemForm({ onTaskCreate }) {
  const [newTask, setNewTask] = useState("");

  const onCreate = (e) => {
    e.preventDefault();
    onTaskCreate(newTask);
    setNewTask("");
  };

  return (
    <>
      <Form onSubmit={onCreate}>
        <InputGroup>
          <FormControl
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="new task"
            value={newTask}
          ></FormControl>
          <Button type="submit" variant="primary" disabled={!newTask.length}>
            add
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default AddItemForm;
