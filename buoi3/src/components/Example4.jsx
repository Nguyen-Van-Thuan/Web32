import { Fragment } from "react"

// const Example4 = ({ handleEat }) => {
//     // Component Con
//     return (
//         <Fragment>
//             <h1>Truyen Props la 1 ham xu ly su kien</h1>
//             <button onClick={() => handleEat}>An gi day!</button>
//         </Fragment>

//     )
// }

const Example4 = props=> {
    console.log(props);
    // Component Con
    return (
        <Fragment>
            <h1>Truyen Props la 1 ham xu ly su kien</h1>
            <button onClick={props.handleEat}>An gi day!</button>
        </Fragment>

    )
}

export default Example4