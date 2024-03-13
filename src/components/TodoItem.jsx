import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className}>{item.name}</span>

        <span>
          <button
            className={styles.tickBtn}
            onClick={() => handleClick(item.name)}
          >
            {" "}
            &#x2713;{" "}
          </button>

          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebtn}
          >
            &#x2717;
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
