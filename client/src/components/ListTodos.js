import { useState, useEffect } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/todos',
      );
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async id => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // const handleEdit = async (id, description) => {
  //   try {
  //     const body = description;
  //     await fetch(`http://localhost:5000/todos/${id}`, {
  //       method: 'PUT',
  //       'Content-Type': 'application/json',
  //       body: JSON.stringify(body),
  //     });
  //     setTodos(todos.filter(todo => todo.todo_id !== id));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">List Todos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}

          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
