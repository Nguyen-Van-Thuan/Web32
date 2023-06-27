import { configureStore } from "@reduxjs/toolkit";
import caculatorSlice from "../slice/caculatorSlice";

const store = configureStore({
    reducer: {
        caculator: caculatorSlice
    }
})

export default store