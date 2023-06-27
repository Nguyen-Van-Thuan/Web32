import { createSlice } from "@reduxjs/toolkit";

const caculatorSlice = createSlice({
    name: "counter", //Ten cua slice
    initialState: { //Gia tri ban dau cua reducer
        count: 0
    },
    reducers: { //Phan khai bao Reducer
        // actionTang: Ten cua action
        actionTang: (state, action) => {
            state.count += action.payload
            // state.count = state.count + action.payload
        },
        // actionGiam: Ten cua action
        actionGiam: (state, action) => {
            state.count -= action.payload
        }
    }
})

// Export action
export const { actionTang, actionGiam } = caculatorSlice.actions

// Export reducers
export default caculatorSlice.reducer