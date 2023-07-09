import React, { useEffect, useState } from "react";
const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  toggleSubmit,
  editId,
  setToggleSubmit,
  setEditId,
}) => {
  const [error, setError] = useState(false);
  const changeHandler = (e) => {
    setInput(e.target.value);
    setError(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      setError(true);
    } else if (input && !toggleSubmit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editId) {
            return { ...todo, title: input };
          }
          return todo;
        })
      );
      setToggleSubmit(true);
      setInput("");
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        { id: new Date().getTime(), title: input, completed: false },
      ]);
      setInput("");
    }

    // setError(false)
  };
  useEffect(() => {
    localStorage.setItem("todoLists",JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <form>
        <input
          autoFocus
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder="Your next todo....✍"
        />
        {toggleSubmit ? (
          <button onClick={submitHandler}>
            <span className="button" title="Add Todo?">
              ➕
            </span>
          </button>
        ) : (
          <button onClick={submitHandler}>
            <span className="button" title="Update Todo?">
              🖊
            </span>
          </button>
        )}
      </form>
      {error && (
        <div style={{ color: "red", fontSize: "1.2rem" }}>
          {toggleSubmit
            ? "Please enter the next todo!"
            : "Please update the selected todo!"}
        </div>
      )}
    </>
  );
};

export default TodoForm;
