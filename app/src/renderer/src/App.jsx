import TodoList from './components/TodoList'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Container>
        <TodoList />
      </Container>
    </>
  )
}

export default App
