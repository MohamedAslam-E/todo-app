import { useEffect, useState } from 'react'
import axios from 'axios'
import AddItemForm from './AddItemForm'
import { Button } from 'react-bootstrap'

function TodoList() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      await axios.get('http://localhost:2001/api/items').then((data) => setData(data.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  const onTaskCreate = async (newTask) => {
    await axios.post('http://localhost:2001/api/items', {
      task: newTask
    })
    fetchData()
  }

  const onDelete = async (id) => {
    if (id) {
      console.log(id)
      await axios.delete(`http://localhost:2001/api/items/${id}`)
      fetchData()
    } else {
      console.log('id is undefined')
    }
  }

  const handleEdit = async (id) => {
    await axios.put(`http://localhost:2001/api/items/${id}`, {
      completed: true
    })
    fetchData()
  }

  return (
    <>
      <AddItemForm onTaskCreate={onTaskCreate} />
      <div className="bar">
        {data.map((task, index) => {
          return (
            <div className="d-flex tasks" key={index}>
              <div className="task_bar" onClick={() => handleEdit(task._id)}>
                <p className={task.completed ? 'line_through' : ''}>{task.task}</p>
              </div>
              <div>
                <Button onClick={() => onDelete(task._id)}>Delete</Button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TodoList
