
// B1: Khai bao gia tri ban dau
const initialState = {
    count: 0
}

// B2: Khai bao function Reducer
const countReducers = (state = initialState, action) => {
    // console.log(state, 'state');
    console.log(action, 'action');
    switch (action.type) {
        case "TANG":
            
            return {
                ...state, //sao chep lai cai state ban dau
                count: state.count + 1 //cap nhat lai count
            }
        case "GIAM":
            return {
                ...state,
                count: state.count - 1
            }
    
        default:
            return state
    }
}
export default countReducers