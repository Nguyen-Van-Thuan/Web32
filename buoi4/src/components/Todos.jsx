import { useReducer } from "react"

const reducer = (state, action) => {
  //thuc hien logic trong nay de cap nhat todos
  // console.log(action, "action");
  switch (action.type) {
    case "ADD TODO":
      return [...state, action.payload]
  }
}

const Todos = () => {

  /*
  * Khai vao useReducer()
  * Todos nhan gia tri ban dau la mang rong []
  * reducer -- la 1 function xu ly va cap nhat todos
  */

  const [todos, dispatch] = useReducer(reducer, [])

  const hanleClick = () => {
    const newTodos = 'Cong viec moi'
    dispatch({ type: 'ADD TODO', payload: newTodos })
  }
  console.log(todos, 'todos');

  return (
    <>
      <button
        style={{
          background: "green",
          padding: "10px 23px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer"
        }}

        // Them 1 su kien vao button
        onClick={hanleClick}
      >
        Them Cong Viec
      </button>

      {/* Hien ra */}
        {todos.map((value, index)=> {
          return (
            <h2 key={index}>{value}</h2>
          )
        })}
    </>

  )
}

export default Todos