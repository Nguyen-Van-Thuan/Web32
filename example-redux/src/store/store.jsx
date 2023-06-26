import { createStore } from "redux";
import countReducers from "../reducers/CountReducers";


const store = createStore(countReducers)

export default store

// Kho --- chua toan bo trang thai cua trang web
// Trong store chua reducer - (reducer giong nhu nguoi quan ly kho)