const TodoList = ({
    todos,
    setTodos,
    setInput,
    setToggleSubmit,
    setEditId,
    editId
  }) => {
    const deleteHandler = ({ id }) => {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
      setInput("");
    };
    const toggleHandler = ({ id }) => {
      setTodos(
        [...todos].map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      );
      setInput("");
    };
    const clearHandler = () => {
      setTodos([]);
      setInput("");
      setToggleSubmit(true)
    };
    const editHandler = ({ id }) => {
      let newEdititem = todos.find((todo) => {
        return todo.id === id;
      });
      
      setToggleSubmit(false);
      setInput(newEdititem.title);
      setEditId(id)
    };
  
    return (
      <>
        <div className="todoList">
          {todos.map((todo) => {
            return (
              <div className="todoListItem" key={todo.id}>
                <input title="Completed?"
                  className="checkbox"
                  onChange={() => toggleHandler(todo)}
                  checked={todo.completed}
                  type="checkbox"
                />
                <p
                  title="Your task"
                  className={
                    todo.completed
                      ? "character completed"
                      : "character notCompleted"
                  }
                >
                 <span className={todo.id===editId?"cssClass":"notCssClass"}>{todo.title}</span>
                </p>
                <div className="buttons">
                  <button onClick={() => editHandler(todo)} className="edit">
                    <span className="button" title="Edit Todo?">
                      🖊
                    </span>
                  </button>
                  <button className="delete " onClick={() => deleteHandler(todo)}>
                    <span className="button" title="Delete Todo?">
                      ❌
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {todos.length > 0 && (
          <button className="clearAll" onClick={clearHandler}>
            Clear All
          </button>
        )}
      </>
    );
  };
  
  export default TodoList;
  