import { Provider } from "react-redux";
import Display from "./components/Display";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Display />
      </Provider>
    </>
  )
}

export default App
