import { useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(
    todo.description,
  );

  const updateDescription = async e => {
    e.preventDefault();
    console.log(e);
    try {
      const body = { description };
      await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      );
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-sm btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        aria-labelledby="editTodos"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>

              <button
                type="submit"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-random="change this"
                onClick={updateDescription}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
