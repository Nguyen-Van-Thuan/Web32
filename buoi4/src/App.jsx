import Todos from "./components/Todos";
import MyContext from "./context/MyContext";

function App() {

  const today = 5;

  return (
    <MyContext.Provider value={today}>
      <Todos />
    </MyContext.Provider>
  )
}

export default App
